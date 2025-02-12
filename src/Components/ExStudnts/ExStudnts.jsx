import React from 'react'
import styles from  './ExStudnts.module.css'

import  Studentp from "../../assets/StudentP.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pencile from "../../assets/pencil.png"
import { Link } from 'react-router-dom'
import Student from '../../assets/Student1.png'
import Student3 from '../../assets/Student3.png'
export default function ExStudnts() {
  return (
    <section 
    className="relative bg-cover bg-center bg-no-repeat px-8 md:px-24" 
    id="Testimonials"
  >
    <div className="container mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col justify-center ms-6 text-center">
        <h3 className="text-[#84BA3F] text-lg font-semibold">Testimonials</h3>
        <h2 className="text-4xl font-bold text-[#20222E] my-4 tracking-wider">
          Parents' Words Are The Key <br /> To Happy Kids
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial Card 1 */}
        <div className="relative StudentEx text-white p-8 rounded-2xl flex flex-col">
        <p className="text-sm leading-relaxed">
            Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi.
          </p>
          <div className='flex justify-center items-center'>
          <hr className="border-t-2 border-white my-4 w-4 mx-auto me-2" />
          <p className="font-bold text-center">Wade Warren</p>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="relative StudentEx2 text-white p-8 rounded-2xl flex flex-col">
          <p className="text-sm leading-relaxed">
            Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi.
          </p>
          <div className='flex justify-center items-center'>
          <hr className="border-t-2 border-white my-4 w-4 mx-auto me-2" />
          <p className="font-bold text-center">Wade Warren</p>
          </div> 
         
        </div>

        {/* Testimonial Card 3 */}
        <div className="relative StudentEx text-white p-8 rounded-2xl flex flex-col">
        <p className="text-sm leading-relaxed">
            Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi.
          </p>
          <div className='flex justify-center items-center'>
          <hr className="border-t-2 border-white my-4 w-4 mx-auto me-2" />
          <p className="font-bold text-center">Wade Warren</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
