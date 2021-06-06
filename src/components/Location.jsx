import React from "react";
import Date from "./Date";

function location({NewWeather}){
  console.log(NewWeather);
  return(
    <div className="location-box">
      <div className="location">{NewWeather.name}, {NewWeather.sys.country}</div>
      <Date />
    </div>
  );
}

export default location;