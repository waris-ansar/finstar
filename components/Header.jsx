import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/constants/data.json";

const Header = () => {
  const links = data.nav.links;
  const ctaText = data.nav.cta.button;

  return (
    <div className="max-container">
      <div className="nav-bar flex justify-between items-center py-4">
        <div className="w-48 h-10">
          <Image
            src={"/assets/logo.svg"}
            width={200}
            height={50}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="items-center tablg:flex tablg:gap-8 lg:gap-10 xl:gap-16">
          {links.map((item, index) => (
            <Link key={index} href="" className="para-regular">
              {item}
            </Link>
          ))}
        </div>
        <button className="btn-primary bg-secondaryGreen">{ctaText}</button>
      </div>
    </div>
  );
};

export default Header;
