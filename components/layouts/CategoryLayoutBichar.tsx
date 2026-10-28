"use client";

import Link from "next/link";
import Image from "next/image";
import { Article } from "../CategorySection";

interface CategoryLayoutProps {
  title: string;
  categorySlug: string;
  articles: Article[];
}

export default function CategoryLayoutBichar({
  title,
  categorySlug,
  articles,
}: CategoryLayoutProps) {
  // विचार सेक्सनका लागि जम्मा ४ वटा लेखहरू लिने
  const bicharArticles = articles.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      {/* Category Section Header */}
      <div className="border-b-2 border-[#0C439E] pb-2 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-[#0C439E] inline-block "></span>
          <h1 className="text-[22px] md:text-[26px] font-semibold  text-[#0C439E] tracking-wide uppercase">
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

      {/* 4-Card Opinion Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bicharArticles.map((article) => (
          <Link
            key={article.id}
            href={`/posts/${article.id}`}
            className="group relative bg-white rounded p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-start text-center overflow-hidden min-h-[220px] sm:min-h-[260px]"
          >
            {/* Quote Icon Placed Absolute at Top-Left of Card */}
            <span className="absolute top-2 left-3 text-4xl sm:text-7xl font-serif font-bold text-slate-300 leading-none select-none pointer-events-none group-hover:text-red-300 transition-colors">
              “
            </span>

            {/* Top Centered Author Image */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-100 mb-3 border border-slate-200 shadow-sm shrink-0 mt-1">
              <Image
                src={article.imageUrl || "/placeholder.jpg"}
                alt={article.authorName || article.title}
                fill
                sizes="96px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title Text */}
            <div className="w-full flex-grow flex items-center justify-center px-2">
              <div className="text-[17px] md:text-[19px] font-semibold font-anek text-slate-900 group-hover:text-[#0C439E] transition-colors line-clamp-3 ">
                {article.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
