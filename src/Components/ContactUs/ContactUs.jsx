import React from 'react'
import styles from  './ContactUs.module.css'
export default function ContactUs() {
  return (
    <section id="Contact">
                        <div className="flex flex-col lg:flex-row  py-20  container mx-auto px-4 lg:space-x-12 md:space-x-0 md:space-y-2" >
                                      {/* القسم الأيسر */}
                                      <div className=" p-12 rounded-xl lg:w-1/2 flex flex-col contact-img relative max-h-fit py-20  ">
                                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                                        <h2 className="contact-heading mt-20 text-4xl font-extrabold  bg-clip-text  text-white text-center mb-6 ">Education Learning</h2>
                                        
                                        <div className="space-y-6 flex justify-center items-center flex-col text-white font-extrabold ">
                                          
                                          <div className="flex items-center  border-b border-b-[#FFFFFF40] pb-4 w-[60%]">
                                            <div className="w-12 h-12 flex items-center justify-center  border-white text-[#84BA3F] rounded-full">
                                            <i class="fa-solid fa-phone text-white"></i>
                                            </div>
                                            <div>
                                              <h3 className="text-white font-bold">Call Us 7/24</h3>
                                              <p className="text-white">+208-555-0112</p>
                                            </div>
                                          </div>
                                          <div className="flex items-center  border-b border-b-[#FFFFFF40] pb-4 w-[60%]">
                                            <div className="w-12 h-12 flex items-center justify-center  border-white text-[#84BA3F] rounded-full">
                                                      <i class="fa-regular fa-envelope text-white"></i>
                                            </div>
                                            <div>
                                              <h3 className="text-white font-bold">Make a Quote</h3>
                                              <p className="text-white">Infotech@example.com</p>
                                            </div>
                                          </div>
                                          <div className="flex items-center space-x-4 w-[60%]">
                                            <div className="w-12 h-12 flex items-center justify-center  border-white text-[#84BA3F] rounded-full">
                                                      <i class="fa-solid fa-location-dot text-white"></i>
                                
                                            </div>
                                            <div>
                                              <h3 className="text-white font-bold">Location</h3>
                                              <p className="text-white">4517 Washington ave.</p>
                                            </div>
                                          </div>
                                        </div>
                                      
                                      </div>

                                      {/* القسم الأيمن */}
                                      <div className=" lg:w-1/2">
                                      <div className="flex flex-col  justify-center mb-2">
                                        <h3 className="second-color text-xl font-semibold Section-header uppercase">
                                            contact us
                                        </h3>
                                        <h2 className="text-3xl font-bold main-color mt-3 tracking-wider">
                                            Get in Touch
                                        </h2>
                                      </div>
                                        <p className="main-color mb-4 text-sm">
                                        We are always here to support you! Feel free to reach out anytime, and we’ll be happy to answer your inquiries and assist you in the best possible wa
                                        </p>
                                        <form className="space-y-6">
                                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div className="name">
                                                  <label htmlFor=""  className="main-color  font-bold text-sm"> Your name*</label>
                                                  <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="border border-gray-300 p-3 mt-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:[#84BA3F] main-color"
                                                  />
                                            </div>
                                              <div className="email">
                                                  <label htmlFor="" className="main-color font-bold text-sm">Your Email*</label>
                                                  <input
                                                  type="email"
                                                  placeholder="Your Email"
                                                  className="border mt-4 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:[#84BA3F] main-color"
                                                />
                                              </div>
                                          
                                          </div>
                                          <div className="message mt-4">
                                              <label htmlFor="" className="main-color font-bold text-sm">Write Message*</label>
                                              <textarea
                                                        placeholder="Write Message"
                                                        rows="5"
                                                        className="border mt-4 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:[#84BA3F]"
                                          ></textarea>
                                          </div>
                                        
                                          <button
                                            type="submit"
                                            className="bg-[#84BA3F] text-white py-3 px-6 rounded-lg hover:bg-[#658e30] transition"
                                          >
                                            Send Message →
                                          </button>
                                        </form>
                                      </div>
                        </div>
    </section>
   
  )
}
