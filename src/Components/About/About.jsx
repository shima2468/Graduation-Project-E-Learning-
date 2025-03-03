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
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function About() {
  const {t} = useTranslation();

  return (
    <section className="relative sm:py-8 pad-inline" id="about-us">
    <div>
        
        <img src={leftshap} alt={t("about.image1")} className="absolute left-0 xl:w-[50%] xl:h-[92%] lg:w-[50%] lg:h-[90%] md:w-[80%] md:h-[57%] lg:flex rtl:right-0 z-[1] sm:hidden scale-x-100 rtl:scale-x-[-1]" />
        <img 
            src={girlGreen} 
            alt={t("about.image2")} 
            className="absolute xl:top-0 lg:top-[3%] ltr:right-[5%]  
             xl:w-[15%] lg:w-[12%] md:w-[15%] sm:w-[20%] 
             rtl:scale-x-[-1] rtl:left-[10%] animate-image" 
          />


    </div>

    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center rtl:space-x-reverse lg:space-x-20 lg:py-0 sm:py-0 md:space-y-4 sm:space-y-4  ">
        <div className="relative lg:w-1/2 md:w-full flex justify-center rtl:scale-x-[-1] z-10">
            <img src={About2} alt={t("about.image3")} className="w-[570px] animate_animated animate_zoomIn z-[2] scale-x-100 " />
            <img src={line} alt={t("about.image4")} className="absolute xl:left-[-3%] xl:top-[3%] lg:top-[4%] lg:left-[-5%] lg:w-[30%] md:w-[23%] md:left-[5%] md:top-[5%] sm:left-[-2%] sm:top-[3%] sm:w-[30%]" />
            <img src={circel} alt={t("about.image5")} className="xl:w-[35%] lg:w-[32%] md:w-[30%] absolute xl:top-[5%] xl:left-[60%] lg:top-[1%] lg:left-[60%] md:left-[50%] md:top-[7%] sm:left-[65%] sm:top-[12%] sm:w-[30%] "/>      
        </div>
        <div className="lg:w-1/2 md:w-full flex flex-col xl:space-y-6 lg:space-y-4 sm:space-y-6 rtl:space-x-reverse">
            <div className="about-header flex flex-col space-y-6 ">
                <h3 className="second-color xl:text-xl lg:text-lg font-semibold Section-header uppercase">{t("about.title")}</h3>
                <h2 className="xl:text-3xl lg:text-xl md:text-2xl font-bold main-color mt-6 leading-snug tracking-wider">{t("about.subtitle")}</h2>
                <p className="text-gray-600 xl:text-md lg:text-sm md:text-md leading-relaxed main-color">{t("about.description")}</p>
            </div>
            
            <div className="grid grid-cols-2 xl:gap-y-6 md:gap-y-4 xl:gap-x-16 lg:gap-x-10 md:gap-x-24 sm:gap-x-16 rtl:gap-x-reverse">
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px] rtl:space-x-reverse">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color text-lg">{t("about.features.flexible_learning")}</span>
                </div>
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px] rtl:space-x-reverse">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color xl:text-lg lg:text-md">{t("about.features.creative_environment")}</span>
                </div>
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px] rtl:space-x-reverse">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color xl:text-lg lg:text-md">{t("about.features.professional_staff")}</span>
                </div>
                <div className="flex items-center space-x-3 rounded-full shadow-md h-[50px] rtl:space-x-reverse">
                    <i className="fa-solid fa-check second-color ms-2 border-2 border-[#84BA3F] rounded-full w-6 h-6 flex items-center justify-center"></i>
                    <span className="main-color xl:text-lg lg:text-md">{t("about.features.instant_access")}</span>
                </div>
            </div>
            
            <div className="flex items-center xl:space-x-6 xl:space-y-2 lg:space-x-4 lg:space-y-2 sm:space-x-6  rtl:space-x-reverse">
                <Link to="Contact"  smooth={true}
                duration={500}
                offset={-80}>
                     <button className="bg-[#84BA3F] text-white text-lg xl:py-4 xl:px-10 lg:py-3 lg:px-7 sm:py-4 sm:px-10  rounded-full shadow-lg font-semibold hover:bg-[#658e30] lg:text-base xl:text-lg">{t("about.explore_button")}</button>
                
                </Link>
               
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] sm:w-[60px] sm:h-[60px] border-[#84BA3F] border-2 bg-transparent rounded-full flex justify-center items-center">
                        <div className="call-to-action rounded-full xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center">
                            <i className="fa-solid fa-phone text-white text-lg"></i>
                        </div>
                    </div>
                    <div>
                        <span className="xl:text-md lg:text-sm md:text-md text-gray-500">{t("about.call_us")}</span>
                        <a href="tel:+2085550112" className="block xl:text-lg lg:text-md md:text-lg font-semibold text-gray-700 hover:text-[#658e30]">{t("about.phone_number")}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

  
  
  );
}