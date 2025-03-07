"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import PhillWriting from "@/assets/phill/v8.png"
import PhillSmilling from "@/assets/phill/v3.png"
import Ballon from "@/assets/ballon.png"

export default function PhillPresentation() {
  useEffect(() => {
    animationFadeInBallon();
  }, []);

  const router = useRouter();
  const [phillImage, setPhillImage] = useState(PhillSmilling.src);
  const [presentationTextIndex, setPresentationTextIndex] = useState(0);

  const presentationText = [
    "Olá, eu sou o <b style='color:var(--primary-color)'>Phill</b>, o especialista em investimentos.",
    "Vou te ajudar a tomar decisões de <b style='color:var(--primary-color)'>investimento</b> beaseado nas noticias do <b style='color:var(--primary-color)'>mercado financeiro</b>.",
    "Antes de começar deixe-me entender <b style='color:var(--primary-color)'>sua experiencia</b> com investimentos.",
  ];

  const handlePrevious = () => {
    if(presentationTextIndex === 0) {
      return
    };

    setPresentationTextIndex(presentationTextIndex - 1);
  };

  const handleNext = () => {
    if(presentationTextIndex === presentationText.length - 1) {
      animationFadeOutBallon();
      animationCenterPhill();
      setPhillImage(PhillWriting.src);

      setTimeout(() => {
        router.push('/investorProfile');
      }, 500);

      return
    };

    setPresentationTextIndex(presentationTextIndex + 1);
  };

  const animationFadeOutBallon = () => {
    const ballon = document.getElementById('ballon-container');

    if (ballon) {
      ballon.style.transition = 'opacity 0.5s ease-in-out';
      ballon.style.opacity = '0';
    }
  }

  const animationFadeInBallon = () => {
    const ballon = document.getElementById('ballon-container');

    if (ballon) {
      ballon.style.transition = 'opacity 0.3s ease-in-out';
      ballon.style.opacity = '1';
    }
  }

  const animationCenterPhill = () => {
    const phillImage = document.getElementById('phill-image');

    if (phillImage) {
      phillImage.style.transition = 'all 0.5s ease-in-out';
      phillImage.style.transform = 'translateX(-50%) translateY(-50%)';
      phillImage.style.left = '40%';
      phillImage.style.top = '50%';
      phillImage.style.width = '40%';
    }
  }

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
      >
        <div
          className="w-full relative flex justify-center items-center"
          id="ballon-container"
          style={{
            width: '92%',
            top: '-12vw',
            left: '-8vw',
            opacity: '0',
          }}
        >
          <img
            src={Ballon.src}
            className="absolute"
          />
          <div className="absolute text-center">
            <p
              dangerouslySetInnerHTML={{ __html: presentationText[presentationTextIndex] }}
              style={{
                fontSize: '2vw',
                padding: '0% 10% 0% 14%',
              }}
            />
          </div>
          <div
            className="absolute flex justify-between"
            style={{
              width: '92%',
              top: '17vw',
              padding: '0 4%',
              color: 'var(--primary-color)',
              fontSize: '1.4vw',
            }}
          >

            {presentationTextIndex > 0 ? (
              <p
                className="cursor-pointer"
                onClick={() => handlePrevious()}
              >
                Anterior
              </p>
            ) : (
              <p></p>
            )}

            <p
              className="cursor-pointer"
              onClick={() => handleNext()}
            >
              Proximo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};