import React, { PropTypes } from 'react';

import Loading from './Loading';
import DayItem from './DayItem';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  }
}

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function ForecastUI ({ city, forecast, onSelectDate }) {
  return (
    <div>
      <h1 style={styles.header}>{city}</h1>
      <div style={styles.container}>
        {forecast.map(function (listItem) {
          return (
            <DayItem
              key={listItem.dt}
              entry={listItem}
              onSelectDate={onSelectDate.bind(null, city, listItem)}
            />
          );
        })}
      </div>
    </div>
  );
}

function Forecast ({ isLoading, weathersData, onSelectDate }) {
  return isLoading === true
    ? <Loading />
    : (
      <ForecastUI
        city={weathersData.city.name}
        forecast={weathersData.list}
        onSelectDate={onSelectDate}
      />
    );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  weathersData: PropTypes.object.isRequired,
  onSelectDate: PropTypes.func.isRequired
};

export default Forecast;
