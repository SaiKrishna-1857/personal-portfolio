# Personal Portfolio

Senior full-stack portfolio built with React, TypeScript, and Tailwind CSS.

## Stack
- React 18 + TypeScript
- Tailwind CSS
- React Icons
- Create React App (`react-scripts`)

## Key Features
- Modern responsive single-page portfolio UI
- Theme toggle (light/dark)
- Animated hero and section reveals
- Mobile-friendly navigation and section flow
- Expand/collapse experience bullets for cleaner UX
- Architecture section with leadership-focused skills cloud
- Dedicated Published Papers section
- Resume download buttons (navbar + contact section)

## Project Structure
- `src/App.tsx`: page composition
- `src/data/portfolioData.ts`: centralized content (experience, projects, skills, education, nav)
- `src/components/sections/*`: modular section components
- `src/components/layout/*`: shared layout (navbar)
- `src/assets/*`: profile image, logos, resume, project assets

## Local Development
### Prerequisites
- Node.js 18+
- npm

### Install
```bash
npm install
```

### Run
```bash
npm start
```
Open `http://localhost:3000`.

### Build
```bash
npm run build
```

## Deployment
Configured for GitHub Pages.

```bash
npm run deploy
```

## Content Updates
To update portfolio content, edit:
- `src/data/portfolioData.ts`

Common updates:
- Resume file: replace `src/assets/SaiKrishna-Sangeetha-Resume.pdf`
- Profile photo: replace `src/assets/profilePicture.jpg`
- Experience/skills/projects/education: update corresponding exports in `portfolioData.ts`

## Contact
- Email: `saikrishna.sangeetha@gmail.com`
- LinkedIn: [linkedin.com/in/saikrishna-sangeetha](https://www.linkedin.com/in/saikrishna-sangeetha)
- GitHub: [github.com/SaiKrishna-1857](https://github.com/SaiKrishna-1857)
