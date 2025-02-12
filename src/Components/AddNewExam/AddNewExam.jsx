import React, { useState } from "react";

export default function AddNewExam() {
  const [formData, setFormData] = useState({
    examNameArabic: "",
    examNameEnglish: "",
    term: "",
    academicYear: "",
    examDate: "",
    startTime: "",
    endTime: "",
    duration: "",
    teacherName: "",
    gradeLevel: "",
    classRoom: "",
    section: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="p-8 min-h-screen mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center main-color">Add New Exam</h1>
      <form onSubmit={handleSubmit}>
        {/* قسم Exam Information */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Exam Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Exam Name (Arabic):</label>
              <input
                type="text"
                name="examNameArabic"
                value={formData.examNameArabic}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Exam Name (English):</label>
              <input
                type="text"
                name="examNameEnglish"
                value={formData.examNameEnglish}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Term:</label>
              <select
                name="term"
                value={formData.term}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Term...</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Academic Year:</label>
              <input
                type="text"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleInputChange}
                placeholder="e.g., 2024/2025"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Teacher Name:</label>
              <select
                name="teacherName"
                value={formData.teacherName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Teacher...</option>
                <option value="Ahmed Ali">Ahmed Ali</option>
                <option value="Fatima Youssef">Fatima Youssef</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Grade Level:</label>
              <select
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Grade...</option>
                <option value="Primary">Primary</option>
                <option value="Middle">Middle</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Classroom:</label>
              <input
                type="text"
                name="classRoom"
                value={formData.classRoom}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Section:</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject:</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Subject...</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Biology">Biology</option>
              </select>
            </div>
          </div>
        </div>

        {/* قسم Date and Time */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Date and Time</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Exam Date:</label>
              <input
                type="date"
                name="examDate"
                value={formData.examDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Start Time:</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">End Time:</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Duration (Minutes):</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* زر الحفظ */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-500"
          >
            Save Exam
          </button>
        </div>
      </form>
    </div>
  );
}