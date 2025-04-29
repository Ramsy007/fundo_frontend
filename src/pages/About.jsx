import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Baba1 from "./../assets/Pages/Aboutus/Baba1.png";
import Baba2 from "./../assets/Pages/Aboutus/Baba2.png";
import Baba3 from "./../assets/Pages/Aboutus/Baba3.png";
import Baba4 from "./../assets/Pages/Aboutus/Baba4.png";

const About = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  return (
    <>
      {/* Header Section: Logo (left) + Navbar (right) */}
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-8 pt-2 sm:pt-4 md:pt-6 mb-2 sm:mb-4 md:mb-8">
        <img
          src="./logo.png"
          alt="Fundo Baba Logo"
          className="w-[48px] sm:w-[64px] md:w-[100px] h-auto"
        />
        <Navbar />
      </div>
      <div className="bg-black w-full min-h-screen flex flex-col">
        <div className="bg-white flex-1 min-h-screen px-2 sm:px-4 md:px-12 py-4 sm:py-6">
          {/* Hero Section */}
          <div
            className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-lg overflow-visible my-2 sm:my-4 md:my-8 z-10 min-h-[250px] sm:min-h-[350px] md:min-h-[500px] w-full md:w-[90%] mx-auto"
            // data-aos="fade-up"
          >
            <div className="relative flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-16 py-4 sm:py-8 md:py-12 bg-[#003049] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] min-h-[250px] sm:min-h-[350px] md:min-h-[500px] z-20">
              {/* Mobile Hero Image - Only visible on small screens */}
              <div
                className="md:hidden w-full flex justify-center mb-0.5" /* data-aos="zoom-in" */
              >
                <img
                  src="/Aboutchar1.png"
                  alt="Fundo Baba Hero"
                  className="h-[180px] w-auto object-contain drop-shadow-2xl"
                />
              </div>

              <div
                className="text-white max-w-5xl z-10 text-center md:text-left" /* data-aos="fade-right" */
              >
                <h1 className="text-xl sm:text-2xl md:text-8xl font-bold mb-2 sm:mb-4 md:mb-6 tracking-wide">
                  THE BEST FRIEND
                  <br />
                  WHO FUNDS YOU
                </h1>
                <div className="space-y-1 sm:space-y-2 md:space-y-4 text-gray-200">
                  <p className="text-xs sm:text-sm md:text-lg">
                    Not a banker. Not a boring app.
                  </p>
                  <p className="text-xs sm:text-sm md:text-lg">
                    Just Baba — your paise-wala dost!
                  </p>
                  <p className="text-xs sm:text-sm md:text-lg">
                    Need ₹10,000 at 2AM? Baba says,
                    <br />
                    "Bas app kholo, paise lo."
                  </p>
                </div>
              </div>

              {/* Desktop Hero Image - Only visible on medium and larger screens */}
              <div
                className="hidden md:flex absolute top-[45%] right-[-120px] -translate-y-1/2 h-[550px] w-auto items-center justify-end z-30 pointer-events-none"
                // data-aos="zoom-in"
              >
                <img
                  src="/Aboutchar1.png"
                  alt="Fundo Baba Hero"
                  className="h-full w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div
            className="text-center py-4 sm:py-8 md:py-16 px-2 sm:px-4" /* data-aos="fade-up" */
          >
            <div className="relative inline-block">
              <span
                className="block font-poppins font-light tracking-[0.18em] text-[24px] sm:text-[32px] md:text-[168px] leading-none"
                style={{ color: "#B13A2F" }}
              >
                FUNDO
              </span>
              <span
                className="block font-poppins font-light tracking-[0.18em] text-[24px] sm:text-[32px] md:text-[168px] leading-none"
                style={{ color: "#1B5C47" }}
              >
                BABA
              </span>

              {/* Faces */}
              <img
                src={Baba1}
                alt="Baba Face 1"
                className="absolute top-[-8px] sm:top-[-12px] md:top-[-30px] right-[-2px] sm:right-[-4px] md:right-[-10px] w-[30px] sm:w-[45px] md:w-[130px]"
                // data-aos="fade-down-left"
              />
              <img
                src={Baba2}
                alt="Baba Face 2"
                className="absolute left-[-2px] sm:left-[-4px] md:left-[10px] top-[30px] sm:top-[45px] md:top-[230px] w-[30px] sm:w-[45px] md:w-[130px]"
                // data-aos="fade-up-right"
              />
              <img
                src={Baba3}
                alt="Baba Face 3"
                className="absolute left-[45px] sm:left-[65px] md:left-[320px] top-[35px] sm:top-[50px] md:top-[260px] w-[30px] sm:w-[45px] md:w-[130px]"
                // data-aos="zoom-in"
              />
            </div>

            <div
              className="mt-4 sm:mt-8 md:mt-16 max-w-2xl mx-auto text-center" /* data-aos="fade-up" */
            >
              <p className="font-poppins text-[10px] sm:text-xs md:text-lg font-medium tracking-widest text-gray-800 uppercase mb-0">
                WE KNOW BORROWING FROM FRIENDS
              </p>
              <p className="font-poppins text-[10px] sm:text-xs md:text-lg font-medium tracking-widest text-gray-800 uppercase mb-0">
                = EMOTIONAL DAMAGE.
              </p>
              <p className="font-poppins text-[10px] sm:text-xs md:text-lg font-medium tracking-widest text-gray-800 uppercase">
                BABA SKIPS THE DRAMA AND DELIVERS:
              </p>
            </div>
          </div>

          {/* Pills */}
          <div
            className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-4 md:mb-8 bg-white mx-auto" /* data-aos="fade-up" */
          >
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 w-full md:w-[80rem]">
              {["NO QUEUES", "NO PAPERWORK", "FUNDOO", "NO-STRESS"].map(
                (pill, i) => (
                  <span
                    key={pill}
                    className="bg-[#1B5C47] rounded-full px-2 sm:px-3 md:px-5 py-0.5 sm:py-1 font-poppins font-medium text-white text-[10px] sm:text-xs md:text-base"
                    // data-aos="zoom-in"
                    // data-aos-delay={i * 100}
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3">
              {["QUICK", "REAL-TIME", "TRUSTED", "EASY", "SORTED..."].map(
                (pill, i) => (
                  <span
                    key={pill}
                    className="bg-[#B13A2F] rounded-full px-2 sm:px-3 md:px-5 py-0.5 sm:py-1 font-poppins font-medium text-white text-[10px] sm:text-xs md:text-base"
                    // data-aos="zoom-in"
                    // data-aos-delay={i * 100}
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Mission & Meet Baba */}
          <div className="flex flex-col items-center w-full mt-2 sm:mt-4 md:mt-8">
            <div
              className="w-full md:w-[90vw] min-h-[120px] sm:min-h-[180px] md:min-h-[300px] rounded-t-xl sm:rounded-t-2xl rounded-b-none bg-[#F6E7E4] p-2 sm:p-4 md:p-8 text-center"
              // data-aos="fade-up"
            >
              <div className="w-full md:w-4/5 mx-auto">
                <div className="font-poppins text-lg sm:text-xl md:text-5xl font-semibold tracking-widest text-gray-800 mb-2 sm:mb-4 md:mb-6">
                  OUR MISSION
                </div>
                <div className="font-poppins text-sm sm:text-base md:text-3xl text-gray-700 mb-1 sm:mb-2 md:mb-4">
                  To turn loan stress into chill success.
                </div>
                <div className="font-poppins text-sm sm:text-base md:text-3xl text-gray-700 mb-1 sm:mb-2 md:mb-4">
                  To fund dreams, not judge them.
                </div>
                <div className="font-poppins text-sm sm:text-base md:text-3xl text-gray-700">
                  To be India's coolest NBFC. Period.
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-[90vw] min-h-[120px] sm:min-h-[180px] md:min-h-[300px] rounded-b-xl sm:rounded-b-2xl rounded-t-2xl sm:rounded-t-3xl bg-[#1B5C47] p-2 sm:p-4 md:p-8 text-center mt-[-8px] sm:mt-[-14px]"
              // data-aos="fade-up"
              // data-aos-delay="100"
            >
              <div className="w-full md:w-4/5 mx-auto">
                <div className="font-poppins text-lg sm:text-xl md:text-5xl font-semibold tracking-widest text-white mb-2 sm:mb-4 md:mb-6">
                  MEET BABA
                </div>
                <div className="font-poppins text-sm sm:text-base md:text-3xl text-white mb-1 sm:mb-2 md:mb-4">
                  Wise like your grandpa.
                </div>
                <div className="font-poppins text-sm sm:text-base md:text-3xl text-white mb-1 sm:mb-2 md:mb-4">
                  Fast like your UPI.
                </div>
                <div className="font-poppins text-sm sm:text-base md:text-3xl text-white">
                  Always there like your bestie.
                </div>
              </div>
            </div>

            <div
              className="-mt-6 sm:-mt-10 md:-mt-18 z-10" /* data-aos="zoom-in" */
            >
              <img
                src={Baba4}
                alt="Baba Face"
                className="w-[60px] h-[50px] sm:w-[90px] sm:h-[80px] md:w-[180px] md:h-[180px] rounded-full object-contain"
              />
            </div>
          </div>

          {/* Logo Bottom */}
          <div
            className="flex justify-center mt-2 sm:mt-4 md:mt-8 mb-2 sm:mb-4 md:mb-8" /* data-aos="fade-up" */
          >
            <img
              src="./logo.png"
              alt="Fundo Baba Logo"
              className="w-[60px] sm:w-[80px] md:w-[140px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
