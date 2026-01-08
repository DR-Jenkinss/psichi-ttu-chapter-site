import Link from "next/link";
import { ReactNode } from "react";

export function Card({ title, children, href }: { title: string; children: ReactNode; href?: string }) {
  const inner = (
    <div className="rounded-2xl border p-5 shadow-sm hover:shadow transition-shadow bg-white">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-700">{children}</div>
    </div>
  );
  return href ? <Link href={href} className="block">{inner}</Link> : inner;
}

export function ButtonLink({ href, children, variant="primary" }: { href: string; children: ReactNode; variant?: "primary"|"secondary" }) {
  const cls = variant === "primary"
    ? "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800"
    : "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border hover:bg-neutral-50";
  return <a className={cls} href={href}>{children}</a>;
}
