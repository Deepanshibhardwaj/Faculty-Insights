import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './Header.css';

const Header = () => {
  return (
    <motion.section className="h-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="flexCenter paddings innerWidth h-container">
        <motion.img src="./logo3.png" alt="logo" width={500} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} />
        <motion.div className="flexCenter h-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <motion.button className="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="">Login as Faculty</a>
          </motion.button>
          <motion.button className="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="">Login as Student</a>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Header;
