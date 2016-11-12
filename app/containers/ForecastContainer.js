import React, { Component } from 'react';

import { get5DayForecast } from '../utils/openWeatherMapHelpers';
import Forecast from '../components/Forecast';

class ForecastContainer extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      weathersData: {}
    };
  }
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }
  async componentWillReceiveProps (nextProps) {
    await this.setState({
      isLoading: true,
      weathersData: {}
    });
    this.makeRequest(nextProps.routeParams.city);
  }
  async makeRequest (city) {
    const data = await get5DayForecast(city);
    this.setState({
      isLoading: false,
      weathersData: data
    });
  }
  handleSelectDate (city, weatherData) {
    this.context.router.push({
      pathname: `/forecast/${this.props.routeParams.city}/detail`,
      state: {
        city,
        weatherData
      }
    });
  }
  render () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weathersData={this.state.weathersData}
        onSelectDate={(city, weatherData) => this.handleSelectDate(city, weatherData)}
      />
    );
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastContainer;
