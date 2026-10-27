import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import SubscribeNotice from "@/components/SubscribeNotice";

const categoryTitles: Record<string, string> = {
  national: "राष्ट्रिय समाचार",
  politics: "राजनीति / संसद्",
  parliament: "प्रतिनिधिसभा / संसद्",
  economy: "अर्थ / वाणिज्य",
  sports: "खेलकुद",
  photo: "फोटो तथा भिडियो",
  international: "अन्तर्राष्ट्रिय",
  society: "समाज",
  entertainment: "मनोरञ्जन",
};

// Dummy news items using local public images
const dummyPosts = [
  {
    id: 1,
    title: "नेपाल राष्ट्र बैंकद्वारा मौद्रिक नीतिको चौमासिक समीक्षा सार्वजनिक",
    slug: "monetary-policy-review-nepal",
    image: "/images/image4.jpg",
    date: "५ असोज, २०८३",
  },
  {
    id: 2,
    title: "प्रतिनिधिसभा बैठक बस्दै, नयाँ विधेयकहरूमाथि छलफल हुने",
    slug: "parliament-meeting-today-update",
    image: "/images/image1.jpg",
    date: "५ असोज, २०८३",
  },
  {
    id: 3,
    title: "नेपाली राष्ट्रिय क्रिकेट टोलीको प्रारम्भिक टोली घोषणा",
    slug: "nepal-cricket-team-announcement",
    image: "/images/image2.jpg",
    date: "४ असोज, २०८३",
  },
  {
    id: 4,
    title: "अन्तर्राष्ट्रिय बजारमा सुनको मूल्यमा गिरावट, स्थानीय बजारमा असर",
    slug: "gold-price-drops-international-market",
    image: "/images/image3.jpg",
    date: "४ असोज, २०८३",
  },
  {
    id: 5,
    title: "काठमाडौँ उपत्यकामा वायु प्रदूषण नियन्त्रणका लागि नयाँ मापदण्ड लागू",
    slug: "kathmandu-air-pollution-standards",
    image: "/images/image5.jpg",
    date: "३ असोज, २०८३",
  },
  {
    id: 6,
    title:
      "सूचना प्रविधि क्षेत्रमा युवाहरूको आकर्षण बढ्दो, रोजगारीका अवसर विस्तार",
    slug: "it-sector-growth-nepal-youth",
    image: "/images/image4.jpg",
    date: "३ असोज, २०८३",
  },
];

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const title = categoryTitles[slug] || slug.toUpperCase();

  return (
    <main className="min-h-screen py-8 font-mukta">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Title Heading */}
        <div className="border-b-2 border-[#0C439E] pb-3 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-[#0C439E] inline-block"></span>
            <h1 className="text-3xl md:text-4xl font-bold font-mukta text-[#0C439E] tracking-wide uppercase">
              {title}
            </h1>
          </div>
          <span className="text-sm font-mukta text-slate-500 font-medium">
            कुल ६ समाचार
          </span>
        </div>

        {/* 4 Cards Per Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#0C439E] transition-colors line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-600 font-mukta mt-auto">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <SubscribeNotice />
      </div>
    </main>
  );
}
