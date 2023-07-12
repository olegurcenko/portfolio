import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CardData } from './components/main/mainContent/experience/cards/cardData';
import { CardDataProjects } from './components/main/mainContent/projects/cards/cardDataProjects';
import stylesDesktop from './css/stylesDesktop.module.css';
import stylesMobile from './css/stylesMobile.module.css';

let getCurrentDimension = () => {
  return window.innerWidth
}
let windowWidth = getCurrentDimension();
let styles;
windowWidth > 800 ? (styles = stylesDesktop) : (styles = stylesMobile)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App s={styles} CardData={CardData} CardDataProjects={CardDataProjects}/>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
