import React from 'react'
import styles from  './Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faChalkboardTeacher, faLaptop, faClipboardList } from "@fortawesome/free-solid-svg-icons";
export default function Services() {
  return (
    <section className=" pb-12" id="Services">
    <div className="container mx-auto p-2">
      <div className="flex flex-col lg:flex-row ms-6 Teacher-header pb-8">
        <h3 className="second-color text-xl font-semibold Section-header uppercase ">
          How it Works
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* العنصر الأول */}
        <div className="flex flex-col items-center text-center ServicesCards1 ">
          <div className="text-white w-36 h-36 flex mb-4 bg-icon  justify-center items-center">
            <i className="fas fa-layer-group text-3xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2 main-color">Academic Organization</h3>
          <p className="main-color text-sm md:p-0 sm:px-20">
            Students can manage their academic details, including level, grade, and class, with options to add, edit, or delete.
          </p>
        </div>
        {/* العنصر الثاني */}
        <div className="flex flex-col items-center text-center ServicesCards2 lg:pt-12">
          <h3 className="text-lg font-bold mb-2 main-color order-1 md:order-none item1">Class Schedules</h3>
          <p className="main-color text-sm order-2 md:order-none item2 md:p-0 sm:px-20">
            A detailed class schedule helps students stay organized by displaying their daily lesson timings.
          </p>
          <div className="text-white w-36 h-36 flex mb-4 bg-icon justify-center items-center">
            <i className="fas fa-calendar-alt text-3xl"></i>
          </div>
        </div>
        {/* العنصر الثالث */}
        <div className="flex flex-col items-center text-center ServicesCards1">
          <div className="text-white w-36 h-36 flex mb-4 bg-icon flex justify-center items-center">
            <i className="fas fa-chalkboard-teacher text-3xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2 main-color">Online Examination System</h3>
          <p className="main-color text-sm md:p-0 sm:px-20">
            Teachers can create online exams with instant results accessible to students and their parents.
          </p>
        </div>
        {/* العنصر الرابع */}
        <div className="flex flex-col items-center text-center lg:pt-12">
          <h3 className="text-lg font-bold mb-2 main-color order-1 md:order-none item1">
            Digital Library System
          </h3>
          <p className="main-color text-sm order-2 md:order-none item2 md:p-0 sm:px-20">
            Teachers can upload and organize class resources for easy student access.
          </p>
          <div className="text-white w-36 h-36 flex mb-4 bg-icon justify-center items-center">
            <i className="fas fa-file-alt text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
