
import React from "react";
import teacherImage from "../../assets/teacher.webp"; 
import AboutImg from "../../assets/Group 1.png"
import checkIcon from "../../assets/check.webp"; 
import pencel from "../../assets/pencil-5.png"
import About2 from "../../assets/About2.png"
import leftshap from "../../assets/left-shape.png"
import girlGreen from "../../assets/girl-green-dress.png"
import circel from "../../assets/circle-1.png"
import line from "../../assets/line-shape-2-green.png"
import 'animate.css';

export default function About() {
  return (
    <section className="relative px-8 md:px-24" id="about-us">
      <div>
            <img src={circel} alt="" className="w-[15%] absolute top-[20%] left-[30%]"/>
            <img src={line} alt="" className="absolute left-[7%] top-[5%]" />
            <img src={leftshap} alt="" className="absolute left-0 xl:w-[50%] xl:h-[100%] " />
            <img src={girlGreen} alt="" className="absolute xl:top-0 lg:top-[3%] right-[5%] animate-image xl:w-[15%] lg:w-[15%]" />
      </div>
    
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-20 py-10">
      {/* صورة About */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img 
          src={About2} 
          alt="About Image" 
          className="xl:w-[570px] md:w-[110%] lg:w-[500px] md:max-w-[550px] lg:max-w-[750px] animate__animated animate__zoomIn"
        />
      </div>
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
        <h3 className="second-color xl:text-xl lg:text-lg md:text-md font-semibold Section-header uppercase">
             Why choose us?
        </h3>
        <h2 className="xl:text-3xl lg:text-xl md:text-lg  font-bold main-color mt-6 leading-snug tracking-wider">
          Simplifying the learning journey for all
        </h2>
        <p className="text-gray-600 lg:text-sm lg:mt-[0%] leading-relaxed main-color md:text-xs md:mt-[0%]">
          We provide a comprehensive and user-friendly School Management System
          designed to streamline administrative tasks, enhance communication, and
          improve the educational experience for schools, teachers, students, and
          parents.
        </p>
  
       
        <div className="grid grid-cols-2 gap-y-6 xl:gap-x-16 lg:gap-x-3 xl:mt-8 lg:mt-5 ">
          <div className="flex items-center space-x-3 rounded-full shadow-md xl:h-[50px] lg:h-[40px] md:h-[30px]">
          <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full xl:w-6 xl:h-6 lg:w-5 lg:h-5 flex items-center justify-center"></i>
            <span className="main-color xl:text-lg lg:text-md  ">
              Flexible learning
            </span>
          </div>
          <div className="flex items-center space-x-3 rounded-full shadow-md  xl:h-[50px] lg:h-[40px]">
          <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full xl:w-6 xl:h-6 lg:w-5 lg:h-5 flex items-center justify-center"></i>
            <span className="main-color xl:text-lg lg:text-md">
              Creative Environment
            </span>
          </div>
  
          <div className="flex items-center space-x-3 rounded-full shadow-md xl:h-[50px] lg:h-[40px]">
          <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full xl:w-6 xl:h-6 lg:w-5 lg:h-5 flex items-center justify-center"></i>
            <span className="main-color xl:text-lg lg:text-md ">
              Professional Staff
            </span>
          </div>
          <div className="flex items-center space-x-3 rounded-full shadow-md xl:h-[50px] lg:h-[40px]">
            <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full xl:w-6 xl:h-6 lg:w-5 lg:h-5 flex items-center justify-center"></i>
            <span className="main-color xl:text-lg lg:text-md ">
              Instant Access
            </span>
          </div>
        </div>
  
       
        <div className="flex items-center space-x-4 xl:mt-12 lg:mt-6">
          <button className="bg-[#84BA3F] text-white xl:text-lg lg:text-md  xl:py-4 xl:px-10 lg:px-4 lg:py-2 rounded-full shadow-lg  font-semibold hover:bg-[#658e30]">
            Explore More →
          </button>
          <div className="flex items-center space-x-3">
            <div className="xl:w-[60px] xl:h-[60px] lg:h-[40px] lg:w-[40px] border-[#84BA3F] border-2 bg-transparent rounded-full flex justify-center items-center">
              <div className="p-2 call-to-action rounded-full xl:w-[50px] xl:h-[50px] lg:w-[30px] lg:h-[30px] flex justify-center items-center">
                <i className="fa-solid fa-phone text-white xl:text-lg lg:text-md"></i>
              </div>
            </div>
  
            <div>
              <span className="xl:text-md lg:text-sm text-gray-500">Call Us Now</span>
              <a
                href="tel:+2085550112"
                className="block xl:text-lg lg:text-md font-semibold text-gray-700 hover:bg-[#658e30]"
              >
                +208-555-0112
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
}
