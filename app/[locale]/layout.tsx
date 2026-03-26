import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AccessibilityProvider } from "@/components/layout/AccessibilityContext";
import { AccessibilityToolbar } from "@/components/layout/accessibility-toolbar";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <AccessibilityProvider>
            <AccessibilityToolbar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </AccessibilityProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
