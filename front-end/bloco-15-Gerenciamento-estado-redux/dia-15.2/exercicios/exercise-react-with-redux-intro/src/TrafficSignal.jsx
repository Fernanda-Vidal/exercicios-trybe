import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actions';

const renderSignal = (signalColor) => {
  switch (signalColor) {
  case 'red':
    return redSignal;
  case 'green':
    return greenSignal;
  case 'yellow':
    return yellowSignal;
  default:
    return null;
  }
};

function TrafficSignal({ signalColor, changeSignalTo }) {
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={ () => changeSignalTo('red') }>Red</button>
        <button type="button" onClick={ () => changeSignalTo('yellow') }>Yellow</button>
        <button type="button" onClick={ () => changeSignalTo('green') }>Green</button>
      </div>
      <img className="signal" src={ renderSignal(signalColor) } alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.reducer1.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignalTo: (payload) => dispatch(changeSignal(payload)),
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  changeSignalTo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
