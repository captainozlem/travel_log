import React from 'react';
import {connect} from 'react-redux';
import {fetchMarker} from './store';

const Country = props => {
  console.log('is this props >>>>', props);
  const {markCountry} = props;
  return (
    <div className="SingleCountry">
      {markCountry.map(country => (
        <div key={country.id}>
          <h3>{country.name}</h3>
          <img src={country.image} />
          <p>{country.text}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state in mapState', state);
  return {
    markCountry: state.country
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCountries: () => dispatch(fetchMarker())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
