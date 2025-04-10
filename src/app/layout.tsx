import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codematrix - Learn, Share, and Grow as a Developer",
  description:
    "A community platform for developers to learn coding, share projects, and access resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <ThemeProvider defaultTheme="system" storageKey="codematrix-theme">
          <div className="min-h-full flex flex-col transition-colors duration-300">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <footer className="border-t py-6 text-center text-sm text-neutral-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} WilsonIIRIP. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
