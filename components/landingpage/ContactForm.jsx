"use client";
import React, { useState } from "react";
import data from "@/constants/data.json";

const ContactForm = () => {
  const [formData, setFormData] = useState(
    data.contactForm.reduce((acc, field) => {
      acc[field] = "";
      return acc;
    }, {})
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "this is the form data");
    setFormData(
      data.contactForm.reduce((acc, field) => {
        acc[field] = "";
        return acc;
      }, {})
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center flex-col sm:flex-row gap-0 sm:gap-6">
        {data.contactForm.slice(0, 2).map((field, index) => (
          <div key={index} className="w-full mt-4">
            <label
              htmlFor={field}
              className="inter-14px block text-secondaryGreen w-1/2"
            >
              {field}
            </label>
            <input
              className="para-small w-full mt-2 text-black bg-[#f3f3f3] rounded-lg px-2 py-3 border-none outline-0 focus:outline-secondaryGreen focus:outline-1"
              type={field.toLowerCase() === "email" ? "email" : "text"}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      {data.contactForm.slice(2).map((field, index) => (
        <div key={index + data.contactForm.length} className="w-full mt-4">
          <label
            htmlFor={field}
            className="inter-14px block text-secondaryGreen w-full"
          >
            {field}
          </label>
          <input
            className={`para-small w-full mt-2 text-black bg-[#f3f3f3] rounded-lg px-2 py-3 border-none outline-0 focus:outline-secondaryGreen focus:outline-1 ${
              field.toLowerCase() === "message" && "h-36"
            }`}
            type={field.toLowerCase() === "email" ? "email" : "text"}
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button className="btn-primary bg-secondaryGreen mt-4" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
