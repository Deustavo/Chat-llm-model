import Sidebar from "@/components/chat/sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Chat com ${1}`,
  description: ":o",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      {/* <Sidebar isResponsive={false} /> */}
      <div className="flex items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
