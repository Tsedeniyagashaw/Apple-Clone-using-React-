import React from 'react';
import Section from './Section';
import firstbg from "../assets/hero_apple_event_september__c2amjfe3dcqe_largetall.jpg";


function AppleEvent() {
  return (
<div className='' >
    <Section 
      backgroundImage={firstbg}      
      title="Apple Event"
      subtitle="Watch online on 9/9 at 10 a.m. PT."
      buttons={[{ text: 'Learn More' }]}
      alignBottom={true}
      textwhite={true}  
      home={true}  
    />
    </div>
  );
}

export default AppleEvent;
