import Image from "next/image";
import { getOfficers } from "@/lib/content";
import { Section } from "@/components/Section";

export default function OfficersPage() {
  const officers = getOfficers();
  return (
    <Section title="Meet the Officers" subtitle="Executive Board and Faculty Advisor(s)">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {officers.map((o) => (
          <div key={o.role} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl border bg-neutral-50">
                {o.image ? (
                  <Image src={o.image} alt={o.name} fill sizes="56px" />
                ) : null}
              </div>
              <div>
                <div className="font-semibold">{o.role}</div>
                <div className="text-sm text-neutral-700">{o.name}</div>
                {o.email ? <div className="text-sm text-neutral-600">{o.email}</div> : null}
              </div>
            </div>
            {o.bio ? <div className="mt-3 text-sm text-neutral-700">{o.bio}</div> : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
