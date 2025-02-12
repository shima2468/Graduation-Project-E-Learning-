import React, { useState } from 'react'
import styles from  './TeachersList.module.css'
import { IoClose } from 'react-icons/io5'; 
export default function TeachersList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nameAr: '',
    nameEn: '',
    email: '',
    password: '',
    specialization: '',
    hireDate: '',
    address: ''
  });
  const [teachers, setTeachers] = useState([]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleAddTeacher = () => {
    // إضافة المعلم
    console.log(formData);
    setTeachers([...teachers, formData]);
    setIsModalOpen(false); // إغلاق المودال بعد إضافة المعلم
  };
  

  return (
    <section className="relative w-full py-16" id="AcademicStage">
    <div className="absolute inset-0 w-full h-full -z-10"></div>
  
    <div className="flex flex-col items-center justify-center mb-8">
      <h2 className="text-4xl font-bold main-color my-6 tracking-wider text-center">
        Manage Teachers
      </h2>
      <h3 className="text-xl font-semibold main-color">Teachers List</h3>
    </div>
  
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#F39F5F] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#ad6b38]"
        >
          + Add Teacher
        </button>
      </div>
  
      <table className="w-full bg-white shadow-lg rounded-md overflow-hidden">
        <thead className="text-left">
          <tr>
            <th className="p-4 main-color">ID</th>
            <th className="p-4 main-color">Teacher Name (Arabic)</th>
            <th className="p-4 main-color">Teacher Name (English)</th>
            <th className="p-4 main-color">Email</th>
            <th className="p-4 main-color">Specialization</th>
            <th className="p-4 main-color">Hire Date</th>
            <th className="p-4 main-color">Address</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b">
                <td className="p-4">{teacher.id}</td>
                <td className="p-4">{teacher.nameAr}</td>
                <td className="p-4">{teacher.nameEn}</td>
                <td className="p-4">{teacher.email}</td>
                <td className="p-4">{teacher.specialization}</td>
                <td className="p-4">{teacher.hireDate}</td>
                <td className="p-4">{teacher.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-4 text-center text-gray-500">
                No teachers added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-10 rounded-md w-[600px] shadow-lg relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
  
          <h3 className="text-xl font-bold mb-6 main-color">Add New Teacher</h3>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium main-color">Teacher Name (Arabic)</label>
                <input
                  type="text"
                  name="nameAr"
                  value={formData.nameAr}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="اسم المعلم"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium main-color">Teacher Name (English)</label>
                <input
                  type="text"
                  name="nameEn"
                  value={formData.nameEn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Teacher Name"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium main-color">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium main-color">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter password"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium main-color">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter specialization"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium main-color">Hire Date</label>
                <input
                  type="date"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>
  
            <div className="mb-6">
              <label className="block mb-1 font-medium main-color">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter address"
              />
            </div>
  
            <button
              type="button"
              onClick={handleAddTeacher}
              className="w-full bg-[#F39F5F] text-white py-2 rounded-md hover:bg-[#ad6b38]"
            >
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    )}
  </section>
  

  

  )
}
