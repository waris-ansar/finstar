import React from "react";
import data from "@/constants/data.json";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const description = data.footer.description;
  const quickLinks = data.footer.quickLinks;
  const booking = data.footer.booking;
  const ctaLink = data.info.ctaLink;
  const productsData = data.productSection.products;

  return (
    <div className="max-container mt-24">
      <div className="grid grid-cols-1 tablg:grid-cols-4 xl:grid-cols-[31%,22.5%,22.5%,24%] gap-4 pb-6 sm:pb-10 md:pb-14">
        {/* first column  */}
        <div className="flex flex-col justify-between">
          <h3 className="heading3 text-primaryBlack">{description}</h3>
          <div className="mt-6 tablg:mt-0 w-48 h-10">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                width={200}
                height={50}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </div>
        </div>

        <div className="mt-[10px]">
          <h6 className="subtext uppercase text-secondaryGreen">
            Our services
          </h6>
          <div className="mt-4 flex flex-col gap-3">
            {productsData.map((product, index) => (
              <Link
                className="para-regular text-primaryBlack hover:text-secondaryGreen"
                key={index}
                href={product.path}
              >
                {product.title}
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
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
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
            <Link href={ctaLink} target="_blank">
              {booking.cta}
            </Link>
          </button>
        </div>
      </div>
      <div className="border-t-[1px] border-[#EBE8D8] py-6">
        <p className="inter-12px text-primarygray text-left font-light">
          {data.footer.licenses}
        </p>
        <p className="inter-12px text-primarygray text-left font-light mt-4">
          {data.footer.terms}
        </p>
        <p className="inter-12px text-primarygray text-left font-light mt-4">
          <Link href="/privacy" className="hover:text-secondaryGreen">
            Privacy
          </Link>
          <span> | </span>
          <Link href="/tnc" className="hover:text-secondaryGreen">
            Terms and Conditions
          </Link>
          <span> | </span>
          {data.footer.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
