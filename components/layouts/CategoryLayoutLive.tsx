"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Radio, ChevronDown, Check } from "lucide-react";
import { Article } from "../CategorySection";

interface LiveArticle extends Article {
  videoUrl?: string;
}

interface CategoryLayoutProps {
  title: string;
  categorySlug: string;
  articles?: LiveArticle[];
}

function getEmbedUrl(url?: string): string | null {
  if (!url) return null;

  let videoId = "";

  try {
    if (url.includes("/embed/")) {
      videoId = url.split("/embed/")[1]?.split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = new URL(url).searchParams.get("v") || "";
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
    }

    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1`;
  } catch (e) {
    return url;
  }
}

export default function CategoryLayoutLive({
  title,
  categorySlug,
  articles = [],
}: CategoryLayoutProps) {
  const [activeLive, setActiveLive] = useState<LiveArticle | null>(
    articles?.[0] || null,
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (articles && articles.length > 0) {
      setActiveLive(articles[0]);
    }
  }, [articles]);

  if (!activeLive) return null;

  const embedUrl = getEmbedUrl(activeLive.videoUrl);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      {/* 1. Header Row: News Title + Other Lives Switcher Button aligned Right in Mobile */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Link
          href={`/posts/${activeLive.id}`}
          className="text-2xl md:text-4xl font-bold font-an text-slate-900 hover:text-[#0C439E] transition-colors line-clamp-2 leading-tight flex-1"
        >
          {activeLive.title}
        </Link>

        {/* Other Lives Button (Shows if there is more than 1 stream) */}
        {articles.length > 1 && (
          <div className="relative shrink-0 self-end sm:self-auto">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#E7000B] text-white text-xs md:text-sm font-bold font-mukta px-3.5 py-2 rounded flex items-center gap-2 shadow transition-all cursor-pointer"
            >
              <Radio className="w-4 h-4 text-white animate-pulse" />
              <span>अन्य प्रत्यक्ष प्रशारणहरू ({articles.length - 1})</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu for Other Lives */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-white text-[#E7000B] rounded shadow-2xl border-[0.5px] border-slate-500 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1 border-b-[0.5px] border-slate-500 text-base font-bold text-[#030303] font-mukta">
                  अन्य प्रशारण छनोट गर्नुहोस्:
                </div>
                <div className="max-h-60 overflow-y-auto divide-y-[0.5px] divide-slate-500">
                  {articles.map((item) => {
                    const isSelected = activeLive.id === item.id;
                    if (isSelected) return null;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveLive(item);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left p-3 flex items-start gap-2 transition cursor-pointer text-slate-200"
                      >
                        <div className="relative w-20 h-14 rounded overflow-hidden shrink-0 bg-slate-950 mt-0.5">
                          <Image
                            src={item.imageUrl || "/images/image1.jpg"}
                            alt={item.title}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base font-semibold text-[#E7000B] font-mukta line-clamp-2 leading-snug">
                            {item.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. Main Live Video Frame */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-slate-950 rounded overflow-hidden shadow-md group">
        {/* Pulsing Live Badge */}
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded flex items-center gap-2 shadow-lg z-20 pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          LIVE
        </div>

        {embedUrl ? (
          <iframe
            key={activeLive.id}
            src={embedUrl}
            title={activeLive.title}
            className="w-full h-full rounded object-cover border-0 relative z-10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <Link
            href={`/posts/${activeLive.id}`}
            className="relative w-full h-full block"
          >
            <Image
              src={activeLive.imageUrl || "/images/image1.jpg"}
              alt={activeLive.title}
              fill
              priority
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 rounded"
            />
          </Link>
        )}
      </div>
    </section>
  );
}
