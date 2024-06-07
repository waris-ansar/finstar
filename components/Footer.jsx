import React from "react";
import data from "@/constants/data.json";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const description = data.footer.description;
  const services = data.footer.services;
  const quickLinks = data.footer.quickLinks;
  const booking = data.footer.booking;

  return (
    <div className="max-container mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 tablg:grid-cols-4 xl:grid-cols-[31%,22.5%,22.5%,24%] gap-4">
        {/* first column  */}
        <div className="flex flex-col justify-between">
          <h3 className="heading3 text-primaryBlack">{description}</h3>
          <div className="mt-6 sm:mt-0 w-48 h-10">
            <Image
              src="/assets/logo.svg"
              width={200}
              height={50}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className="mt-[10px]">
          <h6 className="subtext uppercase text-secondaryGreen">
            Our services
          </h6>
          <div className="mt-4 flex flex-col gap-3">
            {services.map((service, index) => (
              <Link
                className="para-regular text-primaryBlack hover:text-secondaryGreen"
                key={index}
                href={""}
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-[10px]">
          <h6 className="subtext uppercase text-secondaryGreen">Quick Links</h6>
          <div className="mt-4 flex flex-col gap-3">
            {quickLinks.map((link, index) => (
              <Link
                className="para-regular text-primaryBlack hover:text-secondaryGreen"
                key={index}
                href={""}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-[10px]">
          <h4 className="subtext text-secondaryGreen mb-5">
            {booking.description}
          </h4>
          <button className="bg-secondaryGreen px-14 py-[18px] text-white text-lg font-semibold rounded-xl hover:grayscale-50">
            {booking.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
