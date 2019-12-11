/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class ColorInput extends Component {
  onChange = ({ target }) => {
    const { value } = target;
    const { setValue, name } = this.props;

    setValue(name, value);
  }

  render() {
    const { label, id, name, value = '' } = this.props;

    return (
      <Row key={id}>
        <span className="label">{label}</span>
        <input
          className="color"
          key={`${id}-color`}
          id={`${id}-color`}
          value={value}
          onChange={this.onChange}
          name={name}
          type="color"
        />
        <input
          className="text"
          key={`${id}-text`}
          id={`${id}-text`}
          value={value}
          onChange={this.onChange}
          name={name}
          type="text"
        />
      </Row>
    );
  }
}

ColorInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func
};

export default ColorInput;
