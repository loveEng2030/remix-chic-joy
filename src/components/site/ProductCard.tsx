import { BadgeCheck } from "lucide-react";
import { categories, colorHex, productWaLink, type Product } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export function ProductCard({ product }: { product: Product }) {
  const { t, tx, tColor } = useI18n();
  const cat = categories.find((c) => c.id === product.categoryId);
  const name = tx(product.name, product.nameEn);

  return (
    <article className="group overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-foreground/5">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute end-3 top-3 flex gap-2">
          <span className="rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-foreground ring-1 ring-border">
            Code {product.code.split("-")[1]}
          </span>
          {product.isNew && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              {t("common.new")}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{cat ? tx(cat.name, cat.nameEn) : product.category}</span>
          <span className="font-bold text-primary" dir="ltr">
            {product.code}
          </span>
        </div>

        <h3 className="font-heading text-base font-bold leading-snug">
          {name}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c}
              className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              <span
                className="h-3.5 w-3.5 rounded-full ring-1 ring-border"
                style={{ backgroundColor: colorHex[c] ?? "#ddd" }}
              />
              {tColor(c)}
            </span>
          ))}
        </div>


        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-border px-2 text-xs font-bold text-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <a
            href={productWaLink(product)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("common.orderNow")}
          </a>
          <span className="flex items-center gap-1 text-xs font-medium text-green-700">
            <BadgeCheck className="h-4 w-4" />
            {t("common.available")}
          </span>
        </div>
      </div>
    </article>
  );
}
