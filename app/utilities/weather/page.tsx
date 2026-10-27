import Link from "next/link";
import {
  CloudSun,
  Calendar,
  ArrowLeft,
  ShieldCheck,
  Wind,
  Droplets,
} from "lucide-react";
import { getNepalCitiesWeather, getWeatherCondition } from "@/lib/weatherApi";

export const revalidate = 1800; // Revalidate page every 30 minutes

export default async function WeatherPage() {
  const weatherList = await getNepalCitiesWeather();

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const publishedDate = new Intl.DateTimeFormat("ne-NP", options).format(today);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 font-mukta space-y-8 animate-in fade-in duration-300">
      {/* Top Header Title (Outside the Box) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 ">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-khand tracking-wide">
              मौसम पूर्वानुमान (Weather Forecast)
            </h1>
          </div>
        </div>

        {/* Date Badge */}
        <div className="flex items-center gap-2.5 bg-slate-100 border border-slate-200 px-4 py-2 rounded  self-start sm:self-auto">
          <Calendar className="w-4 h-4 text-[#0C439E]" />
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            मिति: {publishedDate}
          </span>
        </div>
      </div>

      {/* Highlights Grid Cards (Kathmandu, Pokhara, Biratnagar) */}
      {weatherList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weatherList.slice(0, 3).map((item, index) => {
            const condition = getWeatherCondition(item.weatherCode);
            return (
              <div
                key={index}
                className="bg-white rounded border border-slate-200 p-6 shadowtransition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:border-[#0C439E]/40"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5  transition-colors" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-khand">
                      {item.enName}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-khand">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-4xl">{condition.icon}</span>
                </div>

                <div className="pt-6 flex items-baseline justify-between border-t border-slate-100 mt-6">
                  <div>
                    <div className="text-xs text-slate-400 font-bold font-khand">
                      {condition.text}
                    </div>
                    <div className="text-4xl font-black text-[#0C439E] font-khand tracking-tight">
                      {item.temp}°C
                    </div>
                  </div>

                  <div className="text-right text-xs text-slate-500 font-medium space-y-1">
                    <div className="flex items-center justify-end gap-1">
                      <Droplets className="w-3.5 h-3.5 text-sky-500" />
                      <span>ओसिलो: {item.humidity}%</span>
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <Wind className="w-3.5 h-3.5 text-teal-600" />
                      <span>हवा: {item.windSpeed} km/h</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* All Cities Table Section */}
      <section className="bg-white rounded  overflow-hidden   space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mukta">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-sm font-bold">
                <th className="py-3.5 px-4">सहर (City)</th>
                <th className="py-3.5 px-4">अवस्था (Condition)</th>
                <th className="py-3.5 px-4 text-center">आद्रता (Humidity)</th>
                <th className="py-3.5 px-4 text-center">हावाको गति (Wind)</th>
                <th className="py-3.5 px-4 text-right">तापमान (Temperature)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 text-base">
              {weatherList.length > 0 ? (
                weatherList.map((item, idx) => {
                  const condition = getWeatherCondition(item.weatherCode);
                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="py-4 px-4 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#0C439E]" />
                        <span>{item.name}</span>
                        <span className="text-xs text-slate-400 font-normal">
                          ({item.enName})
                        </span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-700">
                        <span className="mr-1.5">{condition.icon}</span>
                        {condition.text}
                      </td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">
                        {item.humidity}%
                      </td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">
                        {item.windSpeed} km/h
                      </td>
                      <td className="py-4 px-4 text-right font-black text-[#0C439E] font-khand text-2xl">
                        {item.temp}°C
                      </td>
                    </tr>
                  );
                })
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
        <strong>सूचना:</strong> प्रस्तुत मौसम डाटा Open-Meteo API बाट
        प्रत्यक्षरूपमा प्राप्त गरिएको हो।
      </div>
    </main>
  );
}
