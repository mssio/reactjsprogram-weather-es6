import React from 'react';
import ForecastDetail from '../components/ForecastDetail';

const ForecastDetailContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      city: '',
      weatherData: {}
    };
  },
  componentDidMount () {
    if (typeof(this.props.location.state) === 'undefined') {
      console.log('Redirecting back to home because of empty state...');
      this.context.router.push('/');
    } else {
      const { city, weatherData } = this.props.location.state;

      this.setState({
        isLoading: false,
        city,
        weatherData
      });
    }
  },
  render () {
    return (
      <ForecastDetail
        isLoading={this.state.isLoading}
        city={this.state.city}
        weatherData={this.state.weatherData}
      />
    );
  }
});

export default ForecastDetailContainer;
