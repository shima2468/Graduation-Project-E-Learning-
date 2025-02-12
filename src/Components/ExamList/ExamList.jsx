import React from "react";

export default function ExamList() {
  // بيانات افتراضية للامتحانات
  const exams = [
    {
      nameArabic: "اختبار الرياضيات",
      nameEnglish: "Math Exam",
      term: "First",
      academicYear: "2024/2025",
      examDate: "2025-01-10",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: 120,
      teacherName: "Ahmed Ali",
      gradeLevel: "Secondary",
      classRoom: "10A",
      section: "A",
      subject: "Mathematics",
    },
    {
      nameArabic: "اختبار الفيزياء",
      nameEnglish: "Physics Exam",
      term: "Second",
      academicYear: "2024/2025",
      examDate: "2025-02-15",
      startTime: "9:00 AM",
      endTime: "11:00 AM",
      duration: 120,
      teacherName: "Hassan Saleh",
      gradeLevel: "Secondary",
      classRoom: "11B",
      section: "B",
      subject: "Physics",
    },
    {
      nameArabic: "اختبار الكيمياء",
      nameEnglish: "Chemistry Exam",
      term: "First",
      academicYear: "2024/2025",
      examDate: "2025-03-05",
      startTime: "8:00 AM",
      endTime: "10:00 AM",
      duration: 120,
      teacherName: "Fatima Youssef",
      gradeLevel: "Secondary",
      classRoom: "12C",
      section: "A",
      subject: "Chemistry",
    },
    {
      nameArabic: "اختبار اللغة العربية",
      nameEnglish: "Arabic Exam",
      term: "Second",
      academicYear: "2024/2025",
      examDate: "2025-03-20",
      startTime: "11:00 AM",
      endTime: "1:00 PM",
      duration: 120,
      teacherName: "Mohammed Al-Rami",
      gradeLevel: "Middle",
      classRoom: "8A",
      section: "C",
      subject: "Arabic Language",
    },
    {
      nameArabic: "اختبار الأحياء",
      nameEnglish: "Biology Exam",
      term: "First",
      academicYear: "2024/2025",
      examDate: "2025-04-15",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: 120,
      teacherName: "Aisha Khalid",
      gradeLevel: "Secondary",
      classRoom: "12B",
      section: "B",
      subject: "Biology",
    },
    {
      nameArabic: "اختبار اللغة الإنجليزية",
      nameEnglish: "English Exam",
      term: "First",
      academicYear: "2024/2025",
      examDate: "2025-05-01",
      startTime: "9:30 AM",
      endTime: "11:30 AM",
      duration: 120,
      teacherName: "Sarah Ahmed",
      gradeLevel: "Primary",
      classRoom: "5C",
      section: "D",
      subject: "English Language",
    },
  ];

  return (
    <div className="p-8 min-h-screen mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center main-color">Exam List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-[#F4EEE5]">

            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Exam Name (Arabic)</th>
              <th className="px-4 py-2">Exam Name (English)</th>
              <th className="px-4 py-2">Term</th>
              <th className="px-4 py-2">Academic Year</th>
              <th className="px-4 py-2">Exam Date</th>
              <th className="px-4 py-2">Start Time</th>
              <th className="px-4 py-2">End Time</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Teacher Name</th>
              <th className="px-4 py-2">Grade Level</th>
              <th className="px-4 py-2">Classroom</th>
              <th className="px-4 py-2">Section</th>
              <th className="px-4 py-2">Subject</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">{exam.nameArabic}</td>
                <td className="px-4 py-2">{exam.nameEnglish}</td>
                <td className="px-4 py-2">{exam.term}</td>
                <td className="px-4 py-2">{exam.academicYear}</td>
                <td className="px-4 py-2">{exam.examDate}</td>
                <td className="px-4 py-2">{exam.startTime}</td>
                <td className="px-4 py-2">{exam.endTime}</td>
                <td className="px-4 py-2">{exam.duration} min</td>
                <td className="px-4 py-2">{exam.teacherName}</td>
                <td className="px-4 py-2">{exam.gradeLevel}</td>
                <td className="px-4 py-2">{exam.classRoom}</td>
                <td className="px-4 py-2">{exam.section}</td>
                <td className="px-4 py-2">{exam.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}