import React, { useEffect, useState } from 'react'
import styles from  './ScrollToTop.module.css'
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // وظيفة لمراقبة التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
       <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-[#84BA3F]  text-white px-4 py-2 rounded-full shadow-lg transition-opacity duration-300 z-[999] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
     <i class="fa-solid fa-arrow-up"></i>
    </button>
    </>
  )
}
