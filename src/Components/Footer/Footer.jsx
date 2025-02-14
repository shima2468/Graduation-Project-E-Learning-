import React from 'react'
import styles from  './Footer.module.css'
import logo from '../../assets/logo2.png'
import  footerButton from '../../assets/footer-bottom.png'
export default function Footer() {
  return (
    <>
    <footer className="bg-[#F6F7FB]   ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-6 lg:gap-5 md:gap-20 py-12 ">
          {/* Logo and About */}
          <div className="space-y-14 ">
            <div className="flex items-center space-x-2 footer-heading">
              <img
                src={logo} // Replace with your logo path
                alt="Kidsa Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-[#20222E]">Online  Education </span>
            </div>
            <p className="text-[#20222E]">
                  Phasellus ultricies aliquam volutpat ullamcorper laoreet neque.
            </p>


            <div className="flex space-x-4">
              <a href="#" className="px-3 py-2 border border-[#20222E]  hover:bg-[#84BA3F]   hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-facebook-f  text-[#20222E] "></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#20222E]  hover:bg-[#84BA3F]  hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-twitter text-[#20222E]"></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#20222E]  hover:bg-[#84BA3F]   hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-linkedin-in text-[#20222E]"></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#20222E]  hover:bg-[#84BA3F]   hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-youtube text-[#20222E]"></i>
              </a>
            </div>
            <button className="px-6 py-2 mt-4 bg-[#84BA3F]  text-[#20222E] rounded-lg shadow hover:bg-[#84BA3F]">
              Contact Us
              <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>

          {/* Quick Links */}
          <div className='space-y-14 ms-12'>
            <h3 className="text-2xl font-semibold text-[#20222E] footer-heading">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                  &gt; Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                  &gt; Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                  &gt; FAQ'S
                </a>
              </li>
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                  &gt; Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className='space-y-14'>
            <h3 className="text-2xl font-semibold text-[#20222E] footer-heading">Categories</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                  &gt; Music Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                  &gt; Sports, Games
                </a>
              </li>
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                  &gt; Science Class
                </a>
              </li>
              <li>
                <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                  &gt; Drawing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-14 lg:ms-0 '>
            <h3 className="text-2xl font-semibold text-[#20222E] footer-heading">Newsletter</h3>
            <p className="mt-4  text-[#20222E]">
              Sign up to searing weekly newsletter to get the latest updates.
            </p>
            <div className=" flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#84BA3F] text-[#20222E]"
              />
              <button className="px-4 bg-[#84BA3F] text-[#20222E] rounded-r-lg hover:bg-[#658e30]">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        
      </div>
      <div className=" border-t border-gray-300 pt-4 text-center bg-[#20222E]">
          <p className="text-white text-sm">
            &copy; All Copyright 2024 by <span className="text-[#84BA3F]">Online  Education </span>
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-white hover:text-[#84BA3F]">
              Terms & Condition
            </a>
            <a href="#" className="text-white hover:text-[#84BA3F]">
              Privacy Policy
            </a>
           
          </div>
        </div>

    </footer>
    </>
  )
}

