import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
   subsets: ["latin"],
   variable: "--font-jakarta",
});

export const metadata: Metadata = {
   title: {
      default: `${site.name} | Bricks & Wheelbarrow Distributor in Nigeria`,
      template: `%s | ${site.name}`,
   },
   description: site.description,
};

export default function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" className={jakarta.variable}>
         <body className="flex min-h-screen flex-col font-sans antialiased">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
