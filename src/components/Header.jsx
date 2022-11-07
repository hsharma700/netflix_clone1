import React from 'react';
import {Link} from "react-router-dom";
import Logonetflix from "../assets/Logonetflix.png"

function Header() {
  return (
    <>
    <nav className='header'>
      <img src={Logonetflix} alt='logo'/>
      <div className='div1'>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </div>
      <div className='div2'>
      <div className="input-group">
       
      </div>
      </div>
    </nav>
    </>
  )
}

export default Header