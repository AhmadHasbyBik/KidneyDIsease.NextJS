"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// components
import Container from "@/components/Container";
import Paragraph from "@/components/typography/Paragraph";

const steps = [
  {
    title: "Minum banyak air",
    description:
      "Membantu mengencerkan urine dan mencegah pembentukan batu ginjal serta mengoptimalkan fungsi ginjal dalam menyaring limbah dari darah.",
    icon: "/ginjal/glass-water.svg",
  },
  {
    title: "Makan makanan sehat",
    description:
      "Diet seimbang yang kaya akan buah-buahan, sayuran, biji-bijian, dan protein sehat (seperti ikan, kacang-kacangan, dan daging tanpa lemak)",
    icon: "/ginjal/burger-solid.svg",
  },
  {
    title: "Hindari rokok dan alkohol",
    description:
      "Alkohol dan rokok dapat merusak ginjal serta meningkatkan risiko terjadinya penyakit ginjal.",
    icon: "/ginjal/smoking-solid.svg",
  },
  {
    title: "Jaga tekanan darah",
    description:
      "Mengelola tekanan darah dengan diet sehat, olahraga teratur, dan menghindari stres dapat membantu menjaga kesehatan ginjal.",
    icon: "/ginjal/droplet-solid.svg",
  },
];

export default function HomeStepper() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setStep(0);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [step]);

  return (
    <div className="relative">
      <div className="absolute -left-0 bottom-20 -z-10">
        <Image src="/home/circle8.svg" alt="Circle 8" width={558} height={558} />
      </div>
      <Container className="lg:py-24 relative z-0">
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="mb-5 text-center text-xl lg:text-4xl font-bold">
            Bagaimana cara merawat ginjal kita?
          </h2>
          <Paragraph className="text-center lg:w-[70%]">
          Ginjal adalah organ vital dalam tubuh manusia yang berperan penting dalam menyaring limbah dan racun dari darah, menjaga keseimbangan elektrolit, serta mengatur tekanan darah.
          </Paragraph>
        </div>

        <ol className="hidden xl:flex items-center w-full px-28 my-20">
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <span
              className={`flex items-center justify-center w-10 h-10 lg:h-16 lg:w-16 text-2xl font-bold rounded-full shrink-0 transition ease-linear 
                            ${step + 1 === 1
                  ? "duration-500 scale-110 bg-gradient-to-br from-[#FF7D54] to-[#FFEC41] text-white"
                  : "border border-gray-200"
                }`}
            >
              1
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <span
              className={`flex items-center justify-center w-10 h-10 lg:h-16 lg:w-16 text-2xl font-bold rounded-full shrink-0 transition ease-linear 
                            ${step + 1 === 2
                  ? "duration-500 scale-110 bg-gradient-to-br from-[#FF7D54] to-[#FFEC41] text-white"
                  : "border border-gray-200"
                }`}
            >
              2
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <span
              className={`flex items-center justify-center w-10 h-10 lg:h-16 lg:w-16 text-2xl font-bold rounded-full shrink-0 transition ease-linear 
                            ${step + 1 === 3
                  ? "duration-500 scale-110 bg-gradient-to-br from-[#FF7D54] to-[#FFEC41] text-white"
                  : "border border-gray-200"
                }`}
            >
              3
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`flex items-center justify-center w-10 h-10 lg:h-16 lg:w-16 text-2xl font-bold rounded-full shrink-0 transition ease-linear
                            ${step + 1 === 4
                  ? "duration-500 scale-110 bg-gradient-to-br from-[#FF7D54] to-[#FFEC41] text-white"
                  : "border border-gray-200"
                }`}
            >
              4
            </span>
          </li>
        </ol>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {steps.map((item, i) => {
            return (
              <div
                key={i}
                className="basis-1/2 flex flex-col items-center justify-center gap-5"
              >
                <span className="flex items-center justify-center xl:hidden w-16 h-16 text-2xl font-bold rounded-full shrink-0 bg-gradient-to-br from-[#FF7D54] to-[#FFEC41] text-white">
                  {i + 1}
                </span>
                <div
                  className={`mx-auto flex flex-col justify-start rounded-[50px] shadow-xl border border-gray-200 p-10 bg-white
                                    transition ease-linear ${step === i
                      ? "xl:duration-500 xl:w-72 xl:h-full xl:scale-110"
                      : "xl:duration-500 xl:w-64 xl:h-64"
                    }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={50}
                    height={50}
                  />
                  <p className="mt-10 text-sm text-gray-400">
                    
                  </p>
                  <h2 className="mb-3 text-lg font-bold">{item.title}</h2>
                  <p
                    className={`text-sm ${step === i ? "xl:block" : "xl:hidden"
                      }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
