import React, { Component, PropTypes } from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends Component {
  constructor () {
    super();
    this.state = {
      city: ''
    };
  }
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    });
  }
  handleSubmitCity (e) {
    e.preventDefault();
    this.context.router.push({
      pathname: `/forecast/${this.state.city}`
    });
  }
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        onSubmitCity={(e) => this.handleSubmitCity(e)}
        city={this.state.city}
      />
    );
  }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
GetCityContainer.defaultProps = {
  direction: 'column'
}
GetCityContainer.porpTypes = {
  direction: PropTypes.string
};

export default GetCityContainer;
