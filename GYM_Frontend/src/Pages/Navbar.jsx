import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import './Navbar.css';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/website_logo.svg';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");



  return (
    <div className='sticky-top fixed-top h-10'>
      <div className='d-flex bg-dark align-item-end justify-content-end text-align-end gap-1'>
         <Link to="" className='align-item-right flex  justify-content-right text-white bg-dark pr-10 fw-bold h-6 pt-2 text-decoration-none'><CiLocationOn/> Locator</Link>
        <Link to="" className='align-item-right justify-content-right text-white bg-dark pr-10 fw-bold h-6 pt-2 text-decoration-none'>Contact Us</Link>

        <Link to="/login" className='align-item-right justify-content-right text-white bg-dark pr-10 fw-bold h-10 pt-2 text-decoration-none'>Sign In</Link>

      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 h-20">

        <div className="container-fluid  ">
          < img src={websiteLogo} alt="Logo" width="200" />
          <ul className="navbar-nav d-flex flex-row gap-3 fw-bold align-items-center">

            {/* HOME USE */}
            <li
              className="nav-item dropdown position-relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a
                href="#"
                className="nav-link dropdown-toggle"
              >
                HOME USE
              </a>

              <ul
                className={`dropdown-menu mt-0 ${showDropdown ? "show" : ""}`}
              >
                <li>
                  <Link to="/treadmills"  className="dropdown-item">
                    TREADMILLS
                  </Link>
                </li>
                <li>
                  <Link  to="/treadmills" className="dropdown-item">
                    EXCERCISE BIKES
                  </Link>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    ELLIPTICAL CROSS TRAINERS
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    MULTI GYMS
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    ROWERS
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    WEIGHT AND BARS
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    BENCHES AND RACKS
                  </a>
                </li>
              </ul>
            </li>

            <li
              className="nav-item dropdown position-relative"
              onMouseEnter={() => setShowDropdown2(true)}
              onMouseLeave={() => setShowDropdown2(false)}
            >
              <a
                href="#"
                className="nav-link dropdown-toggle"
              >
                COMMERCIAL USE
              </a>

              <ul
                className={`dropdown-menu mt-0 ${showDropdown2 ? "show" : ""}`}
              >
                <li>
                  <a href="#" className="dropdown-item">
                    COMMERCIAL CARDIO
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    STRENGTH
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    BENCHES AND RACKES
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    WEIGHT AND BARS
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    MULTI GYMS
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    CROSSFIT 360
                  </a>
                </li>

              </ul>
            </li>

            <li
              className="nav-item dropdown position-relative"
              onMouseEnter={() => setShowDropdown3(true)}
              onMouseLeave={() => setShowDropdown3(false)}
            >
              <a
                href="#"
                className="nav-link dropdown-toggle"
              >
                GYM SUPPLEMENTS
              </a>

              <ul
                className={`dropdown-menu mt-0 ${showDropdown3 ? "show" : ""}`}
              >
                <li>
                  <a href="#" className="dropdown-item">
                    WHEY PROTEIN
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    CREATINE
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    MASS GAINER
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    FAT BURNERS
                  </a>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                CELEBRITIES
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                BLOGS
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaSearch />
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaRegHeart />
              </a>
            </li>

            <li className="nav-item" >
              <Link to="/Cart" className="nav-link" >
                <FaOpencart />
              </Link>
            </li>

          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar