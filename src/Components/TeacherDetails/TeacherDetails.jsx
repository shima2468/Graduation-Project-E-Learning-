import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaUsers, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Teacher1 from "../../assets/01-6.jpg";
import Teacher2 from "../../assets/02-6.jpg";
import Teacher3 from "../../assets/04-4.jpg";



export default function TeacherDetails() {


  return (
    <div className="container mx-auto px-4 py-20">
    {/* Profile Section */}
    <div className="bg-white  rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6  border-[.5px] border-[#b8dbe2]">
      {/* Profile Image */}
      <img
        src={Teacher1} // استبدل بالرابط الصحيح للصورة
        alt="Ronald Richards"
        className="rounded-lg w-[450px] h-[450px] object-cover"
      />

      {/* Profile Info */}
      <div className="flex-1 mt-16">
        <h2 className="text-2xl font-bold mb-2 main-color">Ronald Richards</h2>
        <span className="text-[#53838d]">Children Diet</span>
        <p className="text-[#53838d] my-6">
        Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus a felis accumsan pharetra in dignissim  <br></br>enim. In amet odio mollis urna aliquet volutpat. Sed bibendum nisl vehicula imperdiet imperdiet, augue massa fringilla.
        </p>
        <hr class="relative w-full h-0 bg-gradient-to-b from-gray-300 to-transparent"/>
        <div className="flex items-center gap-6 my-6">
          <span className="text-gray-500">
            <strong>Experience:</strong> 10 Years
          </span>
          <span className="text-gray-500">
            <strong>Students:</strong> 1.2k
          </span>
          <span className="text-gray-500">
            <strong>Reviews:</strong> 4.9 (120 Reviews)
          </span>
        </div>
        <hr class="relative w-full h-0 bg-gradient-to-b from-gray-300 to-transparent"/>
        {/* Social Icons */}
        <div className="flex space-x-4 my-6">
              <a href="#" className="px-3 py-2 border border-[#F39F5F]  hover:bg-[#F39F5F]   hover:text-white flex items-center transition duration-300">
                <i className="fab fa-facebook-f  second-color "></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#F39F5F]  hover:bg-[#F39F5F]  hover:text-white flex items-center transition duration-300">
                <i className="fab fa-twitter second-color"></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#F39F5F]  hover:bg-[#F39F5F]   hover:text-white flex items-center transition duration-300">
                <i className="fab fa-linkedin-in second-color"></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#F39F5F]  hover:bg-[#F39F5F]   hover:text-white flex items-center transition duration-300">
                <i className="fab fa-youtube second-color"></i>
              </a>
            </div>
      </div>
    </div>

    {/* Professional Info Section */}
    <div className="mt-16">
      {/* Section Header */}
      <div className="flex justify-center items-center space-x-8">
                  <div className="w-1/2">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Info</h2>
                                <p className="text-gray-600 mb-4">
                                  Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus
                                  a felis accumsan pharetra in dignissim enim. In amet odio mollis urna
                                  aliquet volutpat. Sed bibendum nisl vehicula imperdiet imperdiet, augue
                                  massa fringilla.
                                </p>
                                <p className="text-gray-600 mb-8">
                                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend
                                  porta arcu In hac augu ehabitat sse the is platea augue the lorem
                                  turpoi dictumst. In lacus libero faucibus.
                                </p>
                  </div>
                  <div className="w-1/2 space-y-6">
                          {/* Progress Bar 1 */}
                          <div className="space-y-2">
                            <div className="main-color font-bold">Creativity</div>
                            <div className="w-[600px] h-[30px] bg-gray-200 rounded-full relative">
                              <div
                                className="bg-[#F39F5F] h-[30px] rounded-full"
                                style={{ width: "90%" }}
                              ></div>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">
                                90%
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar 2 */}
                          <div className="space-y-2">
                            <div className="main-color font-bold">Time Management</div>
                            <div className="w-[600px] h-[30px] bg-gray-200 rounded-full relative">
                              <div
                                className="bg-[#F39F5F] h-[30px] rounded-full"
                                style={{ width: "80%" }}
                              ></div>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">
                                80%
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar 3 */}
                          <div className="space-y-2">
                            <div className="main-color font-bold">Art And Craft</div>
                            <div className="w-[600px] h-[30px] bg-gray-200 rounded-full relative">
                              <div
                                className="bg-[#F39F5F] h-[30px] rounded-full"
                                style={{ width: "97%" }}
                              ></div>
                              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">
                                97%
                              </span>
                            </div>
                          </div>
                  </div>

               
      </div>
    


    </div>

    {/* Related Teachers Section */}
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-4">Related Teachers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Teacher Card */}
        {["Savannah Nguyen", "Dianne Russell", "Kathryn Murphy", "Brooklyn Simmons"].map(
          (teacher, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src="https://via.placeholder.com/100" // استبدل بالصورة
                alt={teacher}
                className="rounded-full w-24 h-24 object-cover mb-4"
              />
              <h4 className="text-lg font-bold">{teacher}</h4>
              <p className="text-gray-500 text-sm">Mathematics Teacher</p>
              <a
                href="#"
                className="mt-4 text-orange-500 hover:underline flex items-center"
              >
                View Profile <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  </div>
  );
}

