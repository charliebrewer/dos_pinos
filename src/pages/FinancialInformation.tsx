import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border: 1px solid #e7e7e7;
  margin-left: 20px;
  margin-right: 20px;

  thead {
    background-color: #d9edf7;
    color: #333;
  }

  td, th {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 15px;
    padding-right 15px;
  }
`;

export default () => {
  return (
    <div>
      <h2>Financial Information</h2>

      <p>
        A non-subsidized, affordable housing alternative in Davis, California
      </p>

      <ul>
        <li>
          All ages and walks of life are represented-singles, single parents,
          couples, and families with children.
        </li>
        <li>
          Dos Pinos has 60 units: one-, two-, and three-bedroom units with
          private individual courtyards and washer/dryer hookups.
        </li>
        <li>
          Members may also use the pool, spa, community room, and communal
          laundry room.
        </li>
        <li>Pets are allowed at Dos Pinos within our policy guidelines.</li>
      </ul>

      <StyledTable>
        <thead>
          <tr>
            <th>Unit Size</th>
            <th>Number of Units</th>
            <th>Approx. Square Footage</th>
            <th>Monthly Assessment as of Jan. 2022</th>
            <th>Max. Basic Share Value as of Dec. 2021*</th>
          </tr>
        </thead>

        <tr>
          <td>1BR</td>
          <td>6</td>
          <td>652</td>
          <td>$795</td>
          <td>$25,049</td>
        </tr>

        <tr>
          <td>2BR</td>
          <td>28</td>
          <td>928</td>
          <td>$1083</td>
          <td>$33,075</td>
        </tr>

        <tr>
          <td>3BR</td>
          <td>26</td>
          <td>1238</td>
          <td>$1340</td>
          <td>$42,144</td>
        </tr>
      </StyledTable>

      <ul>
        <li>
          Dos Pinos members who itemize their income tax deductions are able to
          deduct their portion of the corporation's mortgage interest and real
          estate taxes. For 2021, proportional mortgage interest and real estate
          taxes were $1332 (1BR); $1896 (2BR); and $2268 (3BR).
        </li>

        <li>
          Each member's share value appreciates per criteria outlined in our
          Bylaws. The annual rate of appreciation is the prime interest rate (as
          of Jan 1st of each year) as reported by the Wall Street Journal up to
          a maximum of 10%. Historically, annual rates have ranged from 3.25% to
          10.0%.
        </li>

        <li>
          Shareholders may apply for Board approval for permanent improvements
          to their units with the cost of improvements, less depreciation, added
          to the share value of the unit within the terms of our Permanent
          Improvement Policy.
        </li>

        <li>
          There are minor transfer costs when memberships are purchased or sold,
          but no closing costs as would be paid when buying a house or
          condominium.
        </li>

        <li>
          <b>Approximate financial qualification for membership</b> is a monthly
          household gross income that is equal to or greater than 2.5 times the
          monthly assessment noted above.
        </li>
      </ul>

      <p>
        *{' '}
        <i>
          The maximum transfer value may be more. The share value and features
          associated with an individual unit may differ depending on
          Board-approved permanent improvements made by members, which add value
          to the share. Most shares have at least one permanent improvement.
        </i>
      </p>
    </div>
  );
};
