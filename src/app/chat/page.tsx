import Sidebar from "@/components/chat/sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Inicie um novo chat`,
  description: ":o",
};

export default function EmptyChat() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar isResponsive={false} />
      <div className="flex items-center justify-center w-5/6">
        Inicie um novo chat
      </div>
    </div>
  );
}
