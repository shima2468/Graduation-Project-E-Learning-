import React, { useState } from 'react'
import styles from  './DashboardHeader.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/laptop-technology-with-book-bulb-idea_24877-53124-removebg-preview.png'
// import StudentDetailes from '../StudentDetailes/StudentDetailes';
import studentImage from "../../assets/student-profile.webp";
export default function DashboardHeader({ isSidebarOpen, toggleSidebar }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsHovered, setIsNotificationsHovered] = useState(false);
  const [isQuickAccessHovered, setIsQuickAccessHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  return (
    <header className="absolute top-0 w-full z-10 bg-white px-4 py-2 shadow-md">
      <div className="flex items-center justify-between bg-white">
        {/* Logo Section */}
        <div className="flex">
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-[40px] md:w-[50px]" />
              <span className="text-lg font-bold text-gray-700 ml-2">
                educate.co
              </span>
            </div>
          </Link>
           {/* Search and Icons Section */}
        <div className="left-Sec flex justify-center items-center ms-4 space-x-4">
          {/* Hamburger Menu Icon */}
          <button
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Search Icon */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <i
                className={`fa-solid ${
                  isSearchOpen ? "fa-xmark" : "fa-magnifying-glass"
                }`}
              ></i>
            </button>
            {isSearchOpen && (
              <div className="absolute right-0 top-8 bg-white p-4 shadow rounded w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                />
              </div>
            )}
          </div>
        </div>
        </div>

       

        {/* User Interaction Icons */}
        <div className="flex items-center space-x-4">
          {/* Quick Access */}
          <div
            className="relative"
            onMouseEnter={() => setIsQuickAccessHovered(true)}
            onMouseLeave={() => setIsQuickAccessHovered(false)}
          >
            <button className="text-gray-600 hover:text-gray-800">
              <i className="fa-solid fa-grip text-xl"></i>
            </button>
            {isQuickAccessHovered && (
              <div className="absolute left-0 top-8 bg-white p-4 shadow rounded w-48">
                <p className="text-sm font-semibold">Quick Access</p>
                <ul>
                  <li className="text-gray-600 my-2 cursor-pointer">
                    Favorite 1
                  </li>
                  <li className="text-gray-600 my-2 cursor-pointer">
                    Favorite 2
                  </li>
                  <li className="text-gray-600 my-2 cursor-pointer">
                    Favorite 3
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div
            className="relative"
            onMouseEnter={() => setIsNotificationsHovered(true)}
            onMouseLeave={() => setIsNotificationsHovered(false)}
          >
            <button className="text-gray-600 hover:text-gray-800">
              <i className="fa-solid fa-bell"></i>
            </button>
            {isNotificationsHovered && (
              <div className="absolute left-0 top-8 bg-white p-4 shadow rounded w-64">
                <p className="text-sm font-semibold">Notifications</p>
                <ul>
                  <li className="text-gray-600 my-2">
                    New comment on your post
                  </li>
                  <li className="text-gray-600 my-2">
                    System update available
                  </li>
                  <li className="text-gray-600 my-2">Weekly report ready</li>
                </ul>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div
            className="relative"
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <button className="text-gray-600 hover:text-gray-800">
              <img
                src={studentImage}
                alt="Student"
                className="w-10 h-10 rounded-full border-2 border-[#F39F5F] mr-4"
              />
            </button>
            {isProfileHovered && (
              <div className="absolute left-0 top-12 bg-white p-4 shadow rounded w-64">
                <p className="text-lg font-bold">Michael Bean</p>
                <p className="text-sm text-gray-500">michael-bean@mail.com</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <i className="fa-solid fa-circle"></i>
                    <span>Activity</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Messages</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <i className="fa-solid fa-folder"></i>
                    <span>Projects</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <i className="fa-solid fa-cog"></i>
                    <span>Settings</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <i className="fa-solid fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
