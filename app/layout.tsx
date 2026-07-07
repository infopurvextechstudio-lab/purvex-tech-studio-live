import ThemeProvider from "@/components/providers/ThemeProvider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";

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
    default: "Purvex Tech Studio | Career Branding & Business Solutions",
    template: "%s | Purvex Tech Studio",
  },

  description:
    "Purvex Tech Studio provides Career Branding, Resume Writing, Portfolio Creation, Web Development, SEO, AEO, GEO Optimization and Digital Business Solutions.",

  keywords: [
    "Purvex Tech Studio",
    "Career Branding",
    "Resume Writing",
    "Portfolio",
    "LinkedIn Optimization",
    "Web Development",
    "SEO",
    "AEO",
    "GEO",
    "Business Solutions",
    "JavaScript",
    "Bootstrap",
  ],

  authors: [
    {
      name: "Purvex Tech Studio",
    },
  ],

  creator: "Purvex Tech Studio",

  publisher: "Purvex Tech Studio",

  applicationName: "Purvex Tech Studio",

  category: "Technology",

  openGraph: {
    title: "Purvex Tech Studio",
    description:
      "Premium Career Branding & Business Solutions Agency.",
    url: siteUrl,
    siteName: "Purvex Tech Studio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Purvex Tech Studio",
    description:
      "Premium Career Branding & Business Solutions Agency.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F1A",
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
    <body className="bg-background text-foreground antialiased overflow-x-hidden transition-colors duration-300">
      <ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange
>
  <CurrencyProvider>
    {children}
  </CurrencyProvider>
</ThemeProvider>
    </body>
  </html>
);
}