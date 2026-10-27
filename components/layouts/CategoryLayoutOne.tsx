"use client";

import Link from "next/link";
import Image from "next/image";
import { Article } from "../CategorySection";

interface CategoryLayoutProps {
  title: string;
  categorySlug: string;
  articles: Article[];
}

export default function CategoryLayoutOne({
  title,
  categorySlug,
  articles,
}: CategoryLayoutProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      {/* Category Section Header */}
      <div className="border-b-2 border-[#0C439E] pb-2 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1 h-7 bg-[#0C439E] inline-block"></span>
          <h1 className="text-2xl md:text-3xl font-bold font-mukta text-[#0C439E] tracking-wide uppercase">
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

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
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
              <div className="text-lg md:text-xl font-bold  font-mukta text-slate-900 group-hover:text-[#0C439E] transition-colors line-clamp-2 leading-snug">
                {article.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
