import React from 'react'
import styles from  './UpgradeList.module.css'
export default function UpgradeList() {
  return (
    <>
    
    <div className="p-8 min-h-screen mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center main-color">
        Upgrade List
      </h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-[#F4EEE5] main-color">
            <tr>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                Student Name
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                Old Academic Level
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                Old Class
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                Old Section
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                Old Academic Year
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                New Academic Level
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                New Class
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                New Section
              </th>
              <th className="px-1 py-2 border border-gray-300 text-left main-color font-semibold">
                New Academic Year
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Static Data for now */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Mohammed</td>
              <td className="px-4 py-2 border border-gray-300">2</td>
              <td className="px-4 py-2 border border-gray-300">A</td>
              <td className="px-4 py-2 border border-gray-300">Science</td>
              <td className="px-4 py-2 border border-gray-300">2023-2024</td>
              <td className="px-4 py-2 border border-gray-300">3</td>
              <td className="px-4 py-2 border border-gray-300">A</td>
              <td className="px-4 py-2 border border-gray-300">Science</td>
              <td className="px-4 py-2 border border-gray-300">2024-2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Sara Ali</td>
              <td className="px-4 py-2 border border-gray-300">1</td>
              <td className="px-4 py-2 border border-gray-300">B</td>
              <td className="px-4 py-2 border border-gray-300">Arts</td>
              <td className="px-4 py-2 border border-gray-300">2022-2023</td>
              <td className="px-4 py-2 border border-gray-300">2</td>
              <td className="px-4 py-2 border border-gray-300">B</td>
              <td className="px-4 py-2 border border-gray-300">Arts</td>
              <td className="px-4 py-2 border border-gray-300">2023-2024</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Ali Saleh</td>
              <td className="px-4 py-2 border border-gray-300">3</td>
              <td className="px-4 py-2 border border-gray-300">C</td>
              <td className="px-4 py-2 border border-gray-300">Commerce</td>
              <td className="px-4 py-2 border border-gray-300">2021-2022</td>
              <td className="px-4 py-2 border border-gray-300">4</td>
              <td className="px-4 py-2 border border-gray-300">C</td>
              <td className="px-4 py-2 border border-gray-300">Commerce</td>
              <td className="px-4 py-2 border border-gray-300">2022-2023</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Ali Saleh</td>
              <td className="px-4 py-2 border border-gray-300">3</td>
              <td className="px-4 py-2 border border-gray-300">C</td>
              <td className="px-4 py-2 border border-gray-300">Commerce</td>
              <td className="px-4 py-2 border border-gray-300">2021-2022</td>
              <td className="px-4 py-2 border border-gray-300">4</td>
              <td className="px-4 py-2 border border-gray-300">C</td>
              <td className="px-4 py-2 border border-gray-300">Commerce</td>
              <td className="px-4 py-2 border border-gray-300">2022-2023</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Ali Saleh</td>
              <td className="px-4 py-2 border border-gray-300">3</td>
              <td className="px-4 py-2 border border-gray-300">C</td>
              <td className="px-4 py-2 border border-gray-300">Commerce</td>
              <td className="px-4 py-2 border border-gray-300">2021-2022</td>
              <td className="px-4 py-2 border border-gray-300">4</td>
              <td className="px-4 py-2 border border-gray-300">C</td>
              <td className="px-4 py-2 border border-gray-300">Commerce</td>
              <td className="px-4 py-2 border border-gray-300">2022-2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
