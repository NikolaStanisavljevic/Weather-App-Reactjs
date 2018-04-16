import React, { Component } from 'react';
import classes from './App.css';
import Form from '../components/Form/Form';
import axios from 'axios';
import Error from '../components/Error/Error';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import DayOne from '../components/Forecast/DayOne/DayOne';
import DayTwo from '../components/Forecast/DayTwo/DayTwo';
import DayThree from '../components/Forecast/DayThree/DayThree';
import DayFor from '../components/Forecast/DayFor/DayFor';
import DayFive from '../components/Forecast/DayFive/DayFive';
import Footer from '../components/Footer/Footer';


class App extends Component {

  state = {
    city : { name: "Belgrade"},
    weather: {},
    error: false,
    day1:{},
    day2:{},
    day3:{},
    day4:{},
    day5:{}
  };

    // Define starting point (city)

    componentDidMount () {
        axios.get(`https://api.apixu.com/v1/forecast.json?key=05246ca59647417da37155505180203&q=Belgrade&days=6`)
            .then( response => {
                this.setState({
                    weather: {
                        main: response.data.current.condition.icon,
                        temp: response.data.current.temp_c,
                        city: response.data.location.name,
                        humidity: response.data.current.humidity,
                        feel: response.data.current.feelslike_c,
                        wind: response.data.current.wind_kph
                    },
                    day1: {
                        date: response.data.forecast.forecastday[1].date,
                        max: response.data.forecast.forecastday[1].day.maxtemp_c,
                        min: response.data.forecast.forecastday[1].day.mintemp_c,
                        main: response.data.forecast.forecastday[1].day.condition.icon
                    },
                    day2: {
                        date: response.data.forecast.forecastday[2].date,
                        max: response.data.forecast.forecastday[2].day.maxtemp_c,
                        min: response.data.forecast.forecastday[2].day.mintemp_c,
                        main: response.data.forecast.forecastday[2].day.condition.icon
                    },
                    day3: {
                        date: response.data.forecast.forecastday[3].date,
                        max: response.data.forecast.forecastday[3].day.maxtemp_c,
                        min: response.data.forecast.forecastday[3].day.mintemp_c,
                        main: response.data.forecast.forecastday[3].day.condition.icon
                    },
                    day4: {
                        date: response.data.forecast.forecastday[4].date,
                        max: response.data.forecast.forecastday[4].day.maxtemp_c,
                        min: response.data.forecast.forecastday[4].day.mintemp_c,
                        main: response.data.forecast.forecastday[4].day.condition.icon
                    },
                    day5: {
                        date: response.data.forecast.forecastday[5].date,
                        max: response.data.forecast.forecastday[5].day.maxtemp_c,
                        min: response.data.forecast.forecastday[5].day.mintemp_c,
                        main: response.data.forecast.forecastday[5].day.condition.icon
                    },
                });
            })
    };


  getWeather = (event) => {
    event.preventDefault();

 // Geting user input value and setting it as state 

    const city = {
        ...this.state.city
    };

      city.name = event.target.elements.city.value;
      this.setState ({
          city: city
      });

// Send api get request based on user value

    axios.get(`https://api.apixu.com/v1/forecast.json?key=05246ca59647417da37155505180203&q=${city.name}&days=6`)
        .then( response => {
            this.setState({
                weather: {
                    main: response.data.current.condition.icon,
                    temp: response.data.current.temp_c,
                    city: response.data.location.name,
                    humidity: response.data.current.humidity,
                    feel: response.data.current.feelslike_c,
                    wind: response.data.current.wind_kph
                },
                day1: {
                    date: response.data.forecast.forecastday[1].date,
                    max: response.data.forecast.forecastday[1].day.maxtemp_c,
                    min: response.data.forecast.forecastday[1].day.mintemp_c,
                    main: response.data.forecast.forecastday[1].day.condition.icon
                },
                day2: {
                    date: response.data.forecast.forecastday[2].date,
                    max: response.data.forecast.forecastday[2].day.maxtemp_c,
                    min: response.data.forecast.forecastday[2].day.mintemp_c,
                    main: response.data.forecast.forecastday[2].day.condition.icon
                },
                day3: {
                    date: response.data.forecast.forecastday[3].date,
                    max: response.data.forecast.forecastday[3].day.maxtemp_c,
                    min: response.data.forecast.forecastday[3].day.mintemp_c,
                    main: response.data.forecast.forecastday[3].day.condition.icon
                },
                day4: {
                    date: response.data.forecast.forecastday[4].date,
                    max: response.data.forecast.forecastday[4].day.maxtemp_c,
                    min: response.data.forecast.forecastday[4].day.mintemp_c,
                    main: response.data.forecast.forecastday[4].day.condition.icon
                },
                day5: {
                    date: response.data.forecast.forecastday[5].date,
                    max: response.data.forecast.forecastday[5].day.maxtemp_c,
                    min: response.data.forecast.forecastday[5].day.mintemp_c,
                    main: response.data.forecast.forecastday[5].day.condition.icon
                },
            });
            })
        };


  render () {

      // Render error message if i get bad response

    if (this.state.error){
      return (
          <div>
              <Error/>
          </div>
      )
    }

    return (
      <div className={classes.App}>
          <Form changed={this.getWeather}/>
          <CurrentWeather
              main={this.state.weather.main}
              temp={this.state.weather.temp}
              city={this.state.weather.city}
              feel={this.state.weather.feel}/>
            <div className={classes.forecastWrapper}>
                <DayOne
                    main={this.state.day1.main}
                    date={this.state.day1.date}
                    min={this.state.day1.min}
                    max={this.state.day1.max}/>

                <DayTwo
                    main={this.state.day2.main}
                    date={this.state.day2.date}
                    min={this.state.day2.min}
                    max={this.state.day2.max}/>

                <DayThree
                    main={this.state.day3.main}
                    date={this.state.day3.date}
                    min={this.state.day3.min}
                    max={this.state.day3.max}/>

                <DayFor
                    main={this.state.day4.main}
                    date={this.state.day4.date}
                    min={this.state.day4.min}
                    max={this.state.day4.max}/>

                <DayFive
                    main={this.state.day5.main}
                    date={this.state.day5.date}
                    min={this.state.day5.min}
                    max={this.state.day5.max}/>
            </div>

          <Footer
            humidity={this.state.weather.humidity}
            wind={this.state.weather.wind}/>

      </div>
    );
  }
}

export default App;
