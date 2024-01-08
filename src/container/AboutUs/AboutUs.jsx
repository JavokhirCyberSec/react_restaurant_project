import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app_bg flex__center section__ padding ' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G } alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__aboutus_h1'>
          About Us
        </h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__images' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nostrum vero quod accusantium, nobis sequi harum aspernatur 
          modi iste velit quo eum non mollitia earum sint, sit placeat
           ducimus reprehenderit laudantium!
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__aboutus_h1'>
          Our History
        </h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__images' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nostrum vero quod accusantium, nobis sequi harum aspernatur 
          modi iste velit quo eum non mollitia earum sint, sit placeat
           ducimus reprehenderit laudantium!
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
