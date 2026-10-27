"use client";

import CategoryLayoutOne from "./layouts/CategoryLayoutOne";
import CategoryLayoutTwo from "./layouts/CategoryLayoutTwo";
import CategoryLayoutLive from "./layouts/CategoryLayoutLive";
import CategoryLayoutVideo from "./layouts/CategoryLayoutVideo";
import CategoryLayoutBichar from "./layouts/CategoryLayoutBichar";

export interface Article {
  id: string | number;
  title: string;
  slug: string;
  imageUrl?: string;
  categoryName?: string;
  authorName?: string;
  publishedAt?: string;
  videoUrl?: string;
}

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  articles: Article[];
  layout?: "layout-1" | "layout-2" | "live" | "video" | "bichar";
  limit?: number;
}

export default function CategorySection({
  title,
  categorySlug,
  articles,
  layout,
  limit,
}: CategorySectionProps) {
  if (!articles || articles.length === 0) return null;

  const visibleArticles = limit ? articles.slice(0, limit) : articles;

  const activeLayout =
    layout ||
    (categorySlug === "live"
      ? "live"
      : categorySlug === "video"
        ? "video"
        : "layout-1");

  switch (activeLayout) {
    case "live":
      return (
        <CategoryLayoutLive
          title={title}
          categorySlug={categorySlug}
          articles={visibleArticles}
        />
      );

    case "video":
      return (
        <CategoryLayoutVideo
          title={title}
          categorySlug={categorySlug}
          articles={visibleArticles}
        />
      );

    case "layout-2":
      return (
        <CategoryLayoutTwo
          title={title}
          categorySlug={categorySlug}
          articles={visibleArticles}
        />
      );

    case "bichar":
      return (
        <CategoryLayoutBichar
          title={title}
          categorySlug={categorySlug}
          articles={visibleArticles}
        />
      );

    case "layout-1":
    default:
      return (
        <CategoryLayoutOne
          title={title}
          categorySlug={categorySlug}
          articles={visibleArticles}
        />
      );
  }
}
