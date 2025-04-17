"use client";
import Image from "next/image";
import React from "react";
import minora from "../../public/Group 41.png";
import WeatherInfoBox from "./WeatherInfoBox";
import HourlyWeather from "./HourlyWeather";
import WeatherWeek from "./WeatherWeek";
// import { relative } from "path";
import Search01Icon from "../icons/search-01-stroke-rounded (1)";
import Navigation03Icon from "../icons/navigation-03-stroke-rounded";
function ImageSection() {
  return (
    <div className="relative">
      <div className="max-w-[1000px] w-full">
        <Image
          // style={{
          //   maxWidth:500,
          //   width:'100%'
          // }}
          src={minora}
          alt="minora"
          width={915}
          height={0}
        />
      </div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 bg-black/50 p-2 rounded-4xl">
        <Search01Icon />
        <p className="text-white text-sm">nimadir mahallasi</p>
        <Navigation03Icon />
      </div>

      <WeatherInfoBox />
      <HourlyWeather />
      <WeatherWeek />
    </div>
  );
}

export default ImageSection;
