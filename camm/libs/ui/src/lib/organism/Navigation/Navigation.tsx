import React, { useState } from 'react';
import {NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Search } from '../../molecules';
import styled from 'styled-components';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNav = styled.nav`
  background-color: blueviolet !important;
`;

export const Navigation = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <StyledNav className="navbar navbar-expand-sm bg-primary  navbar-dark">
      <div className="container">
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-brand">
              <NavLink exact to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </li>
            <NavDropdown className="nav-link" title="Account" id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to="/register">
                Sign Up
              </NavLink>
              <NavLink className="dropdown-item" to="/login">
                Sign In
              </NavLink>
            </NavDropdown>
          </ul>
          <Search />
        </div>
      </div>
    </StyledNav>
  );
};
