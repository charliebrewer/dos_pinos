import React from 'react';
import membersHandbook from '../assets/Dos_Pinos_Housing_Cooperative_Members_Handbook_2022-05-23.pdf';

export default () => {
  return (
    <div>
      <h2>Member's Handbook</h2>

      <p>
        The attached PDF copy of the Dos Pinos Housing Cooperative Members'
        Handbook was updated in August 2021. Documents or policies revised or
        added after that date are not reflected in this copy.
      </p>

      <a href={membersHandbook} target="_blank">
        Dos Pinos Housing Cooperative Members' Handbook May 2022
      </a>
    </div>
  );
};
