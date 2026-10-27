"use client";

import Link from "next/link";
import Image from "next/image";
import { Article } from "../CategorySection";

interface CategoryLayoutProps {
  title: string;
  categorySlug: string;
  articles: Article[];
}

export default function CategoryLayoutTwo({
  title,
  categorySlug,
  articles,
}: CategoryLayoutProps) {
  // शीर्ष 2 आर्टिकल्स को फ़ीचर्ड के रूप में लें
  const featuredArticles = articles.slice(0, 2);
  // बाकी 4 आर्टिकल्स को नीचे ग्रिड में दिखाएं
  const gridArticles = articles.slice(2, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      {/* Category Section Header */}
      <div className="border-b-2 border-[#0C439E] pb-2 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-[#0C439E] inline-block"></span>
          <h1 className="text-[22px] md:text-[26px] font-semibold font-anek text-[#0C439E] tracking-wide uppercase">
            {title}
          </h1>
        </div>
        <Link
          href={`/category/${categorySlug}`}
          aria-label={`View all ${title}`}
          className="group flex items-center justify-center p-1 text-[#0C439E] hover:text-[#0a357e] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-3 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>

      <div className="space-y-6">
        {/* Top 2 Featured Articles Grid (Fixed Height: h-[320px]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/posts/${article.id}`}
              className="group relative h-[340px] rounded overflow-hidden shadow transition-all block bg-slate-900"
            >
              {/* Background Image */}
              <Image
                src={article.imageUrl || "/placeholder.jpg"}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Text Overlay Inside Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col justify-end z-10">
                {article.categoryName && (
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                    {article.categoryName}
                  </span>
                )}
                <div className="text-[22px] md:text-[26px] font-semibold font-mukta text-white  leading-snug line-clamp-3">
                  {article.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gridArticles.map((article) => (
            <Link
              key={article.id}
              href={`/posts/${article.id}`}
              className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={article.imageUrl || "/placeholder.jpg"}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-grow flex items-center">
                <div className="text-lg md:text-xl font-bold font-mukta text-slate-900 group-hover:text-[#0C439E] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
