import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const API_KEY = "46340692097decafd9db4554884a3722";
    const city = "Zurich";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    // Fetch weather data from API
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Weather data not found");
        return res.json();
      })
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
        });

        // Get weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setIcon(iconUrl);
      })
      .catch((err) => {
        setError("Could not load weather data");
        console.error(err);
      });
  }, []);

  return (
    <div className="container weather-box">
      <h2>Weather in Zürich</h2>
      {weather ? (
        <div>
          {icon && <img src={icon} alt="Weather icon" style={{ width: "80px" }} />}
          <p><strong>Temperature:</strong> {weather.temp} °C</p>
          <p><strong>Condition:</strong> {weather.description}</p>
        </div>
      ) : (
        <p>{error || "Loading..."}</p>
      )}
    </div>
  );
};

export default Weather;

