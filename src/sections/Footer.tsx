import Image from "next/image";
import Link from "next/link";
// componets
import Container from "@/components/Container";

const sosmed = [
  {
    name: "Instagram",
    icon: "/instagram.svg",
    url: "/",
  },
  {
    name: "Facebook",
    icon: "/facebook.svg",
    url: "/",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    url: "/",
  },
];

const pages = {
  side1: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Index",
      url: "/",
    },
    {
      name: "FAQs",
      url: "/",
    },
    {
      name: "Contact",
      url: "/",
    },
  ],
  side2: [
    {
      name: "Terms of Services",
      url: "/",
    },
    {
      name: "Privacy Policy",
      url: "/",
    },
    {
      name: "Cookie Policy",
      url: "/",
    },
  ],
};

export default function Footer() {
  return (
    <footer>
      <Container className="py-10 lg:py-24">
        <div className="mb-5 border-t border-blue-900" />
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="col-span-2">
            <p className="text-sm lg:text-md w-[70%]">
            Halo Njal! adalah website untuk mengecek kesehatan ginjal melalui gambar CT scan
            </p>
            <div className="flex gap-5 mt-5">
              {sosmed.map((item, i) => {
                return (
                  <Link key={i} href={item.url} target="_blank">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="text-sm lg:text-md">
              <ul>
                {pages.side1.map((item, i) => {
                  return (
                    <li key={i} className="mt-5">
                      <Link href="/">{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="text-sm lg:text-md">
              <ul>
                {pages.side2.map((item, i) => {
                  return (
                    <li key={i} className="mt-5">
                      <Link href="/">{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
                        <p className="text-sm lg:text-md uppercase font-bold">Sign up for our latest updates</p>
                        <div className="relative">
                            <input
                                className="text-sm lg:text-md shadow appearance-none border rounded-[20px] w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter your email"
                            />
                            <button className="absolute top-0 right-0 w-32 h-[50px] bg-gradient-to-br from-[#6765EF] to-[#8C8BEA] text-white font-medium py-2 px-4 rounded-[20px] shadow-xl">
                                SIGN UP
                            </button>
                        </div>
                    </div> */}
        </div>
      </Container>
    </footer>
  );
}
