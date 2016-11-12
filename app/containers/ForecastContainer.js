import React from 'react';

import { get5DayForecast } from '../utils/openWeatherMapHelpers';
import Forecast from '../components/Forecast';

const ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      weathersData: {}
    };
  },
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  },
  async componentWillReceiveProps (nextProps) {
    await this.setState({
      isLoading: true,
      weathersData: {}
    });
    this.makeRequest(nextProps.routeParams.city);
  },
  async makeRequest (city) {
    const data = await get5DayForecast(city);
    this.setState({
      isLoading: false,
      weathersData: data
    });
  },
  handleSelectDate (city, weatherData) {
    this.context.router.push({
      pathname: `/forecast/${this.props.routeParams.city}/detail`,
      state: {
        city,
        weatherData
      }
    });
  },
  render () {
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
