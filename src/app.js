/* global window */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import ControlPanel from './control-panel';
import CityPin from './city-pin';
import CityInfo from './city-info';
import Country from './country';
import {Provider,connect} from 'react-redux';
import store ,{fetchMarker} from './store';


const TOKEN =
  'pk.eyJ1IjoiY2FwdGFpbm96bGVtIiwiYSI6ImNqb2c3bDEycjA2M3gza21nb3oxdDlsYWMifQ.MyssR7nhxDBnbkPzI0wGnA'; // Set your mapbox token here

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  componentDidMount() {
    this.props.markCity();
  }

  updateViewport = viewport => {
    this.setState({viewport});
  };

  renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude} >
        <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
      </Marker>
    );
  }

  renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
           latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {viewport} = this.state;
    const markedMap = this.props.markedMap || [];

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/captainozlem/cjr5vfgyy1q3r2slmtl2877rz"
        onViewportChange={this.updateViewport}
        mapboxApiAccessToken={TOKEN}
      >

       {markedMap.map(this.renderCityMarker)}

        {this.renderPopup()}

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this.updateViewport} />
        </div>

        <ControlPanel containerComponent={this.props.containerComponent} />

        <Country formComponent ={this.props.formComponent} />
      </MapGL>
    );
  }
}


const mapState = state => {
  return {
    markedMap: state.map,
  };
};

const mapDispatch = dispatch => {
  return {
    markCity: () => dispatch(fetchMarker())
  };
};

export default connect(mapState,mapDispatch)(App);


