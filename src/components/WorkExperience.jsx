import React from "react";
import styles from "../WorkExperience.module.css";
import agwiseLogo from "../assets/agwise-logo.png";
import ucfLogo from "../assets/ucf-logo.png";
import freshworksLogo from "../assets/freshworks-logo-white.png";

function WorkExperience() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <div className={styles.agwiseLogoWrapper}>
          <a href="https://www.agwise.io/" target="_blank" rel="noopener noreferrer">
            <img src={agwiseLogo} alt="AgWise Logo" className={styles.agwiseLogo} />
          </a>
          <p className={styles.agwiseLocation}>St Petersburg, FL</p>
        </div>
        <div className={styles.experienceDetails}>
          <h3 className={styles.jobTitle}>Senior Full Stack Developer</h3>
          <p className={styles.companyName}>AgWise LLC., Mar 2024-Present</p>
          <p className={styles.jobDescription}>
            Developed scalable web apps using Angular, Django, ensuring optimal performance, security, and user experience.
          </p>
          <p className={styles.jobDescription}>
            Improved response time of the application by mgrating from REST to GraphQL, enabling efficient data retrieval.
          </p>
          <p className={styles.jobDescription}>
            Architected and implemented an ETL system utilizing AWS Serverless Architecture to process customer CSV files and generate data-driven recommendations, increasing revenue by 30%. 
          </p>
          <p className={styles.jobDescription}>
            Pioneered CI/CD pipeline development using Bit Bucket, AWS CodePipeline, automating build uploads and cache invalidations, reducing manual deployment efforts by 100%.
          </p>
          {/* <p className={styles.jobDescription}>
            Collaborated with UI/UX developers to create responsive and accessible front-end components using Angular and Tailwind CSS.
          </p> */}
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.ucfLogoWrapper}>
          <a href="https://www.ucf.edu/" target="_blank" rel="noopener noreferrer">
            <img src={ucfLogo} alt="UCF Logo" className={styles.ucfLogo} />
          </a>
          <p className={styles.location}>Orlando, FL</p>
        </div>
        <div className={styles.experienceDetails}>
          <h3 className={styles.jobTitle}>Graduate Research Assistant</h3>
          <p className={styles.companyName}>University of Central Florida, August 2023 - May 2024</p>
          <p className={styles.jobDescription}>
            Developed a responsive UI using React and CSS Modules, incorporating dynamic dropdowns and real-time search displays. 
          </p>
          <p className={styles.jobDescription}> 
            Incorporated GraphQL endpoints with in a React framework to streamline and optimize data retrieval process.
          </p>
          <p className={styles.jobDescription}>
            Utilized JML annotations to define formal specifications for critical programs, ensuring adherence to intended functionality.
          </p>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.freshworksLogoWrapper}>
          <a href="https://www.freshworks.com/" target="_blank" rel="noopener noreferrer">
            <img src={freshworksLogo} alt="Freshworks Logo" className={styles.freshworksLogo} />
          </a>
          <p className={styles.location}>Chennai, India</p>
        </div>
        <div className={styles.experienceDetails}>
          <h3 className={styles.jobTitle}>Software Development Engineer</h3>
          <p className={styles.companyName}>Freshworks Inc., Jan 2019 - Jul 2022</p>
          <p className={styles.jobDescription}>
            Launched 20+ RESTful APIs in Ruby on Rails, integrating Microservices, Redis, for scalable and responsive infrastructure. 
          </p>
          <p className={styles.jobDescription}>
            Deployed 45+ highly efficient serverless APIs using AWS Lambda and API Gateway, optimizing performance. 
          </p>
          <p className={styles.jobDescription}>
            Developed and executed unit tests using RSpec, ensuring proper test coverage and functionality of new features. 
          </p>
          <p className={styles.jobDescription}>
            Implemented automation test suite using Selenium WebDriver, which increased test coverage &execution time by 50%. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
