import React, { PropTypes } from 'react';

import Loading from './Loading';
import DayItem from './DayItem';

const styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function ForecastDetail ({ isLoading, city, weatherData }) {
  return isLoading === true
    ? <Loading />
    : (
      <div>
        <DayItem entry={weatherData}/>
        <div style={styles.descriptionContainer}>
          <p>{city}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>min temp: {weatherData.temp.min} degrees</p>
          <p>max temp: {weatherData.temp.max} degrees</p>
          <p>humidity: {weatherData.humidity}</p>
        </div>
      </div>
    );
}

ForecastDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired
};

export default ForecastDetail;
