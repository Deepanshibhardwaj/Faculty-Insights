import React from 'react'
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Education from '../../Components/Education/Education';
import Courses from '../../Components/Courses/courses';
import Footer from '../../Components/Footer/footer';
import Banner from '../../Components/Pages/banner';


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Education />
      <Courses />
      <Footer />
      <Banner/>
    </div>
  )
}

export default Home
