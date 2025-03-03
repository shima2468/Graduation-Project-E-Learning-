import React from 'react'
import styles from  './Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faChalkboardTeacher, faLaptop, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


export default function Services() {
      const {t} = useTranslation();
  
  return (
    <section className="relative -mt-20 pad-inline " id="Services">
    <div className="mx-auto py-4 ms-8">
      <div className="flex flex-col lg:flex-row  Teacher-header pb-8">
        <h3 className="second-color text-xl font-semibold Section-header uppercase ">
        {t("services.title")}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* العنصر الأول */}
        <div className="flex flex-col items-center text-center ServicesCards1 ">
          <div className="text-white w-36 h-36 flex mb-4 bg-icon  justify-center items-center">
          <i class="fa-solid fa-folder-open text-3xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2 main-color">{t("services.academic_organization.title")}</h3>
          <p className="main-color text-sm lg:px-3 md:p-0  sm:px-20">
          {t("services.academic_organization.description")}
          </p>
        </div>
        {/* العنصر الثاني */}
        <div className="flex flex-col items-center text-center ServicesCards2 lg:pt-12">
          <h3 className="text-lg font-bold mb-2 main-color order-1 md:order-none item1">{t("services.class_schedules.title")}</h3>
          <p className="main-color text-sm order-2 md:order-none item2 md:p-0 sm:px-20">
          {t("services.class_schedules.description")}
          </p>
          <div className="text-white w-36 h-36 flex mb-4 bg-icon justify-center items-center">
            <i className="fas fa-calendar-alt text-3xl"></i>
          </div>
        </div>
        {/* العنصر الثالث */}
        <div className="flex flex-col items-center text-center ServicesCards1">
          <div className="text-white w-36 h-36 flex mb-4 bg-icon  justify-center items-center">
            <i className="fas fa-chalkboard-teacher text-3xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-2 main-color">{t("services.online_exams.title")}</h3>
          <p className="main-color text-sm md:p-0 sm:px-20">
          {t("services.online_exams.description")}
          </p>
        </div>
        {/* العنصر الرابع */}
        <div className="flex flex-col items-center text-center lg:pt-12">
          <h3 className="text-lg font-bold mb-2 main-color order-1 md:order-none item1">
          {t("services.digital_library.title")}
          </h3>
          <p className="main-color text-sm order-2 md:order-none item2 md:p-0 sm:px-20">
          {t("services.digital_library.description")}
          </p>
          <div className="text-white w-36 h-36 flex mb-4 bg-icon justify-center items-center">
            <i className="fas fa-file-alt text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
