import React from "react";
import Image from "next/image";
import data from "@/constants/data.json";

const Lenders = () => {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 w-[14rem] sm:w-[21rem] lg:w-[27rem] xl:w-[30rem] h-[12rem] sm:h-[16rem] lg:h-[20rem] xl:h-[22.5rem] z-0">
        <Image
          src="/assets/hero-bottom.svg"
          width={480}
          height={360}
          alt="bg-img"
          className="rotate-180"
        />
      </div>
      {/* <div className="max-container pt-16 sm:pt-24 lg:pt-28 xl:pt-32 pb:16 sm:pb-24 lg:pb-28 xl:pb-32"> */}
      <div className="max-container pt-16 sm:pt-24 lg:pt-28 xl:pt-32 pb-8">
        <h3 className="heading3 text-center text-primaryBlack mt-1 relative z-10">
          {data.lenderSection.title}
        </h3>
        <div className=" w-full md::w-[90%] mx-auto">
          <Image
            src="/assets/lender.gif"
            width={1200}
            height={170}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Lenders;
