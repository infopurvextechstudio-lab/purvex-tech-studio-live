import ThemeProvider from "@/components/providers/ThemeProvider";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Schema from "@/components/seo/Schema";
import Navbar from "@/components/layout/navbar/Navbar";
//  import Footer from "@/components/sections/Footer";

import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CustomCursor } from "@/components/effects/custom-cursor";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://purvextechstudio.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Purvex Tech Studio | AI-Powered Websites, Automation & Business Growth",
    template: "%s | Purvex Tech Studio",
  },

  description:
    "Purvex Tech Studio is a premium AI-powered digital agency specializing in Website Development, AI Automation, Business Automation, Shopify Development, SEO, AEO, GEO Optimization, ATS Resume Writing, LinkedIn Optimization, Portfolio Development, Branding and Digital Growth Solutions.",

  keywords: [
    "Purvex Tech Studio",
    "AI Automation",
    "Business Automation",
    "Website Development",
    "Web Design",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Shopify Development",
    "WordPress Development",
    "SEO",
    "AEO",
    "GEO",
    "AI SEO",
    "Technical SEO",
    "Digital Agency",
    "Business Growth",
    "CRM Automation",
    "Workflow Automation",
    "Portfolio Website",
    "ATS Resume",
    "Resume Writing",
    "LinkedIn Optimization",
    "Personal Branding",
    "UI UX Design",
    "Pakistan",
    "Dubai",
    "UAE",
    "United Kingdom",
    "USA",
  ],

  authors: [
    {
      name: "Purvex Tech Studio",
      url: siteUrl,
    },
  ],

  creator: "Purvex Tech Studio",
  publisher: "Purvex Tech Studio",
  applicationName: "Purvex Tech Studio",
  category: "Technology",

  alternates: {
    canonical: siteUrl,
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Purvex Tech Studio",
  },

  openGraph: {
    title:
      "Purvex Tech Studio | AI-Powered Websites, Automation & Business Growth",

    description:
      "Helping businesses grow through AI automation, premium websites, SEO, GEO, AEO and digital transformation.",

    url: siteUrl,
    siteName: "Purvex Tech Studio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Purvex Tech Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Purvex Tech Studio",

    description: "Premium Websites • AI Automation • Business Growth",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground overflow-x-hidden antialiased">
        <Schema siteUrl={siteUrl} />

        <ScrollProgress />
        <CustomCursor />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <CurrencyProvider>
            <Navbar />

            <main>{children}</main>

          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}