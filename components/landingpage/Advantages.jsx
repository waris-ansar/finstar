import React from "react";
import Image from "next/image";
import data from "@/constants/data.json";

const Advantages = () => {
  const advantagesData = data.advantages;
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 w-[14rem] lg:w-[17.5rem] xl:w-[22.5rem] h-28 lg:h-40 xl:h-60 z-0">
        <Image
          src="/assets/hero-top.svg"
          width={360}
          height={240}
          alt="bg-img"
        />
      </div>
      <div className="max-container py-[5.25rem]">
        <div className="bg-lightGreen rounded-xl py-10 sm:py-16 md:py-20 tablg:py-24 px-4 sm:px-8 md:px-12 tablg:px-24 lg:px-36 z-10 relative">
          <h6 className="inter-14px text-primaryBlack uppercase">Advantages</h6>
          <h2 className="heading2 text-primaryBlack pt-6">
            {advantagesData.title}
          </h2>

          {/* header of table  */}
          <div className="grid grid-cols-[1fr,3rem,3rem] sm:grid-cols-[1fr,6rem,6rem] xl:grid-cols-[1fr,8rem,8rem] mt-4 md:-mt-8 border-down relative">
            <div className="flex-grow"></div>
            <div className=" bg-secondaryGreen py-7">
              <p className="uppercase text-center inter-14px text-white break-words px-1">
                Finstars
              </p>
            </div>
            <div className="py-7">
              <p className="uppercase text-center inter-14px text-primaryBlack break-words px-1">
                Bank
              </p>
            </div>
          </div>

          {/* data of the talbe   */}
          <div>
            {advantagesData.list.map((advantage, index) => {
              return (
                <div
                  key={index}
                  className={`grid grid-cols-[1fr,3rem,3rem] sm:grid-cols-[1fr,6rem,6rem] xl:grid-cols-[1fr,8rem,8rem] ${
                    index % 2 !== 0 ? "bg-menuGreen" : "bg-transparent"
                  }`}
                >
                  <div className="py-5">
                    <p className="inter-16px text-primaryBlack px-5">
                      {advantage}
                    </p>
                  </div>
                  <div className="bg-secondaryGreen flex items-center justify-center">
                    <Image
                      src="/assets/tick.svg"
                      width={26}
                      height={26}
                      alt="tick"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src="/assets/cross.svg"
                      width={26}
                      height={26}
                      alt="tick"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
