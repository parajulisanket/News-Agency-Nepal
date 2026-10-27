"use client";

import Link from "next/link";

export default function SubscribeNotice() {
  return (
    <div className="my-8 p-6 bg-red-50/60 border border-red-200 rounded-xl text-center space-y-3">
      <p className="text-gray-800 text-sm md:text-base leading-relaxed italic font-medium">
        न्यूज एजेन्सी नेपाल नेपालको पहिलो गैरसरकारी र सबैभन्दा ठूलो समाचार
        एजेन्सी हो। यसले उत्पादन गरेका सबै समाचार, फोटो र भिडियो बिना अनुमति
        कसैले प्रयोग गर्न पाउँदैन। बिनाअनुमति कसैले प्रयोग गरेको पाइएमा कानुनतः
        दण्डनीय मानिन्छ। तपाईं हाम्रो ग्राहक बन्न र प्रयोग गर्न सक्नुहुनेछ।
        ग्राहक बन्न आजै सदस्यता लिनुहोस्।
      </p>

      <div className="pt-2">
        <Link
          target="_blank"
          href="https://my.newsagencynepal.com/signup"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition shadow-sm hover:shadow"
        >
          सदस्यता लिनुहोस् (Subscribe News)
        </Link>
      </div>
    </div>
  );
}
