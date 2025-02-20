import "./css/style.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "CallStackSurfer",
  description: "Decode, Debug, Deliver!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-100 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow container mx-auto  mt-24">{children}</main>
          <Footer border={true} />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
