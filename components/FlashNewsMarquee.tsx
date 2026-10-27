"use client";

import Link from "next/link";

interface NewsItem {
  id: string | number;
  title: string;
  slug?: string;
}

interface FlashNewsMarqueeProps {
  news?: NewsItem[];
}

// Fallback dummy news data if none passed via props
const defaultNews: NewsItem[] = [
  {
    id: "1",
    title: "प्रतिनिधिसभा बैठक बस्दै, आर्थिक विधेयकसम्बन्धी छलफल हुने",
    slug: "parliament-meeting-today",
  },
  {
    id: "2",
    title: "नेपाल राष्ट्र बैंकद्वारा मौद्रिक नीतिको चौमासिक समीक्षा सार्वजनिक",
    slug: "monetary-policy-review",
  },
  {
    id: "3",
    title: "अन्तर्राष्ट्रिय बजारमा सुनको मूल्यमा सामान्य गिरावट",
    slug: "gold-price-update",
  },
  {
    id: "4",
    title: "नेपाली राष्ट्रिय क्रिकेट टोलीको प्रारम्भिक टोली घोषणा",
    slug: "cricket-team-announced",
  },
];

export default function FlashNewsMarquee({
  news = defaultNews,
}: FlashNewsMarqueeProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-4 font-mukta select-none">
      <div className="flex items-center h-11 border border-slate-200 bg-white rounded overflow-hidden">
        {/* Flash News Label Badge */}
        <div className="bg-white flex items-center text-[#DC2626] px-3 py-1 shrink-0 z-10 font-khand font-bold text-base md:text-lg uppercase tracking-wide gap-2 border-r border-slate-200">
          <span>Flash News</span>
        </div>

        {/* Marquee Container */}
        <div className="relative flex-1 overflow-hidden ml-3 md:ml-4 flex items-center h-full bg-white">
          {/* Scrolling Content - CSS animation pauses on hover */}
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] items-center gap-6">
            {/* Render items twice to ensure seamless infinite looping */}
            {[...news, ...news].map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={`/posts/${item.id}`}
                className="inline-flex items-center gap-2.5 text-sm md:text-base font-semibold text-slate-800 hover:text-[#0C439E] transition-colors group"
              >
                {/* Blinking Red Round Dot */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>

                <span className="truncate max-w-xs sm:max-w-md md:max-w-xl">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Gradient Fades on edges matching white background */}
          <div className="absolute top-0 left-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
}
