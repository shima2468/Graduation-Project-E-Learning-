import React from 'react'
import styles from  './Courses.module.css'
import childrenImage from "../../assets/children-image.webp"; 
import earlyLearningIcon from "../../assets/early-learning.webp"; 
import artAndCraftIcon from "../../assets/art-and-craft.webp"; 
import brainTrainIcon from "../../assets/brain-train.webp"; 
import musicAreaIcon from "../../assets/music-area.webp"; 
// import English from "../../assets/English.png"
// import Math from "../../assets/Math.jpg"
// import Arabic from "../../assets/Arabic.jpg"
import line from "../../assets/line-3.png"
import line2 from "../../assets/line-2.png"
import girle from "../../assets/girl.png"
import hung from "../../assets/hung.png"
import 'animate.css';
import light from "../../assets/banner-3-shape-5-corrected.webp"
import girl from "../../assets/girl_shirt_green_fixed.webp"
import line11 from "../../assets/line-3-colored.png"
import Arabic from "../../assets/Arabic_background_fixed.jpg"
import English from "../../assets/English_green.jpg"
import Math from "../../assets/Math2.png"
import High from "../../assets/highSchool.jpg"
import { useTranslation } from "react-i18next";

export default function Courses() {
      const {t} = useTranslation();
  
  return (
    <>
      
      <section className="relative py-8 bg-[#F6F7FB]" id="courses">
                      <div className="container mx-auto py-16 relative px-4">
                        <div className="absolute inset-0 w-full h-full -z-10"></div>

                        <div className="flex flex-col justify-center mb-16 ">
                          <h3 className="second-color text-xl font-semibold Section-header uppercase">
                          {t("courses.popularCourses")}
                          </h3>
                          <h2 className="text-2xl font-bold main-color mt-3 tracking-wider">
                          {t("courses.discoverCourse")}
                          </h2>
                        </div>

                        {/* Courses Grid */}
                        <div className="w-full grid grid-cols-1 place-items-center  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-8 lg:gap-y-0 md:gap-y-12 gap-y-12">
                          {/* Course Card 1 */}
                          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:w-full w-2/3 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="relative -mt-12 w-72 h-40 flex items-center justify-center">
                              <img
                                src={Arabic}
                                alt={t("courses.arabicClass")}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg"
                              />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mt-4">{t("courses.arabicClass")}</h2>
                            <p className="text-gray-600 text-sm text-center mt-2">
                            {t("courses.arabicDescription")}                            </p>
                            <div className="flex justify-between w-full text-gray-700 text-sm mt-4">
                              <span className="text-md font-bold text-[#84BA3F]">{t("courses.ageRange")}</span>
                              <span className="text-md font-bold text-[#84BA3F]">{t("courses.weeklyA")}</span>
                            </div>
                          </div>

                          {/* Course Card 2 */}
                          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:w-full w-2/3 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="relative -mt-12 w-72 h-40 flex items-center justify-center">
                              <img
                                src={English}
                                alt={t("courses.englishClass")} 
                                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg"
                              />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mt-4">{t("courses.englishClass")}</h2>
                            <p className="text-gray-600 text-sm text-center mt-2">
                            {t("courses.englishDescription")}
                            </p>
                            <div className="flex justify-between w-full text-gray-700 text-sm mt-4">
                              <span className="text-md font-bold text-[#84BA3F]">{t("courses.ageRange")}</span>
                              <span className="text-md font-bold text-[#84BA3F]">{t("courses.weeklyE")}</span>
                            </div>
                          </div>

                          {/* Course Card 3 */}
                          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:w-full w-2/3 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="relative -mt-12 w-72 h-40 flex items-center justify-center">
                              <img
                                src={Math}
                                alt={t("courses.mathClass")}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg"
                              />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mt-4">{t("courses.mathClass")}</h2>
                            <p className="text-gray-600 text-sm text-center mt-2">
                            {t("courses.mathDescription")}
                            </p>
                            <div className="flex justify-between w-full text-gray-700 text-sm mt-4">
                              <span className="xl:text-md  font-bold text-[#84BA3F]">{t("courses.ageRange")}</span>
                              <span className="text-md font-bold text-[#84BA3F]">{t("courses.weeklyM")}</span>
                            </div>
                          </div>

                        </div>
                      </div>
       </section>

    </>
  )
}
