import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 ">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">
          Swap it like it’s hot! Our exchange policy is as smooth as your best
          pickup line.✨
        </p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>


      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">
        Changed your mind? No worries! You've got 7 days to send it back. 
        </p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>


      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">
        Support so good, you might just fall for us! 💙
        </p>
        <p className="text-gray-400">We provide 24*7 customer support facility</p>
      </div>
    </div>
  );
};

export default OurPolicy;
