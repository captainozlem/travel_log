import React from 'react';
import {connect} from 'react-redux';
import {addMarker} from './store';

class Country extends React.Component {
  constructor() {
    super();
    this.state = {
     city:'',
     continent: '',
     country: '',
     longitude: 0.00,
     latitude: 0.00,
     text: ''

    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addMarker(this.state);
    this.setState({city: '' ,continent: '',
     country: '',
     longitude: 0.00,
     latitude:0.00,
     text: ''});
  };

  render() {
    return (
      <div className = 'add-form'>
        <form onSubmit={this.handleSubmit}>
          <input name="city" type="text" onChange={this.handleChange} placeholder='City'/>
          <input name="country" type="text" onChange={this.handleChange} placeholder='Country'/>
          <input name="continent" type="text" onChange={this.handleChange} placeholder='Continent'/>
          <input name="longitude" type="text" onChange={this.handleChange} placeholder='Longitude'/>
          <input name="latitude" type="text" onChange={this.handleChange} placeholder='Latitude'/>
          <input name="text" type="text" onChange={this.handleChange} placeholder='Tell me about your trip'/>
          <button type="submit">Mark your trips</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMarker: (newCity) => dispatch(addMarker(newCity))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Country);


