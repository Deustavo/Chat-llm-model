"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { usePhillImage } from "@/context/PhillImageContext";

export default function Home() {
  useEffect(() => {
    setPhillImage(phill.pointing);
  }, []);

  const router = useRouter();
  const { phillImage, setPhillImage, phill } = usePhillImage();

  /**
   * Animação para os elementos da tela cairem
   */
  const animationFallDown = () => {
    const phillTitle = document.getElementById('phill-title');
    const buttonProfile = document.getElementById('button-profile');
    const buttonChat = document.getElementById('button-chat');

    if (phillTitle && buttonProfile && buttonChat) {
      phillTitle.style.transition = 'transform 0.5s ease-in-out';
      buttonProfile.style.transition = 'transform 0.5s ease-in-out';
      buttonChat.style.transition = 'transform 0.5s ease-in-out';

      phillTitle.style.transform = 'translateY(-20px)';
      buttonProfile.style.transform = 'translateY(-20px)';
      buttonChat.style.transform = 'translateY(-20px)';

      setTimeout(() => {
        buttonChat.style.transform = 'translateY(100vh)';
      }, 300);

      setTimeout(() => {
        buttonProfile.style.transform = 'translateY(100vh)';
      }, 400);

      setTimeout(() => {
        phillTitle.style.transform = 'translateY(100vh)';
      }, 500);
    }
  };

  /**
   * Animação para a imagem do Phill cair
   */
  const animationFallDownPhill = () => {
    const image = document.getElementById('phill-image');

    if (image) {
      image.style.transition = 'transform 0.5s ease-in-out';
      image.style.transform = 'translateY(-20px)';

      setTimeout(() => {
        image.style.transform = 'translateY(100vh)';
      }, 700);
    }
  }

  /**
   * Animação que diminui o tamanho da imagem do Phill
   */
  const animationToSmillingPhill = () => {
    const image = document.getElementById('phill-image');

    if (image) {
      image.style.transition = 'transform 1s ease-in-out';
      image.style.transform = 'translateY(-20px)';

      setTimeout(() => {
        image.style.transition = 'transform 0.5s ease-in-out';
        image.style.transform = 'scale(0.8)';
      }, 500);

      setTimeout(() => {
        setPhillImage(phill.smilling);
      }, 700);
    }
  };

  const redirectToPresentation = () => {
    animationFallDown();
    animationToSmillingPhill();

    setTimeout(() => {
      router.push('/presentation');
    }, 700);
  };

  const redirectToChat = () => {
    animationFallDown();
    animationFallDownPhill();

    setTimeout(() => {
      router.push('/chat');
    }, 700);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full relative">
        <Image
          id="phill-image"
          src={phillImage}
          alt="Phill"
          className="w-full absolute"
          style={{ top: '10vw', left: '3vw' }}
          width={500}
          height={500}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full"
        style={{ height: '80vh' }}
      >
        <div
          id="phill-title"
          className="flex flex-col items-center justify-center w-full"
        >
          <h2 style={{ fontSize: '300px', marginBottom: '-110px' }}>Phill</h2>
          <h3 style={{ fontSize: '44px' }}>Seu assistente de investimentos</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button
            id="button-profile"
            className="rounded-full text-white py-2 px-6 transform transition-transform duration-300 hover:scale-110"
            style={{
              backgroundColor: 'var(--primary-color)',
              margin: '80px 0px 16px 0px',
              fontSize: '18px',
            }}
            onClick={() => redirectToPresentation()}
          >
            Descubra seu perfil de investidor
          </button>
          <button
            id="button-chat"
            className="transform transition-transform duration-300 hover:scale-110"
            style={{
              color: 'var(--primary-color)',
              fontSize: '18px',
            }}
            onClick={() => redirectToChat()}
          >
            Ir direto ao chat
          </button>
        </div>
      </div>
    </div>
  );
}
