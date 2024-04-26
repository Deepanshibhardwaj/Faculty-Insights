import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className=" flexColStart hero-left">
                    <motion.div className="hero-title" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease: "backOut" }}>
                        <h1>
                            MAKING <br />
                            AN <br /> IMPACT
                        </h1>
                    </motion.div>

                    <motion.div className="flexColStart hero-des" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1, ease: "easeOut" }}>
                        <span className="secondaryText">Rendering strong foundation for a better tomorrow.</span>
                        <span className="secondaryText">Ranked in Top 100 Engineering institutions by MOE since 2016.</span>
                    </motion.div>
                </div>
                <div className="flexCenter hero-right">
                    <motion.div className="image-container" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}>
                        <img src="./building.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
