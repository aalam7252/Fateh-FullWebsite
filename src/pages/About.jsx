import React from 'react';
import img from '../logos/Image 3.png'
import Footer from '../../components/Footer';
const About = () => {
  return (
    <>
        <div className='flex relative h-[80vh]  pt-[5%] mt-[5%] bg-pink-100 rounded-lg bg-opacity-40'>
          <div className='absolute top-[5%] left-[10%] text-4xl font-serif font-bold'>About</div>
          <div className='absolute top-[20%] left-[10%] opacity-75 font-serif w-[40%] ' >Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Our expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance. With competitive pricing and access to superior consulting services, we have become the favored choice among travelers. Fateh Al Mustaqbil plays a pivotal role in shaping the landscape of travel and tour services not only within the Kingdom of Saudi Arabia but also on a global scale. Welcome to Fateh Al Mustaqbil, where we advocate exploring the world one adventure at a time. Come, be a part of this remarkable journey, and together, let's craft experiences that transcend time and place.</div>
          <div className='absolute top-[5%] right-[5%] '><img src={img} alt="" /></div>
        </div>
        <div className='mt-[8%]'><Footer /></div>
    </>
  );
};

export default About;
