import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';
import { FooterOverlay, Newsletter} from '../../components';
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Address Address Address Address</p>
        <p className='p__opensans'>Phone number</p>
        <p className='p__opensans'>Second phone number</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='fppter_logo' />
        <p className='p__opensans'>
          "The best way to find yourself is to 
          lose yourself in the service of others."
        </p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Moday - Friday:</p>
        <p className='p__opensans'>10:00 am - 11:00 pm</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>10:00 am - 12:00 am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Meat House. All Right Reserved.</p>
    </div>
  </div>
);

export default Footer;
