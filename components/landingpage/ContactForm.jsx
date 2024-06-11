"use client";
import React, { useState } from "react";
import data from "@/constants/data.json";

const ContactForm = () => {
  const scriptURL = process.env.NEXT_PUBLIC_CONTACT_FORM_GOOGLE_SHEET_LINK;

  const [formData, setFormData] = useState(
    data.contactForm.reduce((acc, field) => {
      acc[field] = "";
      return acc;
    }, {})
  );
  const [isLoading, setLoading] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formDataToString = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataStr = formDataToString(formData);

    fetch(scriptURL, { method: 'POST', body: formDataStr})
      .then((response) => {
        setLoading(false)
        alert("Thank you! Your form is submitted successfully." );
        setFormData(
          data.contactForm.reduce((acc, field) => {
            acc[field] = "";
            return acc;
          }, {})
        );
      })
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
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
              {field.toUpperCase()}
            </label>
            <input
              className="para-small w-full mt-2 text-black bg-[#f3f3f3] rounded-lg px-2 py-3 border-none outline-0 focus:outline-secondaryGreen focus:outline-1"
              type={field === "email" ? "email" : "text"}
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
            {field.toUpperCase()}
          </label>
          <input
            className={`para-small w-full mt-2 text-black bg-[#f3f3f3] rounded-lg px-2 py-3 border-none outline-0 focus:outline-secondaryGreen focus:outline-1 ${
              field === "message" && "h-36"
            }`}
            type={field === "email" ? "email" : "text"}
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button className="btn-primary bg-secondaryGreen mt-4" type="submit">
        {
          isLoading ? <div className="loader"></div> : 'Send Message'
        }
      </button>
    </form>
  );
};

export default ContactForm;
