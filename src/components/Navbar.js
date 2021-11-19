import { useState, React } from 'react';
import logo from '../assets/logo.jfif';
import { Link } from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import Nav from '../styles/Navbar.css';
const Navbar = () => {
  return (
      
    <div className='navbar'>
      <div className='leftside'>
        <img src={logo} alt='' />
      </div>
      <div className='righttside'>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
