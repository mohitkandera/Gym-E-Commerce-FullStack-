import React , {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/website_logo.svg';

function Navbar() {
const [show, setShow] = useState(false);
// const [commercialShow, setCommercialShow] = useState(false);



  return (
    <div className='sticky-top fixed-top h-10'>
      <div className='d-flex bg-dark align-item-end justify-content-end text-align-end gap-1'>
        <Link to="" className='align-item-right justify-content-right text-white bg-dark pr-10 fw-bold h-6 pt-2 text-decoration-none'>Contact Us</Link>
        <Link to="/login" className='align-item-right justify-content-right text-white bg-dark pr-10 fw-bold h-10 pt-2 text-decoration-none'>Sign In</Link>
      </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 h-20">
        
        <div className="container-fluid  ">
         < img src={websiteLogo} alt="Logo"   width="200"  />
        <ul className="navbar-nav p-2 m-1 gap-3  fw-bold">
            <li className="nav-item" onMouseEnter = {() => setShow(true)} onMouseLeave = {() => setShow(false)} href="#">
              <a className="nav-link active nav-item dropdown" role="button" aria-current="page"  data-bs-toggle="dropdown" >HOME USE</a>
            <ul className="dropdown-menu show">
                <li><a className="dropdown-item" >Whey Protein</a></li>
                <li> <a className="dropdown-item"> Creatine</a></li>
                <li><a className="dropdown-item" > Mass Gainer</a></li>
           </ul>
            </li>
            <li className="nav-item" href="#">
              <a className="nav-link"  >COMMERCIAL USE</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#">GYM SUPPLEMENT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#">CELEBERITIES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#">BLOGS</a>
            </li>
           <li className="nav-item">
             <a className="nav-link" href = "#"> <FaSearch /></a>
            </li>
           <li className="nav-item">
             <a className="nav-link" href = "#"> <FaRegHeart /></a>
            </li>
           <li className="nav-item">
             <a className="nav-link" href = "#"> <FaOpencart /></a>
            </li>
            
          </ul>
         
        </div>
      </nav>
    </div>
  )
}

export default Navbar