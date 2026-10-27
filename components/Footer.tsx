"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Building2, ChevronRight } from "lucide-react";

// Custom SVG Icons for Social Media Platforms
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0C439E] text-white border-t-4 border-amber-400 font-mukta">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6">
        {/* Top Section: Logo & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/20 gap-6">
          <Link href="/" className="inline-block">
            <div className="relative h-16 w-60 md:w-72">
              <Image
                src="/logo.png"
                alt="News Agency Nepal"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-khand font-semibold text-lg uppercase text-slate-200 mr-2">
              Follow Us:
            </span>
            <a
              href="https://www.facebook.com/NewsAgencyNepal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-900 text-white flex items-center justify-center transition-all p-2.5"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-full h-full" />
            </a>
            <a
              href="https://www.instagram.com/NewsAgencyNepal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-900 text-white flex items-center justify-center transition-all p-2.5"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-full h-full" />
            </a>
            <a
              href="https://x.com/AgencyNepal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-900 text-white flex items-center justify-center transition-all p-2.5"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-full h-full" />
            </a>
            <a
              href="https://www.youtube.com/NewsAgencyNepal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-900 text-white flex items-center justify-center transition-all p-2.5"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-full h-full" />
            </a>
          </div>
        </div>

        {/* Middle Section: 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-white/20">
          {/* Column 1: Organization Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold font-khand text-amber-400 tracking-wide uppercase border-b-2 border-amber-400 inline-block pb-1">
              GM Media Pvt. Ltd.
            </h3>
            <p className="text-[16px] text-slate-200 leading-relaxed pt-2">
              न्यूज एजेन्सी नेपाल (News Agency Nepal) देशका प्रमुख घटनाक्रम,
              राजनीति, अर्थतन्त्र, खेलकुद तथा विचार सम्बन्धी भरपर्दो र ताजा
              समाचार सम्प्रेषण गर्ने आधिकारिक माध्यम हो।
            </p>
          </div>

          {/* Column 2: Quick Policy Links */}
          <div>
            <h3 className="text-xl font-bold font-khand text-amber-400 tracking-wide uppercase border-b-2 border-amber-400 inline-block pb-1 mb-4">
              मुख्य लिङ्कहरू
            </h3>
            <ul className="space-y-2 text-[16px] text-slate-200 text-base">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  हाम्रोबारे (About Us)
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  सम्पर्क (Contacts)
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  गोपनीयता नीति (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial-policy"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  सम्पादकीय नीति (Editorial Policy)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: News Categories */}
          <div>
            <h3 className="text-xl font-bold font-khand text-amber-400 tracking-wide uppercase border-b-2 border-amber-400 inline-block pb-1 mb-4">
              मुख्य विधा
            </h3>
            <ul className="space-y-2 text-[16px] text-slate-200 text-base">
              <li>
                <Link
                  href="/category/national"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  राष्ट्रिय समाचार
                </Link>
              </li>
              <li>
                <Link
                  href="/category/parliament"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  प्रतिनिधिसभा / संसद्
                </Link>
              </li>
              <li>
                <Link
                  href="/category/economy"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  अर्थ / वाणिज्य
                </Link>
              </li>
              <li>
                <Link
                  href="/category/sports"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  खेलकुद
                </Link>
              </li>
              <li>
                <Link
                  href="/category/photo"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  फोटो तथा भिडियो
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-xl font-bold font-khand text-amber-400 tracking-wide uppercase border-b-2 border-amber-400 inline-block pb-1 mb-4">
              सम्पर्क (Contacts)
            </h3>
            <ul className="space-y-3 text-[16px] text-slate-200">
              <li className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>GM Media Pvt. Ltd.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Anamnagar, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@newsagencynepal.com"
                  className="hover:underline"
                >
                  info@newsagencynepal.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href="tel:9779851084194" className="hover:underline">
                  +977 - 9851084194
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[14px] text-slate-300 gap-3">
          <p>
            © {new Date().getFullYear()} GM Media Pvt. Ltd. All rights reserved.
          </p>
          <p>
            Site By:{" "}
            <a
              href="https://kantipurinfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-bold hover:underline"
            >
              Kantipur Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
