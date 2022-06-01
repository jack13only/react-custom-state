import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { LINKS } from '../../shared/constants/routes';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <nav>
        <ul className="header__nav">
          {LINKS.map((route) => (
            <li key={route.to}>
              <NavLink
                to={route.to}
                style={({ isActive }) => (isActive ? { textShadow: '1px 1px 1px black' } : {})}
                className="header__link"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
