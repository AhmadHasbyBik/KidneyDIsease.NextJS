/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "../../public/ginjal/logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Predict Kidney Disease",
    link: "/predict",
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-2 text-sm z-50">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center lg:gap-36">
        {/* logo */}
        <Image src={logo} className="w-48" alt=" logo" />
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-1 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-6 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-1 text-lg text-neutral-500 group-hover:text-black">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute hidden md:w-[500px] flex-col rounded-lg bg-white py-5 md:px-2 shadow-md transition-all group-hover:flex z-10">
                  <div className="flex flex-wrap">
                    {/* Kiri */}
                    <div className="w-full md:w-1/2">
                      {d.children.slice(0, 6).map((ch, i) => (
                        <Link
                          key={i}
                          href={ch.link ?? "#"}
                          className="flex cursor-pointer items-center py-1 text-neutral-500 transition-all hover:text-[#00B2FF]"
                        >
                          {/* image */}
                          {ch.iconImage && (
                            <Image
                              src={ch.iconImage}
                              alt="item-icon"
                              className="text-[#00B2FF]"
                            />
                          )}
                          {/* item */}
                          <span className="whitespace-nowrap pl-3">
                            {ch.label}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Kanan */}
                    <div className="w-full md:w-1/2">
                      {d.children.slice(6, 13).map((ch, i) => (
                        <Link
                          key={i}
                          href={ch.link ?? "#"}
                          className="flex cursor-pointer items-center py-1 text-neutral-500 transition-all hover:text-[#00B2FF]"
                        >
                          {/* image */}
                          {ch.iconImage && (
                            <Image
                              src={ch.iconImage}
                              alt="item-icon"
                              className="text-[#00B2FF]"
                            />
                          )}
                          {/* item */}
                          <span className="whitespace-nowrap pl-3">
                            {ch.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      <section className=" hidden md:flex   items-center gap-8 ">
        <button className="inline-flex  items-center justify-center gap-2 whitespace-nowrap px-5 text-sm tracking-wide text-white my-5 bg-blue-900 hover:bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] font-medium py-2 rounded-full shadow-xl z-10 transition duration-1000">
          <Link href="/login">
            <span>Login</span>
          </Link>
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-50 ">
      <div className="h-full w-full bg-white px-4 py-4 overflow-y-auto">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 text-sm tracking-wide text-white my-5 bg-blue-900 hover:bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] font-medium py-2 rounded-full shadow-xl z-10 transition duration-1000">
            <span>Hubungi Kami</span>
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-500 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-500 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
