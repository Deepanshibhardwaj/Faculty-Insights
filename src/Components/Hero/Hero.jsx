import React from 'react';
import "./Hero.css";


const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className=" flexColStart hero-left">
                    <div className="hero-title">
                        <h1>

                            MAKING <br />
                            AN <br /> IMPACT
                        </h1>
                    </div>


                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Rendering strong foundation for a better tomorrow.</span>
                        <span className="secondaryText">Ranked in Top 100 Engineering institutions by MOE since 2016.</span>
                    </div>
                    
                    
                    

                    

                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./building.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;




















