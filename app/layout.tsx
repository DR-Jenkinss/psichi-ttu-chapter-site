import "./globals.css";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Psi Chi — Chapter Website",
  description: "Psi Chi chapter website (Texas Tech University).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
