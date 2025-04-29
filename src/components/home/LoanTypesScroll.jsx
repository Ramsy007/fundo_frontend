import React from "react";

const loanTypes = [
  {
    icon: "./money_bulb.png",
    title: "SHORT TERM LOAN",
    subtitle: "MONEY TODAY, SORTED TOMORROW.",
    description:
      "Need a bridge till salary day? Baba's short-term loans are made for it — easy, reliable, and stress-free.",
  },
  {
    icon: "./money_knapsack.png",
    title: "INSTANT CASH",
    subtitle: 'QUICK CASH WHEN YOU NEED A "SURPRISE!"',
    description:
      "Whether it's mid-month or a last-minute need, get money straight away — fast, paperless, and easy.",
  },
];

const LoanTypesScroll = () => {
  return (
    <section className="font-[Poppins] mt-8 md:mt-10 w-full max-w-full">
      <div className="flex md:justify-center space-x-6 md:space-x-8 overflow-x-auto pb-4 scrollbar-hide px-2 md:px-8">
        {loanTypes.map((loan) => (
          <div
            key={loan.title}
            className="relative flex gap-6 md:gap-10 min-w-[85vw] sm:min-w-[400px] md:min-w-[420px] lg:min-w-[520px] xl:min-w-[600px] max-w-[95vw] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px] bg-[#07445C] rounded-2xl md:rounded-[40px] px-4 py-6 md:px-8 md:py-10 text-white shadow-lg flex-shrink-0"
          >
            <img
              src={loan.icon}
              alt="icon"
              className="absolute -left-6 top-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain z-10 bg-transparent"
            />
            <div className="pl-8 md:pl-10">
              <h2 className="text-base sm:text-lg md:text-xl tracking-widest font-semibold mb-2 md:mb-4">
                {loan.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg tracking-wide mb-2 md:mb-3 opacity-80">
                {loan.subtitle}
              </p>
              <p className="text-xs sm:text-sm md:text-base tracking-wide opacity-80">
                {loan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanTypesScroll;
