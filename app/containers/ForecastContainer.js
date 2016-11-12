import React from 'react';

import { get5DayForecast } from '../utils/openWeatherMapHelpers';
import Forecast from '../components/Forecast';

const ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      weathersData: {}
    };
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      isLoading: true,
      weathersData: {}
    }, this.makeRequest(nextProps.routeParams.city));
  },
  makeRequest: function (city) {
    get5DayForecast(city)
      .then(function (data) {
        this.setState({
          isLoading: false,
          weathersData: data
        })
      }.bind(this));
  },
  handleSelectDate: function (city, weatherData) {
    this.context.router.push({
      pathname: '/forecast/' + this.props.routeParams.city + '/detail',
      state: {
        city: city,
        weatherData: weatherData
      }
    });
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weathersData={this.state.weathersData}
        onSelectDate={this.handleSelectDate}
      />
    );
  }
});

export default ForecastContainer;
