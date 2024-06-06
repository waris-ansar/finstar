import React from "react";
import data from "@/constants/data.json";
import Link from "next/link";

const MobileMenu = () => {
  const links = data.nav.links;
  const ctaText = data.nav.cta.button;
  return (
    <div className="flex flex-col gap-4">
      {links.map((item, index) => {
        return (
          <Link key={index} className="para-regular text-center" href="">
            {item}
          </Link>
        );
      })}
      <button className="btn-primary bg-secondaryGreen">{ctaText}</button>
    </div>
  );
};

export default MobileMenu;
