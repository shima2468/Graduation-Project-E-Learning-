import React, { useState } from 'react'
import styles from  './ClassList.module.css'

export default function ClassList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classes, setClasses] = useState([]); 
  const [formData, setFormData] = useState({ nameAr: "", nameEn: "", stage: "", notes: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClass = () => {
    setClasses([...classes, { id: classes.length + 1, ...formData }]);
    setFormData({ nameAr: "", nameEn: "", stage: "", notes: "" });
    setIsModalOpen(false);
  };

  const handleDeleteClass = (id) => {
    setClasses(classes.filter((classItem) => classItem.id !== id));
  };

  const handleDeleteAllClasses = () => {
    setClasses([]); 
  };

  return (
    <section className="relative w-full py-16" id="AcademicClasses">
      <div className="absolute inset-0 w-full h-full  -z-10"></div>

      <div className="flex flex-col items-center justify-center mb-8">
      <h2 className="text-4xl font-bold main-color my-6 tracking-wider text-center">
          Manage Academic Classes
        </h2>
        <h3 className="text-xl font-semibold main-color">Academic Classes</h3>
        
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F39F5F] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#e6975a]"
          >
            + Add Class
          </button>
          <button
            onClick={handleDeleteAllClasses}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
          >
            Delete All Classes
          </button>
        </div>

        <table className="w-full bg-white shadow-lg rounded-md overflow-hidden">
          <thead className="text-left">
            <tr>
              <th className="p-4 main-color">ID</th>
              <th className="p-4 main-color">Class Name (Arabic)</th>
              <th className="p-4 main-color">Class Name (English)</th>
              <th className="p-4 main-color">Stage</th>
              <th className="p-4 main-color">Notes</th>
              <th className="p-4 main-color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((classItem) => (
                <tr key={classItem.id} className="border-b">
                  <td className="p-4 main-color  ">{classItem.id}</td>
                  <td className="p-4 main-color  ">{classItem.nameAr}</td>
                  <td className="p-4 main-color  ">{classItem.nameEn}</td>
                  <td className="p-4 main-color  ">{classItem.stage}</td>
                  <td className="p-4 main-color  ">{classItem.notes}</td>
                  <td className="p-4 main-color  ">
                    <button
                      onClick={() => handleDeleteClass(classItem.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 main-color   text-center text-gray-500">
                  No classes added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-md w-[700px] h-[500px] shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-6 main-color">Add New Class</h3>
            <form>
              <div className="grid grid-cols-3 gap-4 main-color   mb-4">
                <div>
                  <label className="block mb-2 main-color  font-medium">Class Name (Arabic)</label>
                  <input
                    type="text"
                    name="nameAr"
                    value={formData.nameAr}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="اسم الصف"
                  />
                </div>
                <div>
                  <label className="block mb-2 main-color  font-medium">Class Name (English)</label>
                  <input
                    type="text"
                    name="nameEn"
                    value={formData.nameEn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Class Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 main-color  font-medium">Stage</label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select Stage</option>
                    <option value="Primary">Primary</option>
                    <option value="Middle">Middle</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2 main-color  font-medium">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-12 border rounded-md"
                  placeholder="Additional Notes"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleAddClass}
                  className="bg-[#F39F5F] text-white px-4 py-2 rounded-md hover:bg-[#e6975a]"
                >
                  Add Class
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
