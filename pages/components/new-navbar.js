import React, { useState, useEffect } from 'react';
import { Button } from './Button';
// import { Link } from 'react-router-dom';
import Link from "next/link";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link href='#' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <Link href='#' className='nav-links' onClick={closeMobileMenu}>
              <li className='nav-item'>
                Home
                </li>
              </Link>
              <Link
                href='#'
                className='nav-links'
                onClick={closeMobileMenu}
              >
            <li className='nav-item'>
                Services
                </li>
              </Link>
              <Link
                href='#'
                className='nav-links'
                onClick={closeMobileMenu}
              >
            <li className='nav-item'>
                Products
                </li>
              </Link> 
              <Link
                href='#'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
            <li>
                Sign Up
                </li>
              </Link>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
