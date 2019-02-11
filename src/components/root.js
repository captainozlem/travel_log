import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import App from './app';
import { Navbar } from './navbar';
import { connect } from 'react-redux';
import { fetchMarker } from '../store/map';
import { Home } from './home';

export class Root extends React.Component {
  componentDidMount() {
    this.props.markCity();
  }
  render() {
    return (

      <div style={{ width: '100vw', height: '100vh' }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={App} />
        </Switch>

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    markedMap: state.map,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    markCity: () => dispatch(fetchMarker()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
