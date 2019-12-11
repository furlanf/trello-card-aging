/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Select extends Component {
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
      value,
      options
    } = this.props;

    return (
      <Row key={id}>
        <span className="col-5">{label}</span>
        <select className="col-7" value={value} onChange={this.onChange} name={name} id={id}>
          {options}
        </select>
      </Row>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.any,
  setValue: PropTypes.func
};

export default Select;
