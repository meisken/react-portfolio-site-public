import React,{useEffect} from 'react';
import Portfolio from './components/portfolio/Portfolio.js'
import Home from './components/home/Home'
import WhatIDo from './components/what_i_do/WhatIDo'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import './style/index.css'


function App() {
  useEffect(() => {

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
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
