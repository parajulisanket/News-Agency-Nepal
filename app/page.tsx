import CategorySection from "@/components/CategorySection";
import SubscribeNotice from "@/components/SubscribeNotice";

export default function HomePage() {
  // Database/API बाट आउने नमुना डाटा
  const liveNews = [
    {
      id: 1,
      title: "संसद भवनबाट प्रधानमन्त्रीको विशेष सम्बोधन (लाइभ)",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=iRD-NkJfrg0",
    },
    {
      id: 2,
      title:
        "Today news nepali news | aaja ka mukhya samachar, nepali samachar live",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=XJThrdbfaJY",
    },
    {
      id: 3,
      title: "NEPSE LIVE - AI CHART OBSERVE TECHNICAL ANALYSIS #nepselivetoday",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=n0YHcpm-sF8",
    },
  ];

  const politicsNews = [
    {
      id: 1,
      title: "‘विपद् प्रभावित क्षेत्रमा तत्काल बेलीब्रिज र राहत प्याकेजको माग’",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 2,
      title: "नेपालको राजनीतिक स्थिति: नयाँ सरकारको निर्माणको प्रक्रिया",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 3,
      title: "संसद भवनबाट प्रधानमन्त्रीको विशेष सम्बोधन (लाइभ)",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image5.jpg",
    },
    {
      id: 201,
      title:
        "शरद् ऋतु २०२६ को फ्यासन रिपोर्ट: शैलीबद्ध पुरुषहरूका लागि विशेष पोशाक ट्रेन्ड",
      slug: "fall-2026-fashion-report",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 202,
      title:
        "पेरिस रनवेमा रातो कपाल र हिराको मुकुटमा ऐश्वर्या रायको सानदार प्रस्तुति",
      slug: "aishwarya-rai-paris-runway",
      imageUrl: "/images/image2.jpg",
    },
  ];

  const opinionNews = [
    {
      id: 1,
      title: "‘विपद् प्रभावित क्षेत्रमा तत्काल बेलीब्रिज र राहत प्याकेजको माग’",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 2,
      title: "नेपालको राजनीतिक स्थिति: नयाँ सरकारको निर्माणको प्रक्रिया",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 3,
      title: "संसद भवनबाट प्रधानमन्त्रीको विशेष सम्बोधन (लाइभ)",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image5.jpg",
    },
    {
      id: 201,
      title:
        "शरद् ऋतु २०२६ को फ्यासन रिपोर्ट: शैलीबद्ध पुरुषहरूका लागि विशेष पोशाक ट्रेन्ड",
      slug: "fall-2026-fashion-report",
      imageUrl: "/images/image1.jpg",
    },
  ];

  const photoNews = [
    {
      id: 1,
      title: "‘विपद् प्रभावित क्षेत्रमा तत्काल बेलीब्रिज र राहत प्याकेजको माग’",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 2,
      title: "नेपालको राजनीतिक स्थिति: नयाँ सरकारको निर्माणको प्रक्रिया",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 3,
      title: "संसद भवनबाट प्रधानमन्त्रीको विशेष सम्बोधन (लाइभ)",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image5.jpg",
    },
    {
      id: 201,
      title:
        "शरद् ऋतु २०२६ को फ्यासन रिपोर्ट: शैलीबद्ध पुरुषहरूका लागि विशेष पोशाक ट्रेन्ड",
      slug: "fall-2026-fashion-report",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 8,
      title: "नेपालको राजनीतिक स्थिति: नयाँ सरकारको निर्माणको प्रक्रिया",
      slug: "pm-parliament-address-live",
      imageUrl: "/images/image3.jpg",
    },
  ];

  const economyNews = [
    {
      id: 101,
      title: "शेयर बजारमा यो साता लगातार दोहोरो अङ्कको सुधार",
      slug: "share-market-growth",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 102,
      title: "तेस्रो त्रैमासिकमा निर्यात व्यापारमा १२ प्रतिशतले वृद्धि",
      slug: "export-trade-growth",
      imageUrl: "/images/image2.jpg",
    },
    {
      id: 103,
      title: "नेपाल राष्ट्र बैंकद्वारा विदेशी मुद्राको विनिमय दर स्थिर",
      slug: "nrb-forex-rates",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 104,
      title: "स्थानीय कृषि स्टार्टअपले प्राप्त गर्यो वैदेशिक लगानी",
      slug: "agri-startup-funding",
      imageUrl: "/images/image4.jpg",
    },
  ];

  const lifestyleNews = [
    {
      id: 201,
      title:
        "शरद् ऋतु २०२६ को फ्यासन रिपोर्ट: शैलीबद्ध पुरुषहरूका लागि विशेष पोशाक ट्रेन्ड",
      slug: "fall-2026-fashion-report",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 202,
      title:
        "पेरिस रनवेमा रातो कपाल र हिराको मुकुटमा ऐश्वर्या रायको सानदार प्रस्तुति",
      slug: "aishwarya-rai-paris-runway",
      imageUrl: "/images/image2.jpg",
    },
    {
      id: 203,
      title: "लेयरिङको शैली: जिलेट, भेस्ट र वेस्टकोट—कुन पहिरन छनोट गर्ने?",
      slug: "battle-of-layers-guide",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 204,
      title: "आधुनिक पुरुषहरूका लागि विवाहको औँठी छनोट गर्ने नयाँ तरिका",
      slug: "modern-wedding-bands",
      imageUrl: "/images/image4.jpg",
    },
    {
      id: 205,
      title: "जेन-जी (Gen Z) युवाहरू कस्ता घडीहरू मन पराउँछन्?",
      slug: "gen-z-watch-choices",
      imageUrl: "/images/image5.jpg",
    },
  ];

  const entertainmentNews = [
    {
      id: 201,
      title:
        "शरद् ऋतु २०२६ को फ्यासन रिपोर्ट: शैलीबद्ध पुरुषहरूका लागि विशेष पोशाक ट्रेन्ड",
      slug: "fall-2026-fashion-report",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 202,
      title:
        "पेरिस रनवेमा रातो कपाल र हिराको मुकुटमा ऐश्वर्या रायको सानदार प्रस्तुति",
      slug: "aishwarya-rai-paris-runway",
      imageUrl: "/images/image2.jpg",
    },
    {
      id: 203,
      title: "लेयरिङको शैली: जिलेट, भेस्ट र वेस्टकोट—कुन पहिरन छनोट गर्ने?",
      slug: "battle-of-layers-guide",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 204,
      title: "आधुनिक पुरुषहरूका लागि विवाहको औँठी छनोट गर्ने नयाँ तरिका",
      slug: "modern-wedding-bands",
      imageUrl: "/images/image4.jpg",
    },
    {
      id: 403,
      title: "लेयरिङको शैली: जिलेट, भेस्ट र वेस्टकोट—कुन पहिरन छनोट गर्ने?",
      slug: "battle-of-layers-guide",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 604,
      title: "आधुनिक पुरुषहरूका लागि विवाहको औँठी छनोट गर्ने नयाँ तरिका",
      slug: "modern-wedding-bands",
      imageUrl: "/images/image4.jpg",
    },
  ];

  const sportNews = [
    {
      id: 201,
      title:
        "शरद् ऋतु २०२६ को फ्यासन रिपोर्ट: शैलीबद्ध पुरुषहरूका लागि विशेष पोशाक ट्रेन्ड",
      slug: "fall-2026-fashion-report",
      imageUrl: "/images/image1.jpg",
    },
    {
      id: 202,
      title:
        "पेरिस रनवेमा रातो कपाल र हिराको मुकुटमा ऐश्वर्या रायको सानदार प्रस्तुति",
      slug: "aishwarya-rai-paris-runway",
      imageUrl: "/images/image2.jpg",
    },
    {
      id: 203,
      title: "लेयरिङको शैली: जिलेट, भेस्ट र वेस्टकोट—कुन पहिरन छनोट गर्ने?",
      slug: "battle-of-layers-guide",
      imageUrl: "/images/image3.jpg",
    },
    {
      id: 204,
      title: "आधुनिक पुरुषहरूका लागि विवाहको औँठी छनोट गर्ने नयाँ तरिका",
      slug: "modern-wedding-bands",
      imageUrl: "/images/image4.jpg",
    },
  ];

  const videoNews = [
    {
      id: 301,
      title: "काठमाडौँ उपत्यकामा सार्वजनिक यातायातको नयाँ व्यवस्था लागू",
      slug: "ktm-traffic-system-update",
      imageUrl: "/images/image1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=iRD-NkJfrg0",
    },
    {
      id: 302,
      title: "निजी लगानीकर्ताका लागि ऊर्जा क्षेत्रमा नयाँ अवसरहरू",
      slug: "energy-investment-opportunities",
      imageUrl: "/images/image2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=4rRk-jvgeJ4",
    },
    {
      id: 303,
      title: "विश्वकप छनोट खेलमा राष्ट्रिय टोलीको विशेष तयारी",
      slug: "world-cup-qualifiers-prep",
      imageUrl: "/images/image3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5hmZ7G3jFBg",
    },
    {
      id: 304,
      title: "पर्यटन प्रवर्द्धनका लागि पोखरामा अन्तर्राष्ट्रिय महोत्सव",
      slug: "pokhara-tourism-festival",
      imageUrl: "/images/image4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5hmZ7G3jFBg",
    },
  ];

  return (
    <main className="">
      {/* Live Broadcast Category */}
      <CategorySection
        title="प्रत्यक्ष प्रशारण"
        categorySlug="live"
        articles={liveNews}
        layout="live"
      />
      {/* Politics Category */}
      <CategorySection
        title="राजनीति"
        categorySlug="politics"
        articles={politicsNews}
        layout="layout-1"
      />
      {/* Opinion Category */}
      <CategorySection
        title="विचार"
        categorySlug="opinion"
        articles={opinionNews}
        layout="bichar"
      />
      {/* Photo Feature Category */}
      <CategorySection
        title="फोटो फीचर"
        categorySlug="photo"
        articles={photoNews}
        layout="layout-1"
      />
      {/* Economy Category */}
      <CategorySection
        title="अर्थतन्त्र"
        categorySlug="economy"
        articles={economyNews}
        layout="layout-1"
      />
      {/* Video Category */}
      <CategorySection
        title="भिडियो"
        categorySlug="video"
        articles={videoNews}
      />
      {/* Entertainment Category */}
      <CategorySection
        title="मनोरंजन"
        categorySlug="entertainment"
        articles={entertainmentNews}
        layout="layout-1"
        limit={4}
      />
      {/* Lifestyle Category */}
      <CategorySection
        title="जीवनशैली"
        categorySlug="lifestyle"
        articles={lifestyleNews}
        layout="layout-1"
      />
      {/* Sports Category */}
      <CategorySection
        title="खेलकुद"
        categorySlug="sports"
        articles={sportNews}
        layout="layout-1"
      />

      <div className="max-w-3xl mx-auto">
        <SubscribeNotice />
      </div>
    </main>
  );
}
