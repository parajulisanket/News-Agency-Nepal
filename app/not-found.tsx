import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-12 text-slate-800">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0C439E] via-[#66060C] to-[#E9C325]" />

        {/* Header / Brand Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/">
            <div className="relative h-14 w-52 sm:h-16 sm:w-60">
              <Image
                src="/logo.png"
                alt="News Agency Nepal Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* 404 Large Text */}
        <div className="relative my-4 select-none">
          <span className="text-8xl sm:text-9xl font-extrabold text-slate-100 tracking-widest font-khand">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#66060C] font-khand flex items-center gap-2">
              <AlertCircle className="w-7 h-7 text-[#66060C]" />
              पेज भेटिएन
            </span>
          </div>
        </div>

        {/* Description Text */}
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-khand mb-2">
          तपाईंले खोज्नुभएको पृष्ठ फेला पर्न सकेन।
        </h1>
        <p className="text-slate-600 font-mukta text-sm sm:text-base mb-8 max-w-md mx-auto">
          तपाईंले अनुरोध गर्नुभएको सामग्री हटाइएको हुन सक्छ, वा लिङ्क गलत हुन
          सक्छ।
        </p>

        {/* Quick Search Widget */}
        <form
          action="/search"
          className="mb-8 flex items-center bg-slate-100 border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#0C439E]"
        >
          <div className="pl-3.5 text-slate-400">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            name="q"
            placeholder="समाचार खोज्नुहोस्..."
            className="w-full px-3 py-2.5 bg-transparent text-sm text-slate-800 focus:outline-none font-mukta"
          />
          <button
            type="submit"
            className="bg-[#0C439E] hover:bg-blue-900 text-white font-khand font-bold text-sm px-5 py-2.5 transition"
          >
            खोज्नुहोस्
          </button>
        </form>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0C439E] hover:bg-blue-900 text-white font-khand font-bold text-base px-6 py-2.5 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4 text-[#E9C325]" />
            गृहपृष्ठमा फर्कनुहोस्
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-khand font-bold text-base px-6 py-2.5 rounded-lg border border-slate-300 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            अघिल्लो पृष्ठ
          </button>
        </div>
      </div>
    </div>
  );
}
