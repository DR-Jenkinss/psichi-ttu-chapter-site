import Link from "next/link";
import { getSettings } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/psi-chi-vs-psychology-club", label: "Psi Chi vs Psychology Club" },
  { href: "/officers", label: "Officers" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/news", label: "News & Essays" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const settings = getSettings();
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-content px-4 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight">
          {settings.shortName}
        </Link>
        <nav className="hidden lg:flex items-center gap-4 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-neutral-700 hover:text-neutral-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden text-sm text-neutral-600">
          Menu in v2 (mobile)
        </div>
      </div>
    </header>
  );
}
