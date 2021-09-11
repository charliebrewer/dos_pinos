import React from 'react';
import styled from 'styled-components';

const Items = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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

const DropdownContentA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export default () => {
  return (
    <Items>
      <Dropdown>
        <Dropbtn onClick={() => {}}>Welcome</Dropbtn>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>About</Dropbtn>
        <DropdownContent>
          <DropdownContentA href="#">History</DropdownContentA>
          <DropdownContentA href="#">Vision</DropdownContentA>
          <DropdownContentA href="#">Locaiton</DropdownContentA>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>{'Organization & Participation'}</Dropbtn>
        <DropdownContent>
          <DropdownContentA href="#">Organizational Structure</DropdownContentA>
          <DropdownContentA href="#">Member Contribution</DropdownContentA>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>{'Floor Plans & Finances'}</Dropbtn>
        <DropdownContent>
          <DropdownContentA href="#">Floorplans</DropdownContentA>
          <DropdownContentA href="#">Financial Information</DropdownContentA>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>Application Process</Dropbtn>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>Member's Handbook</Dropbtn>
      </Dropdown>

      <Dropdown>
        <Dropbtn onClick={() => {}}>FAQ</Dropbtn>
      </Dropdown>
    </Items>
  );
};
