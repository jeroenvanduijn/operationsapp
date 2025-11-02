import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GymOps - Beyond Checklists: Achieve Operational Excellence",
  description: "Streamline your gym's daily routines and empower your team with GymOps - the operations app designed for CrossFit and boutique gyms.",
  keywords: "gym management, CrossFit software, gym operations, checklist app, gym app",
  authors: [{ name: "GymOps" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#E2442F",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GymOps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
