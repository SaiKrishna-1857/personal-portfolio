import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../PersonalPortfolio.module.css';
import resumeFile from '../assets/SaiKrishna-Sangeetha-Resume.pdf';

function TopNav() {
  return (
    <nav className={styles.topNav}>
      <ul className={styles.topMenu}>
        <li className={styles.menuItem}>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navButton} ${styles.activeNavButton}` : styles.navButton
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? `${styles.navButton} ${styles.activeNavButton}` : styles.navButton
            }
          >
            About Me
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? `${styles.navButton} ${styles.activeNavButton}` : styles.navButton
            }
          >
            Education
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/work-experience"
            className={({ isActive }) =>
              isActive ? `${styles.navButton} ${styles.activeNavButton}` : styles.navButton
            }
          >
            Work Experience
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.navButton} ${styles.activeNavButton}` : styles.navButton
            }
          >
            Projects
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navButton}
          >
            Resume
          </a>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/get-in-touch"
            className={({ isActive }) =>
              isActive ? `${styles.navButton} ${styles.activeNavButton}` : styles.navButton
            }
          >
            Get In Touch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
