import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import About from '../component/About'
// import WhatIDo from '../component/WhatIDo'
import Project from '../component/Project'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Services from '../component/Services'



const Home = () => {
  return (
    <>
    <Header/>
      <Banner />
      <About />
      <Services/>
      {/* <WhatIDo /> */}
      <Project />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
