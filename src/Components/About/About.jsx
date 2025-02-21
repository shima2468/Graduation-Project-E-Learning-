
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
    <section className="relative  py-8" id="about-us">
    <div>
        
        <img src={leftshap} alt="" className="absolute left-0 xl:w-[50%] xl:h-[92%] lg:w-[50%] lg:h-[90%] md:w-[80%] md:h-[57%] lg:flex  z-[1] sm:hidden" />
        <img src={girlGreen} alt="" className="absolute xl:top-0 lg:top-[3%] right-[5%] animate-image xl:w-[15%] lg:w-[12%] md:w-[15%] sm:w-[20%]" />
    </div>

    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center lg:space-x-20 lg:py-0 md:py-0 md:space-y-4 sm:space-y-4">
        <div className="relative lg:w-1/2 md:w-full flex justify-center  ">
            <img src={About2} alt="About Image" className="w-[570px] animate__animated animate__zoomIn z-[2]" />
            <img src={line} alt="" className="absolute xl:left-[-3%] xl:top-[3%] lg:top-[4%] lg:left-[-5%] lg:w-[30%] md:w-[23%] md:left-[5%] md:top-[5%] sm:left-[-2%] sm:top-[3%] sm:w-[30%]" />
            <img src={circel} alt="" className="xl:w-[35%] lg:w-[32%] md:w-[30%] absolute xl:top-[10%] xl:left-[60%] lg:top-[5%] lg:left-[60%] md:left-[50%] md:top-[7%] sm:left-[65%] sm:top-[12%] sm:w-[30%]"/>      
        </div>
        <div className="lg:w-1/2 md:w-full flex flex-col xl:space-y-6 lg:space-y-4 sm:space-y-6 ">
            <div className="about-header flex flex-col space-y-6">
                <h3 className="second-color xl:text-xl lg:text-lg font-semibold Section-header uppercase">Why choose us?</h3>
                <h2 className="xl:text-3xl lg:text-xl md:text-2xl font-bold main-color mt-6 leading-snug tracking-wider">Simplifying the learning journey for all</h2>
                <p className="text-gray-600 xl:text-md lg:text-sm md:text-md leading-relaxed main-color">We provide a comprehensive and user-friendly School Management System designed to streamline administrative tasks, enhance communication, and improve the educational experience for schools, teachers, students, and parents.</p>
            </div>
            
            <div className="grid grid-cols-2 xl:gap-y-6 md:gap-y-4 xl:gap-x-16 lg:gap-x-10 md:gap-x-24 sm:gap-x-16">
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px]">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color text-lg">Flexible learning</span>
                </div>
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px]">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color xl:text-lg lg:text-md">Creative Environment</span>
                </div>
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px]">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color xl:text-lg lg:text-md">Professional Staff</span>
                </div>
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px]">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color xl:text-lg lg:text-md">Instant Access</span>
                </div>
            </div>
            
            <div className="flex items-center xl:space-x-6 xl:space-y-2 lg:space-x-4 lg:space-y-2 sm:space-x-6 ">
                <button className="bg-[#84BA3F] text-white text-lg xl:py-4 xl:px-10 lg:py-3 lg:px-7 sm:py-4 sm:px-10  rounded-full shadow-lg font-semibold hover:bg-[#658e30]">Explore More →</button>
                <div className="flex items-center space-x-3">
                    <div className="xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] sm:w-[60px] sm:h-[60px] border-[#84BA3F] border-2 bg-transparent rounded-full flex justify-center items-center">
                        <div className="call-to-action rounded-full xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center">
                            <i className="fa-solid fa-phone text-white text-lg"></i>
                        </div>
                    </div>
                    <div>
                        <span className="xl:text-md lg:text-sm md:text-md text-gray-500">Call Us Now</span>
                        <a href="tel:+2085550112" className="block xl:text-lg lg:text-md md:text-lg font-semibold text-gray-700 hover:bg-[#658e30]">+208-555-0112</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  
  
  );
}
