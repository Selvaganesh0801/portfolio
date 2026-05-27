import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/main.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Main from './pages/main/main';
import PortfolioDetails from './pages/portfolio-details/portfolio-details';
import ContactList from './components/Contact/list';

function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
 
  const handleScroll = () => {
    AOS.refreshHard();
  };
 
  window.addEventListener('scroll', handleScroll);
 
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
     <HashRouter >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact/list" element={<ContactList />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        </Routes>
    </HashRouter >
    </>
  )
}

export default App
