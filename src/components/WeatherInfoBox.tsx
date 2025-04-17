"use client";

import React from "react";
import cloud from "../../public/CloudlyIcon.png";
import Image from "next/image";
function WeatherInfoBox() {
  return (
    <div className="container mx-auto px-2">
      <div className=" w-60 py-3 px-4 rounded-4xl mt-5 bg-blue-500 ">
        <p className="text-yellow-300 font-medium">Feels Like 23°</p>
        <div className="flex justify-between items-center ">
          <p className="text-6xl text-white font-bold">25°</p>
          <Image src={cloud} alt="bulut" width={90} height={40} />
        </div>

        <p className="text-white text-[20px] font-medium">
          Qisman bulutli. yog’ishi kutilmayapti.
        </p>
        <div className="flex bg-black text-white gap-2 items-center w-34 py-2 px-2.5 rounded-full mt-5">
          <p>Ha,bulutli</p>
          <p className="text-[12px] text-gray-500 font-extrabold">|</p>
          <p>yoq</p>
        </div>
      </div>
      <div>
    {/* kod */}
      </div>
    </div>
  );
}

export default WeatherInfoBox;
