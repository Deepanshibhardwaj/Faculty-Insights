import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
            <img src="./logo3.png" alt="logo" width={500}/>
        
            <div className="flexCenter h-menu">
            
            <button className="button" >
                <a href="" >Login as Faculty </a>
                </button>
                <button className="button">
                <a href="">Login as Student</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header