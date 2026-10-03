import React from 'react'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react';
import Excercisebike from '/src/Photos/ExcerciseBikes/excercisebike.jpg';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getProducts } from '../Services/ProductService';



function ExcerciseBikes() {


    const [openIndex, setOpenIndex] = useState(null);

    const[excerciseBikes, setExcerciseBikes] = useState([]);
      const navigate = useNavigate();
    


    useEffect(() => {
        loadExcerciseBikes();
    },[]);

    const loadExcerciseBikes = async () => {
        try{
            const data = await getProducts();
            console.log("ALL PRODUCTS:", data);

            const excerciseBikesData = data.filter (product => product.categoryId === 2 );

            setExcerciseBikes(excerciseBikesData);
        }catch(error){
            console.log("Error fetching excercise bikes:", error);
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
            question: "What is an Exercise Bike?",
            answer: "Most people have ridden a road bicycle at some time and an exercise cycle simulates the exercise almost exactly.Today they come in three types, upright exercise bikes, recumbent exercise bikes and what is now popularly called spinning bikes.An upright exercise bike seats you in the upright position, just like a road bicycle, whereas a recumbent exercise bike has a bucket seat and the pedals are out in front of you.The spinning bike is probably the nearest thing to real cycling and looks a bit like a mountain bike.The upright exercise bike is still the most popular but that may be because people believe that you get a much easier workout on a recumbent exercise cycle.This is a misconception, as anyone who has used a recumbent exercise bike will tell you.Recumbent exercise bikes also support the back and because your feet are level with your hips your blood pressure stays lower, so they can be a better choice if you suffer from high blood pressure.Spinning bikes are very popular in health clubs and gyms.They are used as a group exercise bike and are still perceived as professional gym equipment by many customers.However economical spinning bikes are now available designed more for the home."
    },
        {
            question: "Why Buy an Exercise Bike?",
            answer: "The humble exercise bike remains one of the most popular and affordable types of Fitness Equipment and it's easy to understand why. For starters, stationary exercise bikes offer a relatively inexpensive entry route for those seeking high-quality aerobic training gear without breaking the bank.This is because the engineering required to build a decent, reliable exercise bike is far more modest than for a Treadmill for example.The cycling movement itself is another reason; almost everyone can cycle, there's very little coordination required and the weight-bearing nature of the exercise makes it particularly easy on the hips, knees, and ankles - ideal for beginners, the elderly or those suffering/recovering from injury. The icing on the cake is that cycling is also a truly excellent cardiovascular exercise. You do not need to spend as much on an exercise cycle to get an effective piece of workout equipment as you would other types of exercise equipment."
        },
        {
            question: "What To Look For?",
            answer: "Whether its a Stationary Exercise Bicycle a Recumbent Exercise Cycle or a Spin Bike it is important to choose the Right Bike.."
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
                    src={Excercisebike}
                    alt="Treadmills"
                    className="img-fluid w-100 object-fit-contain"
                    style={{ height: "650px" }}
                />
            </div>

            <div className="container  my-5 border p-3 rounded-5 shadow-lg">
                <p className='text-uppercase text-danger fw-bold '>60-second exercise bike quiz</p>
                <h1 className='fw-bold'>Which Exercise Bike is actually right for you?</h1>
                <p>Answer 3 quick questions about your body, budget and space — we’ll score every exercise bike we sell and rank your best matches.</p>

                <button className='btn btn-danger'>Take the Quiz</button>

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

 <div className="container mt-5 mb-20">
        <h3 className=''>Discover your Favourite</h3>
        <h1>UPRIGHT BIKES</h1>

        <div className="row g-4">
            
          {excerciseBikes.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <div className="card h-100 shadow border-0">

                {/* <img
                //   src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                /> */}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="card-text flex-grow-1">
                    {product.description}
                  </p>

                  <h5 className="text-success">₹{product.price}</h5>

                  <button
                    type="button"
                    className="btn btn-primary mt-auto w-100"
                    onClick={() => addToCart(product)}
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
    )
}
}

export default ExcerciseBikes;