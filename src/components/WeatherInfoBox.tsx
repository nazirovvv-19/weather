"use client";

import React from "react";
import cloud from "../../public/CloudlyIcon.png";
import Image from "next/image";
function WeatherInfoBox() {
  return (
    <div className="container mx-auto px-2 overflow-x-auto  flex gap-5">
      <div className="w-full max-w-[600px] py-4 px-6 rounded-4xl mt-5 bg-blue-500 mx-auto">
        <p className="text-yellow-300 font-medium">Feels Like 23°</p>
        <div className="flex justify-between items-center mb-2">
          <p className="text-6xl text-white font-bold">25°</p>
          <Image src={cloud} alt="bulut" width={90} height={40} />
        </div>

        <p className="text-white text-lg font-medium">
          Qisman bulutli. Yog‘ishi kutilmayapti.
        </p>
        <div className="flex bg-black text-white gap-2 items-center w-[225px] py-2 px-4 rounded-full mt-5 text-sm">
          <p className=" text-[13px]">Ha, bulutli</p>
          <p className="text-gray-400 font-extrabold">|</p>
          <p className=" text-[13px]">Yog‘ingarchilik yo‘q</p>
        </div>
      </div>

      <div>
        {/* kod */}
        <div className=" flex gap-5">
          <div className=" bg-blue-500 w-60 py-3 px-4 rounded-4xl mt-5 flex flex-col justify-between gap-3 p-2">
            <div>
              <p className="text-white font-bold text-3xl">12%</p>
              <p className="text-white font-bold text-[12px]">
                Bulutlar tahminan 12% bo’lishi mumkin
              </p>
            </div>
            <p className="text-white font-bold text-[12px]">Bulutlar</p>
          </div>
          <div className=" bg-blue-500 w-60 py-3 px-4 rounded-4xl mt-5 flex flex-col justify-between gap-3 p-2">
            <div>
              <p className="text-white font-bold text-3xl">1.03 m/s</p>
              <p className="text-white font-bold text-[12px]">
                Shamol bir soniyada 1.03 metr esishi mumkin
              </p>
            </div>
            <p className="text-white font-bold text-[12px]">Shamol tezligi</p>
          </div>
        </div>
        <div className=" flex gap-5">
          <div className=" bg-blue-500 w-60 py-3 px-4 rounded-4xl mt-5 flex flex-col justify-between gap-3 p-2">
            <div>
              <p className="text-white font-bold text-3xl">43%</p>
              <p className="text-white font-bold text-[12px]">
                Namlik 43% bo’lishi mumkin. Bu yomg’ir yog’ish ehtimolini ham
                anglatishi mumkin
              </p>
            </div>
            <p className="text-white font-bold text-[12px]">Namlik</p>
          </div>
          <div className=" bg-blue-500 w-60 py-3 px-4 rounded-4xl mt-5 flex flex-col justify-between gap-3 p-2">
            <div>
              <p className="text-white font-bold text-3xl">765 mm/s.u</p>
              <p className="text-white font-bold text-[12px]">
                Havo bosimi tahminan 765 mm simob ustuni bo’lishi mumkin
              </p>
            </div>
            <p className="text-white font-bold text-[12px]">Bosim</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfoBox;