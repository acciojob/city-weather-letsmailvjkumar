import "@babel/polyfill";

import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=598b50e3e0641c418142195a87fb9b04`;
      fetch(url)
        .then(response => response.json())
        .then(data => {setWeather(data); console.log(data)})  
        .catch(error => console.error('Error:', error));
    }
    fetchApi();
  }, [city]);
  
  function display(){
    setCity(search)
  }
  
  return (
    <div className="main" id="main">
        <div className="search">
          <input type="text" placeholder="Enter a city" onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={display}>Search</button>
        </div>
        <div className="weather">
          { weather.main && 
          <>
            <h1>{city}</h1>
            <h2>{weather.main.temp}°Cel</h2>
            <h3>{weather.weather[0].description}</h3>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="cloud image"/>
            </>
            }
        </div>
    </div>
  )
}

export default App
