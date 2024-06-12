"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/constants/data.json";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const links = data.nav.links;
  const ctaText = data.nav.cta.button;
  const ctaLink = data.info.ctaLink;
  const [isMobileActive, setIsMobileActive] = useState(false);

  return (
    <div className="max-container">
      <div className="nav-bar flex justify-between items-center py-4">
        <div className="w-48 h-10">
          <Link href="/">
            <Image
              src={"/assets/logo.svg"}
              width={200}
              height={50}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
        <div className="items-center hidden tablg:flex tablg:gap-8 lg:gap-10 xl:gap-16">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="para-regular text-black hover:text-secondaryGreen"
            >
              {item}
            </Link>
          ))}
        </div>
        <button className="btn-primary bg-secondaryGreen hidden tablg:block">
          <Link href={ctaLink} target="_blank">
            {ctaText}
          </Link>
        </button>

        <div
          className="block tablg:hidden cursor-pointer"
          onClick={() => setIsMobileActive((prev) => !prev)}
        >
          <Image src={"/assets/list.svg"} width={28} height={28} alt="menu" />
        </div>
      </div>
      {isMobileActive && <MobileMenu />}
    </div>
  );
};

export default Header;
