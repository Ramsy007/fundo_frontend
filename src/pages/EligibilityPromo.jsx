import React from 'react';
import BabaIcon from '../assets/howitworks/icon-4.png';

export default function EligibilityPromo() {
  return (
    <div className="bg-white p-8 mt-40 w-full">
      <div className="flex justify-end">
        <div className="bg-rose-100/70 rounded-3xl p-16 w-[90%] relative overflow-visible">
          
          {/* Baba Icon */}
          <div className="absolute -bottom-40 -left-70 z-10">
            <img src={BabaIcon} alt="Baba on Bike Icon" className="w-140 h-140 object-contain" />
          </div>

          <div className="w-[55%]  pl-40">
            <h2 className="text-4xl font-bold tracking-widest text-gray-900 mb-1 leading-tight">
              WHO'S ELIGIBLE?
              <br />
              <span className="text-3xl">(SPOILER: PROBABLY YOU)</span>
            </h2>

            <div className="mt-12">
              <p className="text-2xl text-gray-800 mb-3">
                You're good to go if you have:
              </p>

              <ul className="space-y-3 text-2xl text-gray-800">
                <li className="flex items-center">
                  • Age between <span className="font-bold">21 and 58</span>
                </li>
                <li className="flex items-center">
                  • At least <span className="font-bold">₹40,000 monthly income</span>
                </li>
                <li className="flex items-center">
                  • Internet-enabled bank account
                </li>
                <li className="flex items-center">
                  • Valid Aadhaar + PAN
                </li>
                <li className="flex items-center">
                  • And yes... you're in India
                </li>
              </ul>

              <p className="text-2xl text-gray-800 mt-12">
                Baba's loyal to desi bros & behens only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 