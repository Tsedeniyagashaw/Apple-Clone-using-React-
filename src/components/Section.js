import React from 'react';


function Section({ backgroundImage, title, subtitle, buttons, image, alignBottom ,textwhite,home}) {
  return (
    <div className='container-fliud row '>
    <div  className='row col-12 pt-4 mybackground mb-2 d-flex flex-column justify-content-end'
         style={{ backgroundImage: `url(${backgroundImage})`, height: home ? '750px' : '620px' }}>
   
      <div className={`col text-center mb-2 d-flex flex-column ${alignBottom ? 'justify-content-end' : ''} ${textwhite ? 'text-white':''}  `} style={{ height: '100%' }}>
         {image && (
          <img className='pt-3 mb-0 mx-auto' src={image} alt={title} style={{maxWidth: '40%', height:'auto'}}/>
       
      )}
      
      
        {title && <h1 className='mytex'>{title}</h1>}
        {subtitle && <p className='mypar px-lg-5 px-1 mx-0 mx-lg-5 '>{subtitle}</p>}
        <div className='mb-4'>
          {buttons.map((button, index) => (
           <button key={index} className={`mybtn btn rounded-pill btn-oval ${ button.light ? ' btn-light' : ( button.outline? 'btn-outline-primary' :(button.outlineL? 'btn-outline-light' :'btn-primary'))} px-4 mx-2`}>
              {button.text}
            </button>
          ))}
        </div></div>
      </div>
    </div>
  );
}



export default Section;
