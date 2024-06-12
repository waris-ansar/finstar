import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="mt-8 max-container w-full relative min-h-auto flex items-center">
      <div className="bg-[url('/assets/contact-bg.jpg')] bg-cover bg-no-repeat w-full md:w-[75%] h-[600px] rounded-[14px] absolute right-0 pt-4 mr-0 md:mr-[2.5rem] lg:mr-16"></div>

      <div className="w-[35rem] mx-auto md:mx-0 max-w-full bg-white drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.10)] px-4 sm:px-8 rounded-[20px] py-8 sm:py-16">
        <h2 className="heading2 text-primaryBlack capitalize mb-3">
          Contact us
        </h2>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
