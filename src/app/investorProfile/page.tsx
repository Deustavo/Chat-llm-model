"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import LargeBallon from "@/assets/ballon-large.png";

import { useInvestorProfile } from "@/store/investorProfile";
import { usePhillImage } from "@/context/PhillImageContext";

export default function InvestorProfile() {
  useEffect(() => {
    setPhillImage(phill.writing);
  }, []);

  const router = useRouter();
  const { phillImage, setPhillImage, phill } = usePhillImage();

  const {
    questionnaire,
    currentQuestion,
    setCurrentQuestion,
    setAnswers
  } = useInvestorProfile();

  const handlePrevious = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion === questionnaire.length - 1) {
      router.push('/chat');
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const getButtonLabel = () => {
    if (currentQuestion === questionnaire.length - 1) {
      return 'Finalizar';
    }

    return 'Próxima';
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full relative">
        <Image
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
          width={500}
          height={500}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full"
      >
        <div 
          className="flex flex-col items-center justify-center w-full z-10"
          style={{ marginRight: '15vw' }}
        >
          <div
            className="flex flex-col items-center justify-center relative"
          >
            <img
              id="large-ballon"
              src={LargeBallon.src}
            />
            <p
              className="absolute"
              style={{ fontSize: '1.8vw' }}
            >
              { questionnaire[currentQuestion].question }
            </p>
          </div>
            <form
              className="flex flex-col w-full my-8 px-16"
            >
              {
                questionnaire[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="my-2"
                    style={{ fontSize: '1.6vw' }}
                  >
                    <input
                      type="radio"
                      id={option}
                      name={`question-${questionnaire[currentQuestion].id}`}
                      value={option}
                      onChange={(e) => setAnswers({ id: questionnaire[currentQuestion].id, answer: e.target.value })}
                      style={{ marginRight: '8px' }}
                    />
                    <label
                      className="cursor-pointer"
                      htmlFor={option}
                    >
                      {option}
                    </label>
                  </div>
                ))
              }
            </form>
          <div className="w-full flex justify-between px-16">
            {
              currentQuestion !== 0 ? (
                <button
                  onClick={handlePrevious}
                >
                  Anterior
                </button>
              ) : (
                <div />
              )
            }
            
            <button
              onClick={handleNext}
            >
                { getButtonLabel() }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}