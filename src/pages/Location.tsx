import React from 'react';
import map from '../assets/map.png';
import styled from 'styled-components';

const CenteredImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export default () => {
  return (
    <div>
      <h2>Location</h2>

      <p>
        Dos Pinos is in the Senda Nueva area of North Davis, one of Davis’ newer
        and most attractive neighborhoods. A park and playfield one block from
        Dos Pinos is the focal point of the area, with greenbelt bicycle and
        pedestrian paths linking Senda Nueva to Covell Park, Community Park,
        schools, the public library and shopping. Dos Pinos is on the Unitrans
        bus route, just a short ride to the University of California at Davis,
        and is just one block from the Marketplace Shopping center. DOS PINOS IS
        IN A GREAT LOCATION!
      </p>

      <a href="https://goo.gl/maps/WpcpBiuN3q8NAXzy9" target="_blank">
        <CenteredImg src={map} />
      </a>
    </div>
  );
};
