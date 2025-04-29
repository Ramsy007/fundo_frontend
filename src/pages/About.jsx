import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="absolute top-4 md:top-6 left-4 md:left-8 z-50">
        <img
          src="./logo.png"
          alt="Fundo Baba Logo"
          className="w-[100px] md:w-[120px] h-auto"
        />
      </div>
      <div className="flex justify-end mr-4 md:mr-10 mt-4 md:mt-5">
        <Navbar />
      </div>
      <div className="bg-black">
        <div className="min-h-screen bg-white px-4 md:px-12 py-6">

          {/* Hero Section */}
          <div
            className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-lg overflow-visible my-4 md:my-8 z-10 relative min-h-[400px] md:min-h-[500px] w-full md:w-[90%] mx-auto"
            data-aos="fade-up"
          >
            <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-12 bg-[#003049] rounded-[2rem] md:rounded-[3rem] min-h-[400px] md:min-h-[500px] z-20">
              <div className="text-white max-w-5xl z-10 text-center md:text-left" data-aos="fade-right">
                <h1 className="text-4xl md:text-8xl font-bold mb-4 md:mb-6 tracking-wide">
                  THE BEST FRIEND
                  <br />
                  WHO FUNDS YOU
                </h1>
                <div className="space-y-2 md:space-y-4 text-gray-200">
                  <p className="text-base md:text-lg">Not a banker. Not a boring app.</p>
                  <p className="text-base md:text-lg">Just Baba — your paise-wala dost!</p>
                  <p className="text-base md:text-lg">
                    Need ₹10,000 at 2AM? Baba says,
                    <br />
                    "Bas app kholo, paise lo."
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="absolute top-[45%] right-[-60px] md:right-[-120px] -translate-y-1/2 h-[300px] md:h-[550px] w-[300px] md:w-[550px] flex items-center justify-end z-30 pointer-events-none" data-aos="zoom-in">
              <img
                src="/Aboutchar1.png"
                alt="Fundo Baba Hero"
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Logo Section */}
          <div className="text-center py-8 md:py-16 px-4" data-aos="fade-up">
            <div className="relative inline-block">
              <span
                className="block font-poppins font-light tracking-[0.18em] text-[42px] md:text-[168px] leading-none"
                style={{ color: "#B13A2F", letterSpacing: "0.18em" }}
              >
                FUNDO
              </span>
              <span
                className="block font-poppins font-light tracking-[0.18em] text-[42px] md:text-[168px] leading-none"
                style={{ color: "#1B5C47", letterSpacing: "0.18em" }}
              >
                BABA
              </span>

              {/* Faces */}
              <img
                src="./src/assets/Pages/Aboutus/Baba1.png"
                alt="Baba Face 1"
                className="absolute top-[-15px] md:top-[-30px] right-[-5px] md:right-[-10px] w-[60px] md:w-[130px]"
                style={{ zIndex: 2 }}
                data-aos="fade-down-left"
              />
              <img
                src="./src/assets/Pages/Aboutus/Baba2.png"
                alt="Baba Face 2"
                className="absolute left-[-5px] md:left-[10px] top-[60px] md:top-[230px] w-[60px] md:w-[130px]"
                style={{ zIndex: 2 }}
                data-aos="fade-up-right"
              />
              <img
                src="./src/assets/Pages/Aboutus/Baba3.png"
                alt="Baba Face 3"
                className="absolute left-[85px] md:left-[320px] top-[70px] md:top-[260px] w-[60px] md:w-[130px]"
                style={{ zIndex: 2 }}
                data-aos="zoom-in"
              />
            </div>

            <div className="mt-8 md:mt-16 max-w-2xl mx-auto text-center" data-aos="fade-up">
              <p className="font-poppins text-sm md:text-lg font-medium tracking-widest text-gray-800 uppercase mb-0">
                WE KNOW BORROWING FROM FRIENDS
              </p>
              <p className="font-poppins text-sm md:text-lg font-medium tracking-widest text-gray-800 uppercase mb-0">
                = EMOTIONAL DAMAGE.
              </p>
              <p className="font-poppins text-sm md:text-lg font-medium tracking-widest text-gray-800 uppercase">
                BABA SKIPS THE DRAMA AND DELIVERS:
              </p>
            </div>
          </div>

          {/* Pills */}
          <div className="flex flex-col items-center gap-2 mb-4 md:mb-8 bg-white border-none shadow-none mx-auto" data-aos="fade-up">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full md:w-[80rem]">
              {["NO QUEUES", "NO PAPERWORK", "FUNDOO", "NO-STRESS"].map((pill, i) => (
                <span
                  key={pill}
                  className="bg-[#1B5C47] rounded-full px-3 md:px-5 py-1 font-poppins font-medium text-white text-sm md:text-base"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {["QUICK", "REAL-TIME", "TRUSTED", "EASY", "SORTED..."].map((pill, i) => (
                <span
                  key={pill}
                  className="bg-[#B13A2F] rounded-full px-3 md:px-5 py-1 font-poppins font-medium text-white text-sm md:text-base"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Mission & Meet Baba */}
          <div className="flex flex-col items-center w-full mt-4 md:mt-8">
            <div
              className="w-full md:w-[90vw] min-h-[200px] md:min-h-[300px] rounded-t-2xl rounded-b-none bg-[#F6E7E4] p-4 md:p-8 text-center"
              data-aos="fade-up"
            >
              <div className="w-full md:w-4/5 mx-auto">
                <div className="font-poppins text-3xl md:text-5xl font-semibold tracking-widest text-gray-800 mb-4 md:mb-6">
                  OUR MISSION
                </div>
                <div className="font-poppins text-xl md:text-3xl text-gray-700 mb-2 md:mb-4">
                  To turn loan stress into chill success.
                </div>
                <div className="font-poppins text-xl md:text-3xl text-gray-700 mb-2 md:mb-4">
                  To fund dreams, not judge them.
                </div>
                <div className="font-poppins text-xl md:text-3xl text-gray-700">
                  To be India's coolest NBFC. Period.
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-[90vw] min-h-[200px] md:min-h-[300px] rounded-b-2xl rounded-t-3xl bg-[#1B5C47] p-4 md:p-8 text-center mt-[-14px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-full md:w-4/5 mx-auto">
                <div className="font-poppins text-3xl md:text-5xl font-semibold tracking-widest text-white mb-4 md:mb-6">
                  MEET BABA
                </div>
                <div className="font-poppins text-xl md:text-3xl text-white mb-2 md:mb-4">
                  Wise like your grandpa.
                </div>
                <div className="font-poppins text-xl md:text-3xl text-white mb-2 md:mb-4">
                  Fast like your UPI.
                </div>
                <div className="font-poppins text-xl md:text-3xl text-white">
                  Always there like your bestie.
                </div>
              </div>
            </div>

            <div className="-mt-12 md:-mt-18 z-10" data-aos="zoom-in">
              <img
                src="./src/assets/Pages/Aboutus/Baba4.png"
                alt="Baba Face"
                className="w-[120px] h-[100px] md:w-[180px] md:h-[180px] rounded-full object-contain"
              />
            </div>
          </div>

          {/* Logo Bottom */}
          <div className="flex justify-center mt-4 md:mt-8 mb-4 md:mb-8" data-aos="fade-up">
            <img
              src="./logo.png"
              alt="Fundo Baba Logo"
              className="w-[100px] md:w-[140px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
