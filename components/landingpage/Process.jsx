import React from "react";
import Image from "next/image";
import data from "@/constants/data.json";

const Process = () => {
  const serviceProcessData = data.serviceProcess;

  return (
    <div className="w-full relative">
      {/* bottom image  */}
      <div className="absolute bottom-0 left-0 w-[14rem] sm:w-[21rem] lg:w-[27rem] xl:w-[30rem] h-[12rem] sm:h-[16rem] lg:h-[20rem] xl:h-[22.5rem] z-0">
        <Image
          src="/assets/support-bg.svg"
          width={480}
          height={360}
          alt="bg-img"
        />
      </div>

      <div className="max-container pt-12 md:pt-20 pb-36 sm:pb-56 md:pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="heading2 text-black">{serviceProcessData.title}</h2>
            <p className="para-mediumn text-[#3f3f3f] mt-4">
              {serviceProcessData.description}
            </p>
          </div>

          <div className="w-full md:w-1/2">
            {serviceProcessData.steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-start gap-8 relative z-10 ${
                    serviceProcessData.steps.length > index + 1 && "border-gap"
                  }`}
                >
                  <Image
                    src={step.icon}
                    width={70}
                    height={70}
                    alt={step.heading}
                    className="z-10"
                  />
                  <div>
                    {/* todo heading styles  */}
                    <h3 className="heading5 text-black mt-5">{step.heading}</h3>
                    <p className="para-regular text-primarygray mt-3 pb-8">
                      {step.body}
                    </p>
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

export default Process;
