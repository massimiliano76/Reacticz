import React, { Component } from 'react';
import MqttClientSingleton from '../util/MqttClientSingleton'
import './SwitchOnOff.css';

class SwitchOnOff extends Component {

  constructor(props) {
    super(props);
    this.mqtt = new MqttClientSingleton();
  }

  handleClick = (event) => {
    const message = {
      command: "switchlight",
      idx: this.props.idx,
      switchcmd: this.props.value === 0 ? 'On' : 'Off',
      level: 100
    };
    this.mqtt.publish(message);
  }

  render() {
    const valueText = this.props.value === 0 ? 'Off' : 'On';
    return (
      <button className={'circle ' + valueText} onClick={this.handleClick} title={valueText}>{this.props.label}</button>
    );
  }

}

export default SwitchOnOff
