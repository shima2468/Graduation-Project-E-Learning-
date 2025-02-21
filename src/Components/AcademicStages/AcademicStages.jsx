import React from 'react'
import styles from  './AcademicStages.module.css'
import englishClassImage from "../../assets/Prim.png";
import chemistryClassImage from "../../assets/level2.png";
import drawingClassImage from "../../assets/Level3.png";
import  bgImage from "../../assets/img1.png"
import  bgImage2 from "../../assets/img2.png"
// import  bgImage3 from "../../assets/img3.png"
import Primary from "../../assets/Primary.jpg"
import middel from "../../assets/Mideel.jpg"
import High from "../../assets/highSchool.jpg"
export default function AcademicStages() {

  return (
    <section className="relative py-8 " id="AcademicStage">
    <div className="container mx-auto px-4 py-16 ">
      {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center w-full gap-y-6 pb-8">
                              <h3 className="second-color xl:text-xl lg:text-lg font-semibold Section-header uppercase">Our Program</h3>
                              <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#20222E] xl:py-2 tracking-wider">
                                Our programs are designed to suit <br /> each student’s academic level.
                              </h2>
              </div>
            
                {/* Academic Stages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-8 lg:gap-x-4 lg:gap-y-0 md:gap-y-12 md:gap-x-7 sm:gap-y-12 justify-center ">
                  {/* Primary Stage */}
                  <div className="pt-[-40%] relative text-white rounded-2xl flex flex-col items-center bg-contain bg-no-repeat bg-center  justify-start  min-h-[450px]" style={{ backgroundImage: `url(${bgImage})` }}>
                      <div className="rounded-t-[900px] flex justify-center">
                        <img src={Primary} alt="English Class" className="xl:w-[280px] xl:h-[240px] lg:w-[240px] lg:h-[220px] md:w-[260px] md:h-[240px] sm:w-[280px] sm:g-[240px] lg:pt-10 md:pt-8 sm:pt-4  rounded-full xl:pt-4" />
                      </div>
                    <h3 className="xl:text-2xl lg:text-xl md:text-md sm:text-2xl font-bold mt-4">High Stage</h3>
                    <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm  mt-2">We teach students from (Grade 10-12)</p>
                    <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-4 text-center md:px-14 sm:px-40">
                      We prepare students for higher education and career paths with advanced learning and skill development.
                    </p>
                    <button className="absolute md:left-[38%] xl:top-[92%] lg:top-[87%] md:top-[92%] sm:top-[91%] sm:left-[42%] bg-[#20222E] text-white rounded-full p-4 shadow-lg">
                    →
                  </button>
                  </div>
            
                  {/* Middle Stage */}
                  <div className="pt-[-40%] relative text-white rounded-2xl flex flex-col items-center bg-contain bg-no-repeat bg-center  justify-start  min-h-[450px]" style={{ backgroundImage: `url(${bgImage2})` }}>
                      <div className="rounded-t-[900px] flex justify-center">
                        <img src={middel} alt="English Class" className="xl:w-[280px] xl:h-[240px] lg:w-[240px] lg:h-[220px] md:w-[260px] md:h-[240px] sm:w-[280px] sm:g-[240px] lg:pt-10 md:pt-8 sm:pt-4  rounded-full xl:pt-4" />
                      </div>
                    <h3 className="xl:text-2xl lg:text-xl md:text-md sm:text-2xl font-bold mt-4">Middel Stage</h3>
                    <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm  mt-2">We teach students from (Grade 10-12)</p>
                    <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-4 text-center md:px-14 sm:px-40">
                    We help students enhance critical thinking, problem-solving, and academic skills for a successful future
                    </p>
                    <button className="absolute md:left-[38%] xl:top-[92%] lg:top-[87%] md:top-[92%] sm:top-[91%] sm:left-[42%] bg-[#84BA3F] text-white rounded-full p-4 shadow-lg">
                    →
                  </button>
                  </div>
            
            
                  {/* High Stage */}
                  <div className="pt-[-40%] relative text-white rounded-2xl flex flex-col items-center bg-contain bg-no-repeat bg-center  justify-start  min-h-[450px]" style={{ backgroundImage: `url(${bgImage})` }}>
                      <div className="rounded-t-[900px] flex justify-center">
                        <img src={High} alt="English Class" className="xl:w-[280px] xl:h-[240px] lg:w-[240px] lg:h-[220px] md:w-[260px] md:h-[240px] sm:w-[280px] sm:g-[240px] lg:pt-10 md:pt-8 sm:pt-4  rounded-full xl:pt-4" />
                      </div>
                    <h3 className="xl:text-2xl lg:text-xl md:text-md sm:text-2xl font-bold mt-4">High Stage</h3>
                    <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm  mt-2">We teach students from (Grade 10-12)</p>
                    <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-4 text-center md:px-14 sm:px-40">
                    We prepare students for higher education and career paths with advanced learning and skill development.
                    </p>
                    <button className="absolute md:left-[38%] xl:top-[92%] lg:top-[87%] md:top-[92%] sm:top-[91%] sm:left-[42%] bg-[#20222E] text-white rounded-full p-4 shadow-lg">
                    →
                  </button>
                  </div>
            
                </div>
      </div>
  </section>
  
  
  

  
  
  


  )
}
