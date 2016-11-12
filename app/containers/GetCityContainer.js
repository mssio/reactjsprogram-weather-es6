import React, { PropTypes } from 'react';
import GetCity from '../components/GetCity';

const GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps () {
    return {
      direction: 'column'
    };
  },
  getInitialState () {
    return {
      city: ''
    };
  },
  propTypes: {
    direction: PropTypes.string
  },
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitCity (e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/forecast/' + this.state.city
    });
  },
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
      />
    );
  }
});

export default GetCityContainer;
