import React, { PropTypes } from 'react';

function Button ({ children }) {
  return (
    <button
      type="submit"
      style={{margin: 10}}
      className="btn btn-success"
    >
      {children}
    </button>
  );
};

function InputField ({ onUpdateCity, city }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Tokyo"
      onChange={onUpdateCity}
      value={city}
    />
  );
};

function getStyles ({ direction }) {
  return {
    display: 'flex',
    flexDirection: direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
};

function GetCity ({ direction, city, onSubmitCity, onUpdateCity }) {
  return (
    <form
      style={getStyles({ direction })}
      onSubmit={onSubmitCity}
    >
      <InputField
        city={city}
        onUpdateCity={onUpdateCity}
      />
      <Button>Get Weather</Button>
    </form>
  );
};

GetCity.propTypes = {
  direction: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export default GetCity;
