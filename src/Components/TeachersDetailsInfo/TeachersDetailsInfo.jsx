import React from 'react'
import styles from  './TeachersDetailsInfo.module.css'
export default function TeachersDetailsInfo() {
  return (
<div className="container mx-auto p-6 ">
  

  {/* Teacher Information Section */}
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center space-x-6">
    <img 
      src="https://via.placeholder.com/100" 
      alt="Teacher Profile" 
      className="w-24 h-24 rounded-full object-cover border-2 border-[#F39F5F]"
    />
    <div>
      <h3 className="font-bold text-xl text-gray-800">Name: Alaa Ahmed Al-Sharfa</h3>
      <p className="text-gray-600">Grade: Grade 10</p>
      <p className="text-gray-600">Section: A</p>
    </div>
  </div>

  {/* Form Section */}
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Box 1 */}
    <div className="  space-y-4  bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        />
      </div>
    </div>

    {/* Box 2 */}
    <div className=" bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Major</label>
        <select
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        >
          <option value="">Major</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
        </select>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Type</label>
        <select
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        >
          <option value="">Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
        </select>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Date of Appointment</label>
        <input
          type="date"
          placeholder="Date of Appointment"
          className="border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F39F5F] px-4 py-2 rounded-md"
        />

      </div>
       {/* Save Button */}
    <div className="md:col-span-2 flex justify-end mt-8">
      <button className="bg-[#F39F5F] text-white px-6 py-3 text-lg hover:bg-orange-600 rounded-md">
        Save
      </button>
    </div>
     
    </div>

   
  </form>
</div>



 

  )
}
