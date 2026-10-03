import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TreadmillsBG from '/src/Photos/TreadmillsPhoto/TreadmillsBG.jpg';
import Treadmillsmodel from '/src/Photos/TreadmillsPhoto/treadmil-model.jpg';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import products from '../Products';
import { useEffect } from 'react';
import { Carousel } from "bootstrap";
import { getProducts } from '../Services/ProductService';


function Treadmills() {

  const [openIndex, setOpenIndex] = useState(null);


  const [treadmill, settreadmill] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      const treadmillproduct = data.filter(
        product => product.categoryId === 1
      );

      settreadmill(treadmillproduct);
    } catch (error) {
      console.log(error);
    }
  }



  const addToCart = async (product) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://localhost:7036/api/CartItems",
        {
          productId: product.id,
          quantity: 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Added To Cart:", response.data);
      navigate("/cart");

      alert("Product Added To Cart");

    } catch (error) {
      console.log("Add To Cart Error:", error.response?.data || error);
      alert("Product could not be added to cart");
    }

  }


  const questions = [
    {
      question: "Will I Get To Make the Best Choice in Treadmills as per my Body Weight, Budget, and Space Constraints from the options available?",
      answer: "PowerMax Fitness offers a choice of 33 different options, from user-weights ranging from 90kg to 200k kg; manual to fully automated, motorized; MRP ranges from Rs.21,700/- to Rs.1,74,000/-."
    },
    {
      question: "Is the Home-Delivery And Installation free?",
      answer: "PowerMax Fitness offers FREE-delivery-and-installation across India. 'Installation' is a critical issue that most online sellers do not offer and even if they do, customers end up with dissatisfaction."
    },
    {
      question: "Will the Treadmill adequately get covered under a Warranty? Will I Find It Easy To Enforce My Warranty?",
      answer: "The need to enforce a warranty arises when the treadmill malfunctions during the warranty period. Brands that offer average options manage to do so, by compromising on product quality. Typical compromises are made in the quality and thickness of used belts; the quality and thickness of running boards; the quality of steel in the rollers and the power of the motor, most of which you would not even notice when buying. You may find other brands with slightly-lower prices, without the specification of major details which should be upfront with the customers. And when the issue starts to arise, which invariably does, they might not be able to give the right support."
    },
    {
      question: "Will I receive hassle-Free, Onsite, After-Sales Service for Repairs & Maintenance of The Treadmill?",
      answer: "PowerMax (India) has a country-wide network of servicing personnel that ensures that our customers get efficient onsite after-sales-repair-and-maintenance service in the fastest possible time. Unlike others, to ensure speed and quality of doorstep delivery, PowerMax does not outsource its after-sales service to any third party. The company manages this aspect centrally and for the entire country. We are not dependent on franchisees, contractors, or shop owners for after-sales service. Our company personnel covers the entire country, even the remotest village where we have our product Spares - the key issue in quick-repair-service PowerMax is the only company in the Indian fitness-equipment industry that invests in an adequate stock of spares. We never run out of essential spares that are required to get our treadmills up and running, if an issue arises, in the fastest possible time. When most major players have an average 2-months-downtime i.e. they take 2 months to replace the part that has malfunctioned in your treadmill you bought from them (putting you off exercising for that time), our average downtime is 5 days i.e. we take 5 days from the time you call with your problem and we set it right, with a replaced part. If in case, your treadmill does not require any replacement of parts but only servicing, the downtime comes down to 48 hours."
    },
    {
      question: "The Most Important Thing: Does Powermax have a local presence in my city/state?",
      answer: "Ahmednagar — Ahemdabad — Ajmer — Akola — Allahabad — Amravati — Aurangabad — Ballia — Bangalore — Bengaluru — Bhavnagar — Bhopal — Bhubaneshwar — Bihar — Bilaspur — Calicut — Chandigarh — Chennai — Chhatisgarh — Cochin — Coimbatore — Cuttack — Dehradun — Delhi — Ernakulam — Faridabad — Goa — Guntur — Gurgaon — Guwahati — Hassan — Hosur — Hubli — Hyderabad — Ichalkaranji — Indore — Jabalpur— Jaipur— Jalandhar— Jalgaon— Jammu & Kashmir— Jamnagar— Jhansi — Kannur— Kerala— Khammam — Kolhapur — Kolkata — Mangaluru — Meerut — Mumbai — Mysore — Nagpur — Nashik — New Delhi — Nilambur — Ongole — Parbhani — Patiala — Pune — Raipur — Rajkot — Sindhudurg — Sirsi — Srinagar — Surat — Thane — Thrissur — Trichur — Trichy — Udupi — Ulhasnagar — Vadodara — Valsad — Vijaywada — Vishakhapatnam — Warangal — Wayanad"
    }
  ];

  return (
    <>

      <Navbar />

      <div className="container-fluid p-0">
        <img
          src={TreadmillsBG}
          alt="Treadmills"
          className="img-fluid w-100 object-fit-contain"
          style={{ height: "650px" }}
        />
      </div>

      <div className="container my-5 border p-3 rounded-5 shadow-lg">
        <p className='text-uppercase text-danger fw-bold'>Smart buying assistant</p>
        <h1 className='fw-bold'>Compare & Personalize Treadmill Finder</h1>
        <p>Answer a few quick questions and find treadmill options that match your usage, space and budget.</p>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-4 fw-bold p-8"> Please ask these 5 MOST IMPORTANT QUESTIONS, before making a treadmill purchase decision:</h1>
      </div>

      <div className="container my-5  ">

        <ul className="list-unstyled">

          {questions.map((item, index) => (

            <li
              key={index}
              className="border-end rounded p-3 mb-3"
            >

              {/* Question + Button */}

              <div className="d-flex  justify-content-between align-items-center">

                <h5 className="mb-0">
                  {item.question}
                </h5>

                <button
                  className="btn box-shadow "
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                >
                  {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>

              </div>


              {/* Answer */}

              {openIndex === index && (

                <div className="mt-3 pt-3 border-top ">

                  <p className="mb-0 text-muted">
                    {item.answer}
                  </p>

                </div>

              )}

            </li>

          ))}

        </ul>
      </div>
      <div className='d-flex gap-6 pl-20 mt-30 m-10'>
        <button className='btn btn-success'>View All FAQs</button>
        <button className='btn btn-danger'>Call our Sales Specialist On +++++++++++++++++++++++++++++++++++++++91-8080-9090-269 Now!</button>

      </div>
      {/* <div className='d-flex gap-6 pl-20 m-10'>
        <button className='btn btn-warning'>Call our Services Specialist On +91-8080-9090-269 Now!</button>
        <button className='btn btn-success'>Click to Chat</button>
      </div>
      <div className='container mt-20 align-items-center text-center'>
        <h3>What do Powermax Treadmill model numbers actually mean?</h3>
        <img src={Treadmillsmodel} alt="" className='align-items-center text-center' />
      </div> */}


<div className="container my-5">
  <div className="p-4 rounded-4 shadow-sm bg-light">
    <div className="row align-items-center g-3">
      
      {/* Call Section */}
      <div className="col-lg-8 text-center text-lg-start">
        <h5 className="fw-bold mb-2">
          Need Help Choosing the Right Treadmill?
        </h5>
        <p className="text-muted mb-0">
          Speak with our Services Specialist for expert assistance.
        </p>
      </div>

      {/* Buttons */}
      <div className="col-lg-4">
        <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-2">
          <button className="btn btn-warning fw-semibold px-4 py-2">
            📞 Call Now
          </button>

          <button className="btn btn-success fw-semibold px-4 py-2">
            💬 Click to Chat
          </button>
        </div>
      </div>

    </div>
  </div>
</div>


{/* Treadmill Model Section */}
<div className="container my-5">
  <div className="text-center">
    
    <span className="badge bg-warning text-dark px-3 py-2 mb-3">
      TREADMILL GUIDE
    </span>

    <h3 className="fw-bold mb-3">
      What Do Powermax Treadmill Model Numbers Actually Mean?
    </h3>

    <p className="text-muted mb-4">
      Understand the model numbers and choose the right treadmill for your
      fitness requirements.
    </p>

    <div className="d-flex justify-content-center">
      <div className="card border-0 shadow rounded-4 overflow-hidden">
        <img
          src={Treadmillsmodel}
          alt="Powermax Treadmill Model Number Guide"
          className="img-fluid"
        />
      </div>
    </div>

  </div>
</div>



      <div className="container mt-5 mb-20">
        <h2 className='pb-20'>All Products</h2>

        <div className="row g-4">
          {treadmill.map((treadmill) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={treadmill.id}>
              <div className="card h-100 shadow border-0">

                <img
                  src={treadmill.imageUrl}
                  alt={treadmill.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{treadmill.name}</h5>

                  <p className="card-text flex-grow-1">
                    {treadmill.description}
                  </p>

                  <h5 className="text-success">₹{treadmill.price}</h5>

                  <button
                    type="button"
                    className="btn btn-primary mt-auto w-100"
                    onClick={() => addToCart(treadmill)}
                  >
                    Add To Cart
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
      
    </>
  );
}

export default Treadmills;