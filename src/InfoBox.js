import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfDB8MHx8fDI%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1641732423736-2c9ebb3e8338?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHwy";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1719038850147-2778f06ccae0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-[60%]  flex justify-center mt-3 p-5">
      <div className="flex">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon className="text-slate-600"/>
              ) : info.temp > 15 ? (
                <WhatshotIcon className="text-orange-500"/>
              ) : (
                <AcUnitIcon className="text-cyan-500"/>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature : {info.temp}&deg;C</div>
              <div>Max Temperature : {info.tempMax}&deg;C</div>
              <div>MinTemperature : {info.tempMin}&deg;C</div>
              <div>Humidity : {info.humidity}</div>
              <div className="mt-2 text-black">
                Weather can be described as {info.weather} and feels like{" "}
                {info.feels_like}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
