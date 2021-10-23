import React from 'react';
import styled from 'styled-components';
import map from '../assets/map.png';

const CenteredImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export default () => {
  return (
    <div>
      <h2>Welcome</h2>

      <p>
        Welcome to Dos Pinos, a Limited Equity Nonprofit Housing Cooperative.
      </p>

      <p>
        We understand that you’re interested in learning more about the Dos
        Pinos Housing Cooperative located at 2550 Sycamore Lane, Davis, CA
        95616. This website will tell you about living in a cooperative,
        describe special features of Dos Pinos, provide answers to frequently
        asked questions, and explain the membership application process.
      </p>

      <p>
        Dos Pinos residents range in age from small children to retired persons,
        and come from many different walks of life. All ages and walks of life
        are represented–singles, single parents, couples, and families with
        children. We are all interested in keeping our community a pleasant and
        mutually supportive place to live.
      </p>

      <p>
        Dos Pinos has one-, two-, and three-bedroom units with private
        individual courtyards and washer/dryer hookups. Members have access to
        the pool, spa, community room and a communal laundry room. Pets are
        allowed at Dos Pinos within policy guidelines.
      </p>

      <p>
        If you have questions after reviewing the information on this website
        please contact our office at dphc@att.net or 530.758.2550. You may also
        click here to provide us with your contact information.
      </p>

      <p>
        <b>
          <span style={{ color: 'red' }}>Important Note</span>: Due to long
          waiting lists, there is an indefinite moratorium on accepting new
          applications for membership in the Dos Pinos Housing Cooperative. The
          Dos Pinos Board of Directors will reassess waiting lists periodically
          and post any updates on this website.{' '}
        </b>
      </p>

      <p>Dos Pinos Housing Cooperative, 2550 Sycamore Lane, Davis, CA 95616</p>

      <a href="https://goo.gl/maps/WpcpBiuN3q8NAXzy9" target="_blank">
        <CenteredImg src={map} />
      </a>
    </div>
  );
};
