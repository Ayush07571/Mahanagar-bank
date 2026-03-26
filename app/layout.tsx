import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AccessibilityProvider } from "@/components/layout/AccessibilityContext";
import { AccessibilityToolbar } from "@/components/layout/accessibility-toolbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mahanagar Nagrik Sahakari Bank Ltd.",
    template: "%s | MNS Bank",
  },
  description: "Mahanagar Nagrik Sahakari Bank Ltd. - Your trusted banking partner in Bhopal. Personal and Business banking services with competitive rates.",
  keywords: ["bank", "banking", "cooperative bank", "Bhopal", "personal banking", "business banking", "loans", "deposits"],
  authors: [{ name: "Mahanagar Nagrik Sahakari Bank Ltd." }],
  creator: "Mahanagar Nagrik Sahakari Bank Ltd.",
  publisher: "Mahanagar Nagrik Sahakari Bank Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mnsbank.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mnsbank.com",
    title: "Mahanagar Nagrik Sahakari Bank Ltd.",
    description: "Your trusted banking partner in Bhopal",
    siteName: "MNS Bank",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AccessibilityProvider>
          <AccessibilityToolbar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
