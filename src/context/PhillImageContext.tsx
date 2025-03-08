"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

import PhillPointing from "@/assets/phill/v4.png";
import PhillSmilling from "@/assets/phill/v3.png";
import PhillWriting from "@/assets/phill/v8.png"

interface PhillImageContextProps {
  phillImage: string;
  setPhillImage: (url: string) => void;
  phill: { [key: string]: string };
}

const PhillImageContext = createContext<PhillImageContextProps | undefined>(undefined);

export const PhillImageProvider = ({ children }: { children: ReactNode }) => {
  const phill = {
    "pointing": PhillPointing.src,
    "smilling": PhillSmilling.src,
    "writing": PhillWriting.src
  };

  const [phillImage, setPhillImage] = useState<string>(phill.pointing);

  return (
    <PhillImageContext.Provider value={{ phillImage, setPhillImage, phill }}>
      {children}
    </PhillImageContext.Provider>
  );
};

export const usePhillImage = () => {
  const context = useContext(PhillImageContext);
  if (!context) {
    throw new Error('usePhillImage must be used within a PhillImageProvider');
  }
  return context;
};