import React from 'react'
import styles from  './StudentList.module.css'
export default function StudentList() {
  return (
      <>
            <div className="p-8 min-h-screen mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center main-color">Student List</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-[#F4EEE5] main-color">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Name (Arabic)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Name (English)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Gender</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Nationality</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Blood Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Date of Birth</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Guardian Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border border-gray-200">Academic Year</th>
            </tr>
          </thead>
          <tbody className="bg-white main-color">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border border-gray-200">1</td>
              <td className="px-6 py-4 border border-gray-200">محمد أحمد</td>
              <td className="px-6 py-4 border border-gray-200">Mohammed Ahmed</td>
              <td className="px-6 py-4 border border-gray-200">Male</td>
              <td className="px-6 py-4 border border-gray-200">Saudi</td>
              <td className="px-6 py-4 border border-gray-200">O+</td>
              <td className="px-6 py-4 border border-gray-200">2005-05-10</td>
              <td className="px-6 py-4 border border-gray-200">Ahmed Ali</td>
              <td className="px-6 py-4 border border-gray-200">Secondary</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border border-gray-200">2</td>
              <td className="px-6 py-4 border border-gray-200">علي حسن</td>
              <td className="px-6 py-4 border border-gray-200">Ali Hassan</td>
              <td className="px-6 py-4 border border-gray-200">Male</td>
              <td className="px-6 py-4 border border-gray-200">Egyptian</td>
              <td className="px-6 py-4 border border-gray-200">A+</td>
              <td className="px-6 py-4 border border-gray-200">2007-03-15</td>
              <td className="px-6 py-4 border border-gray-200">Hassan Ali</td>
              <td className="px-6 py-4 border border-gray-200">Middle</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border border-gray-200">3</td>
              <td className="px-6 py-4 border border-gray-200">فاطمة يوسف</td>
              <td className="px-6 py-4 border border-gray-200">Fatima Yousef</td>
              <td className="px-6 py-4 border border-gray-200">Female</td>
              <td className="px-6 py-4 border border-gray-200">Saudi</td>
              <td className="px-6 py-4 border border-gray-200">B-</td>
              <td className="px-6 py-4 border border-gray-200">2006-12-20</td>
              <td className="px-6 py-4 border border-gray-200">Yousef Ali</td>
              <td className="px-6 py-4 border border-gray-200">Primary</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border border-gray-200">3</td>
              <td className="px-6 py-4 border border-gray-200">فاطمة يوسف</td>
              <td className="px-6 py-4 border border-gray-200">Fatima Yousef</td>
              <td className="px-6 py-4 border border-gray-200">Female</td>
              <td className="px-6 py-4 border border-gray-200">Saudi</td>
              <td className="px-6 py-4 border border-gray-200">B-</td>
              <td className="px-6 py-4 border border-gray-200">2006-12-20</td>
              <td className="px-6 py-4 border border-gray-200">Yousef Ali</td>
              <td className="px-6 py-4 border border-gray-200">Primary</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border border-gray-200">3</td>
              <td className="px-6 py-4 border border-gray-200">فاطمة يوسف</td>
              <td className="px-6 py-4 border border-gray-200">Fatima Yousef</td>
              <td className="px-6 py-4 border border-gray-200">Female</td>
              <td className="px-6 py-4 border border-gray-200">Saudi</td>
              <td className="px-6 py-4 border border-gray-200">B-</td>
              <td className="px-6 py-4 border border-gray-200">2006-12-20</td>
              <td className="px-6 py-4 border border-gray-200">Yousef Ali</td>
              <td className="px-6 py-4 border border-gray-200">Primary</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 border border-gray-200">3</td>
              <td className="px-6 py-4 border border-gray-200">فاطمة يوسف</td>
              <td className="px-6 py-4 border border-gray-200">Fatima Yousef</td>
              <td className="px-6 py-4 border border-gray-200">Female</td>
              <td className="px-6 py-4 border border-gray-200">Saudi</td>
              <td className="px-6 py-4 border border-gray-200">B-</td>
              <td className="px-6 py-4 border border-gray-200">2006-12-20</td>
              <td className="px-6 py-4 border border-gray-200">Yousef Ali</td>
              <td className="px-6 py-4 border border-gray-200">Primary</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      
      </>
  )
}
