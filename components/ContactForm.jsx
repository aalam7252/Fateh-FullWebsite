import React from 'react';
import emaillogo from '../src/assets/Group 1419.svg'
import loclogo from '../src/assets/Group 1418.svg'
import image from '../src/assets/Mention-amico (1).svg'
import phone from '../src/assets/phone1.svg'
import path from "../src/assets/svg/Path 4731.svg"
import image2 from "../src/assets/Mask Group 3.png"
import Footer from './Footer';

const ContactForm = () => {
  return (
    <>
    <div className="bg-pink-100 bg-opacity-45 flex  flex-col items-center gap-10 justify-center min-h-screen">
      <div className='text-5xl font-serif font-extrabold'>Contact Us</div>
      <div className="max-w-2xl w-[100%] bg-white p-8 rounded-lg shadow-md">
        <form className='h-[55vh] font-serif'>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-slate-200 h-[80%]"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-slate-200 h-[80%]"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="tel" id="phone" name="phone" className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-slate-200 h-[80%]"/>
            </div>
            <div>
              <label htmlFor="services" className="block text-sm font-medium text-gray-700">Services Required</label>
              <select id="services" name="services" className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-slate-200 h-[80%]">
                <option>Service 1</option>
                <option>Service 2</option>
                <option>Service 3</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows="4" className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-slate-200 h-[80%]"></textarea>
            </div>
          </div>
          <div className="mt-6 h-[10%] flex justify-end">
            <button type="submit" className="px-4 py-2  border-2 border-[#BD9C00] rounded-sm font-serif hover:bg-yellow-600 hover:text-white shadow-sm bg-white text-[#BD9C00] w-[20%] focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-opacity-50  ">
              Send
            </button>
          </div>
        </form>
      </div>
        <div className='flex font-serif justify-between w-[40%] '>
          <div className='font-serif text-2xl'>Timings</div>
          <div className='flex justify-between w-[40%] items-center'><img src={emaillogo} alt="" /> <div className=''>Fatehtours@gmail.com</div></div>
        </div>
        <div className='flex justify-between w-[50%]  pl-[5%]  font-serif '>
          <div className='text-xl'>Sunday - Thursday <br /> 9:00 am - 6:00pm</div>
          <div className='flex justify-around w-[48%]   bg-opacity-50'><img className='w-[13%]' src={loclogo} alt="" /> <div className='text-[1rem] w-[70%] mr-3'>Building 520 1122 Rd No 2800, Riyadh, Kingdom of Saudi Arabia</div></div>
        </div>
    </div>

                                                      {/*After Form  */}
    <div className='flex font-serif flex-row justify-around  h-[50vh] mt-[53px]'>
      <div><img src={image} alt="" /></div>
      <div className='w-[40%]   h-[100%]  space-y-14'>
        <div className='w-[100%] font-bold  text-4xl'>You can directly reach to us </div>
        <div className='flex w-[60%] justify-between  text-1xl h-[15%]'>  <div className='h-[50%]'><img className='w-[100%] h-[100%] ' src={phone} alt="" /></div>    <div className='mr-1  '><img src={path} alt="" /></div>    <div className='text-[1.2rem]'>+996 123 456 789</div></div>
        <div className='flex w-[60%] justify-between '><img className=' ' src={emaillogo} alt="" />   <div><img src={path} alt="" /></div>    <div>Fatehtours@gmail.com</div></div>
        <div>
          <div className='flex justify-between w-[70%]'><img src={loclogo} alt="" /> <div className='flex w-[1%] ml-1'><img src={path} alt="" /></div> <div className='w-[55%]'>Building 519 1010 Rd No 2833, Riyadh, Kingdom of Saudi Arabia</div></div>
        </div>
      </div>
    </div>


    <div className='h-[50vh] mt-[10%] relative  font-serif text-white'><img src={image2} alt="" /> <div className='bg-[#BD9C00] absolute bg-opacity-80 left-0 right-0 bottom-0 top-[55%] place-items-center grid space-y-[-4%]'>Currently Operational in <br /> <span className='font-bold text-4xl font-serif'>Saudi Arabia</span></div></div>
    <Footer/>



    </>
  );
}

export default ContactForm;
