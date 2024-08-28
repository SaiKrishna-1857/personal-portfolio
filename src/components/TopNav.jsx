// import React from "react";
// import styles from '../PersonalPortfolio.module.css';

// function TopNav() {
//   const menuItems = [
//     {name: 'Home', link: '#home'},
//     {name: 'Work Experience', link: '#work-experience'},
//     {name: 'Projects', link: '#projects'},
//     {name: 'Recent Works', link: 'recent-works'},
//     {name: 'Resume', link: 'resume'},
//     {name: 'Get in Touch', link: 'get-in-touch'}
//   ]

//   return (
//     <nav className={styles.topNav}>
//       <ul className={styles.topMenu}>
//         {menuItems.map((item, index) => (
//           <li key={index} className={styles.menuItem}>
//             <a href={item.link} className={styles.navButton}>
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <img 
//         loading="lazy" 
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c01ab42c5256028e2f6f00a6db97f41f4bd4207198bd69350fdaebff487eff3?placeholderIfAbsent=true&apiKey=98c9e91fe1d04bbb82d3fa6bf30848de" 
//         className={styles.logo} 
//         alt="Company logo" 
//       />
//     </nav>
//   );
// }

// export default TopNav;

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
          <Link to="/work-experience" className={styles.navButton}>Work Experience</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/projects" className={styles.navButton}>Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/recent-works" className={styles.navButton}>Recent Works</Link>
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
