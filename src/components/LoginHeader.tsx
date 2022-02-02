import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding: 20px;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

export const LoginHeader = () => {
  return <Header>
    <Logo src={logo} alt="logo" />
    <p>
      명당캠핑 어드민
    </p>
  </Header>
}