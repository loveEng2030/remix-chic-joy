import p1 from "@/assets/jojo-p1.jpg";
import p2 from "@/assets/jojo-p2.jpg";
import p3 from "@/assets/jojo-p3.jpg";
import p4 from "@/assets/jojo-p4.jpg";
import p5 from "@/assets/jojo-p5.jpg";
import p7 from "@/assets/jojo-p7.jpg";
import p8 from "@/assets/jojo-p8.jpg";
import p9 from "@/assets/jojo-p9.jpg";
import p10 from "@/assets/jojo-p10.jpg";
import p11 from "@/assets/jojo-p11.jpg";
import p12 from "@/assets/jojo-p12.jpg";
import p15 from "@/assets/jojo-p15.jpg";
import p16 from "@/assets/jojo-p16.jpg";
import p17 from "@/assets/jojo-p17.jpg";
import p18 from "@/assets/jojo-p18.jpg";
import p19 from "@/assets/jojo-p19.jpg";
import p21 from "@/assets/jojo-p21.jpg";
import p2alt from "@/assets/jojo-p2-alt.jpg";
import p4alt from "@/assets/jojo-p4-alt.jpg";
import p7alt from "@/assets/jojo-p7-alt.jpg";
import p9alt from "@/assets/jojo-p9-alt.jpg";
import p12alt from "@/assets/jojo-p12-alt.jpg";
import p15alt from "@/assets/jojo-p15-alt.jpg";
import p16alt from "@/assets/jojo-p16-alt.jpg";
import p17alt from "@/assets/jojo-p17-alt.jpg";
import p18alt from "@/assets/jojo-p18-alt.jpg";
import n1 from "@/assets/jojo-n1.png";
import n1b from "@/assets/jojo-n1-navy.png";
import n2 from "@/assets/jojo-n2.png";
import n2b from "@/assets/jojo-n2-pink.png";
import n3 from "@/assets/jojo-n3.png";
import n3b from "@/assets/jojo-n3-lavender.png";
import n4 from "@/assets/jojo-n4.png";
import n4b from "@/assets/jojo-n4-navy.png";
import n5 from "@/assets/jojo-n5.png";

export const PHONE = "01061318862";
export const PHONE_INTL = "201061318862";
export const ADDRESS =
  "16 شارع جمال عبد الناصر أمام مستشفى ماري جرجس، حدائق حلوان، القاهرة";

export const ADDRESS_EN =
  "16 Gamal Abdel Nasser St., in front of Mari Girgis Hospital, Hadayek Helwan, Cairo";

export const waLink = (message: string) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "السلام عليكم، أرغب في التواصل مع JOJO Store",
);
export const WA_CATALOG = waLink(
  "السلام عليكم، أرغب في استلام كتالوج الجملة وأسعار JOJO Store",
);
export const WA_CATALOG_FULL = waLink(
  "السلام عليكم، أرغب في استلام كتالوج الجملة الكامل وأسعار JOJO Store",
);

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "women",
    name: "ملابس حريمي",
    nameEn: "Women's clothing",
    description: "فساتين، بلوزات وأطقم صيفية وشتوية بأحدث الموديلات",
    descriptionEn: "Dresses, blouses and summer/winter sets in the latest styles",
    image: p11,
  },
  {
    id: "men",
    name: "ملابس رجالي",
    nameEn: "Men's clothing",
    description: "قمصان، تيشيرتات وبولو بخامات قطن ممتازة",
    descriptionEn: "Shirts, t-shirts and polos in premium cotton",
    image: p16,
  },
  {
    id: "kids",
    name: "ملابس أطفال",
    nameEn: "Kids' clothing",
    description: "أطقم أطفال من عمر سنة حتى 14 سنة",
    descriptionEn: "Kids sets from 1 to 14 years",
    image: p12,
  },
  {
    id: "homewear",
    name: "هوم وير",
    nameEn: "Homewear",
    description: "بيجامات وأطقم منزلية قطن وفانيلا",
    descriptionEn: "Pyjamas and home sets in cotton and fleece",
    image: p15,
  },
  {
    id: "casual",
    name: "كاجوال",
    nameEn: "Casual",
    description: "تيشيرتات وجينز وقطع كاجوال لكل الأعمار",
    descriptionEn: "T-shirts, jeans and casual pieces for all ages",
    image: p19,
  },
];

export interface Product {
  code: string;
  name: string;
  nameEn: string;
  categoryId: string;
  category: string;
  colors: string[];
  sizes: string[];
  image: string;
  colorImages?: Partial<Record<string, string>>;
  isNew: boolean;
}

export const products: Product[] = [
  { code: "W-101", name: "طقم تراك حريمي سويت شيرت وبنطلون", nameEn: "Women sweatshirt and trousers tracksuit", categoryId: "women", category: "ملابس حريمي", colors: ["بمبي", "لبني", "نبيتي", "لافندر"], sizes: ["12", "14", "16", "18"], image: p1, colorImages: { "بمبي": p1, "لبني": p10, "نبيتي": p11, "لافندر": p3 }, isNew: true },
  { code: "K-201", name: "طقم سويت شيرت وبنطلون أطفال بطبعة", nameEn: "Kids printed sweatshirt and trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["بني", "كحلي"], sizes: ["3", "4", "5", "6", "7"], image: p2, colorImages: { "بني": p2, "كحلي": p2alt }, isNew: true },
  { code: "K-202", name: "تيشيرت وليجن شتوي مقلم دينو", nameEn: "Kids striped dino winter t-shirt and leggings", categoryId: "kids", category: "ملابس أطفال", colors: ["أوف وايت", "بمبي"], sizes: ["3", "4", "5", "6", "7"], image: p7, colorImages: { "أوف وايت": p7, "بمبي": p7alt }, isNew: true },
  { code: "K-203", name: "سويت شيرت أطفال مقلم وبنطلون كارجو", nameEn: "Kids striped sweatshirt and cargo trousers", categoryId: "kids", category: "ملابس أطفال", colors: ["لبني", "زيتي"], sizes: ["3", "4", "5", "6", "7"], image: p4, colorImages: { "لبني": p4, "زيتي": p4alt }, isNew: false },
  { code: "K-204", name: "طقم جاكت بسحاب وبنطلون أولادي", nameEn: "Boys zip jacket and trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["كحلي", "أحمر"], sizes: ["6", "8", "10", "12"], image: p5, isNew: true },
  { code: "K-205", name: "طقم جاكت بسحاب وكارجو أولادي", nameEn: "Boys zip jacket and cargo set", categoryId: "kids", category: "ملابس أطفال", colors: ["رمادي", "أسود"], sizes: ["6", "8", "10", "12"], image: p8, isNew: false },
  { code: "K-206", name: "طقم جاكت سبيد بسحاب وبنطلون", nameEn: "Kids Speed zip jacket and trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["أزرق", "رمادي"], sizes: ["6", "8", "10", "12"], image: p9, colorImages: { "أزرق": p9, "رمادي": p9alt }, isNew: false },
  { code: "K-207", name: "طقم جاكت دينو وكارجو", nameEn: "Kids dino jacket and cargo set", categoryId: "kids", category: "ملابس أطفال", colors: ["بيج", "لبني"], sizes: ["6", "8", "10", "12"], image: p12, colorImages: { "بيج": p12, "لبني": p12alt }, isNew: false },
  { code: "K-208", name: "بيجامات بناتي شتوية مطبوعة", nameEn: "Girls printed winter pyjamas", categoryId: "kids", category: "ملابس أطفال", colors: ["لافندر", "منت"], sizes: ["6", "8", "10", "12", "14"], image: p17, colorImages: { "لافندر": p17, "منت": p17alt }, isNew: true },
  { code: "K-209", name: "تشكيلة أطقم أطفال متنوعة", nameEn: "Assorted kids coordinated sets", categoryId: "kids", category: "ملابس أطفال", colors: ["بيج", "زيتي", "أوف وايت"], sizes: ["4", "6", "8", "10", "12"], image: p21, isNew: false },
  { code: "K-210", name: "طقم سويت شيرت مقلم وبنطلون كارجو أطفال", nameEn: "Kids striped sweatshirt and cargo trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["بني", "كحلي"], sizes: ["4", "6", "8", "10", "12"], image: n1, colorImages: { "بني": n1, "كحلي": n1b }, isNew: true },
  { code: "K-211", name: "تيشيرت بيبي قطن ناعم", nameEn: "Soft cotton baby t-shirt", categoryId: "kids", category: "ملابس أطفال", colors: ["لبني", "بمبي"], sizes: ["0-3", "3-6", "6-9", "9-12"], image: n2, colorImages: { "لبني": n2, "بمبي": n2b }, isNew: true },
  { code: "K-212", name: "طقم سويت شيرت وليجن بناتي بطبعة", nameEn: "Girls printed sweatshirt and leggings set", categoryId: "kids", category: "ملابس أطفال", colors: ["بيج", "لافندر"], sizes: ["2", "3", "4", "5"], image: n3, colorImages: { "بيج": n3, "لافندر": n3b }, isNew: true },
  { code: "K-213", name: "طقم هودي بسحاب وبنطلون أولادي", nameEn: "Boys zip hoodie and trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["أسود", "كحلي"], sizes: ["6", "8", "10", "12", "14"], image: n4, colorImages: { "أسود": n4, "كحلي": n4b }, isNew: true },
  { code: "K-214", name: "طقم سويت شيرت وبنطلون بناتي واسع", nameEn: "Girls sweatshirt and wide trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["رمادي"], sizes: ["6", "8", "10", "12", "14", "16"], image: n5, colorImages: { "رمادي": n5 }, isNew: true },
  { code: "M-301", name: "أطقم تراك رجالي شتوية", nameEn: "Men winter tracksuit sets", categoryId: "men", category: "ملابس رجالي", colors: ["أسود", "نبيتي"], sizes: ["M", "L", "XL", "2XL"], image: p16, colorImages: { "أسود": p16, "نبيتي": p16alt }, isNew: true },
  { code: "H-401", name: "تشكيلة أطقم شتوية متنوعة", nameEn: "Assorted winter coordinated sets", categoryId: "homewear", category: "هوم وير", colors: ["بني", "أسود"], sizes: ["M", "L", "XL", "2XL"], image: p15, colorImages: { "بني": p15, "أسود": p15alt }, isNew: true },
  { code: "H-402", name: "أطقم بناتي هوم وير", nameEn: "Girls homewear sets", categoryId: "homewear", category: "هوم وير", colors: ["لبني", "بمبي"], sizes: ["4", "6", "8", "10"], image: p18, colorImages: { "لبني": p18, "بمبي": p18alt }, isNew: false },
  { code: "C-501", name: "تشكيلة كاجوال صيفية للعائلة", nameEn: "Family summer casual collection", categoryId: "casual", category: "كاجوال", colors: ["أزرق", "أصفر", "بمبي"], sizes: ["مشكل"], image: p19, isNew: true },
];

export const allColors = [
  "أحمر", "أزرق", "أسود", "أصفر", "أوف وايت", "بمبي", "بني", "بيج",
  "رمادي", "زيتي", "كحلي", "لافندر", "لبني", "مشكل", "منت", "نبيتي",
];

export const colorHex: Record<string, string> = {
  "أحمر": "#c0392b",
  "أزرق": "#2563eb",
  "أسود": "#1a1a1a",
  "أصفر": "#eab308",
  "أوف وايت": "#f3efe7",
  "بمبي": "#e8a0b4",
  "بني": "#7b4a2d",
  "بيج": "#d9c3a5",
  "رمادي": "#9ca3af",
  "زيتي": "#5b6b3a",
  "كحلي": "#1e2a52",
  "لافندر": "#b9a4d8",
  "لبني": "#a8cbe8",
  "مشكل": "#c9a84c",
  "منت": "#8fd6bd",
  "نبيتي": "#6b2233",
};

export const productWaLink = (p: Product) =>
  waLink(
    `السلام عليكم، أرغب في الاستفسار عن طلب جملة للمنتج: ${p.name} (كود ${p.code.toLowerCase()}) - قسم ${p.category}. من JOJO Store`,
  );

export const categoryWaLink = (name: string) =>
  waLink(
    `السلام عليكم، أرغب في الاستفسار عن أسعار الجملة لقسم ${name} في JOJO Store`,
  );

export const newProducts = products.filter((p) => p.isNew);
export const stapleProducts = products.filter((p) => !p.isNew);

export const WA_B2B = waLink(
  "السلام عليكم، أرغب في طلب عرض توريد B2B من JOJO Store",
);
