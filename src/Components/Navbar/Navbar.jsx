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
  return (
    <>
      <div className="fixed top-0 w-full z-[9999]">
        {/* upper-Nav Section Start */}
        <div className="upper-Nav bg-gray-900 py-3 text-white text-xs hidden md:block">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 ">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <span className="flex items-center">
                <i className="fa-solid fa-location-dot me-2"></i>
                6391 Elgin St. Celina, USA
              </span>
              <span className="flex items-center">
                <i className="fa-regular fa-envelope me-2"></i>
                info@example.com
              </span>
            </div>

            {/* Right Section */}
            <div className="flex flex-row items-center space-x-4 text-center md:text-right">
              <span className="font-medium">Follow Us On:</span>
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
        {/* upper-Nav Section End */}

        {/* Nav Section Start */}

        <div className="bg-white shadow-md py-6 md:py-2 rounded-lg ">
          <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
            {/* Logo */}
            <div className="flex items-center ">
              <img src={logo2} alt="Logo" className="w-[80px] md:w-[100px] " />
              <span className="text-lg font-bold text-gray-700">
                   Online  Education 
              </span>
            </div>

            {/* Links - تظهر فقط على الشاشات الكبيرة */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-[#84BA3F] transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about-us"
                className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                smooth={true}
                duration={500}
                offset={-80}
              >
                About Us
              </Link>
              <Link
                to="AcademicStage"
                className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Academic Levels
              </Link>
              <Link
                to="courses"
                className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Courses
              </Link>
              <Link
                to="Teachers"
                className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                smooth={true}
                duration={500}
                offset={-50}
              >
                Teachers
              </Link>
              <Link
                to="Contact"
                className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Contact Us
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              <div className="hidden min-[768px]:flex items-center space-x-2 px-3 py-2 rounded-lg">
                <div className="w-[60px] h-[60px] border-[#84BA3F] border-2 rounded-full flex justify-center items-center">
                  <div className="p-2 bg-[#84BA3F] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <i className="fa-solid fa-phone text-white text-sm"></i>
                  </div>
                </div>
                <div>
                  <span className="text-md text-gray-500">Call Us Now</span>
                  <a
                    href="tel:+2085550112"
                    className="block text-md font-semibold text-gray-700 hover:text-[#84BA3F]"
                  >
                    +208-555-0112
                  </a>
                </div>
              </div>

              {/* Buttons - يظهران بجانب Burger Menu عند تصغير الشاشة */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePopup}
                  className="text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 bg-[#84BA3F] text-white rounded-xl hover:bg-[#658e30] transition-colors"
                >
                  SIGN UP
                </button>
                <Link to="LogIn">
                  <button className="text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 text-[#84BA3F] border border-[#84BA3F] rounded-xl hover:bg-[#84BA3F] hover:text-white transition-colors">
                    LOGIN
                  </button>
                </Link>
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
                  className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="AcademicStage"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                >
                  Academic Levels
                </Link>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                >
                  Courses
                </Link>
                <Link
                  to="Teachers"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                >
                  Teachers
                </Link>
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 hover:text-[#84BA3F] transition-colors"
                >
                  Contact Us
                </Link>

                {/* Call Us داخل القائمة المنسدلة */}
                <div className="flex items-center space-x-2   py-2 rounded-lg">
                  <div className="w-[40px] h-[40px] border-[#84BA3F] border-2 rounded-full flex justify-center items-center">
                    <div className="p-2 bg-[#84BA3F] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                      <i className="fa-solid fa-phone text-white text-sm"></i>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Call Us Now</span>
                    <a
                      href="tel:+2085550112"
                      className="block text-sm font-semibold text-gray-700 hover:text-[#84BA3F]"
                    >
                      +208-555-0112
                    </a>
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
