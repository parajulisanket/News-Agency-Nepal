"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../CategorySection";

interface VideoArticle extends Article {
  videoUrl?: string;
}

interface CategoryLayoutProps {
  title: string;
  categorySlug: string;
  articles: VideoArticle[];
}

// Helper to construct YouTube embed URL without autoplay
function getEmbedUrl(url?: string, autoPlay: boolean = false): string | null {
  if (!url) return null;

  try {
    let videoId = "";
    if (url.includes("/embed/")) {
      videoId = url.split("/embed/")[1]?.split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = new URL(url).searchParams.get("v") || "";
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
    }

    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&enablejsapi=1&rel=0&modestbranding=1`;
  } catch (e) {
    return url;
  }
}

export default function CategoryLayoutVideo({
  title,
  categorySlug,
  articles,
}: CategoryLayoutProps) {
  const [selectedArticle, setSelectedArticle] = useState<VideoArticle | null>(
    articles[0] || null,
  );

  // Track whether the user has clicked to play the main video
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (articles.length > 0) {
      setSelectedArticle(articles[0]);
      setIsPlaying(false);
    }
  }, [articles]);

  if (!selectedArticle) return null;

  const embedUrl = getEmbedUrl(selectedArticle.videoUrl, isPlaying);

  const handleSelectArticle = (article: VideoArticle) => {
    setSelectedArticle(article);
    setIsPlaying(false); // Reset to non-playing thumbnail state when switched
  };

  return (
    <section className="py-6 bg-[#071A55] text-white font-mukta">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="border-b-2 border-white pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1 h-6 bg-white inline-block"></span>
            <h1 className="text-[22px] md:text-[26px] font-semibold  tracking-wide uppercase">
              {title}
            </h1>
          </div>
          <Link
            href={`/category/${categorySlug}`}
            aria-label={`View all ${title}`}
            className="group flex items-center justify-center p-1 text-white hover:text-slate-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>

        {/* Main 55/45 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT SIDE: Main Video Screen (55% width -> 7 cols on lg screens) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <div className="relative w-full aspect-[16/9] bg-slate-950 rounded overflow-hidden shadow-2xl border border-slate-800/80">
              {isPlaying && embedUrl ? (
                /* Active iFrame Player */
                <iframe
                  src={embedUrl}
                  title={selectedArticle.title}
                  className="w-full h-full rounded border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="group relative w-full h-full cursor-pointer select-none"
                >
                  <Image
                    src={selectedArticle.imageUrl || "/images/image1.jpg"}
                    alt={selectedArticle.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      aria-label="Play Video"
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 fill-white "
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Title directly INSIDE bottom of Video Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 z-10">
                    <div className="text-[19px] md:text-[22px] font-semibold font-anek text-white group-hover:text-red-400 transition-colors line-clamp-2  drop-shadow-md">
                      {selectedArticle.title}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Sidebar Video List (45% width -> 5 cols on lg screens, Top-aligned items) */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-slate-700/50 lg:pl-2">
            {articles.map((article) => {
              const isSelected = selectedArticle.id === article.id;

              return (
                <button
                  key={article.id}
                  onClick={() => handleSelectArticle(article)}
                  className={`group flex items-start gap-3.5 py-3 px-2 text-left w-full transition-colors cursor-pointer ${
                    isSelected ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  {/* Thumbnail with Mini Play Badge */}
                  <div className="relative w-28 md:w-36 aspect-[16/9] shrink-0 rounded overflow-hidden bg-slate-950 shadow-sm">
                    <Image
                      src={article.imageUrl || "/images/image1.jpg"}
                      alt={article.title}
                      fill
                      sizes="144px"
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                          isSelected
                            ? "bg-red-600 scale-110"
                            : "bg-red-600/80 group-hover:scale-110"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 fill-white "
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title Text Top Aligned */}
                  <div className="flex flex-col justify-start flex-grow pt-0.5">
                    <span
                      className={`text-sm md:text-[18px] font-medium font-anek line-clamp-2  ${
                        isSelected
                          ? "text-red-400"
                          : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {article.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
