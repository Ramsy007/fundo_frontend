import React from "react";
import PhoneIcon from "./../../assets/howitworks/icon-1.png";
import Navbar from "./../../components/Navbar";
import Logo from "./../../assets/Logo.png";
export default function FinancialAppPromo() {
  return (
    <>
      <div className="flex justify-between items-center gap-4 mr-10 pt-5 pl-5">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <Navbar />
      </div>
      <div className="bg-white p-1  w-full pt-20">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-lg xs:text-xl sm:text-5xl font-extrabold tracking-wider text-teal-800">
            YOUR SHORTCUT
            <br />
            TO PAISA PEACE.
          </h1>
        </div>
        <div className="flex justify-end">
         
        </div>
      </div>
    </>
  );
}
