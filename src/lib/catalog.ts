import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { categories, type Product } from "@/lib/data";

export interface DbProductRow {
  id: string;
  code: string;
  name: string;
  name_en: string;
  category_id: string;
  colors: string[];
  sizes: string[];
  image_url: string;
  is_new: boolean;
  created_at: string;
}

export const PRODUCT_BUCKET = "product-images";

export async function signImage(path: string): Promise<string> {
  if (/^https?:\/\//.test(path)) return path;
  const { data } = await supabase.storage
    .from(PRODUCT_BUCKET)
    .createSignedUrl(path, 60 * 60 * 24 * 7);
  return data?.signedUrl ?? "";
}

export async function fetchDbProducts(): Promise<
  { row: DbProductRow; product: Product }[]
> {
  const { data, error } = await supabase
    .from("catalog_products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;

  const rows = (data ?? []) as unknown as DbProductRow[];
  return Promise.all(
    rows.map(async (row) => {
      const image = await signImage(row.image_url);
      const cat = categories.find((c) => c.id === row.category_id);
      const product: Product = {
        code: row.code,
        name: row.name,
        nameEn: row.name_en || row.name,
        categoryId: row.category_id,
        category: cat?.name ?? row.category_id,
        colors: row.colors ?? [],
        sizes: row.sizes ?? [],
        image,
        isNew: row.is_new,
      };
      return { row, product };
    }),
  );
}

export function useDbProducts() {
  return useQuery({
    queryKey: ["catalog_products"],
    queryFn: fetchDbProducts,
    staleTime: 60_000,
  });
}
