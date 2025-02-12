import React from "react";
import childrenImage from "../../assets/children-image.webp"; 
import earlyLearningIcon from "../../assets/early-learning.webp"; 
import artAndCraftIcon from "../../assets/art-and-craft.webp"; 
import brainTrainIcon from "../../assets/brain-train.webp"; 
import musicAreaIcon from "../../assets/music-area.webp"; 
import Act from '../../assets/pexels-photo-5212664.jpeg'

export default function Activity() {
  return (
    <section className="bg-[#f9fcff] py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-7">
        {/* الصورة اليسرى */}
        <div className="relative w-full md:w-1/2">
          <div className="relative bg-[#def0f9] rounded-tl-[150px] rounded-br-[150px] overflow-hidden shadow-lg">
            <img
              src={Act}
              alt="Children Activity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* النصوص والأنشطة */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="mb-8">
            <h4 className="second-color font-semibold text-lg">
              Our Best Activities
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
              Let Us Know About Our <br />
              Reading And Cultural
            </h2>
            <p className="main-color text-base mt-4">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Suspendisse gravida vitae nisi in tincidunt.
            </p>
          </div>

          {/* الأنشطة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* النشاط الأول */}
            <div className="bg-[#fcece3] rounded-lg p-4 flex items-center space-x-4 shadow-md">
              <img
                src={earlyLearningIcon}
                alt="Early Learning"
                className="w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-gray-800">Early Learning</h4>
                <p className="main-color text-sm">
                  Elit Aenean scelerisque vitae consequat.
                </p>
              </div>
            </div>

            {/* النشاط الثاني */}
            <div className="bg-[#e3f2ff] rounded-lg p-4 flex items-center space-x-4 shadow-md">
              <img
                src={artAndCraftIcon}
                alt="Art and Craft"
                className="w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-gray-800">Art and Craft</h4>
                <p className="main-color text-sm">
                  Elit Aenean scelerisque vitae consequat.
                </p>
              </div>
            </div>

            {/* النشاط الثالث */}
            <div className="bg-[#eaeaff] rounded-lg p-4 flex items-center space-x-4 shadow-md">
              <img
                src={brainTrainIcon}
                alt="Brain Train"
                className="w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-gray-800">Brain Train</h4>
                <p className="main-color text-sm">
                  Elit Aenean scelerisque vitae consequat.
                </p>
              </div>
            </div>

            {/* النشاط الرابع */}
            <div className="bg-[#ffe4f3] rounded-lg p-4 flex items-center space-x-4 shadow-md">
              <img
                src={musicAreaIcon}
                alt="Music Area"
                className="w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-gray-800">Music Area</h4>
                <p className="main-color text-sm">
                  Elit Aenean scelerisque vitae consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
