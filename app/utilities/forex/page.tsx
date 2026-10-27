import Link from "next/link";
import {
  CircleDollarSign,
  Calendar,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { getForexRates } from "@/lib/forexApi";

export const revalidate = 3600; // Revalidate page every hour

export default async function ForexPage() {
  const forexData = await getForexRates();

  // Extract rates payload safely from NRB API or fallback data structure
  const payload = forexData?.data?.payload?.[0] || forexData?.payload?.[0];
  const rates = payload?.rates || [];
  const publishedDate =
    payload?.date || payload?.published_on || "अद्यावधिक गरिएको";

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 font-mukta space-y-8 animate-in fade-in duration-300">
      {/* Top Header Title (Outside the Box) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 ">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-khand tracking-wide">
                विदेशी मुद्रा विनिमय दर (Foreign Exchange Rates)
              </h1>
            </div>
          </div>
        </div>

        {/* Date Badge */}
        <div className="flex items-center gap-2.5 bg-slate-100 border border-slate-200 px-4 py-2 rounded self-start sm:self-auto">
          <Calendar className="w-4 h-4 text-[#0C439E]" />
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            मिति: {publishedDate}
          </span>
        </div>
      </div>

      {/* Highlights Grid Cards (USD, EUR, GBP) */}
      {rates.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rates.slice(0, 3).map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:border-[#0C439E]/40"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0C439E] group-hover:bg-[#E9C325] transition-colors" />

              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-khand">
                  {item.currency?.iso3 || item.currency} ({item.unit} Unit)
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {item.currency?.name || item.currency}
                </h3>
              </div>

              <div className="pt-6 flex items-baseline justify-between border-t border-slate-100 mt-6">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase font-khand">
                    खरिद दर (Buying)
                  </div>
                  <div className="text-3xl font-black text-[#0C439E] font-khand tracking-tight">
                    रू {item.buy}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-bold uppercase font-khand">
                    बिक्री दर (Selling)
                  </div>
                  <div className="text-xl font-bold text-slate-800 font-khand">
                    रू {item.sell}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Table Section */}
      <section className="bg-white rounded overflow-hidden  space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mukta">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-sm font-bold">
                <th className="py-3.5 px-4">मुद्रा (Currency)</th>
                <th className="py-3.5 px-4">कोड (ISO3)</th>
                <th className="py-3.5 px-4 text-center">इकाइ (Unit)</th>
                <th className="py-3.5 px-4 text-right">
                  खरिद मूल्य (Buying Rate)
                </th>
                <th className="py-3.5 px-4 text-right">
                  बिक्री मूल्य (Selling Rate)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 text-base">
              {rates.length > 0 ? (
                rates.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-4 font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#0C439E]" />
                      {item.currency?.name || item.currency}
                    </td>
                    <td className="py-4 px-4 font-khand font-extrabold text-slate-600">
                      {item.currency?.iso3 || item.currency}
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-slate-500">
                      {item.unit}
                    </td>
                    <td className="py-4 px-4 text-right font-black text-[#0C439E] font-khand text-xl">
                      रू {item.buy}
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-slate-800 font-khand text-xl">
                      रू {item.sell}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    डाटा लोड हुन सकेन वा सर्भर उपलब्ध छैन।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Notice Box */}
      <div className="p-5 bg-amber-50 border border-amber-200 rounded text-base text-amber-900 font-medium">
        <strong>अस्वीकरण तथा सूचना:</strong> यो डेटा नेपाल राष्ट्र बैंकको अधिकृत
        खुला API (NRB Forex API) बाट सिधै फेच गरिएको हो। वाणिज्य बैंकहरूले
        कारोबार गर्दा दरमा सामान्य भिन्नता हुन सक्छ।
      </div>
    </main>
  );
}
