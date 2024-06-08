import React from "react";
import Image from "next/image";
import data from "@/constants/data.json";

const Products = () => {
  const productsData = data.productSection;

  return (
    <div className="w-full relative">
      <div className="absolute top-0 right-0 w-28 md:w-56 z-0">
        <Image
          src="/assets/services-bg.svg"
          width={360}
          height={240}
          alt="bg-img"
        />
      </div>

      <div className="max-container pb-10 md:pb-20">
        <h3 className="subtext text-secondaryGreen  text-center relative z-10">
          {productsData.Section}
        </h3>
        <h1 className="heading2 text-primaryBlack mt-6  text-center relative z-10">
          {productsData.Title}
        </h1>
        <p className="para-mediumn text-primaryBlack mt-6  text-center relative z-10">
          {productsData.Subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mt-16">
          {productsData.products.map((product, index) => {
            return (
              <div
                key={index}
                className="bg-[#FAFAFA] rounded-[20px] px-6 pt-6 pb-10 z-10"
              >
                <Image
                  src={product.icon}
                  width={68}
                  height={68}
                  alt={product.title}
                />
                <h4 className="heading5 text-primaryBlack mt-6">
                  {product.title}
                </h4>
                <p className="para-samll text-primarygray mt-4">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
