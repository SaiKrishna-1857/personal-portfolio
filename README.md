# Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, work experience, projects, and more. It is designed to be a professional online presence where potential employers and collaborators can learn more about me and my work.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This portfolio website is built using modern web technologies and is fully responsive, ensuring a seamless experience on any device. It includes sections for my background, education, work experience, projects, and a contact form that sends messages directly to my email.

## Features

- **Home Page**: An introduction to who I am, including a professional photo and links to my resume and social media profiles.
- **About Me**: A detailed section about my background, technical skills, hobbies, and certifications.
- **Education**: Information about my academic qualifications.
- **Work Experience**: A timeline of my professional journey, highlighting my roles, responsibilities, and achievements.
- **Projects**: A showcase of my projects, each with a description and a link to the GitHub repository or live demo.
- **Contact Form**: A simple form that allows visitors to send me a message, integrated with EmailJS to deliver emails directly to my inbox.

## Technologies Used

- **Frontend**: 
  - [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [CSS Modules](https://github.com/css-modules/css-modules) - Modular and reusable CSS styles.
  - [React Router](https://reactrouter.com/) - For handling routing in the application.
  - [react-icons](https://react-icons.github.io/react-icons/) - Collection of popular icons for React.
  
- **Email Integration**: 
  - [EmailJS](https://www.emailjs.com/) - To handle form submissions and send emails directly from the client-side.

- **Hosting**: 
  - [GitHub Pages](https://pages.github.com/) - For hosting the website.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- npm (Node Package Manager) or yarn

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SaiKrishna-1857/personal-portfolio.git

2. Navigate to the project directory:

    ```bash
    cd personal-portfolio

3. Install the dependencies:

    ```bash
    npm install

### Running Locally

1. Start the development server:

    ```bash
    npm start

2. Open your browser and go to http://localhost:3000 to see the application in action.

### Customization

You can customize the content of the portfolio by editing the respective components in the src/components directory. Update your personal information, projects, and links as needed.

### Adding New Sections

If you want to add new sections (e.g., Awards, Testimonials):

	1.	Create a new component in the src/components directory.
	2.	Import the new component into App.jsx and add a new Route for it.
	3.	Update the TopNav component to include a link to the new section.

### Deployment

This portfolio is set up to be deployed to GitHub Pages.

Build the project:
1. Using npm:
	```bash
 	npm run build
2. Or using Yarn:
	```bash
	yarn build

3. Deploy to GitHub Pages:
Using npm:
    ```bash
    npm run deploy
4. Or using yarn:
    ```bash
    yarn deploy

The website will be available at https://SaiKrishna-1857.github.io/personal-portfolio/.

## Customization

### Changing Personal Information

	•	Profile Picture: Replace the profile-picture.png file in the src/assets/ directory with your own image.
	•	Text Content: Update the text content in the Home, AboutMe, Education, WorkExperience, and Projects components to reflect your personal details.

### Adding/Removing Projects

	1.	Add New Projects: In the Projects.jsx file, add a new project entry with its corresponding image, title, description, and link to the GitHub repository or live demo.
	2.	Remove Projects: Simply remove the corresponding project entry from the Projects.jsx file.

## Contact

If you have any questions or want to connect, feel free to reach out:

	•	Email: saikrishna.sangeetha@gmail.com
	•	LinkedIn: linkedin.com/in/saikrishnas/
	•	GitHub: github.com/SaiKrishna-1857
	•	Instagram: instagram.com/saikrishna_1857/
	•	Twitter: twitter.com/SaiKrishna_1857
