import React from "react";

function Weather({NewWeather}){
  return(
    <div className="weather-box">
      <div className="temp">{Math.round(NewWeather.main.temp)}°</div>
      <div><img className="icon" src={`http://openweathermap.org/img/wn/${NewWeather.weather[0].icon}@2x.png`} alt="weatherIcon"></img></div>
      <div className="weather">{NewWeather.weather[0].description}</div>
    </div>
  );
}

export default Weather;