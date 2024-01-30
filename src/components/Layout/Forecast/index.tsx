import Degree from "@components/Icons/Degree";
import Sunrise from "@components/Icons/Sunrise";
import Sunset from "@components/Icons/Sunset";
import Tile from "./Tile";
import React from "react";
import Image from "next/image";
import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
  getSunTime,
  getPop,
} from "@features/helpers";
import { forecastType } from "@features/types";

type Props = {
  data: forecastType;
};


const Forecast = ({ data }: Props) => {
  const today = data.list[0];
  console.log('console here');
  console.log(today.weather);
  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm">
            {today.weather?.main} ({today.weather.description})
          </p>
          <p className="text-sm">
            H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{" "}
            <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>

        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, i) => {
            return (
              <div
              key={i}
              role= "forecast-item"
              className="inline-block text-center w-[50px] flex-shrink-0"
            >
              <p className="text-sm">
                {i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
              </p>
              <Image
                width={50}
                height={50}
                alt={`weather-icon-${item.weather.description}`}
                src={`http://openweathermap.org/img/wn/${item.weather.icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
            )
          }
          )}
        </section>

        <section className="flex flex-wrap justify-between text-zinc-700">
        <Tile icon="wind" title="Wind" info={getWindDirection(today.wind.deg)} description={`Speed: ${today.wind.speed} m/s`} />
          <Tile icon="feels" title="Feels Like" info={<Degree temp={Math.round(today.main.feels_like)} />} description={`Humidity: ${getHumidityValue(today.main.humidity)}`} />
          <Tile icon="humidity" title="Humidity" info={`${getHumidityValue(today.main.humidity)}%`} />
          <Tile icon="visibility" title="Visibility" info={`${getVisibilityValue(today.visibility)} km`} />
          <Tile icon="pressure" title="Pressure" info={`${today.main.pressure} hPa`} />
          <Tile icon="pop" title="Popularity" info={`${getPop(today.pop)}%`} />
        </section>
      </div>
    </div>
  );
};

export default Forecast;
