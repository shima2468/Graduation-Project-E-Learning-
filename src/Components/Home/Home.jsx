import React from "react";
import styles from "./Home.module.css";
import About from "../About/About";
import "animate.css";
import Courses from "../Courses/Courses";
import Teachers from "../Teachers/Teachers";
// import Preloader from '../Preloader/Preloader'
import AcademicStages from "../AcademicStages/AcademicStages";
import Services from "../Services/Services";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import ParentFeedback from "../ParentFeedback/ParentFeedback";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      {/* <Preloader/> */}
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      <Services />
      <About />
      <AcademicStages />
      <Courses />
      <Teachers />
      <ParentFeedback />
      <ContactUs />
      {/* <Activity/> */}
    </>
  );
}
