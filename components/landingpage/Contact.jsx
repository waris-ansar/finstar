import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="w-full relative min-h-auto sm:min-h-[33rem] lg:min-h-[40rem] xl:min-h-[49rem] flex items-center">
      <div className="absolute right-0 w-[50rem] md:w-[43rem] lg:w-[52.5rem] xl:w-[62.5rem] h-auto">
        <Image
          src="/assets/contact-bg.jpg"
          width={1000}
          height={800}
          alt="contact-bg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="max-container">
        <div className="w-[35rem] mx-auto md:mx-0 max-w-full sm:max-w-[90%] bg-white drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.10)] p-8 rounded-[20px] py-16">
          <h2 className="heading2 text-primaryBlack capitalize mb-3">
            Contact us
          </h2>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
