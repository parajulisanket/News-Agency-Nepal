// export interface Article {
//   id: string;
//   title: string;
//   category: string;
//   summary: string;
//   content: string;
//   publishedAt: string;
//   image: string;
//   imageUrl?: string;
//   authorName?: string;
//   videoUrl?: string;
// }

// export const MOCK_ARTICLES: Article[] = [
//   {
//     id: "1",
//     title: "प्रतिनिधिसभाद्वारा नयाँ डिजिटल पूर्वाधार विधेयक सर्वसम्मतिले पारित",
//     category: "politics",
//     summary:
//       "काठमाडौँ — डिजिटल सुरक्षा र फाइबर नेटवर्क विस्तारलाई व्यवस्थित गर्न ल्याइएको नयाँ विधेयक संसद्‌बाट पारित भएको छ।",
//     content:
//       "काठमाडौँ — राष्ट्रिय योजना आयोगका सदस्य र सरोकारवाला निकायहरूको उपस्थितिमा काठमाडौँमा आयोजित विशेष समारोहका बीच नयाँ डिजिटल पूर्वाधार विधेयक पारित भएको छ। यस ऐनले देशभर तीव्र गति इन्टरनेट सेवा र सूचना प्रविधिको विकासमा महत्त्वपूर्ण योगदान पुर्‍याउने अपेक्षा गरिएको छ।",
//     publishedAt: "२०८३ असोज १९",
//     image: "/images/news-1.jpg",
//   },
//   {
//     id: "2",
//     title: "नेपालमा विदेशी पर्यटकको आगमनमा २० प्रतिशतले वृद्धि",
//     category: "economy",
//     summary:
//       "नेपाल पर्यटन बोर्डका अनुसार हवाई मार्ग सुधार र प्रवर्धनका कारण पर्यटक आगमन बढेको छ।",
//     content:
//       "काठमाडौँ — नेपाल पर्यटन बोर्डले सार्वजनिक गरेको पछिल्लो तथ्याङ्क अनुसार चालु वर्षको यसै महिनामा विदेशी पर्यटकको संख्यामा उल्लेख्य वृद्धि भएको छ। क्षेत्रीय विमानस्थलहरूको सञ्चालन र अन्तर्राष्ट्रिय प्रवर्धनका कारण पर्यटन क्षेत्र पुनरुत्थानको दिशामा अघि बढेको हो।",
//     publishedAt: "२०८३ असोज १९",
//     image: "/images/news-2.jpg",
//   },
//   {
//     id: "3",
//     title: "राष्ट्रिय फुटबल टोलीको बन्द प्रशिक्षण पोखरामा सुरु",
//     category: "sports",
//     summary:
//       "आगामी क्षेत्रीय च्याम्पियनसिपका लागि मुख्य प्रशिक्षकद्वारा २३ सदस्यीय टोलीको घोषणा।",
//     content:
//       "पोखरा — आगामी महिना आयोजना हुने क्षेत्रीय फुटबल प्रतियोगिताका लागि नेपाली राष्ट्रिय टोलीले आफ्नो तयारी तीव्र पारेको छ। पोखरा रङ्गशालामा सुरु भएको बन्द प्रशिक्षणमा खेलाडीहरूको फिटनेस र रणनीतिमा विशेष ध्यान दिइएको छ।",
//     publishedAt: "२०८३ असोज १९",
//     image: "/images/news-3.jpg",
//   },
//   {
//     id: "4",
//     title: "काठमाडौँ अन्तर्राष्ट्रिय चलचित्र महोत्सवको तालिका सार्वजनिक",
//     category: "entertainment",
//     summary:
//       "पाँच दिने महोत्सवमा दक्षिण एसियाका ४० भन्दा बढी वृत्तचित्र र कथानक चलचित्र प्रदर्शन गरिने।",
//     content:
//       "काठमाडौँ — काठमाडौँ अन्तर्राष्ट्रिय चलचित्र महोत्सवको टोलीले आज औपचारिक तालिका सार्वजनिक गरेको छ। महोत्सव अवधिभर स्वतन्त्र चलचित्रकर्मीहरूका उत्कृष्ट सिर्जना प्रदर्शन हुनुका साथै कार्यशालासमेत सञ्चालन गरिनेछ।",
//     publishedAt: "२०८३ असोज १८",
//     image: "/images/news-4.jpg",
//   },
//   {
//     id: "5",
//     title: "काठमाडौँ-तराई द्रुतमार्ग (फास्टट्र्याक) निर्माण कार्य तीव्र",
//     category: "national",
//     summary:
//       "सुरङ्ग मार्ग तथा पुल निर्माण कार्य लक्ष्य अनुसार द्रुत गतिमा अगाडि बढिरहेको छ।",
//     content:
//       "काठमाडौँ — काठमाडौँ-तराई/मधेस फास्टट्र्याक निर्माण आयोजना अन्तर्गत विभिन्न प्याकेजका कार्यहरू तीव्रताका साथ अघि बढेका छन्। सेनाको सुपरिवेक्षणमा निर्माणाधीन सुरुङ तथा रणनीतिक पुलहरूको काम तोकिएकै समयमा सम्पन्न गर्ने लक्ष्य राखिएको छ।",
//     publishedAt: "२०८३ असोज १८",
//     image: "/images/news-5.jpg",
//   },
// ];

// export async function getLatestNews(): Promise<Article[]> {
//   return MOCK_ARTICLES;
// }

// export async function getNewsByCategory(
//   categorySlug: string,
// ): Promise<Article[]> {
//   return MOCK_ARTICLES.filter(
//     (article) => article.category.toLowerCase() === categorySlug.toLowerCase(),
//   );
// }

// export async function getSingleArticle(
//   id: string,
// ): Promise<Article | undefined> {
//   return MOCK_ARTICLES.find((article) => article.id === id) || MOCK_ARTICLES[0];
// }


import { API_BASE_URL } from "./constants";

export interface Article {
  id: string | number;
  title: string;
  slug?: string;
  imageUrl?: string;
  videoUrl?: string;
  summary?: string;
  content?: string;
  created_at?: string;
}

const defaultHeaders = {
  Accept: "application/json",
  "ngrok-skip-browser-warning": "true",
};

function mapApiToArticle(item: any): Article {
  return {
    id: item.id || "",
    title: item.title || "",
    slug: item.slug || String(item.id || ""),
    imageUrl:
      item.featured_image ||
      item.image ||
      item.imageUrl ||
      "/images/image1.jpg",
    videoUrl: item.video_url || item.videoUrl || "",
    summary: item.summary || item.description || "",
    content: item.content || "",
    created_at: item.created_at || "",
  };
}

export async function getContentsByCategory(
  categoryId?: string,
): Promise<Article[]> {
  try {
    const url = categoryId
      ? `${API_BASE_URL}/api/v1/contents/?category=${categoryId}`
      : `${API_BASE_URL}/api/v1/contents/`;

    const res = await fetch(url, {
      headers: defaultHeaders,
      cache: "no-store", // Fresh SSR load for SEO
    });

    if (!res.ok) return [];
    const data = await res.json();
    const rawItems = Array.isArray(data)
      ? data
      : data.results || data.items || [];
    return rawItems.map(mapApiToArticle);
  } catch (error) {
    console.error(`Error fetching contents for category ${categoryId}:`, error);
    return [];
  }
}
