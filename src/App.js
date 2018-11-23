import React, { Component } from "react";
import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "";

class App extends Component {
  state = {
    temp: "",
    temp_max: "",
    temp_min: "",
    humidity: "",
    pressure: "",
    wind: "",
    description: "",
    main: "",
    error: "",
    IsHiddn: true
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //this is shod update as a modal
    if (!(city.length > 1 && country.length > 1)) {
      alert("plese type both fields!");
    } else {
      const Api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await Api_call.json();
      console.log(data);
      if (!data.temp) {
        return this.setState(() => ({
          error: "Opps! (: you misspell city or country"
        }));
      } else {
        if (!data.code === "404") {
          return this.setState(() => ({
            error: "404"
          }));
        } else {
          this.setState(() => ({
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: data.main.wind,
            description: data.weather[0].description,
            main: data.weather[0].main
          }));
        }
      }
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />{" "}
        <Weather
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          weather={this.state.weather}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
