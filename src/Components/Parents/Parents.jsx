import React, { useState } from 'react'
import styles from  './Parents.module.css'
export default function Parents() {
  const [activeTab, setActiveTab] = useState("father");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [activeStep, setActiveStep] = useState('father');

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
  <div className="container mx-auto p-6">
  

  {/* Tabs with Timeline */}
  <div className="container mx-auto">
    <div className="flex items-center justify-center mb-6">
      {['father', 'mother', 'confirm'].map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
              activeStep === step
                ? "bg-[#F39F5F] border-[#F39F5F] text-white"
                : "bg-white border-gray-400 text-gray-400"
            }`}
          >
            {index + 1}
          </div>
          <button
            className="ml-4 px-6 py-2 text-lg font-bold "
          onClick={() => handleStepChange(step)}
          >
            {step.charAt(0).toUpperCase() + step.slice(1).replace(/^\w/, (c) => c.toLowerCase())} Info
          </button>
        </div>
      ))}
    </div>

    {activeStep === 'father' && (
   <form>
   <div className="bg-white p-4 mb-6 rounded-lg shadow-md">
     <h3 className="font-bold text-md mb-4">Father Information</h3>
 
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <input
         type="text"
         placeholder="First Name"
         className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
       />
       <input
         type="text"
         placeholder="Last Name"
         className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
       />
       <input
         type="email"
         placeholder="Email"
         className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
       />
       <input
         type="password"
         placeholder="Password"
         className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
       />
     </div>
 
     <div className="p-4 mt-6 rounded-md">
       <h3 className="font-bold text-md mb-4">More Information</h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='space-y-4'>
                  <select
                  className=" w-full border bg-white h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F]"
                >
                  <option value="">Nationality</option>
                  <option value="palestinian">Palestinian</option>
                  <option value="jordanian">Jordanian</option>
                </select>
                <select
                  className="w-full border bg-white h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F]"
                >
                  <option value="">Blood Type</option>
                  <option value="a+">A+</option>
                  <option value="o+">O+</option>
                </select>
          </div>
        
         
         <div >
           <label className="block font-semibold mb-2 text-md">Religion</label>
           <div className="flex items-center space-x-4 w-full">
             <label>
               <input type="radio" name="religion" className="mr-2 text-md" />
               Muslim
             </label>
             <label>
               <input type="radio" name="religion" className="mr-2 text-md" />
               Christian
             </label>
             <label>
               <input type="radio" name="religion" className="mr-2 text-md" />
               Other
             </label>
           </div>
         </div>
       </div>
     </div>
 
     <div className="flex justify-end mt-6">
       <button className="bg-[#F39F5F] text-white px-10 py-3 text-md rounded-lg hover:bg-orange-600">
         Save
       </button>
     </div>
   </div>
 </form>
 


   
    
    )}

    {activeStep === 'mother' && (
     <form>
     {/* Mother Form Card */}
     <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
       <h3 className="font-bold text-md mb-4">Mother Information</h3>
   
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <input
           type="text"
           placeholder="First Name"
           className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
         />
         <input
           type="text"
           placeholder="Last Name"
           className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
         />
         <input
           type="text"
           placeholder="Job Title"
           className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
         />
         <input
           type="text"
           placeholder="Address"
           className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
         />
         <input
           type="text"
           placeholder="ID Number"
           defaultValue="408097681"
           className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
         />
         <input
           type="text"
           placeholder="Phone Number"
           className="border bg-[#FAFAFA] h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F] placeholder:text-gray-400"
         />
         <select
           className="border bg-white h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F]"
         >
           <option value="">Nationality</option>
           <option value="palestinian">Palestinian</option>
           <option value="jordanian">Jordanian</option>
         </select>
         <select
           className="border bg-white h-12 text-md px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F39F5F]"
         >
           <option value="">Blood Type</option>
           <option value="a+">A+</option>
           <option value="o+">O+</option>
         </select>
       </div>
   
       <div className="flex justify-end mt-6">
         
         <button className="bg-[#F39F5F] text-white px-10 py-3 text-md rounded-lg hover:bg-orange-600">
           Save
         </button>
       </div>
     </div>
   </form>
   
   

    )}

    {activeStep === 'confirm' && (
      <div className="step-form mt-12">
        <h2 className='text-2xl'>Are you sure you want to save the data?</h2>
        <div className="flex justify-end mt-6">
      <button className="bg-[#F39F5F] text-white px-10 py-3 text-md rounded-lg hover:bg-orange-600">
        Edit Information
      </button>
      <button className="bg-gray-400 text-white px-10 py-3 text-md rounded-lg ml-4 hover:bg-gray-600">
        Confirm
      </button>
    </div>
      </div>
    )}
  </div>
</div>

  )
}
