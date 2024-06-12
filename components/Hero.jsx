import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/constants/data.json";

const Hero = () => {
  const heroSectionData = data.heroSection;
  const ctaLink = data.info.ctaLink;

  return (
    <div className="w-full relative">
      {/* top Image  */}
      <div className="absolute top-0 left-0 w-[14rem] lg:w-[17.5rem] xl:w-[22.5rem] h-28 lg:h-40 xl:h-60 z-0">
        <Image
          src="/assets/hero-top.svg"
          width={360}
          height={240}
          alt="bg-img"
        />
      </div>
      <div className="max-container flex flex-col tablg:flex-row gap-16 pt-24 lg:pt-28 xl:pt-36 pb-16 xl:pb-20">
        <div className="content z-10 w-full tablg:w-[42%]">
          <h3 className="subtext text-secondaryGreen">
            {heroSectionData.subText}
          </h3>
          <h1 className="heading1 mt-6 text-primaryBlack">
            <span className="text-secondaryGreen">
              {heroSectionData.title.split(" ")[0]}
            </span>
            {` ${heroSectionData.title.substring(
              heroSectionData.title.indexOf(" ") + 1
            )}`}
          </h1>
          <h3 className="para-mediumn text-secondaryGreen mt-6">
            {heroSectionData.subtitle}
          </h3>
          <Link href={ctaLink} target="_blank">
            <div className="flex items-center gap-6 mt-8 cursor-pointer">
              <div className="flex justify-center items-center w-10 md:w-14 lg:w-[69px] h-10 md:h-14 lg:h-[69px] bg-secondaryGreen rounded-full">
                <Image
                  src="/assets/ArrowUpRight.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </div>
              <p className="para-mediumn text-primaryBlack">
                {heroSectionData.cta}
              </p>
            </div>
          </Link>

          <div className="flex items-center justify-between gap-8 mt-8">
            {heroSectionData.stats.map((stat, index) => {
              return (
                <div key={index}>
                  <h3 className="heading4 text-secondaryGreen">
                    {stat.heading}
                  </h3>
                  <p className="para-regular mt-2">{stat.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="z-10 w-full tablg:w-[58%]">
          <div className="w-full">
            <Image
              src="/assets/hero-image.png"
              width={700}
              height={700}
              alt="hero-img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* bottom image  */}
      <div className="absolute bottom-0 right-0 w-[14rem] sm:w-[21rem] lg:w-[27rem] xl:w-[30rem] h-[12rem] sm:h-[16rem] lg:h-[20rem] xl:h-[22.5rem] z-0">
        <Image
          src="/assets/hero-bottom.svg"
          width={480}
          height={360}
          alt="bg-img"
        />
      </div>
    </div>
  );
};

export default Hero;
