import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/main_logo.png" alt="Logo" className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
padding: 0 4.5rem;
height: 10rem;
backgroung-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-item: center;

.logo{
  height: auto;
  max-width: 25%;
}
`;

export default Header;
