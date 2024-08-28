// import React from 'react';
// import ReactDOM from 'react-dom';
// import PersonalPortfolio from './components/PersonalPortfolio';

// ReactDOM.render(
//   <React.StrictMode>
//     <PersonalPortfolio />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
