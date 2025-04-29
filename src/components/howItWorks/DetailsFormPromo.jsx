import React from "react";
import FormIcon from "./../../assets/howitworks/icon-2.png";

export default function DetailsFormPromo() {
  return (
    <div className="bg-white p-8 mt-40 w-full">
      <div>
        <div className="bg-rose-100/70 rounded-3xl p-12 w-[90%] relative overflow-visible">
          {/* Form Icon */}
          <div className="absolute -top-19 -right-20 z-10">
            <img
              src={FormIcon}
              alt="Form Checklist Icon"
              className="w-80 h-80 object-contain"
            />
          </div>

          <div className="pl-32">
            <h2 className="text-4xl font-bold tracking-widest text-gray-900 mb-8 leading-tight">
              FILL A FEW DETAILS
            </h2>

            <div className="space-y-6">
              <p className="text-2xl text-gray-800">
                Name, Aadhaar, income...
                <br />
                just enough for Baba to say:
              </p>

              <p className="text-2xl font-bold text-gray-800">
                "Hello dost, paise chahiye? Mil jayega."
              </p>

              <div className="mt-8">
                <p className="text-2xl text-gray-800">
                  No photocopies. No queues.
                  <br />
                  No awkward calls.{" "}
                  <span className="font-bold">Baba's cool like that.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
