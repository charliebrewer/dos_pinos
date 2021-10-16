import React from 'react';
import membersHandbook from '../assets/Dos_Pinos_Housing_Cooperative_Members_Handbook_August_2021-1.pdf';

export default () => {
  return (
    <div>
      <h2>Member's Handbook</h2>

      <p>
        The attached PDF copy of the Dos Pinos Housing Cooperative Members’
        Handbook was updated in April 2019. Documents or policies revised or
        added after that date are not reflected in this copy.
      </p>

      <a href={membersHandbook} target="_blank">
        Dos Pinos Housing Cooperative Members’ Handbook April 2019
      </a>
    </div>
  );
};
