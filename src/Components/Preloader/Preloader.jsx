import React, { useState } from 'react'
import styles from  './Preloader.module.css'
import { ClimbingBoxLoader } from 'react-spinners'
import logo from '../../assets/laptop-technology-with-book-bulb-idea_24877-53124-removebg-preview.png'
export default function Preloader() {
  // State للتحكم في إظهار أو إخفاء العنصر
  const [isVisible, setIsVisible] = useState(true);

  // دالة تشغيل عند انتهاء الحركة
  const handleAnimationEnd = () => {
    setIsVisible(false); // تحديث الحالة لإخفاء العنصر
  };
  if (!isVisible) return null;

  return (
        <>
            <div id="preloader" class="flex items-center justify-center fixed top-0 left-0 w-full h-full  z-[9999999]  " onAnimationEnd={handleAnimationEnd} >
                    <div class="flex flex-col items-center space-y-6 z-[1000]  animate-fadeOut">
                      <div class="w-36 h-36 border-4 border-gray-300 border-second-color rounded-full animate-spin "></div>
                     
                      <div class="flex text-5xl font-bold text-white justify-center items-center   ">
                      <img src={logo} alt="" className='w-[70px] h-[70px]' />
                        <span data-text-preloader="K" class="relative second-color animate-letters-loading animation-delay-0 ">E</span>
                        <span data-text-preloader="I" class="relative second-color animate-letters-loading animation-delay-200">D</span>
                        <span data-text-preloader="D" class="relative second-color animate-letters-loading animation-delay-400">U</span>
                        <span data-text-preloader="S" class="relative second-color animate-letters-loading animation-delay-600">C</span>
                        <span data-text-preloader="A" class="relative second-color animate-letters-loading animation-delay-800">A</span>
                        <span data-text-preloader="A" class="relative second-color animate-letters-loading animation-delay-1000">T</span>
                        <span data-text-preloader="A" class="relative second-color animate-letters-loading animation-delay-1200">E</span>
                      </div>
                    
                    </div>
                    <div class="absolute inset-0 flex">
                      <div class="w-1/4 node-bg animate-close-bg animation-delay-4000"></div>
                      <div class="w-1/4 bg-[#eee2cd] animate-close-bg animation-delay-4200" ></div>
                      <div class="w-1/4  node-bg  animate-close-bg animation-delay-4400"></div>
                      <div class="w-1/4 bg-[#eee2cd] animate-close-bg animation-delay-4600"></div>
                    </div>
                    
                </div>

        
        </>
  )
}
