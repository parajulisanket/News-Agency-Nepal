"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NepaliDate from "nepali-date-converter";
import { useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Home,
  ChevronDown,
  User,
  Phone,
  Mail,
  FileText,
  Image as ImageIcon,
  Video,
  UserPlus,
  LogIn,
  Coins,
  CircleDollarSign,
  CloudSun,
  ArrowLeftRight,
} from "lucide-react";

const NEPALI_MONTHS = [
  "बैशाख",
  "जेठ",
  "असार",
  "श्रावण",
  "भदौ",
  "असोज",
  "कार्तिक",
  "मंसिर",
  "पौष",
  "माघ",
  "फाल्गुन",
  "चैत्र",
];

const NEPALI_DAYS = [
  "आइतबार",
  "सोमबार",
  "मंगलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार",
];

const toNepaliDigits = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "०१२३४५६७८९"[Number(d)]);

function getNepaliDateString(date: Date = new Date()) {
  const bs = new NepaliDate(date);
  const day = NEPALI_DAYS[date.getDay()];
  const month = NEPALI_MONTHS[bs.getMonth()]; // month is 0-indexed
  return `${day}, ${toNepaliDigits(bs.getDate())} ${month} ${toNepaliDigits(bs.getYear())}`;
}

export default function Header() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [formattedDate, setFormattedDate] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFormattedDate(getNepaliDateString());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 110);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop the page from scrolling behind the open drawer
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Close drawer with the Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchOpen(false);
    setSearchTerm("");
  };

  const categories = [
    {
      name: "प्रमुख",
      slug: "major",
      sublinks: [{ name: "निर्वाचन समाचार", slug: "election-news" }],
    },
    { name: "राष्ट्रिय", slug: "national" },
    { name: "अर्थ", slug: "economy" },
    { name: "अन्तर्राष्ट्रिय", slug: "international" },
    { name: "समाज", slug: "society" },
    {
      name: "संसद्",
      slug: "parliament",
      sublinks: [
        { name: "प्रतिनिधिसभा", slug: "pratimidhi-sabha" },
        { name: "राष्ट्रिय सभा", slug: "rastriya-sabha" },
      ],
    },
    { name: "जलवायु परिवर्तन", slug: "climate" },
    { name: "विचार", slug: "opinion" },
    { name: "फोटो", slug: "photo" },
    { name: "खेलकुद", slug: "sports" },
    { name: "मनोरञ्जन", slug: "entertainment" },
    { name: "भिडियो", slug: "video" },
    { name: "दस्तावेज", slug: "documents" },
    { name: "LIVE", slug: "live" },
  ];

  const utilityItems = [
    {
      title: "विदेशी मुद्रा (Forex)",
      href: "/utilities/forex",
      icon: <CircleDollarSign className="w-5 h-5 text-slate-800" />,
    },
    {
      title: "सुन-चाँदीको दर",
      href: "/utilities/gold-silver",
      icon: <Coins className="w-5 h-5 text-slate-800" />,
    },
    {
      title: "मौसम पूर्वानुमान",
      href: "/utilities/weather",
      icon: <CloudSun className="w-5 h-5 text-slate-800" />,
    },
    {
      title: "प्रीति ↔ युनिकोड",
      href: "/utilities/unicode-preeti",
      icon: <ArrowLeftRight className="w-5 h-5 text-slate-800" />,
    },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-slate-200 z-40">
        {/* Middle Banner Header */}
        <div className="bg-[#0C439E] py-4 px-6 shadow-inner">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Left Section: Logo & Date/Day */}
            <div className="flex flex-col items-start gap-1">
              <Link href="/" className="inline-block group">
                <div className="relative h-16 w-48 sm:h-20 sm:w-64 md:w-80">
                  <Image
                    src="/logo.png"
                    alt="News Agency Nepal Logo"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
              <div
                translate="no"
                className="notranslate text-[#E9C325] text-xs sm:text-base font-semibold tracking-wide pl-1 min-h-[1.5rem]"
              >
                {mounted ? formattedDate : ""}
              </div>
            </div>

            {/* Right Section: Login/Register on top, Utility Icons underneath */}
            <div className="flex flex-col items-end gap-2.5">
              {/* Login & Register Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://my.newsagencynepal.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded bg-white/10 hover:bg-white/20 text-white font-mukta font-bold text-sm sm:text-base border border-white/20 shadow-sm transition hover:scale-105 active:scale-95"
                >
                  <LogIn className="w-4 h-4 text-[#E9C325]" />
                  <span>लग इन</span>
                </a>
                <a
                  href="https://my.newsagencynepal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded bg-[#E9C325] hover:bg-amber-400 text-slate-900 font-mukta font-extrabold text-sm sm:text-base shadow-md transition hover:scale-105 active:scale-95"
                >
                  <UserPlus className="w-4 h-4 text-slate-900" />
                  <span>रजिस्टर</span>
                </a>
              </div>

              {/* Square Utility Icon Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                {utilityItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    title={item.title}
                    className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center hover:bg-[#E9C325] transition hover:scale-105 active:scale-95"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for Sticky Nav */}
        {isSticky && <div className="h-[44px] w-full" />}

        {/* Sticky Navigation Bar */}
        <nav
          className={`w-full bg-white border-b border-slate-200 transition-all duration-300 ${
            isSticky
              ? "fixed top-0 left-0 right-0 z-50 shadow-sm animate-in slide-in-from-top-2"
              : "relative z-30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-1 py-1">
              {/* Hamburger Side Menu Trigger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 text-slate-700 hover:text-[#0C439E] rounded-md transition shrink-0"
                title="Open Navigation Menu"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Home Icon */}
              <Link
                href="/"
                className="p-1.5 text-slate-700 hover:text-[#0C439E] rounded-md transition shrink-0"
              >
                <Home className="w-5 h-5 text-slate-800 hover:text-[#0C439E]" />
              </Link>

              <span className="text-slate-300 select-none px-1">|</span>

              {/* Category Navigation List */}
              <div className="hidden md:flex items-center space-x-1">
                {categories.map((cat) => (
                  <div
                    key={cat.slug}
                    className="relative shrink-0 flex items-center gap-0.5"
                    onMouseEnter={() => {
                      if (cat.sublinks) setActiveDropdown(cat.slug);
                    }}
                    onMouseLeave={() => {
                      if (cat.sublinks) setActiveDropdown(null);
                    }}
                  >
                    <Link
                      href={`/category/${cat.slug}`}
                      className={`py-1.5 text-[20px] font-semibold text-slate-800 hover:text-[#0C439E] transition rounded-md font-khand flex items-center ${
                        cat.sublinks ? "pl-2.5 pr-0.5" : "px-2.5"
                      }`}
                    >
                      <span>{cat.name}</span>
                    </Link>

                    {cat.sublinks && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown((prev) =>
                            prev === cat.slug ? null : cat.slug,
                          );
                        }}
                        className="p-1 -ml-0.5 text-slate-600 hover:text-[#0C439E] transition flex items-center justify-center"
                        aria-label="Toggle Submenu"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {/* Dropdown Menu Box */}
                    {cat.sublinks && activeDropdown === cat.slug && (
                      <div className="absolute top-full left-0 mt-0 bg-slate-800 text-white rounded-md shadow-2xl py-1 z-[9999] min-w-[170px] border border-slate-700 animate-in fade-in slide-in-from-top-1 duration-150">
                        {cat.sublinks.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/category/${sub.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-[#0C439E] hover:text-white transition font-khand"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Search Trigger Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-700 hover:text-[#0C439E] rounded-md shrink-0 ml-2 transition"
              title="Search"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-[#0C439E]" />
            </button>
          </div>
        </nav>

        {/* Search Form Input Box */}
        {searchOpen && (
          <div className="bg-slate-100 border-b border-slate-300 p-4 animate-in slide-in-from-top duration-200">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-3xl mx-auto flex items-center bg-white border-2 border-[#0C439E] rounded-lg overflow-hidden shadow-md"
            >
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="समाचार खोज्नुहोस्..."
                className="w-full px-3 py-2.5 text-sm text-slate-800 focus:outline-none font-mukta"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#0C439E] text-white text-sm px-5 py-2.5 font-bold hover:bg-blue-900 transition font-khand shrink-0"
              >
                खोज्नुहोस्
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Slide-over Side Navigation Drawer (always rendered so it can animate) */}
      <div
        className={`fixed inset-0 z-[10000] flex ${
          sidebarOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!sidebarOpen}
        inert={!sidebarOpen}
      >
        {/* Backdrop: fades in/out */}
        <div
          className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Drawer: slides in from the left */}
        <div
          className={`relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto transform transition-transform duration-500 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-[#0C439E] text-white p-4 flex justify-between items-center border-b-4 border-[#66060C]">
            <div className="relative h-9 w-40">
              <Image
                src="/logo.png"
                alt="News Agency Nepal Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition text-white"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-3 bg-slate-100 border-b border-slate-200 flex gap-2 font-khand">
            <a
              href="https://my.newsagencynepal.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSidebarOpen(false)}
              className="flex-1 text-center bg-[#0C439E] text-white font-bold text-sm py-2 rounded shadow hover:bg-blue-900 transition flex items-center justify-center gap-1"
            >
              <User className="w-3.5 h-3.5" /> लग इन
            </a>
            <a
              href="https://my.newsagencynepal.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSidebarOpen(false)}
              className="flex-1 text-center bg-[#66060C] text-white font-bold text-sm py-2 rounded shadow hover:bg-red-900 transition flex items-center justify-center gap-1"
            >
              <UserPlus className="w-3.5 h-3.5 text-amber-300" /> रजिस्टर
            </a>
          </div>

          <div className="p-4 space-y-4 flex-grow">
            {/* Utility Icons in Mobile Drawer */}
            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 font-khand">
                उपयोगिता (Utilities)
              </h3>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {utilityItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    title={item.title}
                    onClick={() => setSidebarOpen(false)}
                    className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shrink-0 hover:bg-blue-50 transition"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 font-khand">
                समाचार विधाहरू
              </h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/category/${cat.slug}`}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center justify-between px-3 py-1.5 text-base font-semibold text-slate-700 hover:text-[#0C439E] rounded-md transition font-khand"
                    >
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 font-khand">
                एजेन्सी सेवाहरू
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700 font-mukta">
                <li>
                  <Link
                    href="/category/photo"
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded font-medium"
                  >
                    <ImageIcon className="w-4 h-4 text-[#0C439E]" /> फोटो सेवा
                    (Photo Feed)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/video"
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded font-medium"
                  >
                    <Video className="w-4 h-4 text-[#0C439E]" /> भिडियो सेवा
                    (Video Bulletin)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/documents"
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded font-medium"
                  >
                    <FileText className="w-4 h-4 text-[#0C439E]" /> आधिकारिक
                    दस्तावेज
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-slate-900 text-slate-300 text-xs space-y-2 font-mukta">
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +९७७-०१-XXXXXXX
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-amber-400" />{" "}
              news@newsagencynepal.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
