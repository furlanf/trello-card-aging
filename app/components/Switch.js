import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 20px;
  width: 42px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;

  .switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

    &:active {
      .switch-button {
        width: 60px;
      }
    }
  }
`;

const Switch = ({ isOn, handleToggle, onColor, id }) => (
  <div>
    <SwitchCheckbox
      checked={isOn}
      onChange={handleToggle}
      className="switch-checkbox"
      id={id}
      type="checkbox"
    />
    <SwitchLabel
      style={{ background: isOn && onColor }}
      className={'switch-label'}
      htmlFor={id}
    >
      <span className={'switch-button'} />
    </SwitchLabel>
  </div>
  );

Switch.propTypes = {
  handleToggle: PropTypes.func,
  onColor: PropTypes.string,
  isOn: PropTypes.bool,
  id: PropTypes.string
};

export default Switch;
