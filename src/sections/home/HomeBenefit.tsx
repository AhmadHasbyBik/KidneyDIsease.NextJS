"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// components
import Container from "@/components/Container";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";

const benefits = [
  {
    bgColor: "bg-gradient-to-br from-[#4FFFC0] to-[#00B2FF]",
    title: "Kista Ginjal",
    description:
      "Kantong berisi cairan yang dapat berkembang di dalam ginjal.",
    icon: "/home/benefit/viruses-solid.svg",
  },
  {
    bgColor: "bg-gradient-to-br from-[#FF7D54] to-[#FFEC41]",
    title: "Tumor Ginjal",
    description:
      "Pertumbuhan abnormal sel-sel di ginjal yang bisa menjadi ganas atau jinak.",
    icon: "/home/benefit/disease-solid.svg",
  },
  {
    bgColor: "bg-gradient-to-br from-[#A728E2] to-[#F4AADC]",
    title: "Batu Ginjal",
    description:
      "Massa keras yang terbentuk dari kristal-kristal mineral dan garam yang terkumpul di ginjal.",
    icon: "/home/benefit/bacteria-solid.svg",
  },
  {
    bgColor: "bg-gradient-to-br from-[#00B2FF] to-[#F4AADC]",
    title: "Normal",
    description:
      "Kondisi ginjal yang berfungsi dengan baik tanpa adanya masalah atau kelainan.",
    icon: "/home/benefit/heart-pulse-solid.svg",
  },
];

const HomeBenefit = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative -mt-20">
      <div className="absolute -left-10 -bottom-20 -z-10">
        <Image
          src="/home/circle3.svg"
          alt="Circle 3"
          width={150}
          height={150}
        />
      </div>
      <div className="absolute -right-10 -bottom-20 -z-10">
        <Image
          src="/home/circle4.svg"
          alt="Circle 4"
          width={220}
          height={220}
        />
      </div>
      <div className="absolute -right-10 -top-20 -z-10">
        <Image
          src="/home/circle6.svg"
          alt="Circle 6"
          width={220}
          height={220}
        />
      </div>
      <a
        href="https://wa.me/62895380894600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed right-5 bottom-5 z-50">
          <Image src="/home/wa.svg" alt="wa" width={80} height={80} />
        </div>
      </a>
      <Container className="lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="basis-1/2">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col flex-wrap gap-5">
                {benefits.slice(0, 2).map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`mx-auto flex flex-col justify-center h-128 w-full xl:w-64 xl:h-72 rounded-[50px] shadow-3xl p-10 text-white ${item.bgColor} hover:transform hover:scale-110 hover:transition-transform hover:duration-300`}
                      style={{ minHeight: "16rem" }} // Inline style for minimum height
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={50} // Adjust the width and height as needed
                        height={50}
                      />
                      <h2 className="mt-5 mb-3 text-lg font-bold">
                        {item.title}
                      </h2>
                      <p className="text-xs">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col flex-wrap gap-5 lg:mt-10">
                {benefits.slice(2, 4).map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`mx-auto flex flex-col justify-center h-128 w-full xl:w-64 xl:h-72 rounded-[50px] shadow-3xl p-10 text-white ${item.bgColor} hover:transform hover:scale-110 hover:transition-transform hover:duration-300`}
                      style={{ minHeight: "16rem" }} // Inline style for minimum height
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={50} // Adjust the width and height as needed
                        height={50}
                      />
                      <h2 className="mt-5 mb-3 text-lg font-bold">
                        {item.title}
                      </h2>
                      <p className="text-xs">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative basis-1/2 flex flex-col justify-center">
            <div className="hidden lg:block absolute left-1/3 top-20 rotate-45 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4FFFC0] to-[#00B2FF] shadow-3xl -z-10" />
            <Heading variant="h2" className="mb-3 lg:w-[25rem]">
              Macam Gangguan Penyakit Ginjal
            </Heading>
            <Paragraph>
              Diantaranya adalah Kista, Tumor, Batu Ginjal, dan Normal
            </Paragraph>
            <div className="hidden lg:block absolute left-1/3 bottom-20 rotate-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] shadow-3xl -z-10" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBenefit;
