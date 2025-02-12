import React from 'react'
import styles from  './GraduationList.module.css'
export default function GraduationList({ data }) {
  return (
    <div className="mt-10 max-w-3xl mx-auto">
    <table className="min-w-full bg-white shadow-lg rounded-md">
      <thead className="bg-gray-200 text-left">
        <tr>
          <th className="p-4">#</th>
          <th className="p-4">Stage</th>
          <th className="p-4">Grade</th>
          <th className="p-4">Department</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{item.stage}</td>
              <td className="p-4">{item.grade}</td>
              <td className="p-4">{item.department}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="p-4 text-center text-gray-500">
              No data available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}
