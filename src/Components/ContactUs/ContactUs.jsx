import React from 'react'
import styles from  './ContactUs.module.css'
import { useTranslation } from "react-i18next";

export default function ContactUs() {
        const {t} = useTranslation();
  
  return (
    <section id="Contact">
                     <div className="flex flex-col lg:flex-row py-20 container mx-auto px-4 gap-12 lg:gap-16 rtl:space-x-reverse">
                                      {/* القسم الأيسر */}
                                      <div className=" p-12 rounded-xl lg:w-1/2 flex flex-col contact-img relative max-h-fit py-20  ">
                                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                                        <h2 className="contact-heading mt-20 text-4xl font-extrabold  bg-clip-text  text-white text-center mb-6 "> {t('ContactUs.educationTitle')}</h2>
                                        
                                        <div className="space-y-6 flex justify-center items-center flex-col text-white font-extrabold ">
                                          
                                          <div className="flex items-center  border-b border-b-[#FFFFFF40] pb-4 w-[60%]">
                                            <div className="w-12 h-12 flex items-center justify-center  border-white text-[#84BA3F] rounded-full">
                                            <i class="fa-solid fa-phone text-white"></i>
                                            </div>
                                            <div>
                                              <h3 className="text-white font-bold mt-4">{t('ContactUs.callUsTitle')}</h3>
                                              <p className="text-white">{t('ContactUs.callUsNumber')}</p>
                                            </div>
                                          </div>
                                          <div className="flex items-center  border-b border-b-[#FFFFFF40] pb-4 w-[60%]">
                                            <div className="w-12 h-12 flex items-center justify-center  border-white text-[#84BA3F] rounded-full">
                                                      <i class="fa-regular fa-envelope text-white"></i>
                                            </div>
                                            <div>
                                              <h3 className="text-white font-bold">{t('ContactUs.makeAQuoteTitle')}</h3>
                                              <p className="text-white">{t('ContactUs.makeAQuoteEmail')}</p>
                                            </div>
                                          </div>
                                          <div className="flex items-center space-x-4 rtl:space-x-reverse w-[60%]">
                                            <div className="w-12 h-12 flex items-center justify-center  border-white text-[#84BA3F] rounded-full">
                                                      <i class="fa-solid fa-location-dot text-white"></i>
                                
                                            </div>
                                            <div>
                                              <h3 className="text-white font-bold">{t('ContactUs.locationTitle')}</h3>
                                              <p className="text-white">{t('ContactUs.locationAddress')}</p>
                                            </div>
                                          </div>
                                        </div>
                                      
                                      </div>

                                      {/* القسم الأيمن */}
                                      <div className=" lg:w-1/2">
                                      <div className="flex flex-col  justify-center mb-2">
                                        <h3 className="second-color text-xl font-semibold Section-header uppercase">
                                        {t('ContactUs.contactUs')}
                                        </h3>
                                        <h2 className="text-3xl font-bold main-color mt-3 tracking-wider">
                                        {t('ContactUs.getInTouch')}
                                        </h2>
                                      </div>
                                        <p className="main-color mb-4 text-sm">
                                        {t('ContactUs.description')}                                        </p>
                                        <form className="space-y-6">
                                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div className="name">
                                                  <label htmlFor=""  className="main-color  font-bold text-sm">  {t('ContactUs.nameLabel')}</label>
                                                  <input
                                                    type="text"
                                                    placeholder={t('ContactUs.namePlaceholder')}
                                                    className="border border-gray-300 p-3 mt-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:[#84BA3F] main-color"
                                                  />
                                            </div>
                                              <div className="email">
                                                  <label htmlFor="" className="main-color font-bold text-sm"> {t('ContactUs.emailLabel')}</label>
                                                  <input
                                                  type="email"
                                                  placeholder={t('ContactUs.emailPlaceholder')}
                                                  className="border mt-4 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:[#84BA3F] main-color"
                                                />
                                              </div>
                                          
                                          </div>
                                          <div className="message mt-4">
                                              <label htmlFor="" className="main-color font-bold text-sm">{t('ContactUs.messageLabel')}</label>
                                              <textarea
                                                        placeholder={t('ContactUs.messagePlaceholder')}
                                                        rows="5"
                                                        className="border mt-4 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:[#84BA3F]"
                                          ></textarea>
                                          </div>
                                        
                                          <button
                                            type="submit"
                                            className="bg-[#84BA3F] text-white py-3 px-6 rounded-lg hover:bg-[#658e30] transition"
                                          >
                                                          {t('ContactUs.sendMessage')}

                                          </button>
                                        </form>
                                      </div>
                        </div>
    </section>
   
  )
}
