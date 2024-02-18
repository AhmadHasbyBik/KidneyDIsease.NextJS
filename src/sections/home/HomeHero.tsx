import Image from "next/image";
// components
import Container from "@/components/Container";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="relative">
      <div className="absolute -left-10 -top-20 w-48 h-48 -z-10">
        <Image src="/home/circle2.svg" alt="Circle 2" fill />
      </div>
      <div className="absolute right-20 -top-20 w-48 h-48 -z-10">
        <Image src="/home/circle5.svg" alt="Circle 5" fill />
      </div>
      <div className="absolute -left-20 bottom-20 w-56 h-56 -z-10">
        <Image src="/home/circle6.svg" alt="Circle 6" fill />
      </div>
      <div className="absolute left-3/4 bottom-20 w-96 h-96 -z-10">
        <Image src="/home/spark3.svg" alt="Spark 3" fill />
      </div>
      <div className="hidden lg:block absolute right-2/3 top-20 rotate-45 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4FFFC0] to-[#00B2FF] shadow-3xl -z-10" />
      <div className="hidden lg:block absolute left-1/2 bottom-20 rotate-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] shadow-3xl -z-10" />
      <Container>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="-mt-12 w-16 h-16 rounded-2xl -z-10" />
            <Heading variant="h1" className="mb-3">
              Seberapa Penting Ginjal Itu?
            </Heading>
            <Paragraph>
              Lebih dari 850 juta orang di seluruh dunia terkena penyakit
              ginjal, menyebabkan lebih dari 1,2 juta kematian setiap tahunnya.
              Kegagalan ginjal kronis, yang dipicu oleh diabetes dan tekanan
              darah tinggi, menjadi ancaman serius. Biaya perawatan ginjal
              mencapai ratusan miliar dolar setiap tahunnya. Lindungi ginjal
              Anda untuk hidup lebih sehat dan lebih baik!
            </Paragraph>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/ginjal/ginjal.png"
              alt="Hero"
              width={100}
              height={100}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
