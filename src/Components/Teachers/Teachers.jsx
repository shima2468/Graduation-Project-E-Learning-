import React, { useState } from 'react'
import styles from  './Teachers.module.css'
import Teacher1 from '../../assets/01-6.jpg'
import Teacher2 from '../../assets/02-6.jpg'
import Teacher3 from '../../assets/04-4.jpg'
import Teacher4 from "../../assets/03-6.jpg"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pencile from "../../assets/pencil.png"
import { Link } from 'react-router-dom'
export default function Teachers() {
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "4%",
          height: "4%",
          background: "#84BA3F",
          borderRadius: "23px",
          border: "1px solid #84BA3F",
          cursor: "pointer",
          position:'absolute',
          top:"-20%",
          right:"1%",
          padding:"2%"
          
        }}
        onClick={onClick}
      >
      
      </div>
    );
  }
  function SamplePrevArrow(props) {


    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} `}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "4%",
          height: "4%",
          background: "#84BA3F",
          borderRadius: "23px",
          border: "1px solid #84BA3F",
          cursor: "pointer",
          position:'absolute',
          top:"-20%",
          left:"90%",
          padding:"2%"
        }}
        onClick={onClick}
      >
      
      </div>
    );
  }
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(83deg, rgba(132, 186, 63, 1) 0%, rgba(132, 186, 63, 1) 33%, transparent 100%)",
            width: "100px",
            height: "3px",
            marginRight: "10px",
            marginTop: "80px",
          }}
        ></div>
        <ul style={{ display: "flex", padding: "0", listStyle: "none", marginTop: "12px" }}>
          {dots}
        </ul>
        <div
          style={{
            background:
            "linear-gradient(83deg, rgba(132, 186, 63, 1) 0%, rgba(132, 186, 63, 1) 33%, transparent 100%)",
            width: "100px",
            height: "3px",
            marginLeft: "10px",
            marginTop: "80px",
          }}
        ></div>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#84BA3F",
          transition: "background 0.3s ease",
          marginTop: "40px",
        }}
        className={`custom-dot-${i}`}
      ></div>
    ),
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  

  return (
      <>
        <section className="relative py-8 " id="Teachers">
                <div className="container mx-auto py-16 relative px-4">
              
                <div className='flex flex-col justify-center  Teacher-header md:px-4'>
                                <h3 className="second-color xl:text-xl lg:text-lg md:text-md sm:text-sm font-semibold Section-header uppercase">
                                Our teachers
                              </h3>
                              <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold main-color my-6  tracking-wider ">
                                   Our Expert teachers
                              </h2>
                </div>
               
                 
                    {/* <Link to="teachers/teacherDetails"> */}
                    <div className="w-full py-10grid grid-cols-1 xl:grid-cols-4  gap-24 relative">
                                <Slider {...settings} >
                                  {/* البطاقة الأولى */}
                                  <div className="relative  flex flex-col items-center card-teach  xl:p-3 lg:p-2 md:p-1 sm:p-2 w-full">
                                    <a href="#">
                                      <img className="rounded-lg w-full" src={Teacher1} alt="Teacher 1" />
                                    </a>
                                    <div className="p-5 flex text-center justify-center items-center">
                                      <a href="#">
                                        <h4 className="mb-2 text-2xl font-bold tracking-tight main-color dark:text-white">
                                          Ali Ahmed
                                        </h4>
                                        <h5 className="text-[#20222E] -ms-[16px]">
                                          Mathematics Teacher
                                        </h5>
                                      </a>
                                    </div>
                                    <div className="absolute top-[5%] right-[3%] flex items-center justify-center group w-1/4 ">
                                      <button className="w-10 h-10 border-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out">
                                        <i className="fas fa-share-alt text-white"></i>
                                      </button>
                                      <div className="absolute top-[80%] flex flex-col gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center hover:bg-[#84BA3F] hover:text-white items-center w-10 h-10 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-facebook-f text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] hover:text-white focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-twitter text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social hover:bg-[#84BA3F]  flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-instagram text-[#84BA3F] "></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  {/* البطاقة الثانية */}
                                  <div className="relative  flex flex-col items-center card-teach xl:p-3 lg:p-2 md:p-1  sm:p-2 w-full">
                                    <a href="#">
                                      <img className="rounded-lg w-full" src={Teacher2} alt="Teacher 2" />
                                    </a>
                                    <div className="p-5 flex text-center justify-center items-center">
                                      <a href="#">
                                        <h4 className="mb-2 text-2xl font-bold tracking-tight main-color dark:text-white">
                                          Ali Ahmed
                                        </h4>
                                        <h5 className="text-[#20222E] -ms-[16px]">
                                          Mathematics Teacher
                                        </h5>
                                      </a>
                                    </div>
                                    <div className="absolute top-[5%] right-[3%] flex items-center justify-center group w-1/4">
                                      <button className="w-10 h-10 border-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out">
                                        <i className="fas fa-share-alt text-white"></i>
                                      </button>
                                      <div className="absolute top-[80%] flex flex-col gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center hover:bg-[#84BA3F] hover:text-white items-center w-10 h-10 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-facebook-f text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] hover:text-white focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-twitter text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social hover:bg-[#84BA3F]  flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-instagram text-[#84BA3F] "></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  {/* البطاقة الثالثة */}
                                  <div className="relative  flex flex-col items-center card-teach xl:p-3 lg:p-2 md:p-1  sm:p-2 w-full">
                                    <a href="#">
                                      <img className="rounded-lg w-full" src={Teacher4} alt="Teacher 3" />
                                    </a>
                                    <div className="p-5 flex text-center justify-center items-center">
                                      <a href="#">
                                        <h4 className="mb-2 text-2xl font-bold tracking-tight main-color dark:text-white">
                                          Ali Ahmed
                                        </h4>
                                        <h5 className="text-[#20222E] -ms-[16px]">
                                          Mathematics Teacher
                                        </h5>
                                      </a>
                                    </div>
                                    <div className="absolute top-[5%] right-[3%] flex items-center justify-center group w-1/4">
                                      <button className="w-10 h-10 border-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out">
                                        <i className="fas fa-share-alt text-white"></i>
                                      </button>
                                      <div className="absolute top-[80%] flex flex-col gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center hover:bg-[#84BA3F] hover:text-white items-center w-10 h-10 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-facebook-f text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] hover:text-white focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-twitter text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social hover:bg-[#84BA3F]  flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-instagram text-[#84BA3F] "></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  {/* البطاقه الرابعه */}
                                  <div className="relative  flex flex-col items-center card-teach xl:p-3 lg:p-2  sm:p-2 md:p-1 w-full">
                                    <a href="#">
                                      <img className="rounded-lg w-full" src={Teacher3} alt="Teacher 3" />
                                    </a>
                                    <div className="p-5 flex text-center justify-center items-center">
                                      <a href="#">
                                        <h4 className="mb-2 text-2xl font-bold tracking-tight main-color dark:text-white">
                                          Ali Ahmed
                                        </h4>
                                        <h5 className="text-[#20222E] -ms-[16px]">
                                          Mathematics Teacher
                                        </h5>
                                      </a>
                                    </div>
                                    <div className="absolute top-[5%] right-[3%] flex items-center justify-center group w-1/4">
                                      <button className="w-10 h-10 border-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 ease-in-out">
                                        <i className="fas fa-share-alt text-white"></i>
                                      </button>
                                      <div className="absolute top-[80%] flex flex-col gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center hover:bg-[#84BA3F] hover:text-white items-center w-10 h-10 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-facebook-f text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] hover:text-white focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-twitter text-[#84BA3F] "></i>
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social hover:bg-[#84BA3F]  flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-[#84BA3F] focus:ring-2 focus:ring-blue-300">
                                          <i className="fab fa-instagram text-[#84BA3F] "></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Slider>
                    </div>
                      

                    
                    
             
                </div>
        </section>



      </>
  )
}

