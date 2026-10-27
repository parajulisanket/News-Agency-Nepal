"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";

export default function RefreshButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => router.refresh())}
      className={`p-1 text-slate-500 hover:text-[#0C439E] transition ${
        pending ? "animate-spin" : ""
      }`}
      title="अपडेट गर्नुहोस्"
    >
      <RefreshCw className="w-4 h-4" />
    </button>
  );
}
