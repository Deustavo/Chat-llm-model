"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';

import PhillWriting from "@/assets/phill/v8.png"

export default function InvestorProfile() {
  const router = useRouter();
  const [phillImage, setPhillImage] = useState(PhillWriting.src);

  const handleNext = () => {
    router.push('/chat');
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full relative">
        <img
          id="phill-image"
          src={phillImage}
          alt="Phill"
          className="w-full absolute"
          style={{
            left: '40%',
            top: '50%',
            scale: '0.8',
            transform: 'translateX(-50%) translateY(-50%)',
            width: '40%'
          }}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full"
      >
      </div>
    </div>
  );
}