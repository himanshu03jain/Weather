import React, { useState } from "react";
import Search from "./Search";
import Location from "./Location";
import Weather from "./Weather";

function App() {
  const [NewWeather, setNewWeather] = useState({});
  // console.log(setNewWeather);
  return (
    <div className="app">
      <main>
      <div className="topic-box">
      <div className="topic">Weather App</div>
      </div>
        <Search className="search-box" setNewWeather={setNewWeather} />
        {(typeof NewWeather.main != "undefined") ? (
          <div>
            <Location NewWeather={NewWeather} />
            <Weather NewWeather={NewWeather} />
          </div>
        ) : (
          <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>No location found(Search your location)</div>
        )}
      </main>
    </div>
  );
}

export default App;
