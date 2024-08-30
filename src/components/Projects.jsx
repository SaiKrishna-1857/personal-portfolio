import React from "react";
import styles from "../Projects.module.css";
import project1Image from "../assets/foliar.png";
import project2Image from "../assets/ci-score.png";
import project3Image from "../assets/haney-ai.png";
import project4Image from "../assets/chatBot.png";
import project5Image from "../assets/deep-nn.png";
import project6Image from "../assets/nlp-project.png";
import project7Image from "../assets/CV-project.png";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectCard}>
        <img src={project1Image} alt="Foliar Script" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>FoliarScript</h3>
        <p className={styles.projectDescription}>
          Spearheaded Foliar Script using Angular, Django, GraphQL to generate recommendations based on plant tissue tests, featuring multi-user privilege functionality. Collaborated directly with laboratories, agronomists, and farmers to provide tailored solutions.
        </p>
        <a href="https://foliar.agwise.io/report/VpQXmZ" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          View my Work
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project2Image} alt="CI Score" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>CI-Score</h3>
        <p className={styles.projectDescription}>
          Programmed a Carbon Intensity Calculator adhering to IRS guidelines for 45Z and 40B tax credits, leveraging React, Django and GraphQL to provide precise recommendations for farmers, thereby optimizing tax credit eligibility and boosting revenue by 40%. Note: Development is in Progress, Mobile version is available to the public. 
        </p>
        <a href="https://ciscore.agwise.io/" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          View my Work
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project3Image} alt="Haney AI" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>Haney AI</h3>
        <p className={styles.projectDescription}>
          Developing a ML model using regression techniques to provide soil analysis recommendations to farmers, aiming a 40% increase in customer acquisition and revenue. Note: Development is Inprogress.
        </p>
        <a href="https://docs.google.com/presentation/d/1gtjZjzntn8qStD4U3csxCj4OF--UGJLX/edit?usp=sharing&ouid=114499748028290437514&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          View my Work
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project4Image} alt="ChatBot" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>GPT-Powered ChatBot</h3>
        <p className={styles.projectDescription}>
          Built a full-stack chatbot application using React (TypeScript) for the frontend and FastAPI (Python) for the backend. Integrated GPT-3.5 Turbo for responses, Redis for caching, and PostgreSQL for database management. 
        </p>
        <a href="https://github.com/SaiKrishna-1857/GPT-Powered-ChatBot" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          GitHub
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project5Image} alt="Deep Neural Networks" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>Deep Neural Networks Compression</h3>
        <p className={styles.projectDescription}>
          Proposed a novel CNN pruning criterion based on explainable AI ideas and transfer learning, achieving a 90% reduction in model size with accuracy of 83%.
        </p>
        <a href="https://github.com/SaiKrishna-1857/ML-Deep-Neural-Networks" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          GitHub
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project6Image} alt="NLP-BERT" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>Abusive Comments Identification</h3>
        <p className={styles.projectDescription}>
          Trained a BERT-based Machine Learning model pre-trained on the MURIL dataset to effectively detect abusive comments in diverse Indian languages. Achieved 81% of high accuracy for the proposed model.
        </p>
        <a href="https://github.com/SaiKrishna-1857/NLP-Abusive-Comments-Identification" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          GitHub
        </a>
      </div>

      <div className={styles.projectCard}>
        <img src={project7Image} alt="CV-Vision Transformer" className={styles.projectImage} />
        <h3 className={styles.projectTitle}>Enhancing Vision Transformers for Image Classification</h3>
        <p className={styles.projectDescription}>
          This project focuses on the enhancement of Vision Transformers for image classification tasks. It explores the Infused Adapter by Inhibiting and Amplifying Inner Activations (IA3) technique for fine-tuning Vision Transformers, particularly for image classification.
        </p>
        <a href="https://github.com/SaiKrishna-1857/NLP-Abusive-Comments-Identification" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
