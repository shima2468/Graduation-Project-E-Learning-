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
    <section className="relative w-full  py-6" id="AcademicStage">
   
    <div className="absolute inset-0 w-full h-full -z-10"></div>
  
    <div className="flex flex-col items-center justify-center">
      <h3 className="second-color text-xl font-semibold Section-header uppercase">
        Our Programer
      </h3>
      <h2 className="text-4xl font-bold main-color my-6 tracking-wider text-center">
        Our programs are designed to suit <br /> each student’s academic level.
      </h2>
    </div>
  
    {/* القسم الخاص بالكروت */}
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-0">
      {/* الكارت الأول */}
      <div className="buble relative pb-28" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="rounded-t-[900px] flex justify-center">
          <img src={Primary} alt="English Class" className="w-[280px] h-[270px] rounded-full pt-14" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white text-2xl font-bold mt-6">Primary Stage</h3>
          <p className="text-white text-md font-medium mt-2">We teach students from (6-12 years)</p>
          <p className="text-white text-sm mt-4 text-center px-12">
           
             We provide a fun and engaging learning experience for young students to build foundational skills and curiosity.
          </p>
        </div>
        <button className="absolute left-[38%] top-[87%] bg-[#20222E] text-white rounded-full p-4 shadow-lg">
          →
        </button>
      </div>
  
      {/* الكارت الثاني */}
      <div className="buble relative pb-28" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className="overflow-hidden w-full rounded-t-[900px] flex justify-center">
          <img src={middel} alt="Chemistry Class" className="w-[280px] h-[270px] rounded-full pt-14" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white text-2xl font-bold mt-6 ">Middel Stage</h3>
          <p className="text-white text-sm font-medium mt-2">We teach students from (Grade 7-9)</p>
          <p className="text-white text-sm mt-4 text-center px-12">
          We help students enhance critical thinking, problem-solving, and academic skills for a successful future
          </p>
        </div>
        <button className="absolute left-[38%] top-[87%] bg-[#84BA3F] text-white rounded-full p-4 shadow-lg">
          →
        </button>
      </div>
  
      {/* الكارت الثالث */}
      <div className="buble relative pb-28" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overflow-hidden w-full rounded-t-[900px] flex justify-center">
          <img src={High} alt="Chemistry Class" className="w-[280px] h-[270px] rounded-full pt-14" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white text-2xl font-bold mt-6">High Stage</h3>
          <p className="text-white text-sm font-medium mt-2">We teach students from (Grade 10-12)</p>
          <p className="text-white text-sm mt-4  text-center px-12">
            
                We prepare students for higher education and career paths with advanced learning and skill development.
          </p>
        </div>
        <button className="absolute left-[38%] top-[87%] bg-[#20222E] text-white rounded-full p-4 shadow-lg">
          →
        </button>
      </div>
    </div>
  </section>
  

  
  
  


  )
}
