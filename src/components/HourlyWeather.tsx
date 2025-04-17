import React from "react";
import cloud from "../../public/CloudlyIcon.png";
import Image from "next/image";
function HourlyWeather() {
  return (
    <div className="container mx-auto bg-blue-600  px-3 ">
      <h3 className="text-white text-4xl font-semibold mt-10 ">
        Soatlik ob-havo{" "}
      </h3>
      <div className="overflow-auto">
        <div className="flex gap-3 text-white items-center justify-between mt-14  relative z-20 ">
          <Image
            className="absolute top-[-40px] ml-3 z-0"
            src={cloud}
            alt="cloud"
            width={70}
            height={50}
          />
          <div className="bg-blue-500 p-5 rounded-3xl flex gap-5   ">
            <div className="flex flex-col gap-1 items-center  text-2xl ">
              <p>now</p>
              <p>25</p>
            </div>
            <div className="flex flex-col justify-between text-2xl items-center">
              <p>18:00</p>
              <p>25°</p>
            </div>
          </div>
          <div className="bg-blue-500 p-5 rounded-3xl flex gap-5   ">
            <div className="flex flex-col gap-1  text-2xl">
              <p>now</p>
              <p>25</p>
            </div>
            <div className="flex flex-col justify-between text-2xl items-center">
              <p>18:00</p>
              <p>25°</p>
            </div>
          </div>
          <div className="bg-blue-500 p-5 rounded-3xl flex gap-5   ">
            <div className="flex flex-col gap-1  text-2xl text-gray-300">
              <p>now</p>
              <p>25</p>
            </div>
            <div className="flex flex-col justify-between text-2xl items-center">
              <p>18:00</p>
              <p>25°</p>
            </div>
          </div>
          <div className="bg-blue-500 p-5 rounded-3xl flex gap-5   ">
            <div className="flex flex-col gap-1  text-2xl text-gray-300">
              <p>now</p>
              <p>25</p>
            </div>
            <div className="flex flex-col justify-between text-2xl items-center">
              <p>18:00</p>
              <p>25°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyWeather;
