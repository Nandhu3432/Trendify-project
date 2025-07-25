import React from 'react';
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagran_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='fotter'>
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>TRENDIFY</p>
      </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>contact</li>
        </ul>
        <div className="footer-social-icon">
         <div className="footer-icons-container">
             <img src={instagran_icon} alt=""/>
         </div>
         <div className="footer-icons-container">
             <img src={pintester_icon} alt=""/>
         </div>
         <div className="footer-icons-container">
             <img src={whatsapp_icon} alt=""/>
         </div>
        </div>
            <div className="footer-copyright">
              <hr/>
               <p>Copyright @ 2025 All Right Reserved.</p>     

            </div>

    </div>
  );
};

export default Footer;


