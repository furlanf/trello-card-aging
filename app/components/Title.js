import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <h3 style={{ margin: 0 }}>
    {title}
  </h3>
  );

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
