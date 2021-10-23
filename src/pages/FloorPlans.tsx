import React from 'react';
import big1br from '../assets/big1br.png';
import big2br from '../assets/big2br.jpg';
import big3brDown from '../assets/big3br-downstairs.jpg';
import big3brUp from '../assets/big3br-upstairs.jpg';
import styled from 'styled-components';

const StyledDiv = styled.div`
  img {
    width: 80%;
    margin-left: 10%;
  }
`;

export default () => {
  return (
    <StyledDiv>
      <h2>Floor Plans</h2>

      <p>
        <b>Dos Pinos Offers One, Two and Three Bedroom Floor Plans</b>
      </p>

      <p>
        (There are 60 total units. Of these 6 are 1-bedroom, 28 are 2-bedroom,
        and 26 are 3-bedroom. PLEASE NOTE: Very few units currently have wood
        stoves though these diagrams include them.)
      </p>

      <p>One Bedroom</p>

      <img src={big1br} />

      <p>Two Bedroom</p>

      <img src={big2br} />

      <p>Three Bedroom (downstairs)</p>

      <img src={big3brDown} />

      <p>Three Bedroom (upstairs)</p>

      <img src={big3brUp} />
    </StyledDiv>
  );
};
