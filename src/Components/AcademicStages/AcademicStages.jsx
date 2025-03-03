
import React from "react";
import styles from "./AcademicStages.module.css";
import bgImage from "../../assets/img1.png";
import bgImage2 from "../../assets/img2.png";
import Primary from "../../assets/Primary.jpg";
import middel from "../../assets/Mideel.jpg";
import High from "../../assets/highSchool.jpg";
import { useTranslation } from "react-i18next";

export default function AcademicStages() {
  const { t } = useTranslation();

  return (
    <section className="relative py-8" id="AcademicStage">
      <div className="bg-white py-6 sm:py-2  pad-inline">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center w-full gap-y-6 pb-8">
          <h3 className="second-color xl:text-xl lg:text-lg font-semibold Section-header uppercase">
            {t("academicStages.title")}
          </h3>
          <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#20222E] xl:py-1 px-12 tracking-wider w-8/12">
            {t("academicStages.subtitle")}
          </h2>
        </div>

        {/* Academic Stages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-8 lg:gap-x-4 lg:gap-y-0 md:gap-y-12 md:gap-x-7 sm:gap-y-12 justify-center">
          {/* Primary Stage */}
          <div
            className="relative text-white rounded-2xl flex flex-col items-center bg-contain  bg-no-repeat bg-center justify-start min-h-[450px]"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="rounded-t-[900px] flex justify-center">
              <img
                src={Primary}
                alt={t("academicStages.primary.title")}
                className="xl:w-[280px] xl:h-[240px] lg:w-[240px] lg:h-[220px] md:w-[260px] md:h-[240px] sm:w-[280px] sm:h-[240px] lg:pt-10 md:pt-8 sm:pt-4 rounded-full xl:pt-4"
              />
            </div>
            <h3 className="xl:text-2xl lg:text-xl md:text-md sm:text-2xl font-bold mt-4">
              {t("academicStages.primary.title")}
            </h3>
            <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-2">
              {t("academicStages.primary.age")}
            </p>
            <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-4 text-center xl:px-20  md:px-16 sm:px-40">
              {t("academicStages.primary.description")}
            </p>
            <button className="absolute md:left-[38%] xl:top-[93%] lg:top-[87%] md:top-[92%] sm:top-[91%] sm:left-[42%] bg-[#20222E] text-white rounded-full p-4 shadow-lg">
              →
            </button>
          </div>

          {/* Middle Stage */}
          <div
            className="relative text-white rounded-2xl flex flex-col items-center bg-contain bg-no-repeat bg-center justify-start min-h-[450px]"
            style={{ backgroundImage: `url(${bgImage2})` }}
          >
            <div className="rounded-t-[900px] flex justify-center">
              <img
                src={middel}
                alt={t("academicStages.middle.title")}
                className="xl:w-[280px] xl:h-[240px] lg:w-[240px] lg:h-[220px] md:w-[260px] md:h-[240px] sm:w-[280px] sm:h-[240px] lg:pt-10 md:pt-8 sm:pt-4 rounded-full xl:pt-4"
              />
            </div>
            <h3 className="xl:text-2xl lg:text-xl md:text-md sm:text-2xl font-bold mt-4">
              {t("academicStages.middle.title")}
            </h3>
            <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-2">
              {t("academicStages.middle.age")}
            </p>
            <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-4 text-center md:px-20 sm:px-40 xl:px-20 ">
              {t("academicStages.middle.description")}
            </p>
            <button className="absolute md:left-[40%] xl:top-[93%] lg:top-[87%] md:top-[92%] sm:top-[91%] sm:left-[42%] bg-[#84BA3F] text-white rounded-full p-4 shadow-lg">
              →
            </button>
          </div>

          {/* High Stage */}
          <div
            className="relative text-white rounded-2xl flex flex-col items-center bg-contain bg-no-repeat bg-center justify-start min-h-[450px]"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="rounded-t-[900px] flex justify-center">
              <img
                src={High}
                alt={t("academicStages.high.title")}
                className="xl:w-[280px] xl:h-[240px] lg:w-[240px] lg:h-[220px] md:w-[260px] md:h-[240px] sm:w-[280px] sm:h-[240px] lg:pt-10 md:pt-8 sm:pt-4 rounded-full xl:pt-4"
              />
            </div>
            <h3 className="xl:text-2xl lg:text-xl md:text-md sm:text-2xl font-bold mt-4">
              {t("academicStages.high.title")}
            </h3>
            <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-2   ">
              {t("academicStages.high.age")}
            </p>
            <p className="xl:text-sm lg:text-xs md:text-sm sm:text-sm mt-4 text-center md:px-16 sm:px-40 xl:px-20">
              {t("academicStages.high.description")}
            </p>
            <button className="absolute md:left-[40%] xl:top-[93%] lg:top-[87%] md:top-[92%] sm:top-[91%] sm:left-[42%] bg-[#20222E] text-white rounded-full p-4 shadow-lg">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}