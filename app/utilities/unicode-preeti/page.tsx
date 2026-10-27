"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeftRight,
  Copy,
  Check,
  RotateCcw,
  ClipboardPaste,
  ShieldCheck,
} from "lucide-react";
import { preetiToUnicode, unicodeToPreeti } from "@/lib/preeti";

type Mode = "unicode-to-preeti" | "preeti-to-unicode";

const EXAMPLES: Record<Mode, { label: string; text: string }[]> = {
  "unicode-to-preeti": [
    { label: "नेपाल", text: "नेपाल" },
    { label: "काठमाण्डू", text: "काठमाण्डू" },
    { label: "प्रधानमन्त्री", text: "प्रधानमन्त्री" },
    { label: "क्षेत्र / ज्ञान", text: "क्षेत्र ज्ञान शिक्षा" },
    { label: "धर्म / कार्य", text: "धर्म कार्य सर्वोच्च" },
    { label: "संख्या", text: "१२३४५ ६७८९०" },
  ],
  "preeti-to-unicode": [
    { label: "g]kfn", text: "g]kfn" },
    { label: 'sf7df08"', text: 'sf7df08"' },
    { label: "k|wfgdGqL", text: "k|wfgdGqL" },
    { label: "If]q 1fg lzIff", text: "If]q 1fg lzIff" },
    { label: "wd{ sfo{", text: "wd{ sfo{" },
    { label: "!@#$%", text: "!@#$%" },
  ],
};

export default function UnicodePreetiPage() {
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState<Mode>("unicode-to-preeti");
  const [copied, setCopied] = useState(false);

  const isU2P = mode === "unicode-to-preeti";

  // Output is derived from input + mode, so it always stays in sync
  const outputText = useMemo(
    () => (isU2P ? unicodeToPreeti(inputText) : preetiToUnicode(inputText)),
    [inputText, isU2P],
  );

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
    setInputText("");
  };

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaste = async () => {
    try {
      setInputText(await navigator.clipboard.readText());
    } catch {
      /* clipboard permission denied – ignore */
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 font-mukta space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-khand tracking-wide">
          प्रीति ↔ युनिकोड रुपान्तरण (Font Converter)
        </h1>

        {/* Mode switch */}
        <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 p-1 self-start sm:self-auto">
          <button
            onClick={() => switchMode("unicode-to-preeti")}
            className={`px-4 py-2 rounded-full text-sm font-bold transition ${
              isU2P ? "bg-[#0C439E] text-white shadow" : "text-slate-600"
            }`}
          >
            Unicode → Preeti
          </button>
          <ArrowLeftRight className="w-4 h-4 text-slate-400 mx-1" />
          <button
            onClick={() => switchMode("preeti-to-unicode")}
            className={`px-4 py-2 rounded-full text-sm font-bold transition ${
              !isU2P ? "bg-[#0C439E] text-white shadow" : "text-slate-600"
            }`}
          >
            Preeti → Unicode
          </button>
        </div>
      </div>

      <div className="bg-white rounded border border-slate-200 p-5 sm:p-6 space-y-5 ">
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-xl font-bold text-slate-900 font-khand">
            {isU2P
              ? "युनिकोड बाट प्रीति (Unicode to Preeti)"
              : "प्रीति बाट युनिकोड (Preeti to Unicode)"}
          </h2>
          {inputText && (
            <button
              onClick={() => setInputText("")}
              className="flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-800 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-base font-bold text-slate-700">
                {isU2P ? "Unicode Input:" : "Preeti Input:"}
              </label>
              <button
                onClick={handlePaste}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full hover:bg-slate-200 transition"
              >
                <ClipboardPaste className="w-3.5 h-3.5" />
                <span>Paste</span>
              </button>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="यहाँ लेख्नुहोस् वा पेस्ट गर्नुहोस्..."
              className={`w-full h-72 p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#0C439E] focus:outline-none resize-none text-base text-slate-800 bg-slate-50/50 ${
                !isU2P ? "font-preeti text-xl" : ""
              }`}
            />
          </div>

          {/* Output */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-base font-bold text-slate-700">
                {isU2P ? "Preeti Output:" : "Unicode Output:"}
              </label>
              {outputText && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#0C439E] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? "कपी भयो!" : "Copy Output"}</span>
                </button>
              )}
            </div>
            <textarea
              readOnly
              value={outputText}
              placeholder="रुपान्तरित नतिजा यहाँ देखिनेछ..."
              className={`w-full h-72 p-4 border border-slate-200 bg-slate-100/70 rounded-2xl resize-none text-slate-900 ${
                isU2P ? "font-preeti text-xl" : "text-base"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="p-5 bg-amber-50 border border-amber-200 rounded text-base text-amber-900 font-medium">
        <strong>प्रयोग विधि:</strong> बाँयापट्टिको बक्समा अक्षर टाइप अथवा पेस्ट
        गर्नासाथ दायाँपट्टिको बक्समा स्वतः रुपान्तरित पाठ उपलब्ध हुनेछ। 'Copy
        Output' बटन थिचेर सजिलै प्रतिलिपि गर्न सकिन्छ।
      </div>
    </main>
  );
}
