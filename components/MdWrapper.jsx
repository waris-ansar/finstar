import React from "react";
import PageHero from "../components/PageHero";

const MdWrapper = ({title, children}) => (
  <>
    <div className="mb-12">
      <PageHero title={title} />
    </div>
    <div className="w-full relative max-container">
      {children}
    </div>
  </>
);

export default MdWrapper;
