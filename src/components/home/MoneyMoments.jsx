import React from "react";

const MoneyMoments = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-8 sm:py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-[Poppins]">
      {/* Left: Main Heading */}
      <div className="flex-1 text-center md:text-left mb-6 sm:mb-8 md:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-black leading-tight">
          MONEY MOMENTS?
          <br />
          BABA'S GOT YOU.
        </h1>
      </div>
      {/* Right: Subtext and Button */}
      <div className="flex-1 flex flex-col items-center md:items-end">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 md:mb-12 text-center md:text-right max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
          From chai-money to chaos-money — Baba's got you covered
        </p>
        <a
          href="#"
          className="text-sm sm:text-base md:text-lg tracking-widest font-medium text-black border-b border-black hover:text-blue-600 transition-colors duration-200"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default MoneyMoments;
