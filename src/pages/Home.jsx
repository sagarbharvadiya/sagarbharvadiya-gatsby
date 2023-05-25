import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import About from '../component/About'
import WhatIDo from '../component/WhatIDo'
import Project from '../component/Project'
import Contact from '../component/Contact'
import Footer from '../component/Footer'



const Home = () => {
  return (
    <>
    <Header/>
      <Banner />
      <About />
      <WhatIDo />
      <Project />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
