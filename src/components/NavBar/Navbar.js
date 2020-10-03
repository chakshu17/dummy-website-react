import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobilemMenu = ()=> setClick(false)
  
  const showButton = ()=>{
    if(window.innerWidth <=960){
      setButton(false)
    }
    else{
      setButton(true)
    }
  }

  useEffect(()=>{
    showButton()
  },[])

  window.addEventListener('resize',showButton)

  return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobilemMenu}>
						TRAVEL &nbsp; <i className="fa fa-bandcamp" aria-hidden="true"></i>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fa fa-times" : "fa fa-bars"} />
					</div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobilemMenu} >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobilemMenu} >
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobilemMenu} >
                Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobilemMenu} >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' >SIGN UP</Button> }
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
