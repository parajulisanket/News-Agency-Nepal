import Link from "next/link";
import { Coins, Calendar, ArrowLeft } from "lucide-react";
import RefreshButton from "@/components/RefreshButton";
import { GoldBars, SilverBars } from "@/components/MetalBars";
import { getMetalRates } from "@/lib/metals";

export const revalidate = 300;

const np = new Intl.NumberFormat("ne-NP", { maximumFractionDigits: 0 });
const rs = (n: number) => `रू ${np.format(Math.round(n))}`;

export default async function GoldSilverPage() {
  const dateStr = new Intl.DateTimeFormat("ne-NP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  let data: Awaited<ReturnType<typeof getMetalRates>> | null = null;
  try {
    data = await getMetalRates();
  } catch (e) {
    console.error(e);
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 font-mukta space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-khand">
              सुन-चाँदीको दैनिक दरभाउ
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-5 py-2.5 rounded self-start sm:self-auto">
          <Calendar className="w-4 h-4 text-[#0C439E]" />
          <span className="text-sm font-bold text-slate-800">{dateStr}</span>
          <RefreshButton />
        </div>
      </div>

      {!data ? (
        <div className="p-5 bg-rose-50 border border-rose-200 rounded text-rose-800">
          दरभाउ लोड गर्न सकिएन। कृपया केही समयपछि पुनः प्रयास गर्नुहोस्।
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GOLD */}
            <section className="rounded p-7 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border border-amber-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-amber-200/70 text-amber-900">
                    प्रति तोला
                  </span>
                  <div className="text-xl font-bold text-slate-900 pt-2">
                    छपावाला सुन
                  </div>
                  <p className="text-xs text-slate-500">Fine Gold 999.9</p>
                </div>
                <GoldBars className="w-36 sm:w-44 shrink-0 drop-shadow-md" />
              </div>

              <div className="mt-4 text-4xl sm:text-5xl font-black text-amber-700 font-khand">
                {rs(data.goldPerTola)}
              </div>

              <div className="mt-5 flex items-center justify-between rounded bg-white/70 border border-amber-200 px-4 py-3">
                <span className="text-sm text-slate-600 font-semibold">
                  प्रति १० ग्राम
                </span>
                <span className="text-lg font-extrabold text-slate-900 font-khand">
                  {rs(data.goldPer10g)}
                </span>
              </div>
            </section>

            {/* SILVER */}
            <section className="rounded p-7 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 border border-slate-300 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-slate-300/70 text-slate-800">
                    प्रति तोला
                  </span>
                  <div className="text-xl font-bold text-slate-900 pt-2">
                    चाँदी
                  </div>
                  <p className="text-xs text-slate-500">Silver</p>
                </div>
                <SilverBars className="w-36 sm:w-44 shrink-0 drop-shadow-md" />
              </div>

              <div className="mt-4 text-4xl sm:text-5xl font-black text-slate-700 font-khand">
                {rs(data.silverPerTola)}
              </div>

              <div className="mt-5 flex items-center justify-between rounded bg-white/70 border border-slate-300 px-4 py-3">
                <span className="text-sm text-slate-600 font-semibold">
                  प्रति १० ग्राम
                </span>
                <span className="text-lg font-extrabold text-slate-900 font-khand">
                  {rs(data.silverPer10g)}
                </span>
              </div>
            </section>
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="rounded bg-slate-100 border border-slate-200 px-4 py-2 font-semibold">
              १ USD = रू {data.usdNpr.toFixed(2)}
            </span>
            <span className="rounded bg-slate-100 border border-slate-200 px-4 py-2 font-semibold">
              अन्तिम अपडेट:{" "}
              {new Date(data.updatedAt).toLocaleTimeString("ne-NP")}
            </span>
          </div>
        </>
      )}

      <div className="p-5 bg-amber-50 border border-amber-200 rounded text-base text-amber-900 font-medium">
        <strong>नोट:</strong> यो दर अन्तर्राष्ट्रिय बजार मूल्य र डलर विनिमय दरमा
        आधारित अनुमानित मूल्य हो। नेपाल सुनचाँदी व्यवसायी महासंघको आधिकारिक
        दरभाउ फरक हुन सक्छ।
      </div>
    </main>
  );
}
