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
  isNew: boolean;
}

export const products: Product[] = [
  { code: "W-101", name: "طقم تراك حريمي هودي وبنطلون", nameEn: "Women hoodie and joggers tracksuit", categoryId: "women", category: "ملابس حريمي", colors: ["بمبي", "أسود"], sizes: ["12", "14", "16", "18"], image: p1, isNew: true },
  { code: "W-102", name: "طقم هودي حريمي لافندر", nameEn: "Women lavender hoodie set", categoryId: "women", category: "ملابس حريمي", colors: ["لافندر", "أسود"], sizes: ["12", "14", "16", "18"], image: p3, isNew: true },
  { code: "W-103", name: "سويت شيرت حريمي وبنطلون لبني", nameEn: "Women light blue sweatshirt and trousers", categoryId: "women", category: "ملابس حريمي", colors: ["لبني", "كحلي"], sizes: ["12", "14", "16", "18"], image: p10, isNew: false },
  { code: "W-104", name: "طقم رياضي حريمي بخطوط جانبية", nameEn: "Women sports set with side stripes", categoryId: "women", category: "ملابس حريمي", colors: ["بمبي", "أسود"], sizes: ["12", "14", "16", "18"], image: p11, isNew: false },
  { code: "K-201", name: "تيشيرت وليجن شتوي أطفال قماش دافئ", nameEn: "Kids warm winter t-shirt and leggings", categoryId: "kids", category: "ملابس أطفال", colors: ["بني", "كحلي"], sizes: ["3", "4", "5", "6", "7"], image: p2, isNew: true },
  { code: "K-202", name: "تيشيرت وليجن شتوي مقلم دينو", nameEn: "Kids striped dino winter t-shirt and leggings", categoryId: "kids", category: "ملابس أطفال", colors: ["أوف وايت", "زيتي"], sizes: ["3", "4", "5", "6", "7"], image: p7, isNew: true },
  { code: "K-203", name: "سويت شيرت أطفال مقلم وبنطلون كارجو", nameEn: "Kids striped sweatshirt and cargo trousers", categoryId: "kids", category: "ملابس أطفال", colors: ["لبني", "كحلي"], sizes: ["3", "4", "5", "6", "7"], image: p4, isNew: false },
  { code: "K-204", name: "طقم جاكت سبايدي بسحاب وبنطلون", nameEn: "Kids Spidey zip jacket and trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["كحلي", "أحمر"], sizes: ["6", "8", "10", "12"], image: p5, isNew: true },
  { code: "K-205", name: "طقم جاكت باتمان بسحاب وكارجو", nameEn: "Kids Batman zip jacket and cargo set", categoryId: "kids", category: "ملابس أطفال", colors: ["رمادي", "أسود"], sizes: ["6", "8", "10", "12"], image: p8, isNew: false },
  { code: "K-206", name: "طقم جاكت سبيد بسحاب وبنطلون", nameEn: "Kids Speed zip jacket and trousers set", categoryId: "kids", category: "ملابس أطفال", colors: ["أزرق", "رمادي"], sizes: ["6", "8", "10", "12"], image: p9, isNew: false },
  { code: "K-207", name: "طقم جاكت دينو بيج وكارجو زيتي", nameEn: "Kids beige dino jacket and olive cargo", categoryId: "kids", category: "ملابس أطفال", colors: ["بيج", "زيتي"], sizes: ["6", "8", "10", "12"], image: p12, isNew: false },
  { code: "K-208", name: "أطقم تراك أطفال بناتي وأولادي", nameEn: "Kids tracksuits for boys and girls", categoryId: "kids", category: "ملابس أطفال", colors: ["زيتي", "نبيتي", "كحلي"], sizes: ["6", "8", "10", "12", "14"], image: p17, isNew: true },
  { code: "K-209", name: "جاكيتات وسويت شيرت أطفال شتوي", nameEn: "Kids winter jackets and sweatshirts", categoryId: "kids", category: "ملابس أطفال", colors: ["بيج", "زيتي", "أوف وايت"], sizes: ["4", "6", "8", "10", "12"], image: p21, isNew: false },
  { code: "M-301", name: "جاكت شتوي رجالي وبنطلون جينز", nameEn: "Men winter jacket and denim trousers", categoryId: "men", category: "ملابس رجالي", colors: ["أسود", "بيج", "بني"], sizes: ["M", "L", "XL", "2XL"], image: p16, isNew: true },
  { code: "H-401", name: "بيجامات أطفال قطن مطبوعة", nameEn: "Kids printed cotton pyjamas", categoryId: "homewear", category: "هوم وير", colors: ["أصفر", "بيج", "مشكل"], sizes: ["1", "2", "3", "4"], image: p15, isNew: true },
  { code: "H-402", name: "بيجامات بناتي شخصيات كرتونية", nameEn: "Girls cartoon character pyjamas", categoryId: "homewear", category: "هوم وير", colors: ["لبني", "بمبي", "أوف وايت"], sizes: ["4", "6", "8", "10"], image: p18, isNew: false },
  { code: "C-501", name: "أطقم هودي وسويت بانت كاجوال", nameEn: "Casual hoodie and sweatpants sets", categoryId: "casual", category: "كاجوال", colors: ["نبيتي", "منت", "أزرق"], sizes: ["M", "L", "XL", "2XL"], image: p19, isNew: true },
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
