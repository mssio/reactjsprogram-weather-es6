import React, { PropTypes } from 'react';
import { formatDate } from '../utils/dateHelpers';

const styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem ({entry, onSelectDate}) {
  const date = formatDate(entry.dt);
  const icon = entry.weather[0].icon;

  return (
    <div style={styles.dayContainer} onClick={onSelectDate}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather" />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  entry: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired
  }).isRequired,
  onSelectDate: PropTypes.func
};

export default DayItem;
