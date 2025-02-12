import React, { useState } from 'react'
import styles from  './StudentExams.module.css'
import ReactModal from 'react-modal';
export default function StudentExams() {
   // State for tracking which exams are completed
   const [completedExams, setCompletedExams] = useState({});
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [selectedExam, setSelectedExam] = useState("");
 
   // Function to handle exam completion
   const handleStartExam = (examId) => {
     setSelectedExam(examId);
     setModalIsOpen(true);
   };
   const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
   
    <>
    <section className="bg-gray-50 py-10 px-8">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Exam List
        </h2>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Mathematics Exam
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Date: <span className="font-medium">2025-01-15</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Time: <span className="font-medium">10:00 AM</span>
            </p>
            <p
              className={`text-sm font-bold mb-4 ${
                completedExams["math"] ? "text-green-600" : "text-blue-600"
              }`}
            >
              Status: {completedExams["math"] ? "Completed" : "Upcoming"}
            </p>
            <button
              className={`w-full py-2 rounded-md shadow-md transition ${
                completedExams["math"]
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#f39f5f] text-white hover:bg-[#f59f5f]"
              }`}
              onClick={() => handleStartExam("math")}
              disabled={completedExams["math"]}
            >
              {completedExams["math"] ? "Completed" : "Start Exam"}
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              English Exam
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Date: <span className="font-medium">2025-01-12</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Time: <span className="font-medium">2:00 PM</span>
            </p>
            <p
              className={`text-sm font-bold mb-4 ${
                completedExams["english"] ? "text-green-600" : "text-blue-600"
              }`}
            >
              Status: {completedExams["english"] ? "Completed" : "Upcoming"}
            </p>
            <button
              className={`w-full py-2 rounded-md shadow-md transition ${
                completedExams["english"]
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#f39f5f] text-white hover:bg-[#f59f5f]"
              }`}
              onClick={() => handleStartExam("english")}
              disabled={completedExams["english"]}
            >
              {completedExams["english"] ? "Completed" : "Start Exam"}
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Science Exam
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Date: <span className="font-medium">2025-01-18</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Time: <span className="font-medium">9:00 AM</span>
            </p>
            <p
              className={`text-sm font-bold mb-4 ${
                completedExams["science"] ? "text-green-600" : "text-blue-600"
              }`}
            >
              Status: {completedExams["science"] ? "Completed" : "Upcoming"}
            </p>
            <button
              className={`w-full py-2 rounded-md shadow-md transition ${
                completedExams["science"]
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#f39f5f] text-white hover:bg-[#f59f5f]"
              }`}
              onClick={() => handleStartExam("science")}
              disabled={completedExams["science"]}
            >
              {completedExams["science"] ? "Completed" : "Start Exam"}
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Science Exam
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Date: <span className="font-medium">2025-01-18</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Time: <span className="font-medium">9:00 AM</span>
            </p>
            <p
              className={`text-sm font-bold mb-4 ${
                completedExams["science"] ? "text-green-600" : "text-blue-600"
              }`}
            >
              Status: {completedExams["science"] ? "Completed" : "Upcoming"}
            </p>
            <button
              className={`w-full py-2 rounded-md shadow-md transition ${
                completedExams["science"]
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#f39f5f] text-white hover:bg-[#f59f5f]"
              }`}
              onClick={() => handleStartExam("science")}
              disabled={completedExams["science"]}
            >
              {completedExams["science"] ? "Completed" : "Start Exam"}
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Science Exam
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Date: <span className="font-medium">2025-01-18</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Time: <span className="font-medium">9:00 AM</span>
            </p>
            <p
              className={`text-sm font-bold mb-4 ${
                completedExams["science"] ? "text-green-600" : "text-blue-600"
              }`}
            >
              Status: {completedExams["science"] ? "Completed" : "Upcoming"}
            </p>
            <button
              className={`w-full py-2 rounded-md shadow-md transition ${
                completedExams["science"]
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#f39f5f] text-white hover:bg-[#f59f5f]"
              }`}
              onClick={() => handleStartExam("science")}
              disabled={completedExams["science"]}
            >
              {completedExams["science"] ? "Completed" : "Start Exam"}
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Science Exam
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Date: <span className="font-medium">2025-01-18</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Time: <span className="font-medium">9:00 AM</span>
            </p>
            <p
              className={`text-sm font-bold mb-4 ${
                completedExams["science"] ? "text-green-600" : "text-blue-600"
              }`}
            >
              Status: {completedExams["science"] ? "Completed" : "Upcoming"}
            </p>
            <button
              className={`w-full py-2 rounded-md shadow-md transition ${
                completedExams["science"]
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#f39f5f] text-white hover:bg-[#f59f5f]"
              }`}
              onClick={() => handleStartExam("science")}
              disabled={completedExams["science"]}
            >
              {completedExams["science"] ? "Completed" : "Start Exam"}
            </button>
          </div>
        </div>

        {/* Modal Component */}
        <ReactModal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    content: {
      maxWidth: "400px", // تحديد الحد الأقصى للعرض
      maxHeight: "200px",
      margin: "auto", // توسيط المودال
      padding: "20px", // ضبط الحواف الداخلية
      borderRadius: "8px", // تعديل الزوايا
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // إضافة ظل
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // خلفية شفافة
    },
  }}
>
  <h2 className="text-lg font-bold mb-4 text-center">
    Start {selectedExam} Exam?
  </h2>
  <p className="text-sm text-gray-600 text-center">
    Are you sure you want to start the exam?
  </p>
  <div className="mt-4 flex justify-center space-x-2">
    <button
      className="bg-gray-300 text-gray-600 px-3 py-1 rounded text-sm"
      onClick={closeModal}
    >
      Cancel
    </button>
    <button
      className="bg-[#f39f5f] text-white px-3 py-1 rounded text-sm hover:bg-[#f59f5f]"
      onClick={() => {
        setCompletedExams((prevState) => ({
          ...prevState,
          [selectedExam]: true,
        }));
        closeModal();
      }}
    >
      Start Exam
    </button>
  </div>
</ReactModal>

      </div>
    </section>
    
    </>
  )
}
