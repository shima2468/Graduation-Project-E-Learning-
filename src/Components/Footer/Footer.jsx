import React from 'react'
import styles from  './Footer.module.css'
import logo from '../../assets/logo2.png'
import  footerButton from '../../assets/footer-bottom.png'
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';

export default function Footer() {
  const { t } = useTranslation();  

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
                alt={t('Footer.logoImage')}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-[#20222E]">{t('Footer.logoText')} </span>
            </div>
            <p className="text-[#20222E]">
            {t('Footer.aboutText')}
            </p>


            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="px-3 py-2 border border-[#84BA3F]  hover:bg-[#84BA3F]   hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-facebook-f  text-[#20222E] "></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#84BA3F]  hover:bg-[#84BA3F]  hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-twitter text-[#20222E]"></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#84BA3F]  hover:bg-[#84BA3F]   hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-linkedin-in text-[#20222E]"></i>
              </a>
              <a href="#" className="px-3 py-0 border border-[#84BA3F]  hover:bg-[#84BA3F]   hover:text-[#20222E] flex items-center transition duration-300">
                <i className="fab fa-youtube text-[#20222E]"></i>
              </a>
            </div>
            <Link to="Contact"  smooth={true}
                duration={500}
                offset={-80}  >
                    <button className="px-6 py-2 mt-6 bg-[#84BA3F]  text-[#20222E] rounded-lg shadow hover:bg-[#84BA3F]  font-bold">
                    {t('Footer.contactUs')}
                      <i class="fa-solid fa-arrow-right ms-2 rtl:scale-x-[-1]"></i>
                    </button>
            
            </Link>
           
          </div>

          {/* Quick Links */}
          <div className='space-y-14 ms-12'>
            <h3 className="text-2xl font-semibold text-[#20222E] footer-heading">{t('Footer.quickLinks')}</h3>
            <ul className="mt-4 flex flex-col gap-4">
              <Link  to="Services"  smooth={true}
                duration={500}
                offset={-120}>
                      <li>
                        <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                          &gt; {t('Footer.quickLinksItem1')}
                        </a>
                      </li>
              </Link>
              <Link  to="AcademicStage"
                smooth={true}
                duration={500}
                offset={-100}>
                    <li>
                      <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                        &gt; {t('Footer.quickLinksItem2')}
                      </a>
                      </li>
              </Link>
              
             
              <Link to="Contact"  smooth={true}
                duration={500}
                offset={-80}>
                      <li>
                        <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-300">
                          &gt; {t('Footer.quickLinksItem4')}
                        </a>
                      </li>
                      
              </Link>
             
            </ul>
          </div>

          {/* Categories */}
          <div className='space-y-14'>
            <h3 className="text-2xl font-semibold text-[#20222E] footer-heading">{t('Footer.categories')}</h3>
            <ul className="mt-4 flex flex-col gap-4">
              <Link to="courses"  smooth={true}
                duration={500}
                offset={-100}>
                      <li>
                        <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                          &gt; {t('Footer.categoriesItem1')}
                        </a>
                      </li>
              
              </Link>
              <Link to="courses" smooth={true}
                duration={500}
                offset={-100}>
                        <li>
                          <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                            &gt; {t('Footer.categoriesItem2')}
                          </a>
                        </li>
              </Link>
              <Link to="courses" smooth={true}
                duration={500}
                offset={-100}>
                    <li>
                      <a href="#" className="text-[#20222E] hover:text-[#84BA3F] hover:ms-2 transition duration-30">
                        &gt; {t('Footer.categoriesItem3')}
                      </a>
                    </li>
              </Link>
             
              
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-14 lg:ms-0 '>
            <h3 className="text-2xl font-semibold text-[#20222E] footer-heading">{t('Footer.newsletter')}</h3>
            <p className="mt-4  text-[#20222E]">
            {t('Footer.newsletterText')}
            </p>
            <div className=" flex">
              <input
                type="email"
                placeholder={t('Footer.emailPlaceholder')}
                className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#84BA3F] text-[#20222E]"
              />
              <button className="px-4 bg-[#84BA3F] text-[#20222E] rounded-r-lg hover:bg-[#658e30] rtl:scale-x-[-1]">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        
      </div>
      <div className=" border-t border-gray-300 pt-4 text-center bg-[#20222E]">
          <p className="text-white text-sm">
            &copy;  {t('Footer.copyright')} <span className="text-[#84BA3F]">{t('Footer.logoText')} </span>
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-white hover:text-[#84BA3F] pe-2">
            {t('Footer.termsAndConditions')} 
            </a>
            <a href="#" className="text-white hover:text-[#84BA3F]">
            {t('Footer.privacyPolicy')}
            </a>
           
          </div>
        </div>

    </footer>
    </>
  )
}

