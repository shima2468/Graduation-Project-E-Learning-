import React from 'react'
import styles from  './StudentDetailes.module.css'
import studentImage from "../../assets/student-profile.webp";
export default function StudentDetailes() {
  return (
    <div className="container mx-auto p-6 bg-[] min-h-screen">
    {/* Profile Section */}
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center mb-6">
      <img
        src={studentImage}
        alt="Student"
        className="w-20 h-20 rounded-full border-4 border-orange-400 mr-4"
      />
      <div>
        <p className="font-semibold text-lg main-color ">Name: Alaa Ahmed Al-Sharfa</p>
        <p className="main-color ">Grade: Grade 10</p>
        <p className="main-color ">Section: A</p>
      </div>
    </div>
  
    {/* Combined Sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Personal Information */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-md font-bold main-color  mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold main-color  mb-1">ID Number</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              defaultValue="408097681"
            />
          </div>
          <div>
            <label className="block font-semibold main-color  mb-1">Date Of Birth</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              defaultValue="2002-07-04"
            />
          </div>
          <div>
            <label className="block font-semibold main-color  mb-1">Place of Birth</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              defaultValue="Gaza"
            />
          </div>
          <div>
            <label className="block font-semibold main-color  mb-1">Born</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="born"
                  defaultChecked
                  className="mr-2"
                />
                Inside Palestine
              </label>
              <label className="flex items-center">
                <input type="radio" name="born" className="mr-2" />
                Outside Palestine
              </label>
            </div>
          </div>
        </div>
      </div>
  
      {/* Name in Arabic */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-md font-bold main-color  mb-4">Name in Arabic</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Father Name"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Grandfather's Name"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Family"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
    </div>
  
    {/* Parent and Other Data */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Parent Information */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-md font-bold main-color  mb-4">Parent Information</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Relation"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Parent Name"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Parent Number"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
  
      {/* Other Data */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-md font-bold main-color  mb-4">Other Data</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Blood Type"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <div>
            <label className="block font-semibold main-color  mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="gender" className="mr-2" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" className="mr-2" />
                Female
              </label>
            </div>
          </div>
          <input
            type="text"
            placeholder="Address"
            className="border rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-orange-400"
          />
          <div>
            <label className="block font-semibold main-color  mb-1">Religion</label>
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="religion" className="mr-2" />
                Muslim
              </label>
              <label>
                <input type="radio" name="religion" className="mr-2" />
                Christian
              </label>
              <label>
                <input type="radio" name="religion" className="mr-2" />
                Other
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Save Button */}
    <div className="flex justify-end mt-6">
      <button className="bg-orange-400 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-500 focus:ring-2 focus:ring-orange-400">
        Save
      </button>
    </div>
  </div>
  
  
  )
}
