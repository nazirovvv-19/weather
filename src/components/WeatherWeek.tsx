import React from "react";
import cloud from "../../public/CloudlyIcon.png";
import Image from "next/image";
function WeatherWeek() {
  return (
    <div className="container mx-auto px-3 mt-10 ">
      <h3 className="text-white text-4xl font-semibold ">Haftalik ob-havo</h3>

      <div className="flex justify-between items-center text-white bg-blue-500 p-3  rounded-3xl mt-7 ">
        <div className="">
          <p className="text-gray-200">aprel 7</p>
          <p className="font-bold text-xl">today </p>
        </div>
        <Image src={cloud} alt="rasm" width={60} height={60} />
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-white bg-blue-500 p-3  rounded-3xl mt-2 ">
        <div className="">
          <p className="text-gray-200">aprel 7</p>
          <p className="font-bold text-xl">today </p>
        </div>
        <Image src={cloud} alt="rasm" width={60} height={60} />
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-white bg-blue-500 p-3  rounded-3xl mt-2 ">
        <div className="">
          <p className="text-gray-200">aprel 7</p>
          <p className="font-bold text-xl">today </p>
        </div>
        <Image src={cloud} alt="rasm" width={60} height={60} />
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-white bg-blue-500 p-3  rounded-3xl mt-2 ">
        <div className="">
          <p className="text-gray-200">aprel 7</p>
          <p className="font-bold text-xl">today </p>
        </div>
        <Image src={cloud} alt="rasm" width={60} height={60} />
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-white bg-blue-500 p-3  rounded-3xl mt-2 ">
        <div className="">
          <p className="text-gray-200">aprel 7</p>
          <p className="font-bold text-xl">today </p>
        </div>
        <Image src={cloud} alt="rasm" width={60} height={60} />
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
        <div>
          <p className="text-gray-200">day</p>
          <p className="font-bold text-xl">25°</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWeek;
