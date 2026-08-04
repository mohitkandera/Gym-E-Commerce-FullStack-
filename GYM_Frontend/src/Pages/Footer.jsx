// import React from 'react'
import websiteLogo from '../assets/website_logo.svg';
import certified2 from '../assets/certified.jpg'

function Footer() {
    return (
        <div className='row h-220 bg-dark text-white p-5 border-top border-secondary border-bottom '>
            <div class="col-md-4 p-4 border-end border-bottom border-secondary">
                <div className='bg-white h-20 align-item-center justify-content-center d-flex'>  <img src={websiteLogo} alt="Logo" width="200" />
                </div>
               
                <p className='pt-20'>At PowerMax we are passionate about exercise and wellness.
                    Fitness is of the utmost importance in this day and lifestyle.More and more of us lead more sedentary, office-based lives as computers dominate many professions.</p>
                
               <div className='mt-20 align-item-center justify-content-center d-flex'>  <img src={certified2} alt="Logo" width="200" />
                </div>

            </div>
            <div class="col-md-4 p-4 border-end border-bottom border-secondary">
                <ul className='list-unstyled m-4 cursor-pointer '>
                    <h4 className=''>Quick Links</h4>
                       <li class="p-3">Home</li>
                    <li class="p-2">About</li>
                    <li class="p-2">Testimonials</li>
                    <li class="p-2">Our Clients</li>
                    <li class="p-2">Gallery</li>
                    <li class="p-2">Celebrities</li>
                    <li class="p-2">Blogs</li>
                    <li class="p-2">Press Release</li>
                    <li class="p-2">Contact Us</li>
                    <li class="p-2">Store Locator</li>
                    <li class="p-2">Become A Trade Partner</li>
                    <li class="p-2">Service & Support</li>
                    <li class="p-2">Equipment Repair / Services</li>
                </ul>
            </div>
            <div class="col-md-4 p-4 border-end border-bottom border-secondary">
                <ul className='list-unstyled m-4 cursor-pointer  '>
                    <h4 className=''>Shop By Category</h4>
                     <li class="p-2">Commercial Gym Setup</li>
                    <li class="p-2">Others</li>
                    <li class="p-2">Commercial Use</li>
                    <li class="p-2">Treadmills</li>
                    <li class="p-2">Strength</li>
                    <li class="p-2">Weight & Bars</li>
                    <li class="p-2">Exercise Bikes</li>
                    <li class="p-2">Elliptical Cross Trainers</li>
                    <li class="p-2">Multi Gyms</li>
                     <h4 className=''>Policies</h4>
                     <li class="p-2">Privacy Policy</li>
                    <li class="p-2">Terms & Conditions</li>
                    <li class="p-2">Shipping Policy </li>
                    <li class="p-2">Return & Refund</li>
                    <li class="p-2">Warrenty</li>
                </ul>
            </div>
            <div class="col-md-12 border-bottom border-secondary p-4">
                <p className='text-center'>© 2024 PowerMax Fitness Equipment Pvt. Ltd. All Rights Reserved.</p>
            </div>
            
        </div>
        
        
    )
}

export default Footer