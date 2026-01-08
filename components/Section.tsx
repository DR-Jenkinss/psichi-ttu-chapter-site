import { ReactNode } from "react";

export function Section({ title, subtitle, children }: { title?: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-content px-4 py-10">
      {title && <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>}
      {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
