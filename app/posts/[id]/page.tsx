import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Flame } from "lucide-react";
import { getSingleArticle } from "@/lib/api";
import SubscribeNotice from "@/components/SubscribeNotice";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

// Static fallback data for "ताजा खबर"
const STATIC_LATEST_NEWS = [
  {
    id: "1",
    title: "नेपाल राष्ट्र बैंकद्वारा मौद्रिक नीतिको चौमासिक समीक्षा सार्वजनिक",
    publishedAt: "५ असोज, २०८३",
  },
  {
    id: "2",
    title: "प्रतिनिधिसभा बैठक बस्दै, नयाँ विधेयकहरूमाथि छलफल हुने",
    publishedAt: "५ असोज, २०८३",
  },
  {
    id: "3",
    title: "नेपाली राष्ट्रिय क्रिकेट टोलीको प्रारम्भिक टोली घोषणा",
    publishedAt: "४ असोज, २०८३",
  },
  {
    id: "4",
    title: "अन्तर्राष्ट्रिय बजारमा सुनको मूल्यमा गिरावट, स्थानीय बजारमा असर",
    publishedAt: "४ असोज, २०८३",
  },
  {
    id: "5",
    title: "काठमाडौँ उपत्यकामा वायु प्रदूषण नियन्त्रणका लागि नयाँ मापदण्ड लागू",
    publishedAt: "३ असोज, २०८३",
  },
];

export default async function ArticlePage({ params }: ArticlePageProps) {
  // Unpack async params (Next.js 15+)
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Fetch article
  const article = await getSingleArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT COLUMN: Main Article Details (8 Cols on Desktop) */}
        <section className="lg:col-span-8 px-4 space-y-6">
          {/* Article Category & Title */}
          <div className="space-y-0">
            {/* <span className="inline-block bg-[#66060C] text-white text-xs font-bold px-3 py-1 rounded uppercase font-khand">
              {article.category || "समाचार"}
            </span> */}
            <div className="text-[24px] md:text-[48px] font-semibold font-anek text-slate-900 leading-snug">
              {article.title}
            </div>
            <div className="flex items-center gap-2 text-[16px] font-medium text-slate-600 border-b border-slate-200 pb-4 font-mukta">
              <Clock className="w-3.5 h-3.5 text-slate-600" />
              <span>प्रकाशित मिति: {article.publishedAt}</span>
            </div>
          </div>

          {/* Featured News Image */}
          {article.imageUrl ? (
            <div className="relative h-80 md:h-[420px] w-full rounded-lg overflow-hidden shadow-inner">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="bg-slate-200 h-80 md:h-[400px] w-full rounded flex items-center justify-center text-slate-400 text-sm overflow-hidden border border-slate-300">
              <span className="font-semibold text-slate-500 font-mukta">
                {article.title} (तस्बिर उपलब्ध छैन)
              </span>
            </div>
          )}

          {/* Main Content Body */}
          <article className="prose lg:prose-lg max-w-none text-slate-800 leading-relaxed space-y-4 font-mukta">
            <div className="text-[22px] font-medium text-slate-800 leading-[35px] whitespace-pre-line">
              {article.content}
            </div>
          </article>

          {/* Subscription / Copyright Card */}
          <div className="pt-6 border-t border-slate-200">
            <SubscribeNotice />
          </div>
        </section>

        {/* RIGHT COLUMN: Static ताजा खबर (4 Cols on Desktop) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white p-4 rounded border border-slate-200 sticky top-20">
            {/* Sidebar Header */}
            <div className="flex items-center gap-2 border-b-2 border-[#0C439E] pb-2 mb-4">
              <span className="w-0.5 h-5 bg-[#0C439E]"></span>
              <h2 className="text-xl font-bold text-[#0C439E] font-khand">
                ताजा खबर
              </h2>
            </div>

            {/* Top 5 Static News List */}
            <div className="divide-y divide-slate-100">
              {STATIC_LATEST_NEWS.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/posts/${item.id}`}
                  className="group py-3.5 flex gap-3 items-start px-1"
                >
                  <span className="text-lg font-semibold bg-[#0C439E] text-white font-khand shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div className="space-y-1">
                    <div className="text-[17px] font-anek font-semibold text-slate-800 group-hover:text-[#0C439E] transition line-clamp-2  ">
                      {item.title}
                    </div>
                    <span className="text-[12px] text-slate-600 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.publishedAt}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
