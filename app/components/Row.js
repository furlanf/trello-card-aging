import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  margin: 7px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    width: 40%;
  }

  .color {
    width: 20%;
    max-width: 50px;
  }

  .text {
    width: 35%;
    margin-left: 3%;
    max-width: 100%;
    flex: 1 0 auto;
    outline: 0;
    text-align: left;
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    background: #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    transition: box-shadow .1s ease,border-color .1s ease;
    box-shadow: none;
  }
`;

export default Row;

