import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelslike: 24.05,
    temp: 25.05,
    tempMax: 25.05,
    tempMin: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="bg-blue-300 w-full h-[100vh] p-3 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-blue-700 tracking-wide font-extrabold p-2 ">Weather Snap.</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
