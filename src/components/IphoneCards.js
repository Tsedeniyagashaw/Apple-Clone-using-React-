import React from 'react';
import Section from './Section';
import pic1 from "../assets/promo_iphone15pro__e48p7n5x3nsm_large.jpg";
import pic2 from "../assets/promo_iphone16_avail__cl72dn7xdfv6_large.jpg";

function IphoneCards() {
  return (
    <div className=' row  d-lg-flex justify-content-around'>
      <div className='col-lg-6'>
      <Section
        backgroundImage= {pic1}
        title="iPhone 15 Pro"
        subtitle="Titanium. So strong. So light. So Pro."
        buttons={[
          { text: 'Learn More' },
          { text: 'Buy', outline: true },
          
        ]}
        textwhite={true}

      /></div>
      <div className='col-lg-6'>
      <Section
        backgroundImage= {pic2}
        title="iPhone 16"
        subtitle="Hello, Apple Intelligence."
        buttons={[
          { text: 'Learn More',   light:true  },
          { text: 'Buy', outlineL: true },
        ]}
        textwhite={true}
      /></div>
    </div>
  );
}

export default IphoneCards;
