import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocModeProvider } from "@/context/doc-mode";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Toni",
    default: "Toni — NestJS Architecture for Rust",
  },
  description:
    "Toni is a modular, framework-agnostic Rust web framework inspired by NestJS. Build scalable server-side applications with dependency injection, guards, interceptors, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <DocModeProvider>
          <RootProvider>{children}</RootProvider>
        </DocModeProvider>
      </body>
    </html>
  );
}
