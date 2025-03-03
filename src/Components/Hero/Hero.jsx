import React from 'react'
import styles from  './Hero.module.css'
import doll from "../../assets/doll.png";
import book from "../../assets/book.png";
import star from "../../assets/star-2.png";
import hero from "../../assets/Hero2.png";
import bgHero from "../../assets/bgHero.png";
import linehero from "../../assets/line-shape-2-green.png";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';

export default function Hero() {
    const {t} = useTranslation();

  return (
       <>
        <section id="home" className="relative  ">
        <div
          className="hero-content relative w-full flex flex-col  md:flex-row  mb-32 lg:mt-44 md:mt-40 sm:mt-44
                  items-center gap-10 md:gap-0  md:justify-between    "
        >

          <div
            className="right-section relative w-9/12 self-end md:w-[40%]  flex justify-center items-center 
                     md:order-last  rtl:scale-x-[-1]"
          >
            <div className="bgHero absolute z-[-2] right-0 -top-[20%] w-[85%] ">
              <img src={bgHero} alt={t('hero.Background')} className="w-full" />
            </div>
            <div className="relative w-[85%] mr-[18%]">
              <img src={hero} alt={t('hero.Image')} className="w-full rounded-lg" />
              <div className="bg-[#a6e05a] w-full h-full rounded-full absolute top-[2%] z-[-1] right-[5%]"></div>
              <img src={linehero} alt={t('hero.Image2')}  className='absolute left-0 rotate-[-55deg] z-[-1] top-[-5%] lg:w-52 md:w-36 md:top-[-12%]'/>
            </div>
          </div>

         
          <div className=" lg:container mx-auto px-4 left-section flex items-center  w-full md:w-1/2  lg:gap-6 md:gap-6 justify-center md:pl-14 md:pr-14">
            <div className="hidden md:flex flex-col dots items-center xl:space-y-4 lg:space-y-2 md:space-y-1   xl:ms-[-2%] lg:ms-[-2%]  ">
             
              <div className="xl:h-16  xl:w-[2px] lg:h-14 lg:w-[2px] md:h-12 md:w-[2px] bg-gradient-to-b from-[#84BA3F] to-transparent"></div>
              <div className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 bg-[#84BA3F] rounded-full my-2"></div> 
              <div className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4  border-2 border-[#84BA3F] rounded-full flex items-center justify-center my-2">
                <div className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 bg-[#84BA3F] rounded-full"></div>
              </div>
              <div className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 bg-[#84BA3F] rounded-full my-2"></div>
              <div className="xl:h-16  xl:w-[2px] lg:h-14 lg:w-[2px]  md:h-12 md:w-[2px] bg-gradient-to-t from-[#84BA3F] to-transparent"></div>
            </div>
            <div className="hero-desc animate_animated  animate_fadeInUp w-[98%]">
              <img
                src={doll}
                alt={t('hero.Image3')}
                className="md:-mb-4 md:-ml-4 sm:ml-[260px] sm:-mb-4 sm:ms-[26%] md:w-18 sm:w-12  rtl:md:-mr-4 rtl:sm:mr-[230px] animate__animated animate__bounce animate__infinite	infi"
              />
              <div className="second-color xl:font-medium xl:text-lg lg:text-base md:text-sm  mb-2">
              {t('hero.welcom')}
              </div>
              
              <h1 className="hero-heading text-4xl xl:text-6xl lg:text-5xl md:text-3xl sm:text-5xl font-bold main-color xl:leading-tight xl:tracking-wider lg:leading-tight lg:tracking-wide md:leading-tight md:tracking-wide">
              {t('hero.start')}<br></br> {t('hero.from')}{" "}
                <span className="second-color">{t('hero.day')}</span>
              </h1>

              <p className="hero-p main-color xl:text-lg md:text-[15px] lg:text-md  sm:text-sm  mt-4 md:w-3/4">
                <span className="lg:block md:inline">
                {t('hero.learn')}{" "}
                </span>
                <span className="lg:block md:inline">
                {t('hero.platform')}
                </span>
              </p>

              <div className="flex-wrap sm:flex-nowrap gap-5 hero-button flex space-x-4 xl:mt-12 xl:text-lg md:text-[15px] lg:text-md  sm:text-sm lg:mt-8 md:mt-6 md:justify-start sm:justify-center sm:mt-5">
                <Link to="about-us"  smooth={true}
                duration={500}
                offset={-120}>
                        <button className="text-nowrap button1 bg-[#84BA3F]  text-white xl:py-4 xl:px-8 lg:py-3 lg:px-6  md:py-2 md:px-4 sm:px-12 sm:py-3 rounded-2xl shadow-md hover:bg-[#658e30]">
                              {t('hero.explore')}
                         </button>
                
                </Link>
                <Link to="Contact"  smooth={true}
                duration={500}
                offset={-80}>
                          <button className="text-nowrap button1 border border-[#84BA3F] second-color xl:py-4 xl:px-8 lg:py-3 lg:px-6 md:py-2 md:px-4 sm:px-12 sm:py-3 rounded-2xl  hover:bg-[#84BA3F] hover:text-white">
                          {t('hero.get')}
                          </button>
                
                </Link>
                
              </div>
            </div>

          </div>
        </div>
      </section>

       
       
       
       </>
  )
}
