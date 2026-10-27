import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Video,
  Headphones,
  Camera,
  Copy,
  Code2,
  PenTool,
  Radio,
  Building2,
  Users,
  TrendingUp,
  ExternalLink,
  Download,
} from "lucide-react";
import SubscribeNotice from "@/components/SubscribeNotice";

export const metadata = {
  title: "हाम्रोबारे | News Agency Nepal (NAN)",
  description:
    "News Agency Nepal (NAN) is the first private-sector news agency in Nepal, established in 2014.",
};

export default function AboutPage() {
  const contentServices = [
    {
      icon: <FileText className="w-6 h-6 text-[#0C439E]" />,
      title: "Text Articles",
      desc: "Comprehensive and verified news reports.",
    },
    {
      icon: <Video className="w-6 h-6 text-red-600" />,
      title: "Videos",
      desc: "High-quality news footage and bulletins.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-600" />,
      title: "Audio (MP3)",
      desc: "Ready-to-broadcast audio clips.",
    },
    {
      icon: <Camera className="w-6 h-6 text-amber-500" />,
      title: "Photos",
      desc: "High-resolution news photography.",
    },
    {
      icon: <Copy className="w-6 h-6 text-emerald-600" />,
      title: "Copy-Paste News",
      desc: "Ready-to-publish news copies.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      title: "News API Integration",
      desc: "Direct digital feed integration.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-rose-500" />,
      title: "On-Demand Content",
      desc: "Customized coverage and articles.",
    },
    {
      icon: <Radio className="w-6 h-6 text-sky-500" />,
      title: "Live Streaming",
      desc: "Real-time video and broadcast feeds.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-mukta space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0C439E] via-blue-900 to-slate-900 text-white rounded p-7 md:p-14 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-block bg-[#E9C325] text-slate-900 font-extrabold text-xs sm:text-sm px-3.5 py-1 rounded-full uppercase tracking-wider font-khand shadow-sm">
            Est. 2014
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide">
            News Agency Nepal (NAN)
          </h1>
          <p className="text-slate-200 text-base md:text-xl leading-relaxed font-light">
            Nepal’s first private-sector news agency and leading multimedia news
            service provider.
          </p>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* About Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-7 bg-[#0C439E] inline-block"></span>
            <h1 className="text-2xl md:text-3xl font-bold font-mukta text-[#0C439E] tracking-wide uppercase">
              Who We Are
            </h1>
          </div>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            <strong className="text-slate-900">News Agency Nepal (NAN)</strong>{" "}
            is the first private-sector news agency in Nepal, established in
            2014 by <strong className="text-slate-900">Sabin Dhamala</strong>{" "}
            and <strong className="text-slate-900">Krishna Poudel</strong>.
          </p>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Today, NAN is Nepal’s largest and leading multimedia news service
            provider, delivering trusted and timely content to more than{" "}
            <span className="text-[#0C439E] font-bold">1,500</span> television
            channels, online platforms, and print media outlets across the
            country.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded">
              <Building2 className="w-5 h-5 text-[#0C439E] mb-1" />
              <div className="text-2xl font-black text-slate-900 font-khand">
                1,500+
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Media Outlets Reached
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded">
              <TrendingUp className="w-5 h-5 text-[#0C439E] mb-1" />
              <div className="text-2xl font-black text-slate-900 font-khand">
                1st
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Private News Agency
              </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200  col-span-2 sm:col-span-1">
              <Users className="w-5 h-5 text-[#0C439E] mb-1" />
              <div className="text-2xl font-black text-slate-900 font-khand">
                Nationwide
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Coverage Network
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Image / Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0C439E] text-white p-8 rounded shadow-md space-y-6">
          <h3 className="text-xl md:text-2xl font-bold border-b border-white/20 pb-3">
            Our Ecosystem Vision
          </h3>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            With this platform, we aim to create a better ecosystem that
            connects media houses, journalists, news sources, and readers in one
            platform — making news sharing faster, more reliable, and more
            accessible than ever.
          </p>
          <div className="pt-2">
            <a
              href="https://my.newsagencynepal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E9C325] text-slate-900 font-extrabold px-5 py-2.5 rounded-lg hover:bg-amber-400 transition shadow-md text-sm"
            >
              <span>Explore Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Formats Section */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-3">
          <span className="w-1 h-7 bg-[#0C439E] inline-block"></span>
          <h1 className="text-2xl md:text-3xl font-bold font-mukta text-[#0C439E] tracking-wide uppercase">
            Content Formats We Provide
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contentServices.map((service, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-slate-200 rounded shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-2 group hover:border-[#0C439E]/40"
            >
              <div className="p-2.5 bg-slate-50 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div>
                <div className="font-bold text-base md:text-lg text-slate-900 group-hover:text-[#0C439E] transition-colors">
                  {service.title}
                </div>
                <p className="text-xs text-slate-500 mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto">
        <SubscribeNotice />
      </div>
    </main>
  );
}
