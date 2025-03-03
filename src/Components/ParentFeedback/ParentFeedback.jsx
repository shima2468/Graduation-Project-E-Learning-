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
import { useTranslation } from "react-i18next";

export default function ParentFeedback() {
        const {t} = useTranslation();
  
  return (
    <>
    <section className="relative " id="Testimonials">
    <div className="container mx-auto px-4 ">
      {/* Section Header */}
      <div className="flex flex-col ms-6 text-center w-full justify-center items-center">
        <h3 className="text-[#84BA3F] md:text-xl sm:text-lg font-semibold Section-header "> {t('Testimonials.header')}</h3>
        <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#20222E] py-6 tracking-wider">
         
          {t('Testimonials.subheader')}
        </h2>
      </div>
  
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  xl:gap-x-8 lg:gap-x-4 md:gap-x-7 md:gap-y-0 justify-center ">
        {/* Testimonial Card 1 */}
        <div className="relative ParentFeedback text-white  rounded-2xl flex flex-col  ">
                <div className="flex items-center justify-center flex-col md:p-8 p-20 ">
          
                      <p className="text-sm leading-relaxed">
                      {t('Testimonials.testimonial1.text')}                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="border-t-2 border-white my-4 w-4  me-2" />
                        <p className="font-bold text-center">{t('Testimonials.testimonial1.name')}</p>
                      </div>
                </div>
         
        </div>
  
  
        {/* Testimonial Card 2 */}
        <div className="relative ParentFeedback2 text-white  rounded-2xl flex flex-col  ">
                <div className="flex items-center justify-center flex-col md:p-8 p-20">
          
                      <p className="text-sm leading-relaxed">
                      {t('Testimonials.testimonial2.text')}
                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="border-t-2 border-white my-4 w-4  me-2" />
                        <p className="font-bold text-center"> {t('Testimonials.testimonial2.name')}
                        </p>
                      </div>
                </div>
         
        </div>
  
        {/* Testimonial Card 3 */}
        <div className="relative ParentFeedback text-white  rounded-2xl flex flex-col  ">
                <div className="flex items-center justify-center flex-col md:p-8 p-20">
          
                      <p className="text-sm leading-relaxed">
                      {t('Testimonials.testimonial3.text')}
                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="border-t-2 border-white my-4 w-4  me-2" />
                        <p className="font-bold text-center">{t('Testimonials.testimonial3.name')}</p>
                      </div>
                </div>
         
        </div>
  
        
      </div>
    </div>
  </section>
    </>
  )
}
