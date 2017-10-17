import React, {Component} from 'react';
import ForecastSwell from './ForecastSwell';
import ForecastWind from './ForecastWind';
import ForecastTemp from './ForecastTemp';

class ForecastConditions extends Component {
  render() {
    const conditions = this.props.conditions;
    let firstDay = [];
    let secondDay = [];
    let thirdDay = [];
    let fourthDay = [];

    for (let i = 8; i < 16; i++) {
      firstDay.push(conditions[i])
    }
    for (let i = 16; i < 24; i++) {
      secondDay.push(conditions[i])
    }
    for (let i = 24; i < 32; i++) {
      thirdDay.push(conditions[i])
    }
    for (let i = 32; i < 40; i++) {
      fourthDay.push(conditions[i])
    }

    // Get names of each day in forecast
    let days = []
    for (var i = 8; i < conditions.length; i+=8) {
      days.push(conditions[i])
    }
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const conditionDays = days.map((item, index) => (
      <h2 key={index}>{weekdays[new Date(item.timestamp*1000).getDay()]}</h2>
    ));

    return (
      <div>
        <h1>Forecasting...</h1>
        {conditionDays[0]}
        <ForecastSwell conditions={firstDay} />
        <ForecastWind conditions={firstDay} />
        <ForecastTemp conditions={firstDay} />
        {conditionDays[1]}
        <ForecastSwell conditions={secondDay} />
        <ForecastWind conditions={secondDay} />
        <ForecastTemp conditions={secondDay} />
        {conditionDays[2]}
        <ForecastSwell conditions={thirdDay} />
        <ForecastWind conditions={thirdDay} />
        <ForecastTemp conditions={thirdDay} />
        {conditionDays[3]}
        <ForecastSwell conditions={fourthDay} />
        <ForecastWind conditions={fourthDay} />
        <ForecastTemp conditions={fourthDay} />
      </div>
    );
  }
}

export default ForecastConditions;
