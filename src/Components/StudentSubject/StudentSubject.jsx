import React, { useState } from 'react'
import styles from  './StudentSubject.module.css'
import English from "../../assets/English.png"
import Math from "../../assets/Math.jpg"
import Arabic from "../../assets/Arabic.jpg"
export default function StudentSubject() {
  const [showSubjects, setShowSubjects] = useState(false);
  return (
      <>
         <section className="relative pt-14 px-8 md:px-24 " id="courses">
  <div className="container mx-auto flex flex-col relative z-10">
    {/* <!-- Section Header --> */}
    <h2 className="text-4xl font-extrabold text-[#f39f5f] tracking-widest mb-10 text-center">
      List of Materials
    </h2>

    {/* <!-- Course Cards --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
      {/* <!-- Single Card --> */}
      {[1, 2, 3 , 4,5,6].map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover"
            src={English}
            alt={`Course ${index + 1}`}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Course {index + 1}
            </h3>
            <p className="text-gray-600 mb-4">
              Learn something exciting and expand your knowledge.
            </p>
            <div className="w-full border-t-2 border-dotted border-indigo-300 mb-4"></div>
            <div className="grid grid-cols-3 gap-4 -ms-4 text-center text-sm text-gray-700">
              <div>
                <span className="block font-semibold text-[#f39f5f]">Age</span>
                <span>2-5 years</span>
              </div>
              <div>
                <span className="block font-semibold text-[#f39f5f]">
                  Weekly
                </span>
                <span>5 Days</span>
              </div>
              <div>
                <span className="block font-semibold text-[#f39f5f]">
                  Time
                </span>
                <span>2.30 Hrs</span>
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <button className="px-6 py-2 bg-[#f39f5f] text-white rounded-full hover:bg-indigo-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
      </>
   
  )
}
