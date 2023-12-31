import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const raleway = Fira_Sans({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinay's Portfolio",
  description: "Vinay Chauhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
