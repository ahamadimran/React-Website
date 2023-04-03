import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.5rem;
      list-style: none;
      
      a{
        text-decoration: none;
      }
    }
    `;
  return (
    <Nav>
        <div className='menuIcon'>
            <ul className="navbar-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  );
};

export default Navbar;
