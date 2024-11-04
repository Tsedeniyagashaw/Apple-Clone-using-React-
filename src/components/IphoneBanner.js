import React from 'react';
import Section from './Section';
import visio from '../assets/promo_logo_ai__uudkz2u7mfm6_large.png';
import secondBackground from '../assets/hero_imac_announce__bgzothdqlpjm_largetall.jpg';

function Second() {
  return (
    <div className=''>
    <Section
      backgroundImage={secondBackground}
      
      subtitle="You've never seen everything like this before."
      image={visio}
       buttons={[
          { text: 'Learn More'},
          { text: 'Buy', outline: true },
        ]}
   
      
    /></div>
  );
}

export default Second;
