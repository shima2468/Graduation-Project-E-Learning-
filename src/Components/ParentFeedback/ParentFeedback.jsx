import React from 'react'
import styles from  './ParentFeedback.module.css'
import  Studentp from "../../assets/StudentP.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pencile from "../../assets/pencil.png"
import { Link } from 'react-router-dom'
import Student from '../../assets/Student1.png'
import Student3 from '../../assets/Student3.png'
export default function ParentFeedback() {
  return (
    <>
    <section className="relative " id="Testimonials">
    <div className="container mx-auto px-4 ">
      {/* Section Header */}
      <div className="flex flex-col ms-6 text-center w-full">
        <h3 className="text-[#84BA3F] md:text-xl sm:text-lg font-semibold">Testimonials</h3>
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#20222E] xl:py-6 tracking-wider">
          Parents' Words Are The Key <br /> To Happy Kids
        </h2>
      </div>
  
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  xl:gap-x-8 lg:gap-x-4 md:gap-x-7 md:gap-y-0 justify-center ">
        {/* Testimonial Card 1 */}
        <div className="relative ParentFeedback text-white  rounded-2xl flex flex-col  ">
                <div className="flex items-center justify-center flex-col md:p-8 p-20 ">
          
                      <p className="text-sm leading-relaxed">
                        Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi.
                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="border-t-2 border-white my-4 w-4  me-2" />
                        <p className="font-bold text-center">Wade Warren</p>
                      </div>
                </div>
         
        </div>
  
  
        {/* Testimonial Card 2 */}
        <div className="relative ParentFeedback2 text-white  rounded-2xl flex flex-col  ">
                <div className="flex items-center justify-center flex-col md:p-8 p-20">
          
                      <p className="text-sm leading-relaxed">
                        Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi.
                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="border-t-2 border-white my-4 w-4  me-2" />
                        <p className="font-bold text-center">Wade Warren</p>
                      </div>
                </div>
         
        </div>
  
        {/* Testimonial Card 3 */}
        <div className="relative ParentFeedback text-white  rounded-2xl flex flex-col  ">
                <div className="flex items-center justify-center flex-col md:p-8 p-20">
          
                      <p className="text-sm leading-relaxed">
                        Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi.
                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="border-t-2 border-white my-4 w-4  me-2" />
                        <p className="font-bold text-center">Wade Warren</p>
                      </div>
                </div>
         
        </div>
  
        
      </div>
    </div>
  </section>
    </>
  )
}
