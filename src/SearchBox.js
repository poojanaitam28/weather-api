import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1345b0eb30e1c16d0d2ecb27eb180461";

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let getWheatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      console.log(jsonRes);
      if (res.ok && jsonRes.main && jsonRes.weather) {
        let result = {
          city: jsonRes.name,
          temp: jsonRes.main.temp,
          tempMax: jsonRes.main.temp_max,
          tempMin: jsonRes.main.temp_min,
          humidity: jsonRes.main.humidity,
          feels_like: jsonRes.main.feels_like,
          weather: jsonRes.weather[0].description,
        };
        console.log(result);
        return result;
      } else {
        throw new Error(jsonRes.message || "City Not Found");
      }
    } catch (error) {
      setError(true);
      console.log("Error fetching weather Info", error.message);
      return null;
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    // console.log(city);
    if (city.trim() === "") {
      setError(true);
      return;
    }
    let newInfo = await getWheatherInfo();
    if (newInfo && updateInfo) {
      setCity("");
      updateInfo(newInfo);
    }
  };

  return (
    <div className="w-[60%] h-40 p-3 mt-4 bg-blue-00 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <TextField
          id="city"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          className="w-96"
        />
        <Button
          style={{ width: "150px", marginTop: "30px" }}
          type="submit"
          variant="contained"
        >
          Search
        </Button>
        {error && (
          <p className="text-red-700 text-md mt-2">
            City not found or invalid input!
          </p>
        )}
      </form>
    </div>
  );
}

export default SearchBox;
