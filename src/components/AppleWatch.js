import React from 'react';
import Section from './Section';
import watch from '../assets/promo_logo_apple_watch_series_9__ckz0hbex0yeu_large.png';
import mywatch from "../assets/promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg";
import mac from "../assets/promo_macbook_air_m3__e43jegok3wuq_large.jpg";

function AppleWatch() {
  return (
    <div className='row d-lg-flex  justify-content-center'>
      <div className='col-lg-6'>
      <Section
        backgroundImage= {mywatch}
        subtitle="Smarter. Brighter. Mightier."
        image={watch}
        buttons={[
          { text: 'Learn More' },
          { text: 'Buy', outline: true },
        ]}
        textwhite={true}
      /></div>
      <div className='col-lg-6 '>
      <Section
        backgroundImage={mac}
        title="MacBook Air"
        subtitle="Lean. Mean. M3 Machine."
        buttons={[
          { text: 'Learn More' },
          { text: 'Buy', outline: true },
        ]}
      /></div>
    </div>
  );
}

export default AppleWatch;
