import React from 'react';
import pic1 from '../logos/Rectangle 1116.png'
import pic2 from '../logos/Rectangle 1118.png'
import pic3 from '../logos/Rectangle 1120.png'
import pic4 from '../logos/Rectangle 1118 copy.png'
import pic5 from '../logos/Rectangle 3901.png'
import pic6 from '../logos/Rectangle 1118 copy 2.png'
import pic7 from '../logos/Rectangle 1120 copy.png'
import pic8 from '../logos/Rectangle 1118 copy 3.png'
import Footer from '../../components/Footer';
const Services = () => {
  return (
    <>
    <div className='bg-pink-100 bg-opacity-80'>
      <div className='  text-center '>
        <h1  className='font-bold text-3xl font-serif'>Services by Fateh</h1>
        <h4 className='w-[736px] h-[56px] mx-auto  mt-5 opacity-70 font-serif flex'>Elevate your travel experience with our comprehensive and efficient solutions. We leverage a wide range of travel services, all aimed at making your travel journey smooth and enjoyable.</h4>  
      </div>
      <div className='relative flex h-[75vh]'>
          <div className=' flex w-[90%] h-[90%] ml-[10%] mt-[2%]'><img className='flex' src={pic1} alt="" /></div>
          <div className='absolute top-[6%] right-[48%] text-5xl font-serif'>01</div>
          <div className='absolute flex text-wrap w-[36%] top-[20%] right-[15%] text-4xl font-serif font-bold '>International And Domestic Flight Tickets</div>
          <div className='absolute top-[40%] right-[11%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] right-[41%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
      </div>
          {/* 2nd Container */}
      <div className='relative flex h-[75vh] '>
      <div className='absolute top-[6%] left-[10%] text-5xl font-serif'>02</div>
          <div className='absolute text-wrap w-[36%] top-[20%] left-[10%] text-4xl font-serif font-bold '>Hotel Reservation World Wide</div>
          <div className='absolute top-[40%] left-[10%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] left-[10%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
          <div className='absolute right-[10%] mt-9'><img src={pic2} alt="" /></div>
      </div>
      {/*3rd COntainer  */}
      <div className='relative flex h-[75vh]'>
          <div className=' flex w-[90%] h-[90%] ml-[10%] mt-[2%]'><img className='flex' src={pic3} alt="" /></div>
          <div className='absolute top-[6%] right-[48%] text-5xl font-serif'>03</div>
          <div className='absolute flex text-wrap w-[36%] top-[20%] right-[15%] text-4xl font-serif font-bold '>Visa Services</div>
          <div className='absolute top-[40%] right-[11%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] right-[41%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
      </div>
      {/* 4t Container */}
      <div className='relative flex h-[75vh] '>
      <div className='absolute top-[6%] left-[10%] text-5xl font-serif'>04</div>
          <div className='absolute text-wrap w-[36%] top-[20%] left-[10%] text-4xl font-serif font-bold '>International Driving License</div>
          <div className='absolute top-[40%] left-[10%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] left-[10%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
          <div className='absolute right-[10%] mt-9'><img src={pic4} alt="" /></div>
      </div>
      {/* 5th Container */}
      <div className='relative flex h-[75vh]'>
          <div className=' flex w-[90%] h-[90%] ml-[10%] mt-[2%]'><img className='flex' src={pic5} alt="" /></div>
          <div className='absolute top-[6%] right-[48%] text-5xl font-serif'>05</div>
          <div className='absolute flex text-wrap w-[36%] top-[20%] right-[15%] text-4xl font-serif font-bold '>Airport VIP Service (Meet & Greet)</div>
          <div className='absolute top-[40%] right-[11%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] right-[41%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
      </div>
      {/* 6t Container */}
      <div className='relative flex h-[75vh] '>
      <div className='absolute top-[6%] left-[10%] text-5xl font-serif'>06</div>
          <div className='absolute text-wrap w-[36%] top-[20%] left-[10%] text-4xl font-serif font-bold '>House Maid Transportation</div>
          <div className='absolute top-[40%] left-[10%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] left-[10%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
          <div className='absolute right-[10%] mt-9'><img src={pic6} alt="" /></div>
      </div>
      {/* 7th Container */}
      <div className='relative flex h-[75vh]'>
          <div className=' flex w-[90%] h-[90%] ml-[10%] mt-[2%]'><img className='flex' src={pic7} alt="" /></div>
          <div className='absolute top-[6%] right-[48%] text-5xl font-serif'>07</div>
          <div className='absolute flex text-wrap w-[36%] top-[20%] right-[15%] text-4xl font-serif font-bold '>Tourism Packages</div>
          <div className='absolute top-[40%] right-[11%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] right-[41%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
      </div>
      {/* 8th Container */}
      <div className='relative flex h-[75vh] '>
      <div className='absolute top-[6%] left-[10%] text-5xl font-serif'>08</div>
          <div className='absolute text-wrap w-[36%] top-[20%] left-[10%] text-4xl font-serif font-bold '>Umrah & Ziyara  Services</div>
          <div className='absolute top-[40%] left-[10%] h-[40%] flex opacity-80 w-[40%] font-serif'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
          <button className='absolute top-[75%] left-[10%] border-none text-white font-serif text-xl opacity-90 border-4 bg-[#BD9C00] w-[10%] h-[7vh] place-content-center   place-items-center  rounded-lg'>Get Started</button>
          <div className='absolute right-[10%] mt-9'><img src={pic8} alt="" /></div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
