import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import fateh from './logos/FATEH LOGO.png';
import Services from './pages/Services';
import phone from"./assets/phone.svg"
import map from "./assets/map-pin.svg"


const App = () => {
  return (
    <Router>
      <nav className='   h-[20vh] mb-[2%] p-2'>
          <div className='h-[40%] bg-gradient-to-r text-white from-[#F6DB5A] to-[#BD9C00] place-content-end flex items-center'>
              <div className='flex w-[13%] justify-between'>
                <div className='pl-[10%] flex'><img src={phone} alt="" /></div>
                <div>+996 123 456 897</div>
              </div>

              <div className='ml-[2%] mr-[2%]'>|</div>
              <div className='flex w-[18%] justify-between'>
                <div className='flex pl-[7%]'><img src={map} alt="" /></div>
                <div>Al noor industrial area, Riyadh</div>
              </div>
              <div className='bg-red-500 h-[60%] w-[5%] text-white ml-[2%] mr-[2%] border-none rounded-sm flex items-center justify-center'>English</div>
          </div>
          


          <div className=' flex h-[60%] justify-between items-center box shadow-lg rounded-sm font-serif font-bold text-xl p-[2%]'>
            <div className='   '> 
            <img className='' src={fateh} alt="sahjdhskaj" />
          </div>
          <ul className='flex  w-[30%] justify-between '>
          <li>
            <Link className='' to="/home">Home</Link>
            {/* <div className='ml-3 mt-2'><img src={polygon} alt="" /></div> */}
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
