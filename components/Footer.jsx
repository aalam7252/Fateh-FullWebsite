import React from 'react'
import imgfooter1 from "../src/assets/FATEH LOGO.png"
import facebook from "../src/assets/facebook.svg"
import linkedin from "../src/assets/linkedin.svg"
import twitter from "../src/assets/twitter.svg"
import mask from "../src/assets/Mask Group 5.svg"

const Footer = () => {
  return (
    <>
      <footer className=' w-[100%] h-[60vh]  bg-gradient-to-r bg-black justify-center relative'>

<div className='absolute'><img src={mask} alt="" /></div>

    <div className=' flex justify-center'><img className='mt-14' src={imgfooter1} alt="" /></div>
    
    <div className='flex justify-center font-serif mt-6 text-white'>
      <div className='flex  gap-10 '>
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
    </div>

    <div className='flex justify-center'>
      <div className='flex gap-8 mt-6'>
        <img src={facebook} alt="" />
        <img src={linkedin} alt="" />
        <img src={twitter} alt="" />
      </div>
    </div>

    <div className='flex h-24 text-white font-serif  justify-center items-end'>
      <div>All Rights Reserved for 2023</div>
    </div>
</footer>
    </>
  )
}

export default Footer