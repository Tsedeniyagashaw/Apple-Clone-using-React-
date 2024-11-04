import React from 'react';
import Section from './Section';
import card from '../assets/logo__dcojfwkzna2q_large.png';
import trade from '../assets/logo_tradein__d1fpktgipvki_large.png';
import cardimg from "../assets/tile__cauwwcyyn9hy_large.jpg";
import tradeimg from "../assets/promo_iphone_tradein__bugw15ka691e_large.jpg";

function TradeCard() {
  return (
    <div className='d-lg-flex justify-content-around  '>
      <div className='col-lg-6'>
      <Section
        backgroundImage= {cardimg}
        subtitle="Get up to 3% Cash back with every purchase."
        image={card}
        buttons={[
          { text: 'Learn More' },
          { text: 'Buy', outline: true },
        ]}
      /></div>
       <div className='col-lg-6 border-sm-1 border-md-3 border-top border-gray'>
      <Section
        backgroundImage= {tradeimg}
        subtitle="Get $170-$630 in credit when you trade in  iPhone 11 or higher."
        image={trade}
        buttons={[
          { text: 'Get your estimate' },
        ]}
      /></div>
    </div>
  );
}

export default TradeCard;
