import React, { useState } from 'react'
import styles from  './StagesList.module.css'
export default function StagesList() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [stages, setStages] = useState([]); 
      const [formData, setFormData] = useState({ nameAr: "", nameEn: "", notes: "" });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };
    
      const handleAddStage = () => {
        setStages([...stages, { id: stages.length + 1, ...formData }]);
        setFormData({ nameAr: "", nameEn: "", notes: "" });
        setIsModalOpen(false);
       
    }
  return (
    <section className="relative w-full  py-16" id="AcademicStage">
    <div className="absolute inset-0 w-full h-full  -z-10"></div>
  
    <div className="flex flex-col items-center justify-center mb-8">
      
      <h2 className="text-4xl font-bold main-color my-6 tracking-wider text-center">
        Manage Academic Stages
      </h2>
      <h3 className="text-xl font-semibold main-color">Academic Stages</h3>
    </div>
  
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#F39F5F] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#ad6b38]"
        >
          + Add Stage
        </button>
      </div>
  
      <table className="w-full bg-white shadow-lg rounded-md overflow-hidden">
        <thead className="text-left">
          <tr>
            <th className="p-4 main-color">ID</th>
            <th className="p-4 main-color">Stage Name (Arabic)</th>
            <th className="p-4 main-color">Stage Name (English)</th>
            <th className="p-4 main-color">Notes</th>
          </tr>
        </thead>
        <tbody>
          {stages.length > 0 ? (
            stages.map((stage) => (
              <tr key={stage.id} className="border-b">
                <td className="p-4">{stage.id}</td>
                <td className="p-4">{stage.nameAr}</td>
                <td className="p-4">{stage.nameEn}</td>
                <td className="p-4">{stage.notes}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">
                No stages added yet.
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
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 "
              >
                ×
              </button>
  
              <h3 className="text-xl font-bold mb-6 main-color">Add New Stage</h3>
              <form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 font-medium main-color">Stage Name (Arabic)</label>
                    <input
                      type="text"
                      name="nameAr"
                      value={formData.nameAr}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="اسم المرحلة"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium main-color">Stage Name (English)</label>
                    <input
                      type="text"
                      name="nameEn"
                      value={formData.nameEn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Stage Name"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-1 font-medium main-color">Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Additional Notes"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleAddStage}
                  className="w-full bg-[#F39F5F] text-white py-2 rounded-md hover:bg-[#ad6b38]"
                >
                  Add Stage
                </button>
              </form>
            </div>
          </div>
        )}
  </section>
  )
}
