import React from 'react';
import styled from 'styled-components';
import equalHousing from '../assets/Equal-Housing.jpg';
import twoPines from '../assets/Two-Pines-Logo.jpg';

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  // background-color: black;
`;

const FooterItem = styled.div`
  width: 40%;
`;

export default () => {
  return (
    <Footer>
      <FooterItem>
        <h4>Dos Pinos Housing Cooperative</h4>

        <img src={twoPines} />

        <p>
          2550 Sycamore Lane
          <br />
          Davis, CA 95616
        </p>

        <p>
          Office Contact:
          <br />
          Joyce Wiseman
          <br />
          (530) 758-2550
          <br />
          dphc@att.net
        </p>
      </FooterItem>

      <FooterItem>
        <img src={equalHousing}></img>

        <h4>Did you know?</h4>

        <p>
          Dos Pinos Housing Cooperative is a great place to live! Contact us
          with your questions.
        </p>

        <p>Dos Pinos is professionally managed by Laughton Properties</p>
      </FooterItem>
    </Footer>
  );
};
