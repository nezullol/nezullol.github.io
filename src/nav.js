import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default class Nav extends React.Component {

  
  
  render () {
    function Togglemenu() {
   
      var link = document.getElementById('link').classList
     
      if (!link.contains('active'))
      {link.add('active')} else link.remove('active')

     
    } 
    return (
      <div className="Nav">

      <div className='hamburger'>
        <FontAwesomeIcon onClick={Togglemenu} icon={faBars} />
      </div>
<div id='link' >

      <Link className='link-item'  to="/">Home</Link>
      <Link className='link-item'  to="/About">About</Link>
      <Link className='link-item'  to="/Contact">Contact</Link>
      <Link className='link-item'  to="/Tetris">Tetris</Link>    
</div>
      </div>
  )
}
}
