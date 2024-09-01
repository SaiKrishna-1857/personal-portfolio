import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "../AboutMe.module.css";

function AboutMe() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.leftColumn}>
                <div className={styles.aboutSection}>
                    <h2>Hello! I'm Sai Krishna Sangeetha,</h2>
                    <p className={styles.aboutDescription}>
                        A passionate Full Stack Developer with experience in building scalable web applications. 
                        My journey in tech started with a fascination for how things work, leading me to pursue a Master's in Computer Science. 
                        I'm always eager to learn and experiment with new technologies. 
                        Apart from tech, I enjoy watching TV Shows, Cooking, Traveling, and playing outdoor sports, particularly Cricket or Badminton.
                    </p>
                </div>

                <div className={styles.hobbiesSection}>
                    <h2>Hobbies</h2>
                    <ul className={styles.hobbiesList}>
                        <li>Cooking</li>
                        <li>Watching TV Shows</li>
                        <li>Playing Cricket, Badminton</li>
                        <li>Coding Personal Projects</li>
                    </ul>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.skillsSection}>
                    <h2>Technical Skills</h2>
                    <ul className={styles.skillsList}>
                        <li>JavaScript (Angular, React, Node.js)</li>
                        <li>Python (Django, Flask, FastAPI)</li>
                        <li>GraphQL, RESTful APIs</li>
                        <li>Docker, Kubernetes, AWS</li>
                        <li>MySQL, MongoDB, DynamoDB</li>
                        <li>CI/CD, Jenkins, GitHub Actions</li>
                    </ul>
                </div>

                <div className={styles.certificationsSection}>
                    <h2>Certifications</h2>
                    <ul className={styles.certificationsList}>
                        <li>
                          <a href="https://www.credly.com/badges/f0777851-cd16-46a4-893b-45470ce8d548/public_url" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
                            AWS Certified Solutions Architect – Associate <FaExternalLinkAlt className={styles.externalLinkIcon} />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.freecodecamp.org/certification/SaiKrishna1857/responsive-web-design" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
                            Certified Frontend Developer-FreeCodeCamp <FaExternalLinkAlt className={styles.externalLinkIcon} />
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
