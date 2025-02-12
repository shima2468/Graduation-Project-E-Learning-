import React, { useState } from 'react'
import styles from  './AddNewGraduation.module.css'
import GraduationList from '../GraduationList/GraduationList';
export default function AddNewGraduation() {
 
  const [formData, setFormData] = useState({
    stage: '',
    grade: '',
    department: '',
  });

  const [data, setData] = useState([]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]); 
    setFormData({ stage: '', grade: '', department: '' }); 
  };
  return (
    
       <>
   <div className="container mx-auto p-6 mt-16">
  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-center mb-6 main-color">Add New Graduation</h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Stage</label>
        <select
          name="stage"
          value={formData.stage}
          onChange={handleInputChange}
          className="w-full mt-2 p-3 rounded-md"
        >
          <option value="">Select Stage</option>
          <option value="Primary">Primary</option>
          <option value="Middle">Middle</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Grade</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleInputChange}
          className="w-full mt-2 p-3 rounded-md"
          placeholder="Enter Grade"
        />
      </div>
    </div>

    {/* حقل "Department" يأخذ العرض الكامل */}
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700">Department</label>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleInputChange}
        className="w-full mt-2 p-3 rounded-md"
        placeholder="Enter Department"
      />
    </div>

    <button
      type="submit"
      className="mt-6 w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Add Data
    </button>
  </form>

  <GraduationList data={data} /> {/* عرض الجدول هنا */}
</div>


       </>
  )
}
