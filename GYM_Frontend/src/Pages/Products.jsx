
 import './Navbar.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import massager from '../assets/massagechair.png';
import multiGym from '../assets/multigym.png';
import rower from '../assets/Rowers.png';
import ellipticals from '../assets/Elipticals.png';
import Traidmills from '../assets/Tradimills.png';
import ExerBikes from '../assets/ExerBikes.png';
import Cardio from '../assets/Cardio.png';
import Strength from '../assets/Strength.png';
import Crossfit from '../assets/Crosfit360.png';
import dumball from '../assets/dummbal.png';
import digitalstabiliser from '../assets/DigitalStabliser.png';
import wieghtscales from '../assets/weightscale.png';
import { CiDumbbell } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { VscSearchSparkle } from "react-icons/vsc";
import order1 from '../assets/order1.png'
import order2 from '../assets/order2.png'
import order3 from '../assets/order3.png'
import order4 from '../assets/order4.png'
import order5 from '../assets/order5.jpg'
// import order9 from '../assets/order9.png'
import order6 from '../assets/order8.png'
import order7 from '../assets/order7.png'
import order8 from '../assets/order6.png'
import React , {useState, useEffect } from 'react';
import location from '../assets/location.png';
import bus from '../assets/bus.png';
import mapIndia from '../assets/mapIndia.png';
import certified from '../assets/certified.png';
import Indulge from '../assets/Indulge.png';
import Vosta from '../assets/vosta.png';
import urbantrek from '../assets/urbantrek.png';
import { Link } from 'react-router-dom';

import Carousel  from "bootstrap/js/dist/carousel";
import { getProducts } from './Services/ProductService';

function Products() {


  const [products , setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [])

 const loadProducts = async () => {
  try{
    const data = await getProducts();
    setProducts(data);
  }catch(error){
    console.log(error);
  }
 }



useEffect(() => {
  const carouselElement = document.getElementById(
    "carouselExampleIndicators"
  );

  new Carousel(carouselElement, {
    interval: 3000,
    ride: "carousel",
    pause: false,
    wrap: true,
  });
}, []);
  


  return (
   <div className="container-fluid p-0 m-0">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" data-bs-interval="1000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img
  src={slide2}  
className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img
  src={slide1}
  className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img
  src={slide4}
  className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img
  src={slide5}
  className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className="h-55 gap-20 d-flex justify-content-evenly text-align-center align-items-center" style={{backgroundColor: '#EEEEEE'}}>
  
 <div className="text-center justify-content-center align-items-center">
    <h1 className="text-center justify-content-center align-items-center text-black pl-20"><CiDumbbell/></h1>
  <h2 className="text-center text-black">Commercial </h2>
  <h5 className='fw-normal'>GYM Setup Packages</h5>
 </div>
 <div className="bg-blue text-center justify-content-center align-items-center ">
  <h1 className="text-center text-black pl-20"><VscTools/></h1>
  <h2 className="text-center text-black">Support </h2>
   <h5  className='fw-normal'>Hassle-Free Support</h5>
 </div>
 <div className="bg-blue text-center justify-content-center align-items-center">
  <h1 className="text-center justify-con text-black pl-50"><VscSearchSparkle/></h1>
 <h2 className="text-center text-black">Personalised Equipment Finder </h2>
   <h5 className='fw-normal'>Equipment That Fits you</h5>
 </div>
</div>





 <div className="nav-item custom -border container text-left justify-content-left align-items-left border-dark h-50 pt-20 border-bottom ">
        <h3>Discover Your Favorites</h3>
        <h1 className=" text-uppercase">Explore by Category</h1>
 </div>
 
 
  <div className="row pt-20 p-10">

  {/* Left Half */}
  <div className="col-md-6">
    <div className="card h-100 card h-100 border-0 menu-item" style={{backgroundColor: '#EEEEEE',cursor:'pointer'}}>
       <span className="  text-right  align-items-right fw-8 text-white px-3 p-3 "style={{backgroundColor: '#FF0008'}} >TREADMILLS</span>
      <img src={Traidmills} className="card-img-top" />
     
    </div>
  </div>

  {/* Right Half */}
  <div className="col-md-6">
    <div className="row g-4">

      <div className="col-6">
        <div className="card h-100 card h-100 border-0 menu-item" style={{backgroundColor: '#EEEEEE',cursor:'pointer'}}>
       <span className="  text-right  align-items-right fw-8  fw-bold text-white px-3 p-3 "style={{backgroundColor: '#FF0008'}} >MULTI GYM</span>
      <img src={multiGym} className="card-img-top" />
        </div>
      </div>

      <div className="col-6">
        <div className="card h-100 card h-100 border-0 menu-item" style={{backgroundColor: '#EEEEEE',cursor:'pointer'}}>
       <span className="  text-right  align-items-right fw-8 fw-bold text-white px-3 p-3 "style={{backgroundColor: '#FF0008'}} >ROWERS</span>
      <img src={rower} className="card-img-top" />
        </div>
      </div>

      <div className="col-6">
       <div className="card h-100 card h-100 border-0 menu-item" style={{backgroundColor: '#EEEEEE',cursor:'pointer'}}>
       <span className="  text-right  align-items-right fw-8 text-white fw-bold px-3 p-3 "style={{backgroundColor: '#FF0008'}} >ELLIPTICALS</span>
      <img src={ellipticals} className="card-img-top" />
        </div>
      </div>

      <div className="col-6">
       <div className="card h-100 card  border-0 menu-item" style={{backgroundColor: '#EEEEEE',cursor:'pointer'}}>
       <span className="  text-right  align-items-right fw-8 fw-bold text-white px-3 p-3 "style={{backgroundColor: '#FF0008'}} >MASSAGE CHAIR</span>
      <img src={massager} className="card-img-top" />
        </div>
      </div>

    </div>
  </div>
  </div>

  <div className="row d-flex gap-1 pt-10 p-10" >
     <div className="col-3  h-100 card m-0 " style={{backgroundColor: '#EEEEEE' , width:'24%',cursor:'pointer'}}  >
   <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >EXERCISE BIKES</span>
      <img src={ExerBikes} className="card-img-top" />
  </div>

  <div className="col-3 h-100 card " style={{backgroundColor: '#EEEEEE' , width:'24%' , cursor:'pointer'}}>
    <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold " >COMMERCIAL CARDIO</span>
      <img src={Cardio} className="card-img-top" />
  </div>

  <div className="col-3 h-100 card "style={{backgroundColor: '#EEEEEE' , width:'24%',cursor:'pointer'}}>
   <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold " >STRENGTH</span>
      <img src={Strength} className="card-img-top" />
  </div>

  <div className="col-3 h-100 card "style={{backgroundColor: '#EEEEEE' , width:'24%',cursor:'pointer'}}>
   <span className=" text-right align-items-right fw-8 text-dark px-3 p-3 border-dark fw-bold" >CROSSFIT360</span>
      <img src={Crossfit} className="card-img-top" />
  </div>
  </div>



  <div className="row d-flex gap-2 pt-20 p-10">

      <div className="col-md-4 w-200 h-100 card  " style={{backgroundColor: '#EEEEEE', width:'32%'}}  >
   <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >WEIGHT 7 BARS</span>
      <img src={dumball} className="card-img-top" />
  </div>
      <div className="col-md-4 w-200 h-100 card  " style={{backgroundColor: '#EEEEEE', width:'32%'}}  >
   <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >WEIGHT SCALES</span>
      <img src={wieghtscales} className="card-img-top" />
  </div>
      <div className="col-md-4 w-200 h-100 card  " style={{backgroundColor: '#EEEEEE', width:'32%'}}  >
   <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >DIGITAL STABLISER</span>
      <img src={digitalstabiliser} className="card-img-top" />
  </div>
  </div>


  <nav className="navbar navbar-expand-lg bg-body-tertiary  mt-20">
    <div className="container-fluid  justify-content-center align-items-center p-2">
      <div className="w-150">
         <h3 className="fs-5 fw-light text-secondary">Discover The Latest addition</h3>
        <h1 className=" text-uppercase">Product category</h1>
      </div>
       
          <ul className="navbar-nav pt-10 gap-3 text-white  fw-bold">
                    <li className="nav-item  ">
                      <a className="nav-link text-dark  " href="#"  >TREADMILLS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark"  href="#">EXCERCISE BIKES</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark"  href="#">CROSSFIT 360</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark"  href="#">MULTI GYMs</a>
                    </li>
                  </ul>
        </div>
</nav>

<div className='row d-flex gap-3 pt-20'>

<div
  id="productSlider"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="container">
        <div className="row g-4">

         
            <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                  src={order1}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">FlipPad</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Motorised Treadmill With 400m Track
                </span>

                <h4 className="mt-2">₹81,250 </h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
            </div>
            <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                  src={order2}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">TDM-96B</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Motorised Tradmill with Bluetooth Connected
                </span>

                <h4 className="mt-2">₹21,999</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
            </div>
            <div className="col-md-3" >
              <div className="card p-3 text-center">

                <img
                  src={order3}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">VIBROPAD</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Dual Action Trademill With BLDC Motor
                </span>

                <h4 className="mt-2">₹25,158</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
            </div>
            <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                  src={order4}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">WALKPAD</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Motorised Tradmill With Remote Control
                </span>

                <h4 className="mt-2">₹25,499</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
            </div>
          

        </div>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <div className="container">
        <div className="row g-4">

          
            <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                     src={order5}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">GH-285</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Home Gym Fully Body Exercise Machine
                </span>

                <h4 className="mt-2">₹56,999</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
            
            </div>
              <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                     src={order6}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">Mass Gainer</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Weight Gain
                </span>

                <h4 className="mt-2">₹1499</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
              </div> 
            <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                     src={order7}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">GH-285</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Home Gym Fully Body Exercise Machine
                </span>

                <h4 className="mt-2">₹56,999</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
            
            </div>
              <div className="col-md-3" >
              <div className="card p-3 text-center h-100">

                <img
                     src={order8}
                  className="card-img-top"
                  alt="product"
                />

                <h5 className="mt-3">Mass Gainer</h5>

                <span
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Weight Gain
                </span>

                <h4 className="mt-2">₹1499</h4>

                <button className="btn btn-primary mt-2">
                  Add To Cart
                </button>

              </div>
              </div>
         

        </div>
      </div>
    </div>

  </div>

  {/* Previous Button */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#productSlider"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  {/* Next Button */}
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#productSlider"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>

  </div>
  
  </div>
  
      <div className="container block">
       <h2>All Products</h2>

       <div className="row ">
       {products.map((product) => (
          <div className="col-md-3 h-50" key={product.id}>
            <div className="card ">
              <img
                src={product.imageUrl}
                alt={product.name}
                width="200"
                height="200"
                className="card-img-top"
              />

              <div className="card-body h-50">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>₹{product.price}</p>

                <Link to='/Cart' className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="h-55 gap-30 mt-10 d-flex justify-content-evenly text-align-center align-items-center p-10" style={{backgroundColor: '#EEEEEE'}}>
  
 <div className="text-center justify-content-center align-items-center">
    <h1 className="text-center justify-content-center align-items-center text-black pl-15"><img src={location} alt="" /></h1>
  <p>On-Site Service Available Across India</p>
 </div>
 <div className="bg-blue text-center justify-content-center align-items-center ">
  <h1 className="text-center text-black pl-25"><img src={certified} alt="" /></h1>
<p>Guaranteed Quality With CE, GS, And ROHS Certified</p>
 </div>
 <div className="bg-blue text-center justify-content-center align-items-center">
  <h1 className="text-center justify-con text-black pl-20"><img src={bus} alt="" /></h1>
 <p>Free Delivery, Swift And Hassle-Free Shipping.</p>
 </div>
 <div className="bg-blue text-center justify-content-center align-items-center">
  <h1 className="text-center justify-con text-black pl-30"><img src={mapIndia} alt="" /></h1>
 <p>Nationwide Service Network On site service anywhere in India</p>
 </div>
</div>

<div className='pt-30 container align-item-center justify-content-center '>
  <h2 className='align-item-center justify-content-center fw-bold d-flex pb-10 '>OUR BRANDS</h2>
  <div className='justify-content-evenly d-flex gap-40'>
    <img src={Indulge} alt="" />
    <img src={Vosta} alt="" />
    <img src={urbantrek} alt="" />
  </div>
</div>

<div className='bg-dark text-white h-200'>
  <div className='container p-10'> 
    <h6 className='fw-light'>Hear It From The</h6>
    <h2>CELEBRITY THEMSELVES</h2></div>

</div>

</div>
  


  );
}

export default Products;



