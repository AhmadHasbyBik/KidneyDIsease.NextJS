// components
import Container from "@/components/Container";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";

export default function HomeExplore() {
  return (
    <div className="relative">
      <div className="absolute left-0 -bottom-80 -z-20">
        <Image src="/home/spark1.svg" alt="spark" width={700} height={700} />
      </div>
      <div className="absolute -top-40 -z-10">
        <Image src="/home/circle9.svg" alt="spark" width={1440} height={535} />
      </div>
      <Container>
        <div className="relative flex justify-center items-center w-full h-[400px] rounded-[50px] bg-gradient-to-br from-[#6765EF] to-[#8C8BEA] shadow-3xl mt-10">
          <div className="absolute left-10 lg:left-20 -top-8 rotate-12 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#4FFFC0] to-[#00B2FF] shadow-3xl" />
          <div className="absolute left-[10%] bottom-10 -rotate-12 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#A728E2] to-[#F4AADC] shadow-3xl" />
          <div className="absolute right-10 lg:right-20 -top-2 -rotate-12 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] shadow-3xl" />
          <div className="absolute right-10 lg:right-60 -bottom-5 rotate-12 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#FF947D] to-[#FFF59F] shadow-3xl" />
          <div className="flex flex-col justify-center items-center gap-10 p-10">
            <div className="flex flex-col justify-center items-center">
              <h2 className="mb-5 text-xl lg:text-4xl text-white font-bold text-center sm:w-[60%] z-10">
                Butuh solusi cek kesehatan ginjalmu?
              </h2>
              <Paragraph className="text-white text-sm lg:text-lg text-center sm:w-[60%] z-10">
              Mari cek kesehatan ginjal kamu dengan upload gambar CT scan ginjalmu, maka AI kami akan mendeteksi ginjalmu!
              </Paragraph>
            </div>
            <button className="my-5 bg-blue-900 hover:bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] text-white font-medium py-2 px-4 rounded-full shadow-xl z-10 transition duration-1000">
              Cek disini!
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
