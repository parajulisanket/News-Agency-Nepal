import Link from "next/link";
import Image from "next/image";
import FlashNewsMarquee from "@/components/FlashNewsMarquee";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

// Dummy news data (replace with your actual API/Database query)
const allNews = [
  {
    id: "1",
    title: "प्रतिनिधिसभा बैठक बस्दै, आर्थिक विधेयकसम्बन्धी छलफल हुने",
    slug: "parliament-meeting-today",
    category: "राजनीति",
    imageUrl: "/images/image1.jpg",
    publishedAt: "२०८३ असोज २२",
  },
  {
    id: "2",
    title: "शेयर बजारमा यो साता लगातार दोहोरो अङ्कको सुधार",
    slug: "share-market-growth",
    category: "अर्थतन्त्र",
    imageUrl: "/images/image2.jpg",
    publishedAt: "२०८३ असोज २१",
  },
  {
    id: "3",
    title: "काठमाडौँ उपत्यकामा सार्वजनिक यातायातको नयाँ व्यवस्था लागू",
    slug: "ktm-traffic-system-update",
    category: "सूचना/प्रविधि",
    imageUrl: "/images/image3.jpg",
    publishedAt: "२०८३ असोज २०",
  },
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  // Filter news based on title or category matching search query
  const searchResults = query
    ? allNews.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 font-mukta space-y-6">
      {/* Search Header Info */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          खोज परिणाम: <span className="text-[#0C439E]">"{query}"</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 mt-1">
          {query
            ? `कुल ${searchResults.length} वटा नतिजाहरू भेटिए`
            : "कृपया केही खोजी शब्द राख्नुहोस्"}
        </p>
      </div>

      {/* Results Section */}
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((article) => (
            <Link
              key={article.id}
              href={`/posts/${article.id}`}
              className="group bg-white rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative w-full aspect-[16/9] bg-slate-100">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#0C439E] text-white text-xs px-2 py-1 rounded font-bold">
                  {article.category}
                </span>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                <div className="text-lg md:text-xl font-bold  font-mukta text-slate-900 group-hover:text-[#0C439E] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </div>
                <div className="text-sm text-slate-600">
                  {article.publishedAt}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty / No Results State */
        <div className="bg-slate-50 rounded border border-dashed border-slate-300 p-12 text-center space-y-3 my-8">
          <div className="text-4xl">🔍</div>
          <h2 className="text-xl font-bold text-slate-700">
            कुनै नतिजा भेटिएन
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            तपाईंले खोज्नुभएको विषयसँग मिल्दो समाचार भेटिएन। कृपया अन्य शब्दहरू
            प्रयोग गरी पुनः प्रयास गर्नुहोस्।
          </p>
        </div>
      )}
    </main>
  );
}
