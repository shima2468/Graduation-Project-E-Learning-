import React from 'react'
import styles from  './Courses.module.css'
import childrenImage from "../../assets/children-image.webp"; 
import earlyLearningIcon from "../../assets/early-learning.webp"; 
import artAndCraftIcon from "../../assets/art-and-craft.webp"; 
import brainTrainIcon from "../../assets/brain-train.webp"; 
import musicAreaIcon from "../../assets/music-area.webp"; 
// import English from "../../assets/English.png"
// import Math from "../../assets/Math.jpg"
// import Arabic from "../../assets/Arabic.jpg"
import line from "../../assets/line-3.png"
import line2 from "../../assets/line-2.png"
import girle from "../../assets/girl.png"
import hung from "../../assets/hung.png"
import 'animate.css';
import light from "../../assets/banner-3-shape-5-corrected.webp"
import girl from "../../assets/girl_shirt_green_fixed.webp"
import line11 from "../../assets/line-3-colored.png"
import Arabic from "../../assets/Arabic_background_fixed.jpg"
import English from "../../assets/English_green.jpg"
import Math from "../../assets/Math2.png"
export default function Courses() {
  return (
    <>
      
      <section className="relative py-8 bg-[#F6F7FB] px-8 md:px-32" id="courses">
      <div className="container mx-auto ">
      <div className="absolute inset-0 w-full h-full -z-10"></div>
  
      <div className="flex flex-col  justify-center mb-16">
        <h3 className="second-color text-xl font-semibold Section-header uppercase">
            Popular Courses
        </h3>
        <h2 className="text-3xl font-bold main-color mt-3 tracking-wider">
             Discover Your  Course
        </h2>
      </div>
         
      
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Course Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative -mt-16 w-72 h-40 flex items-center justify-center">
              <img
                src={Arabic}
                alt="Arabic Class"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mt-4">Arabic Class</h2>
            <p className="text-gray-600 text-sm text-center mt-2">
            Immerse yourself in the beauty of the Arabic language and uncover its profound cultural heritage, rich history, and timeless elegance.
            </p>
            <div className="flex justify-between w-full text-gray-700 text-sm mt-4">
              <span className="text-md font-bold text-[#84BA3F]">Age: 2-5 y</span>
              <span className="text-md font-bold text-[#84BA3F]">Weekly: 5 Days</span>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative -mt-16 w-72 h-40 flex items-center justify-center">
              <img
                src={English}
                alt="English Class"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mt-4">English Class</h2>
            <p className="text-gray-600 text-sm text-center mt-2">
                Master the global language with confidence and enhance your communication skills, opening doors to new opportunities and cultural connections.

            </p>
            <div className="flex justify-between w-full text-gray-700 text-sm mt-4">
              <span className="text-md font-bold text-[#84BA3F]">Age: 2-5 y</span>
              <span className="text-md font-bold text-[#84BA3F]">Weekly: 5 Days</span>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative -mt-16 w-72 h-40 flex items-center justify-center">
              <img
                src={Math}
                alt="Math Class"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mt-4">Math Class</h2>
            <p className="text-gray-600 text-sm text-center mt-2">
            Develop critical problem-solving skills and enhance logical thinking through engaging and interactive math activities.
            </p>
            <div className="flex justify-between w-full text-gray-700 text-sm mt-4">
              <span className="text-md font-bold text-[#84BA3F]">Age: 2-5 y</span>
              <span className="text-md font-bold text-[#84BA3F]">Weekly: 5 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
