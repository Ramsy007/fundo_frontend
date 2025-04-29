import React from "react";
import WalletIcon from "./../../assets/howitworks/icon-3.png";

export default function MoneyTransferPromo() {
  return (
    <div className="bg-white p-8 mt-40 w-full">
      <div className="flex justify-end">
        <div className="bg-rose-100/70 rounded-3xl p-12 w-[90%] relative overflow-visible">
          {/* Wallet Icon */}
          <div className="absolute -top-19 -left-34 z-10">
            <img
              src={WalletIcon}
              alt="Wallet with Clock Icon"
              className="w-80 h-80 object-contain"
            />
          </div>

          <div className="pl-32">
            <h2 className="text-4xl font-bold tracking-widest text-gray-900 mb-8 leading-tight">
              GET MONEY
              <br />
              IN MINUTES
            </h2>

            <div className="space-y-6">
              <p className="text-2xl text-gray-800">
                Faster than your crush leaves you
                <br />
                on "seen."
              </p>

              <p className="text-2xl text-gray-800">
                Baba transfers money while your tea
                <br />
                is still hot.
              </p>

              <p className="text-2xl text-gray-800">
                Before you can say{" "}
                <span className="font-bold">"arre waah!"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
