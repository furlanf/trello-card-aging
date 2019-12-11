import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #2185d0;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
