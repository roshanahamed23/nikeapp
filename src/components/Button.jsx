import React from "react";

const Button = ({
  label,
  iconURL,
  BackgroundColor,
  TextColor,
  BorderColor,
  fullwidth
}) => {
  return (
    <button
      className={`flex gap-2 justify-center items-center border rounded-full px-7 py-4 font-montserrat text-lg leading-none
   ${
     BackgroundColor
       ? `${BackgroundColor} ${TextColor} ${BorderColor}`
       : "bg-coral-red text-white"
   } ${fullwidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
