import React from "react";
import Qu from "../../assets/Qu.webp"; // تأكد من مسار الصورة الصحيح
import QuImg from "../../assets/cta-1.png"
import QuImg2 from "../../assets/cta-2.png"
import Qu6 from "../../assets/Qu6.png"
import Q from "../../assets/Qu23.png"
import Bg from "../../assets/clases-bg.jpg"
export default function LatestSession() {
  return (
    <section className="relative  px-8 md:px-24 overflow-hidden "  >
              <div className="relative mt-12  text-white rounded-lg p-8 lg:p-16 flex flex-col lg:flex-row items-center bg-cover bg-center  space-x-32 " style={{ backgroundImage: `url(${Bg})`}}>
                    {/* النص */}
                    <div className="lg:w-3/4 space-y-4">
                      <h1 className="text-3xl lg:text-5xl font-bold">
                        Move closer to your goals with CartCrush.
                      </h1>
                      <p className="text-lg lg:text-xl text-orange-100">
                        Achieve your goals with CartCrush, your pathway to personal and professional success. Join us for a transformative journey towards your aspirations.
                      </p>
                      <button className="mt-4 py-3 px-6 bg-white text-orange-500 font-medium rounded-lg hover:bg-orange-100 transition">
                        Join For Free →
                      </button>
                    </div>

                    {/* الصورة */}
                    <div className="lg:w-1/2  lg:mt-0">
                      <img
                        src={Q}
                        alt="CartCrush"
                        className="absolute bottom-[15%] right-[15%] w-[200px] md:w-[300px] lg:w-[300px] transform scale-150"
                      />
                    </div>

                    {/* الخلفية الزخرفية */}
                    
                  </div>
  
  
    </section>
  );
}
