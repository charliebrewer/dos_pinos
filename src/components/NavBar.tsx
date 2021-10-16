import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Items = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  background-color: black;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropbtn = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  &:focus {
    background-color: #444;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export default () => {
  const history = useHistory();

  return (
    <Items>
      <Dropdown>
        <Dropbtn onClick={() => history.push('/')}>Welcome</Dropbtn>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>About</Dropbtn>
        <DropdownContent>
          <StyledLink to="/history">History</StyledLink>
          <StyledLink to="/vision">Vision</StyledLink>
          <StyledLink to="/location">Location</StyledLink>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>{'Organization & Participation'}</Dropbtn>
        <DropdownContent>
          <StyledLink to="/organizationalStructure">
            Organizational Structure
          </StyledLink>
          <StyledLink to="/memberContribution">Member Contribution</StyledLink>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>{'Floor Plans & Finances'}</Dropbtn>
        <DropdownContent>
          <StyledLink to="/floorPlans">Floorplans</StyledLink>
          <StyledLink to="/financialInformation">
            Financial Information
          </StyledLink>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => history.push('/applicationProcess')}>
          Application Process
        </Dropbtn>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => history.push('/membersHandbook')}>
          Member's Handbook
        </Dropbtn>
      </Dropdown>

      {/* <Dropdown>
        <Dropbtn onClick={() => history.push('/faq')}>FAQ</Dropbtn>
      </Dropdown> */}
    </Items>
  );
};
