import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCraftStudio — Beautiful Websites for Local Businesses",
  description:
    "We build and maintain modern websites for local businesses on a simple monthly subscription. Hosting, updates, and bug fixes included.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist-sans)]">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
