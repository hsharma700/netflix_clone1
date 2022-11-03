import React from 'react';
import {Link} from "react-router-dom";
import * as mdb from 'mdb-ui-kit';
import {input} from 'mdb-ui-kit';
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
      <div class="input-group">
      <div class="form-outline">
      <input type="search" id="form1" class="form-control" />
      <label class="form-label" for="form1">Search</label>
       </div>
       <button type="button" class="btn btn-primary">
      <i class="fa-search"/>
      </button>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Header