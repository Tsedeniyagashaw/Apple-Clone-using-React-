import React, { useState } from 'react';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const [isClosing, setIsClosing] = useState(false); 

  const toggleMenu = () => { 
    if (isMenuOpen) {
      setIsClosing(true);  
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);  
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => { 
    setIsClosing(true);
    setTimeout(() => {   
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 400);        
  };

  const menuItems = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'Vision',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support',
  ];

  return (
    <div className='row'>
      <div className=' applee d-flex pt-0  mynav justify-content-lg-center justify-content-between fixed-top'>
        <div className='mx-0 mb-2 opacity-75 px-2 mt-2'>
        {!isMenuOpen && (   
            <>  
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
              </svg>
            </>
          )}
        </div>

        <ul className={`d-lg-flex pt-3 text-white opacity-75 list-unstyled myfont d-none ${isMenuOpen ? 'd-block' : 'd-none'} d-lg-flex`}>
          {menuItems.map(item => (
            <li key={item} className='mx-3'>{item}</li>
          ))}
        </ul>
        <div className='d-flex opacity-75'>
        {!isMenuOpen && (     
            <>
              <div className='mx-3 mb-2 pb-1 mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>

              <div className='mx-3 mb-2 pb-1 mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </div>
            </>
          )}
          <div className='mx-3 mb-2  pb-1 mt-2 d-lg-none d-block' onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" className="bi bi-x" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.5 1.5a.5.5 0 0 1 .707 0L8 7.293l5.793-5.793a.5.5 0 0 1 .707.707L8.707 8l5.793 5.793a.5.5 0 0 1-.707.707L8 8.707l-5.793 5.793a.5.5 0 0 1-.707-.707L7.293 8 1.5 2.207a.5.5 0 0 1 0-.707z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {(isMenuOpen || isClosing) && (
        <div className={`bg-black h-100 left-0  top-0 start-0 d-flex p-2  flex-column align-content-lg-start dropdown-menu ${isClosing ? 'hide' : isMenuOpen ? 'show' : ''}`}>
          <div className="close-button" onClick={closeMenu}>
          
          </div>
          <ul className="list-unstyled  fixed-top opacity-75  left-0  top-0 start-0 pt-5 px-2 pb-2 text-white">
            {menuItems.map(item => (
              <li key={item} className='mx-3 pb-2  fw-bolder fs-4 list-unstyled '>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;


