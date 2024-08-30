import React from "react";
import styles from "../AboutMe.module.css";

function AboutMe() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutSection}>
                <h2>About Me</h2>
                <p className={styles.aboutDescription}>
                    Hello! I'm Sai Krishna Sangeetha, a passionate Full Stack Developer with experience in building scalable web applications. My journey in tech started with a fascination for how things work, leading me to pursue a Master's in Computer Science. I'm always eager to learn and experiment with new technologies.
                </p>
            </div>

            <div className={styles.interestsSection}>
                <h2>Personal Interests</h2>
                <p className={styles.interestsDescription}>
                    I love exploring the intersection of technology and agriculture, which led me to work on projects focused on soil analysis and precision farming. Apart from tech, I enjoy photography, traveling, and diving into the world of books, particularly science fiction and technology.
                </p>
            </div>

            <div className={styles.skillsSection}>
                <h2>Technical Skills</h2>
                <ul className={styles.skillsList}>
                    <li>JavaScript (React, Node.js)</li>
                    <li>Python (Django, Flask)</li>
                    <li>GraphQL, RESTful APIs</li>
                    <li>Docker, Kubernetes, AWS</li>
                    <li>MySQL, MongoDB, DynamoDB</li>
                    <li>CI/CD, Jenkins, GitHub Actions</li>
                </ul>
            </div>

            <div className={styles.hobbiesSection}>
                <h2>Hobbies</h2>
                <ul className={styles.hobbiesList}>
                    <li>Photography</li>
                    <li>Traveling</li>
                    <li>Reading Sci-Fi Books</li>
                    <li>Coding Personal Projects</li>
                </ul>
            </div>

            <div className={styles.certificationsSection}>
                <h2>Certifications</h2>
                <ul className={styles.certificationsList}>
                    <li>AWS Certified Solutions Architect – Associate</li>
                    <li>Certified Kubernetes Administrator (CKA)</li>
                    <li>Google Cloud Certified Professional Data Engineer</li>
                    <li>Certified Django Developer</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;