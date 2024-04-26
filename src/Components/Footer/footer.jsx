import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import './footer.css';
import { MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      <div className="line"></div> {/* Thin horizontal line */}
      <section className="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">
          {/* Left side */}
          <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" className="logo-img" width={70}/>
            <div className="flexCenter location">
              <HiLocationMarker color="var(--blue)" size={25} />
              <span className="location-text"> A-10, Sector-62,JIIT Noida</span>
            </div>
          </div>


          <div classNmae="flexColStart f-right">
          <span className="primaryText">Quick Enquiry</span>

          <div className="flexCenter f-menu">
          <div className="icon-with-text">
          <MdPhone size={20}/>
          <span>Helpline No: +91-120-2400973</span>
          </div>
          <div className="icon-with-text">
          <MdEmail size={20}/>
          <span>admission@jiit.ac.in</span>
          </div>
    


          </div>
          


          </div>

          




        </div>
      </section>
    </div>
  );
}

export default Footer;
