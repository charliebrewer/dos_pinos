import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
`;

export default () => {
  return (
    <StyledUl>
      <li>
        <a href="#">Welcome</a>
      </li>
    </StyledUl>
  );
};
