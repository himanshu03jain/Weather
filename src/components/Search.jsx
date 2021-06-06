import React, { useState } from "react";

const api = {
  id: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

function Search({setNewWeather}) {
  const [Query, setQuery] = useState("");
  //const [Weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${Query}&units=metric&appid=${api.id}`)
        .then((res) => res.json())
        .then((result) => {
          //setWeather(result);
          setNewWeather(result);
          setQuery("");
          // console.log(result);
        });
    }
  };
 
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
        value={Query}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
