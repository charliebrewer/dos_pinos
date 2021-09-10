import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  background-color: black;
  width: 100%;
  padding: 0;

  a {
    color: white;
  }
`;

export default () => {
  return (
    <StyledUl>
      <li style={{ marginLeft: '10px' }}>
        <a href="#">Welcome</a>
      </li>
    </StyledUl>
  );
};
