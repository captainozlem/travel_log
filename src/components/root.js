import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import App from './app';
// import { Navbar } from './navbar';
import { connect } from 'react-redux';
import { fetchMarker } from '../store/map';
import { Home } from './home';
import { Poop } from '../components/captains_log_book/poop';

export class Root extends React.Component {
  componentDidMount() {
    this.props.markCity();
  }
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={App} />
          <Route exact path="/poop" component={Poop} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markedMap: state.map
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markCity: () => dispatch(fetchMarker())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
