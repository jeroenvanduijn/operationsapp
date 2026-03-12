import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0F",
};

export const metadata: Metadata = {
  title: "GymOps — Jouw gym verdient een systeem dat werkt",
  description:
    "Leads automatisch opvolgen. Leden behouden. Staff aansturen. GymOps is het complete automatiseringssysteem voor micro gyms, CrossFit boxes en boutique studios.",
  keywords:
    "gym automatisering, CrossFit software, gym management, leadopvolging, retentie, staff app, micro gym, boutique fitness",
  authors: [{ name: "GymOps" }],
  openGraph: {
    title: "GymOps — Jouw gym verdient een systeem dat werkt",
    description:
      "Het complete automatiseringssysteem voor micro gyms. Leads, retentie en operaties op autopilot.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="font-body antialiased bg-dark-950 text-dark-50">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
