import React from "react";
import data from "@/constants/data.json";
import Image from "next/image";

const Banner = () => {
  const bannerData = data.banner;

  return (
    <div className="max-container my-[5.6rem] ">
      <div className="w-full lg:w-[90%] mx-auto bg-darkGreen min-h-fit md:min-h-[280px] lg:min-h-[350px] rounded-[20px] relative">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16">
          <div className="w-full md:w-[45%] lg:w-[35%] pl-4 md:pl-9 py-5 md:py-9">
            <h5 className="inter-14px text-white uppercase">
              {bannerData.subText}
            </h5>
            <h3 className="heading3 text-white mt-3">
              {bannerData.description}
            </h3>
            <button className="mt-10 md:mt-[70px] lg:mt-[100px] font-plusJakarta text-sm md:text-base font-bold text-black w-[215px] h-[58px] flex justify-center items-center rounded-[11px] border-none bg-white hover:grayscale-50 transition-colors">
              {bannerData.cta}
            </button>
          </div>
          <div className="w-full md:w-[55%] lg:w-[65%] relative md:absolute right-0 bottom-0">
            <Image
              src="/assets/banner-img.png"
              width={800}
              height={400}
              alt="banner-img"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
