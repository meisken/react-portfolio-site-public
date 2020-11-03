import React,{useEffect} from 'react';
import Portfolio from './components/portfolio/Portfolio.js'
import Home from './components/home/Home'
import WhatIDo from './components/what_i_do/WhatIDo'
import './style/index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration:1000
    });
    const oneHundredVh = () => {
      document.documentElement.style.setProperty('--100vh', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', oneHundredVh)
    oneHundredVh()
  },[])
  return (
    <div className="App">
      <Home></Home>
      <WhatIDo></WhatIDo>
     <Portfolio></Portfolio>
    </div>
  );
}

export default App;
