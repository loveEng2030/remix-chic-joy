import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, LogOut, Plus, Trash2 } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useDbProducts, PRODUCT_BUCKET } from "@/lib/catalog";
import { allColors, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "لوحة التحكم | جوجو ستور" },
      {
        name: "description",
        content: "لوحة تحكم جوجو ستور لإضافة وحذف منتجات الكتالوج.",
      },
      { property: "og:title", content: "لوحة التحكم | جوجو ستور" },
      {
        property: "og:description",
        content: "إدارة منتجات كتالوج جوجو ستور.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const normalizeEmail = (v: string) => {
  const e = v.trim().toLowerCase();
  if (!e.includes("@")) return e;
  const [user, domain] = e.split("@");
  return domain && !domain.includes(".") ? `${user}@${domain}.com` : e;
};

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setSession(s),
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      return;
    }
    supabase
      .from("user_roles")
      .select("role")
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-32">
      <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
        لوحة تحكم الكتالوج
      </h1>
      {!session ? (
        <LoginCard />
      ) : isAdmin === false ? (
        <p className="mt-8 rounded-3xl bg-card p-8 text-center text-sm text-muted-foreground ring-1 ring-border">
          هذا الحساب ليس لديه صلاحية إدارة.
        </p>
      ) : isAdmin ? (
        <Manager email={session.user.email ?? ""} />
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">جاري التحميل…</p>
      )}
    </div>
  );
}

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email: normalizeEmail(email),
      password,
    });
    setLoading(false);
    if (error) setError("البريد أو كلمة السر غير صحيحة");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 max-w-md space-y-4 rounded-3xl bg-card p-6 ring-1 ring-border"
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="البريد الإلكتروني"
        dir="ltr"
        autoComplete="username"
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="كلمة السر"
        dir="ltr"
        autoComplete="current-password"
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" disabled={loading} className="w-full rounded-full">
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        دخول
      </Button>
    </form>
  );
}

function Manager({ email }: { email: string }) {
  const qc = useQueryClient();
  const { data, isLoading } = useDbProducts();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0]?.id ?? "women");
  const [sizes, setSizes] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  async function addProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setMsg("اختر صورة للمنتج");
      return;
    }
    setBusy(true);
    setMsg("");
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const up = await supabase.storage
      .from(PRODUCT_BUCKET)
      .upload(path, file, { contentType: file.type });
    if (up.error) {
      setBusy(false);
      setMsg("فشل رفع الصورة");
      return;
    }
    const { error } = await supabase.from("catalog_products").insert({
      code: code.trim(),
      name: name.trim(),
      name_en: nameEn.trim(),
      category_id: categoryId,
      colors,
      sizes: sizes
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      image_url: path,
      is_new: true,
    });
    setBusy(false);
    if (error) {
      setMsg("فشل الحفظ — تأكد أن الكود غير مكرر");
      return;
    }
    setCode("");
    setName("");
    setNameEn("");
    setSizes("");
    setColors([]);
    setFile(null);
    setMsg("تمت إضافة المنتج");
    qc.invalidateQueries({ queryKey: ["catalog_products"] });
  }

  async function removeProduct(id: string, imagePath: string) {
    setBusy(true);
    await supabase.from("catalog_products").delete().eq("id", id);
    if (!/^https?:\/\//.test(imagePath)) {
      await supabase.storage.from(PRODUCT_BUCKET).remove([imagePath]);
    }
    setBusy(false);
    qc.invalidateQueries({ queryKey: ["catalog_products"] });
  }

  return (
    <div className="mt-8 space-y-8">
      <div className="flex items-center justify-between rounded-3xl bg-card p-4 ring-1 ring-border">
        <span className="text-sm text-muted-foreground" dir="ltr">
          {email}
        </span>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => supabase.auth.signOut()}
        >
          <LogOut className="h-4 w-4" />
          خروج
        </Button>
      </div>

      <form
        onSubmit={addProduct}
        className="grid gap-4 rounded-3xl bg-card p-6 ring-1 ring-border md:grid-cols-2"
      >
        <h2 className="font-heading text-xl font-bold md:col-span-2">
          إضافة منتج
        </h2>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          placeholder="كود المنتج (مثال W-120)"
          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="اسم المنتج بالعربي"
          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          value={nameEn}
          onChange={(e) => setNameEn(e.target.value)}
          placeholder="Product name in English"
          dir="ltr"
          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
          placeholder="المقاسات مفصولة بفاصلة: M, L, XL"
          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="rounded-2xl border border-border bg-background px-4 py-2.5 text-sm"
        />
        <div className="flex flex-wrap gap-2 md:col-span-2">
          {allColors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() =>
                setColors((v) =>
                  v.includes(c) ? v.filter((x) => x !== c) : [...v, c],
                )
              }
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                colors.includes(c)
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {msg && (
          <p className="text-sm text-muted-foreground md:col-span-2">{msg}</p>
        )}
        <Button
          type="submit"
          disabled={busy}
          className="rounded-full md:col-span-2"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          إضافة للكتالوج
        </Button>
      </form>

      <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
        <h2 className="font-heading text-xl font-bold">
          المنتجات المضافة من اللوحة
        </h2>
        {isLoading ? (
          <p className="mt-4 text-sm text-muted-foreground">جاري التحميل…</p>
        ) : !data || data.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            لا توجد منتجات مضافة بعد.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {data.map(({ row, product }) => (
              <li
                key={row.id}
                className="flex items-center gap-4 rounded-2xl border border-border p-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold">{product.name}</p>
                  <p className="text-xs text-muted-foreground" dir="ltr">
                    {row.code}
                  </p>
                </div>
                <Button
                  variant="outline"
                  disabled={busy}
                  onClick={() => removeProduct(row.id, row.image_url)}
                  className="rounded-full text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  حذف
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
