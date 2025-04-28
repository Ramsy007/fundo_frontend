import React from "react";

const MoneyMoments = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-20 px-4 md:px-12 font-[Poppins]">
      {/* Left: Main Heading */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide text-black leading-tight">
          MONEY MOMENTS?
          <br />
          BABA'S GOT YOU.
        </h1>
      </div>
      {/* Right: Subtext and Button */}
      <div className="flex-1 flex flex-col items-center md:items-end">
        <p className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-12 text-center md:text-right max-w-xs md:max-w-sm">
          From chai-money to chaos-money — Baba's got you covered
        </p>
        <a
          href="#"
          className="text-base md:text-lg tracking-widest font-medium text-black border-b border-black hover:text-blue-600 transition-colors duration-200"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default MoneyMoments;
