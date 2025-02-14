import React from 'react'
import styles from  './Hero.module.css'
export default function Hero() {
  return (
    <section id="home" className="relative  ">
    <div
      className="hero-content relative w-full flex flex-col  md:flex-row  mb-32 mt-32 md:mt-44
              items-center gap-20 md:gap-0  md:justify-between  "
    >
      {/* القسم الأيمن للصورة */}

      <div
        className=" right-section relative w-full md:w-1/2  flex justify-center items-center 
                 md:order-last "
      >
        
        
        <div className="bgHero absolute z-[-2] right-0 -top-[23%] w-[94%]    md:w-11/12     ">
          <img src={bgHero} alt="Background" className="w-full" />
        </div>

        <div className="relative w-[85%] -mr-[3%]">
          <img src={hero} alt="Hero Image" className="w-full rounded-lg" />

          <div className="bg-[#a6e05a] w-full h-full rounded-full absolute top-[2%] z-[-1] right-[5%]"></div>
        </div>
      </div>

      {/* القسم الأيسر */}
      <div className="left-section flex items-center xl:space-x-10 lg:space-x-6 md:space-x-3 w-full md:w-1/2 px-6  ">
        <div className=" md:flex flex-col dots items-center xl:space-y-4 lg:space-y-2 md:space-y-1   xl:ms-[-2%] lg:ms-[-2%] md:ms-[-4%]">
          {/* الخط العلوي */}
          <div className="xl:h-16  xl:w-[2px] lg:h-14 lg:w-[2px] md:h-12 md:w-[2px] bg-gradient-to-b from-[#84BA3F] to-transparent"></div>

          {/* الدائرة الأولى */}
          <div className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 bg-[#84BA3F] rounded-full my-2"></div>

          {/* الدائرة الثانية (المحاطة) */}
          <div className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4  border-2 border-[#84BA3F] rounded-full flex items-center justify-center my-2">
            <div className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 bg-[#84BA3F] rounded-full"></div>
          </div>

          {/* الدائرة الثالثة */}
          <div className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 bg-[#84BA3F] rounded-full my-2"></div>

          {/* الخط السفلي */}
          <div className="xl:h-16  xl:w-[2px] lg:h-14 lg:w-[2px]  md:h-12 md:w-[2px] bg-gradient-to-t from-[#84BA3F] to-transparent"></div>
        </div>

        <div className="hero-desc animate_animated  animate_fadeInUp ">
          <img
            src={doll}
            alt=""
            className="md:-mb-4 md:-ml-4 sm:ml-[185px] sm:-mb-4 md:w-18 sm:w-12  animate_animated animatebounce animate_infinite	infinite"
          />
          <div className="second-color xl:font-medium  mb-2">
            Welcome to Kidsa
          </div>
          <h1 className="hero-heading xl:text-6xl lg:text-5xl md:text-3xl sm:text-5xl font-bold main-color xl:leading-tight xl:tracking-wider lg:leading-tight lg:tracking-wide md:leading-tight md:tracking-wide">
            Start Your Journey<br></br> from{" "}
            <span className="second-color">Day One.</span>
          </h1>

          <p className="hero-p main-color xl:text-lg md:text-[15px] lg:text-md  sm:text-sm  mt-4">
            <span className="lg:block md:inline">
              Learn Smart, Grow with Confidence –{" "}
            </span>
            <span className="lg:block md:inline">
              Your Trusted Platform for Academic Success!
            </span>
          </p>

          <div className="hero-button flex space-x-4 xl:mt-12 xl:text-lg md:text-[15px] lg:text-md  sm:text-sm lg:mt-8 md:mt-8 md:justify-start sm:justify-center sm:mt-5">
            <button className="button1 bg-blue-400 sm:bg-slate-400 md:bg-amber-400 lg:bg-red-400 xl:bg-emerald-400 2xl:bg-purple-600  text-white xl:py-4 xl:px-8 lg:py-3 lg:px-6  md:py-2 md:px-4 sm:px-12 sm:py-3 rounded-2xl shadow-md hover:bg-[#658e30]">
              Explore More →
            </button>
            <button className="button1 border border-[#84BA3F] second-color xl:py-4 xl:px-8 lg:py-3 lg:px-6 md:py-2 md:px-4 sm:px-12 sm:py-3 rounded-2xl  hover:bg-[#c5ec91]">
              Get In Touch →
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}
