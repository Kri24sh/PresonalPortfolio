import React from 'react';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import SocialLinks from './Component/SocialLinks';
import About from './Component/About';
import Project from './Component/Project';
import Experience from './Component/Experience'
import Contact from './Component/Contact'
function App() {

  return (
    <>
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
    </>
  )
}

export default App
