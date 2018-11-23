import React, { Component } from "react";

export class Weather extends Component {
  render() {
    return (
      <div>
        <p>Weather</p>

        {this.props.temp && <p>Temp {this.props.temp}</p>}
        {this.props.temp_max && <p> Max Temp {this.props.temp_max}</p>}
        {this.props.temp_min && <p>Min Temp {this.props.temp_min}</p>}
        {this.props.humidity && <p>Humidity {this.props.humidity}</p>}
        {this.props.pressure && <p>pressure {this.props.pressure}</p>}
        {this.props.description && <p>description {this.props.description}</p>}
        {this.props.error && <p> {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
