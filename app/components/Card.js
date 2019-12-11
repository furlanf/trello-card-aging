import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Title';

const CardBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
  box-shadow: 0px 1px 4px 0px rgba(13,28,39,0.6);
    background: #fafafa;
  border-radius: 12px;
`;

const Card = ({ children, title }) => (
  <CardBox>
    <Title title={title} />
    {children}
  </CardBox>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
