import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between lg:items-center max-container max-lg:flex-col"
    >
      <h3 className="font-bold font-palanquin text-4xl lg:max-w-md leading-[68px]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex max-sm:flex-col gap-4 p-2.5 lg:max-w-[40%] sm:border w-full sm:border-slate-gray rounded-full ">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullwidth/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
