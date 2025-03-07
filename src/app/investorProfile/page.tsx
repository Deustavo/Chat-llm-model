"use client"

import { useState } from "react";
import PhillPointing from "@/assets/phill/v4.png"
import PhillSmilling from "@/assets/phill/v3.png"
import { useRouter } from 'next/navigation';

export default function CharacterChat() {
  const [phillImage, setPhillImage] = useState(PhillSmilling.src);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full relative">
        <img
          id="phill-image"
          src={phillImage}
          alt="Phill"
          className="w-full absolute"
          style={{
            top: '10vw',
            left: '3vw',
            scale: '0.8',
          }}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full"
        style={{ height: '80vh' }}
      >
      </div>
    </div>
  );
};