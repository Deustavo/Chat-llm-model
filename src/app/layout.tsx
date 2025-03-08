import type { Metadata } from "next";
import "./globals.css";

import { PhillImageProvider } from '@/context/PhillImageContext';

export const metadata: Metadata = {
  title: "Phill, seu assitente de investimentos",
  description: "Seu assitente de investimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <PhillImageProvider>
        <body className="antialiased">
          {children}
        </body>
      </PhillImageProvider>
    </html>
  );
}
