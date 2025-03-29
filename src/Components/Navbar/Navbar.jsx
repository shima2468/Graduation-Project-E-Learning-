import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Dropdown } from "flowbite-react";
import { Link } from "react-scroll";
import logo from "../../assets/laptop-technology-with-book-bulb-idea_24877-53124-removebg-preview.png";
import logo2 from "../../assets/logo2.png";
import Student from "../../assets/Students.png";
import Teachers from "../../assets/Teachers.png";
import Parents from "../../assets/Parents.png";
import Admin from "../../assets/Admin.png";
// import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // لحالة القائمة المنسدلة
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false); // لحالة برجر منيو

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleBurgerMenu = () => setBurgerMenuOpen(!isBurgerMenuOpen);

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleModal = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  




  const [t, i18n] = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setShowDropdown(false); 
  };
  
  const handleLogin = () => {
    window.location.href = 'http://127.0.0.1:8000/LoginOptions'; 
};




  return (
    <>
       <div className="fixed top-0 w-full z-[9999]">
      {/* upper-Nav Section Start */}
      <div className="upper-Nav bg-gray-900 py-3 text-white text-xs hidden md:block pad-inline ">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between px-4 ">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-y-2 rtl:space-y-reverse rtl:space-x-reverse md:space-y-0 md:space-x-6 text-center md:text-left">
            <span className="flex items-center">
              <i className="fa-solid fa-location-dot me-2"></i>
              {t('address')}
            </span>
            <span className="flex items-center">
              <i className="fa-regular fa-envelope me-2"></i>
              {t('email')}
            </span>
          </div>

          {/* Right Section */}
          <div className="flex flex-row items-center space-x-4 rtl:space-x-reverse text-center md:text-right">
            <span className="font-medium">{t('followUs')}</span>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* upper-Nav Section End */}

      {/* Nav Section Start */}

      <div className="bg-white shadow-md py-6 md:py-2 rounded-lg pad-inline ">
        <nav className=" mx-auto flex flex-row justify-between items-center  lg:flex-nowrap lg:gap-x-6">
          {/* Logo */}
          <div className="flex items-center ">
            <img src={logo2} alt={t('Logo')} className="w-[80px] md:w-[100px] " />
            <span className="text-lg font-bold text-gray-700">
            {t('siteName')}            </span>
          </div>

          {/* Links - تظهر على الشاشات الكبيرة */}
          <div>
            <div className="hidden lg:flex items-center xl:gap-x-4 lg:gap-x-3">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-150}
                className="text-gray-700 hover:text-[#84BA3F] xl:text-base lg:text-sm transition-colors cursor-pointer"
              >
                 {t('home')}
              </Link>
              <Link
                to="about-us"
                className="text-gray-700 hover:text-[#84BA3F] xl:text-base lg:text-sm transition-colors cursor-pointer"
                smooth={true}
                duration={500}
                offset={-80}
              >
                 {t('aboutus')}
              </Link>
              <Link
                to="AcademicStage"
                className="text-gray-700 hover:text-[#84BA3F] xl:text-base lg:text-sm transition-colors cursor-pointer"
                smooth={true}
                duration={500}
                offset={-100}
              >
                {t('academicLevels')}
              </Link>
              <Link
                to="courses"
                className="text-gray-700 hover:text-[#84BA3F] xl:text-base lg:text-sm transition-colors cursor-pointer"
                smooth={true}
                duration={500}
                offset={-100}
              >
               {t('course')}
              </Link>
              <Link
                to="Teachers"
                className="text-gray-700 hover:text-[#84BA3F] xl:text-base lg:text-sm transition-colors cursor-pointer"
                smooth={true}
                duration={500}
                offset={-50}
              >
                 {t('teachers')}
              </Link>
              <Link
                to="Contact"
                className="text-gray-700 hover:text-[#84BA3F] xl:text-base lg:text-sm transition-colors cursor-pointer"
                smooth={true}
                duration={500}
                offset={-80}
              >
               {t('contact')}
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <div className="hidden min-[768px]:flex items-center space-x-2 px-3 py-2 rounded-lg  rtl:space-x-reverse">
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[38px] md:h-[38px]  border-[#84BA3F] border-2 rounded-full flex justify-center items-center">
                <div className="p-2 bg-[#84BA3F] rounded-full xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] md:h-[28px] md:w-[28px] flex justify-center items-center">
                  <i className="fa-solid fa-phone text-white text-sm"></i>
                </div>
              </div>
              <div>
                <span className="xl:text-base lg:text-xs md:text-xs  text-gray-500  ">
                {t('callus')}
                </span>
                <a
                  href="tel:+2085550112"
                  className="xl:block  xl:text-base md:block lg:hidden md:text-xs  font-semibold text-gray-700 hover:text-[#84BA3F]"
                >
                  +000-000-000
                </a>
              </div>
            </div>

            {/* Buttons - يظهران بجانب Burger Menu عند تصغير الشاشة */}
            <div className="flex items-center space-x-2">
              <Link to="LogIn">
                <button onClick={handleLogin} className="text-xs md:text-sm lg:px-2 lg:py-1 xl:px-3 px-4 xl:py-2 py-2 text-[#84BA3F] border border-[#84BA3F] rounded-xl hover:bg-[#84BA3F] hover:text-white transition-colors">
                     {t('login')}
                </button>
              </Link>
              
            </div>
            <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center xl:px-1 xl:py-1 lg:px-[2px] lg:py-1 sm:px-1 sm:py-1 text-gray-700 bg-white border border-gray-300 rounded-lg"
                >
                  <i className="fas fa-language ltr:mr-2 rtl:ml-2"></i> 
                  <span>{i18n.language === "ar" ? "العربية" : "English"}</span>
                  <i className="fas fa-chevron-down ltr:ml-2 rtl:mr-2"></i>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                    <button
                      className="flex items-center px-3 py-2 w-full hover:bg-gray-200"
                      onClick={() => changeLanguage('en')} // ✅ استخدام الدالة الصحيحة
                    >
                      <img src="https://flagcdn.com/w40/us.png" alt={t('English')} className="w-5 h-5 mr-2" />
                      English
                    </button>
                    <button
                      className="flex items-center px-3 py-2 w-full hover:bg-gray-200"
                      onClick={() => changeLanguage('ar')} // ✅ استخدام الدالة الصحيحة
                    >
                      <img src="https://flagcdn.com/w40/sa.png" alt={t('Arabic')} className="w-5 h-5 mr-2" />
                      العربية
                    </button>
                  </div>
                )}
              </div>
            {/* Burger Menu */}
            <button
              onClick={toggleBurgerMenu}
              className="block lg:hidden text-gray-700 text-xl"
            >
              <i className="fas fa-bars ms-4"></i>
            </button>
          </div>
        </nav>

        {/* Burger Menu Dropdown */}
        {isBurgerMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col py-4 space-y-3 px-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
                {t('home')}
              </Link>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
               {t('aboutus')}
              </Link>
              <Link
                to="AcademicStage"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
                {t('academicLevels')}
              </Link>
              <Link
                to="courses"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
                {t('course')}
              </Link>
              <Link
                to="Teachers"
                smooth={true}
                duration={500}
                offset={-50}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
                {t('teachers')}
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
                 {t('contact')}
              </Link>

              {/* Call Us داخل القائمة المنسدلة */}
              <div className="flex items-center space-x-2   py-2 rounded-lg  md:hidden sm:flex">
                <div className="w-[40px] h-[40px] border-[#84BA3F] border-2 rounded-full flex justify-center items-center">
                  <div className="p-2 bg-[#84BA3F] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                    <i className="fa-solid fa-phone text-white text-sm"></i>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">{t('callus')}</span>
                  <a
                    href="tel:+2085550112"
                    className="block text-sm font-semibold text-gray-700 hover:text-[#84BA3F]"
                  >
                    +000-000-000
                  </a>
                </div>
                

              </div>
              <div className="upper-Nav bg-gray-900 py-3 text-white text-xs md:hidden sm:block ">
        <div className="container mx-auto flex  md:flex-row items-center justify-between px-4 ">
          {/* Left Section */}
          <div className="flex justify-center md:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center md:text-left">
            <span className="flex items-center">
              <i className="fa-solid fa-location-dot me-2"></i>
              {t('address')}
            </span>
            <span className="flex items-center">
              <i className="fa-regular fa-envelope me-2"></i>
              {t('email')}
            </span>
          </div>

          {/* Right Section */}
          <div className="flex flex-row items-center space-x-4 text-center md:text-right">
            <span className="font-medium">{t('followUs')}</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        )}
      </div>

      {/* Nav Section End */}
    </div>
    </>
  );
}
