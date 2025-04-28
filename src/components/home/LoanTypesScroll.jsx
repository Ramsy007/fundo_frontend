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
    <section className=" font-[Poppins] mt-10 mx-auto">
      <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
        {loanTypes.map((loan) => (
          <div
            key={loan.title}
            className="relative flex gap-10 mx-10 bg-[#07445C] rounded-[40px] px-8 py-10  text-white shadow-lg"
          >
            <img
              src={loan.icon}
              alt="icon"
              className="absolute -left-10 top-8 w-16 h-16 md:w-20 md:h-20 object-contain z-10 bg-transparent"
            />
            <div className="pl-10">
              <h2 className="text-sm md:text-sm tracking-widest font-semibold mb-4">
                {loan.title}
              </h2>
              <p className="text-base md:text-lg tracking-wide mb-3 opacity-80">
                {loan.subtitle}
              </p>
              <p className="text-base md:text-base tracking-wide opacity-80">
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
