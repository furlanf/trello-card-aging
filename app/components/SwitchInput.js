/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';
import Row from './Row';

class SwitchInput extends Component {
  onChange = (value) => {
    const { setValue, name } = this.props;

    setValue(name, value);
  }

  render() {
    const { label, id, name, value } = this.props;
    return (
      <Row key={id}>
        <span>{label}</span>
        <Switch
          isOn={value}
          onColor="#15c39a"
          name={name}
          id={id}
          handleToggle={() => this.onChange(!value)}
        />
      </Row>
    );
  }
}

SwitchInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func
};

export default SwitchInput;
