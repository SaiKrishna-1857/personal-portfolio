import React from "react";
import styles from '../PersonalPortfolio.module.css';
import profilePicture from '../assets/profile-picture.png';
import resumeFile from '../assets/SaiKrishna-Sangeetha-Resume.pdf';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

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
          <div className={styles.imageAndIcons}>
            <img 
              loading="lazy" 
              src={profilePicture}
              className={styles.heroImage} 
              alt="Portrait of Sai Krishna" 
            />
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/saikrishnas/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/SaiKrishna-1857" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/saikrishna_1857/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://x.com/SaiKrishna_1857" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:saikrishna.sangeetha@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
