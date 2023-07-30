import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/contact logo.jpg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <img src={logo} alt="My logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li>
          <NavLink exact to="/" className={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={styles.active}>
            User Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.active}>
            log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={styles.active}>
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
