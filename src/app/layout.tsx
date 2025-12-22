import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LenisProvider from "./providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prep Ecom Solution",
  description: "Fast, Accurate, & Scalable 3PL Fulfillment 7 Days a Week For Your Brand",
  verification: {
    google: "DiHvV1pMy2Pmq2xJQxirF9D5qGzMz0wUkySafYIoPYE",
  },
  other: {
    "p:domain_verify": "5aaa2b2544edf671d6a2a1978b17eec1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <meta name="p:domain_verify" content="5aaa2b2544edf671d6a2a1978b17eec1" /> */}
      {/* <meta name="google-site-verification" content="DiHvV1pMy2Pmq2xJQxirF9D5qGzMz0wUkySafYIoPYE" /> */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TBK9RJDNKF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TBK9RJDNKF');`}
        </Script>

        <Header />
        <LenisProvider>{children}</LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
