import React from 'react'
import styles from  './AddNewStudent.module.css'
export default function AddNewStudent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data saved successfully!');
  };
  return (
    <>
     <div className="p-8 min-h-screen mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center main-color">Add New Student</h1>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Personal Information Card */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 main-color">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Name in Arabic:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Mohammed Ahmed"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Name in English:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Mohammed Ahmed"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="mohammed@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="password123"
          />
        </div>
      </div>
    </div>

    {/* Additional Information Card */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 main-color">Additional Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Gender:</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="male"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Nationality:</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Saudi"
          >
            <option value="Saudi">Saudi</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Blood Type:</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="O+"
          >
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Date of Birth:</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="2005-05-10"
          />
        </div>
      </div>
    </div>

    {/* Academic Information Card */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 main-color">Academic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Academic Year:</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Secondary"
            required
          >
            <option value="Primary">Primary</option>
            <option value="Middle">Middle</option>
            <option value="Secondary">Secondary</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Class:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Ahmed Ali"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Study Level:</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Grade 10"
          >
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 main-color">Guardian Name:</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
            defaultValue="Grade 10"
          >
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
        </div>
      </div>
    </div>

    {/* Attachments */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 main-color">Attachments</h2>
      <div>
        <label className="block text-sm font-semibold mb-1 main-color">Upload Files:</label>
        <input
          type="file"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
        />
      </div>
    </div>

    {/* Submit Button */}
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-[#f39f5f] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#bf753c] transition"
      >
        Save
      </button>
    </div>
  </form>
</div>

    </>
  )
}
