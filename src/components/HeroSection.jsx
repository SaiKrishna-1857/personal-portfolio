import React from "react";
import styles from '../PersonalPortfolio.module.css';
import profilePicture from '../assets/profile-picture.png';
import resumeFile from '../assets/SaiKrishna-Sangeetha-Resume.pdf';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextColumn}>
          <div className={styles.headerText}>
            <div className={styles.headingAndSubheading}>
              <h1 className={styles.heading}>
                <span className={styles.name}>Sai Krishna, Sangeetha</span>
              </h1>
              <p className={styles.introText}>
                Senior Full Stack Developer at AgWise LLC
              </p>
            </div>
            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <span className={styles.ctaText}>View my Resume</span>
            </a>
          </div>
        </div>
        <div className={styles.heroImageColumn}>
          <div>
            <img 
              loading="lazy" 
              src={profilePicture}
              className={styles.heroImage} 
              alt="Portrait of Sai Krishna" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;