import React from 'react'
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Education from '../../Components/Education/Education';
import Courses from '../../Components/Courses/courses';
import Footer from '../../Components/Footer/footer';


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Education />
      <Courses />
      <Footer />
    </div>
  )
}

export default Home