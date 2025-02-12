import React from 'react'
import styles from  './AddNewUpgrade.module.css'
export default function AddNewUpgrade() {
  return (
    <>
    
    <div className="p-8 min-h-screen mt-12">
      <h1 className="text-3xl font-bold mb-3 text-center main-color">
        Upgrade Student
      </h1>
      <form className="space-y-6">
        {/* Old Academic Year Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 main-color">
            Old Academic Year
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Academic Level:
              </label>
              <input
                type="number"
                min="1"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Class:
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="A"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Section:
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="Science"
              >
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Academic Year:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="2023-2024"
              />
            </div>
          </div>
        </div>

        {/* New Academic Year Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 main-color">
            New Academic Year
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Academic Level:
              </label>
              <input
                type="number"
                min="1"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="3"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Class:
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="A"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Section:
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="Science"
              >
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 main-color">
                Academic Year:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f39f5f] focus:outline-none"
                defaultValue="2024-2025"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#f39f5f] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#bf753c] transition"
          >
            Upgrade
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
