import Link from "next/link";
import Image from "next/image";
import type { Product, ProductWithStats } from "@/types/database";
import { getPricingLabel, getPricingColor } from "@/lib/utils";
import { PRODUCT_CATEGORIES, getCategoryColor } from "@/lib/categories";

interface ProductCardProps {
  product: Product | ProductWithStats;
  compact?: boolean;
}

function isNew(createdAt: string): boolean {
  const created = new Date(createdAt).getTime();
  if (isNaN(created)) return false;
  return Date.now() - created < 7 * 24 * 60 * 60 * 1000;
}

function hasViewCount(product: Product | ProductWithStats): product is ProductWithStats {
  return "view_count" in product && typeof product.view_count === "number";
}

function getCategoryName(categoryId: string): string | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.id === categoryId)?.name;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const productNew = isNew(product.created_at);
  const viewCount = hasViewCount(product) ? product.view_count : 0;
  const categoryName = getCategoryName(product.category);
  const screenshot = product.screenshots?.[0];

  if (compact) {
    return (
      <Link
        href={`/products/${product.slug}`}
        className="group p-4 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-sm transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
            {product.logo_url ? (
              <Image
                src={product.logo_url}
                alt={product.name}
                fill
                className="object-contain p-0.5"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-lg font-bold text-gray-400">
                {product.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 group-hover:text-primary-600 truncate transition-colors text-sm">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {product.tagline}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className="block group">
      <div className="card h-full overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 border border-gray-200/80 bg-white">
        <div className="relative h-40 overflow-hidden">
          {screenshot ? (
            <>
              <Image
                src={screenshot}
                alt={`${product.name} screenshot`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </>
          ) : (
            <div className={`relative w-full h-full ${getCategoryColor(product.category).gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),_transparent_45%)]" />
              {product.logo_url ? (
                <div className="relative w-20 h-20 bg-white rounded-2xl shadow-lg overflow-hidden p-2 z-10">
                  <Image
                    src={product.logo_url}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="z-10 text-center">
                  <span className={`block text-5xl font-bold opacity-20 ${getCategoryColor(product.category).text}`}>
                    {product.name.charAt(0)}
                  </span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-600/70">
                    {categoryName || "SaaS"}
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="absolute top-3 left-3 flex gap-1.5">
            {productNew && (
              <span className="bg-green-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                新着
              </span>
            )}
            {product.pricing_type === "free" && (
              <span className="bg-sky-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                無料
              </span>
            )}
            {viewCount >= 10 && (
              <span className="bg-amber-500 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                人気
              </span>
            )}
          </div>

          {screenshot && product.logo_url && (
            <div className="absolute bottom-3 left-3">
              <div className="relative w-10 h-10 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.logo_url}
                  alt={product.name}
                  fill
                  className="object-contain p-0.5"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          {categoryName && (
            <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
              {categoryName}
            </span>
          )}
          <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50/80 p-3">
            <div className="flex items-center justify-between gap-2">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getPricingColor(product.pricing_type)}`}>
                {getPricingLabel(product.pricing_type)}
              </span>
              {viewCount > 0 && (
                <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {viewCount}
                </span>
              )}
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
              <span>導入しやすい</span>
              <svg
                className="w-4 h-4 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
