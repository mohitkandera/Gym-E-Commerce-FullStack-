
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
import { useState, useEffect } from 'react';
import location from '../assets/location.png';
import bus from '../assets/bus.png';
import mapIndia from '../assets/mapIndia.png';
import certified from '../assets/certified.png';
import Indulge from '../assets/Indulge.png';
import Vosta from '../assets/vosta.png';
import urbantrek from '../assets/urbantrek.png';
import { Link } from 'react-router-dom';
import Celebrity from '../assets/Celebrity.png'
import Celebrity2 from '../assets/Celebrity2.png'
import Celebrity3 from '../assets/Celebrity3.png'
import Celebrity4 from '../assets/Celebrity4.webp'
import economictimes from '../assets/economictimes.jpg'
import hindustantimes from '../assets/hindustantimes.jpg'
import midday from '../assets/midday.jpg'
// import outlook from '../assets/outlook.jpg'
import theenter from '../assets/theenter.jpg'
import theindiasaga from '../assets/theindiasaga.jpg'
import certified2 from '../assets/certified.jpg'
import bgAbout from '../assets/bgAbout.png'
import bigimg from '../assets/bigImg.jpeg'
import Contructor from '../assets/L&TContructor.jpg'
import paytm from '../assets/pytm.jpg'
import influncers from '../assets/influncers.jpg'
import thumbbharat from '../assets/thumbbharat.jpg'
import MRF from '../assets/mrf.jpg'
import Nhai from '../assets/Nhai.jpg'
import ProductSlider from './GymSupplement';
import Footer from './Footer';
import { FaArrowRight } from "react-icons/fa6";






import Carousel from "bootstrap/js/dist/carousel";
import { getProducts } from './Services/ProductService';

function Products() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
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


      <div className="h-55 gap-20 d-flex justify-content-evenly text-align-center align-items-center" style={{ backgroundColor: '#EEEEEE' }}>

        <div className="text-center justify-content-center align-items-center">
          <h1 className="text-center justify-content-center align-items-center text-black pl-20"><CiDumbbell /></h1>
          <h2 className="text-center text-black">Commercial </h2>
          <h5 className='fw-normal'>GYM Setup Packages</h5>
        </div>
        <div className="bg-blue text-center justify-content-center align-items-center ">
          <h1 className="text-center text-black pl-20"><VscTools /></h1>
          <h2 className="text-center text-black">Support </h2>
          <h5 className='fw-normal'>Hassle-Free Support</h5>
        </div>
        <div className="bg-blue text-center justify-content-center align-items-center">
          <h1 className="text-center justify-con text-black pl-50"><VscSearchSparkle /></h1>
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
          <div className="card h-100 card h-100 border-0 menu-item" style={{ backgroundColor: '#EEEEEE', cursor: 'pointer' }}>
            <span className="  text-right  align-items-right fw-8 text-white px-3 p-3 " style={{ backgroundColor: '#FF0008' }} >TREADMILLS</span>
            <img src={Traidmills} className="card-img-top" />

          </div>
        </div>

        {/* Right Half */}
        <div className="col-md-6">
          <div className="row g-4">

            <div className="col-6">
              <div className="card h-100 card h-100 border-0 menu-item" style={{ backgroundColor: '#EEEEEE', cursor: 'pointer' }}>
                <span className="  text-right  align-items-right fw-8  fw-bold text-white px-3 p-3 " style={{ backgroundColor: '#FF0008' }} >MULTI GYM</span>
                <img src={multiGym} className="card-img-top" />
              </div>
            </div>

            <div className="col-6">
              <div className="card h-100 card h-100 border-0 menu-item" style={{ backgroundColor: '#EEEEEE', cursor: 'pointer' }}>
                <span className="  text-right  align-items-right fw-8 fw-bold text-white px-3 p-3 " style={{ backgroundColor: '#FF0008' }} >ROWERS</span>
                <img src={rower} className="card-img-top" />
              </div>
            </div>

            <div className="col-6">
              <div className="card h-100 card h-100 border-0 menu-item" style={{ backgroundColor: '#EEEEEE', cursor: 'pointer' }}>
                <span className="  text-right  align-items-right fw-8 text-white fw-bold px-3 p-3 " style={{ backgroundColor: '#FF0008' }} >ELLIPTICALS</span>
                <img src={ellipticals} className="card-img-top" />
              </div>
            </div>

            <div className="col-6">
              <div className="card h-100 card  border-0 menu-item" style={{ backgroundColor: '#EEEEEE', cursor: 'pointer' }}>
                <span className="  text-right  align-items-right fw-8 fw-bold text-white px-3 p-3 " style={{ backgroundColor: '#FF0008' }} >MASSAGE CHAIR</span>
                <img src={massager} className="card-img-top" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="row d-flex gap-1 pt-10 p-10" >
        <div className="col-3  h-100 card m-0 " style={{ backgroundColor: '#EEEEEE', width: '24%', cursor: 'pointer' }}  >
          <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >EXERCISE BIKES</span>
          <img src={ExerBikes} className="card-img-top" />
        </div>

        <div className="col-3 h-100 card " style={{ backgroundColor: '#EEEEEE', width: '24%', cursor: 'pointer' }}>
          <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold " >COMMERCIAL CARDIO</span>
          <img src={Cardio} className="card-img-top" />
        </div>

        <div className="col-3 h-100 card " style={{ backgroundColor: '#EEEEEE', width: '24%', cursor: 'pointer' }}>
          <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold " >STRENGTH</span>
          <img src={Strength} className="card-img-top" />
        </div>

        <div className="col-3 h-100 card " style={{ backgroundColor: '#EEEEEE', width: '24%', cursor: 'pointer' }}>
          <span className=" text-right align-items-right fw-8 text-dark px-3 p-3 border-dark fw-bold" >CROSSFIT360</span>
          <img src={Crossfit} className="card-img-top" />
        </div>
      </div>



      <div className="row d-flex gap-2 pt-20 p-10">

        <div className="col-md-4 w-200 h-100 card  " style={{ backgroundColor: '#EEEEEE', width: '32%' }}  >
          <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >WEIGHT 7 BARS</span>
          <img src={dumball} className="card-img-top" />
        </div>
        <div className="col-md-4 w-200 h-100 card  " style={{ backgroundColor: '#EEEEEE', width: '32%' }}  >
          <span className="  text-right  align-items-right fw-8 text-dark px-3 p-3 fw-bold  " >WEIGHT SCALES</span>
          <img src={wieghtscales} className="card-img-top" />
        </div>
        <div className="col-md-4 w-200 h-100 card  " style={{ backgroundColor: '#EEEEEE', width: '32%' }}  >
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
              <a className="nav-link text-dark" href="#">EXCERCISE BIKES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">CROSSFIT 360</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">MULTI GYMs</a>
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


     <div className="container mt-5">
  <h2>All Products</h2>

  <div className="row g-4">
    {products.map((product) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
        <div className="card h-100 shadow border-0">

          <img
            src={product.imageUrl}
            alt={product.name}
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>

            <p className="card-text flex-grow-1">
              {product.description}
            </p>

            <h5 className="text-success">₹{product.price}</h5>

            <Link to="/Cart" className="btn btn-primary mt-auto w-100">
              Add To Cart
            </Link>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      <div className="h-55 gap-30 mt-10 d-flex justify-content-evenly text-align-center align-items-center p-10" style={{ backgroundColor: '#EEEEEE' }}>

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

      <div className='bg-dark text-white h-200 mt-20'>
        <div className='container p-10'>
          <h6 className='fw-light'>Hear It From The</h6>
          <h2>CELEBRITY THEMSELVES</h2></div>
        <div className='container d-flex  gap-10 justify-content-evenly p-5'>
          <div className='card bg-black border-0 text-white ' style={{ width: '60%' }}>
            <img src={Celebrity} alt="" />
            <h5 className='fw-bold p-2'>Manish Malthotra</h5>
            <p className='fw-bold p-2'>Fashion Designer</p>
          </div>
          <div className='card bg-black border-0 text-white' style={{ width: '60%' }}>
            <img src={Celebrity2} alt="" />
            <h5 className='fw-bold p-2'>Diana Panty</h5>
            <p className='fw-bold p-2'>Accteress</p>
          </div>
          <div className='card bg-black border-0 text-white' style={{ width: '60%' }}>
            <img src={Celebrity3} alt="" />
            <h5 className='fw-bold p-2'>Arman Malik</h5>
            <p className='fw-bold p-2'> Actor</p>
          </div>
          <div className='card bg-black border-0 text-white' style={{ width: '60%' }}>
            <img src={Celebrity4} alt="" />
            <h5 className='fw-bold p-2'>Shilpa Shetty</h5>
            <p className='fw-bold p-2'>Acctress</p>
          </div>
        </div>

      </div>
      <div className='align-item-center d-flex flex-column justify-content-center pt-20 pb-20'>
        <div className='text-center'>
          <p>Making Waves Across Platforms</p>
          <h1 className='text-uppercase'>Our brand proudly appeared on</h1>
        </div>
        <div className='d-flex gap-20 justify-content-center align-items-center pt-20'>
          <img src={economictimes} alt="" />
          <img src={hindustantimes} alt="" />
          <img src={theenter} alt="" />
          <img src={theindiasaga} alt="" />
          <img src={midday} alt="" />
        </div>
      </div>
      <div>
        <div className=' d-flex p-20 gap-20 bg-dark text-white justify-content-center align-items-center pt-20' style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        >
          <div className='container '> <h1 className='pb-5'>ABOUT POWERMAX</h1>
            <p className='fs-5'>PowerMax offers a diverse selection of fitness products for both domestic and commercial use. Our range includes top quality cardio equipment such as Treadmills, Exercise Bikes, Ellipticals, Rowers and more. Additionally, we facilitate an array of strength equipment like Home Gyms, Dumbbells and other strength machines, as well as fitness accessories such as Gym Shakers, Weight Scales, Steppers, Skipping Ropes and more.
              .</p>
            <p className='fs-5'> With a specialization in commercial gym setup, we serve a wide spectrum of clients, including Hospitality Sectors, Corporate Firms, Residential Buildings, Schools and Colleges. With a pan India presence and international expansion in locations like Dubai, the UK, Australia, Egypt and more, PowerMax is your trusted partner in achieving your fitness goals</p>
          </div>
          <div>
            <img src={certified2} alt="" />
          </div>
        </div>
        <div className=' d-flex '>
          <div className=' bg-red w-25 h-120'><img src={bigimg} alt="" /></div>
          <div className=' w-75 h-10 p-10 '>
            <h1 className='p-10 '>KNOW ABOUT TREADMILL ONLINE IN INDIA</h1>
            <p className='fs-7 '>Fitness In India Is Not Just A Fashion Mantra But It Has Become Part And Parcel Of Our Lifestyle. Fitness Conscious Indians Have Adopted Exercise In Their Routine Life. And When It Comes To Exercise, Running And Jogging Top The Chart. This Is Where Treadmill Plays An Important Role In Our Lives. Treadmill Is Widely Used By Calorie-Conscious Indians Today. Buy Treadmill Online Form Powermaxfitness.Net.</p>
            <p >These Treadmills Provide You Comfort In Usage As You Are Not Required To Go To Over-Crowded Joggers Parks Or Traffic Ridden Roads. You Can Place This Treadmill Anywhere In Your House, And Use Whenever You Feel Like Doing Exercise. Moreover, You Can Adjust The Speed Of Treadmills According To Your Comfort Level If You Want To Start Slow Or Just Like To Have A Walk, Adjust The Speed Accordingly. Once Your Warm-Up Is Done, You Canincrease The Speed Of Fitness Treadmill Belt. Another Benefit Of Treadmill In India Is That You Can Avoid Severe Seasons Like Monsoon, Winter And Summer. If Seasons Hamper Your Enthusiasm To Go Out And Run, These Treadmills Can Be Of Great Help. You Can Continuously Follow Your Regimen Without Any Interruption Due To Seasonal Changes.</p>
          </div>
        </div>
        <div className='text-center  justify-content-center align-items-center pt-20'>
          <div>
            <h5>Testimonials Speak Louder</h5>
            <h1 className='text-uppercase'>Hear What Our Clients Are Saying</h1>
          </div>
          <div className='mt-30'>
            <ProductSlider />
          </div>


        </div>
        <div className='align-item-center d-flex flex-column justify-content-center pt-20 pb-20'>
          <div className='text-center'>
            <p>Delivering Solutions That Matter</p>
            <h1 className='text-uppercase'>EQUIPMENT USED BY</h1>
          </div>
          <div className='d-flex gap-20 justify-content-center align-items-center pt-20'>
            <img src={MRF} alt="" />
            <img src={paytm} alt="" />
            <img src={Nhai} alt="" />
            <img src={influncers} alt="" />
            <img src={Contructor} alt="" />
            <img src={thumbbharat} alt="" />
          </div>
        </div>


        <div className='align-item-center d-flex flex-column justify-content-center pt-20 pb-20'>
          <div className='text-center'>
            <p>Take the first step towards a healthier you</p>
            <h1 className='text-uppercase'>sign up and stay ahead with
            </h1>
            <h1 className='text-uppercase'>our fitness equipment</h1>
          </div>
          <div className='d-flex  justify-content-center align-items-center pt-20'>
            <input type="text" placeholder='Email Address' className='p-3 w-150 bg-light' />
            <button className='btn btn-primary p-3'><FaArrowRight/></button>
          </div>
        </div>
        <div className='  bg-dark text-white'>
          <Footer/>
          </div>
        

      </div>

    </div>



  );
}

export default Products;



