import React from "react";
import Titles from "./components/Titles.js"
import Form from "./components/Form.js"
import Weather from "./components/weather.js"

const API_KEY = "b228464628fbbd5aa71e032115b87895"

class App extends React.Component {
  getWeather = async (e) =>{
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Mexico,Mex&appid=${API_KEY}&units=metric`/*`http://api.openweathermap.org/data/2.5/weather?q=MexicoCity,Mex&appid=${API_KEY}&units=metric`*/);

    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
      <Titles />

      <Form getweather = {this.getWeather} />


      <Weather />

    </div>);
  }
};
export default App;
