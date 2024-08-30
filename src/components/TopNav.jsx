import React from "react";
import { Link } from "react-router-dom";
import styles from '../PersonalPortfolio.module.css';
import resumeFile from '../assets/SaiKrishna-Sangeetha-Resume.pdf';

function TopNav() {
  return (
    <nav className={styles.topNav}>
      <ul className={styles.topMenu}>
        <li className={styles.menuItem}>
          <Link to="/" className={styles.navButton}>Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/about-me" className={styles.navButton}>About Me</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/education" className={styles.navButton}>Education</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/work-experience" className={styles.navButton}>Work Experience</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/projects" className={styles.navButton}>Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer"  className={styles.navButton}>Resume</a>
        </li>
        <li className={styles.menuItem}>
          <Link to="/get-in-touch" className={styles.navButton}>Get In Touch</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
