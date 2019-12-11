
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Input extends Component {
  onChange = ({ target }) => {
    const { value } = target;
    const { setValue, name } = this.props;

    setValue(name, value);
  }

  render() {
    const {
      label,
      id,
      name,
      value = '',
      type = 'text'
    } = this.props;

    return (
      <Row htmlFor={id}>
        <span className="col-5">{label}</span>
        <input
          type={type}
          name={name}
          id={id}
          className="col-7"
          value={value}
          onChange={this.onChange}
        />
      </Row>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  setValue: PropTypes.func
};

export default Input;
