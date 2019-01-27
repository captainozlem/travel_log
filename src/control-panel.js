import React, {PureComponent} from 'react';

const defaultContainer = ({children}) => (
  <div className="control-panel">{children}</div>
);

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        <h3>My Log Book </h3>
        <p>
          This project intented to be a travel website that is using
          MapboxGL,React and Redux, however it is still in progress...
        </p>
        <p>
          For more adventures:{' '}
          <a href="https://ucarikacari.com/">Ucari Kacari</a>
        </p>
      </Container>
    );
  }
}
