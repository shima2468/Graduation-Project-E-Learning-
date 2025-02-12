import React from 'react'
import styles from  './StudentClassMeeting.module.css'
export default function StudentClassMeeting() {
  const classes = [
    {
      id: 1,
      name: "Mathematics",
      time: "2025-01-01T10:00:00", // وقت الحصة
      zoomLink: "https://zoom.us/j/123456789", // رابط Zoom
      classroomLink: "https://classroom.google.com/c/abc123", // رابط Google Classroom
    },
    {
      id: 2,
      name: "Science",
      time: "2025-01-01T12:00:00", // وقت الحصة
      zoomLink: "https://zoom.us/j/987654321", // رابط Zoom
      classroomLink: "https://classroom.google.com/c/xyz456", // رابط Google Classroom
    },
    {
      id: 3,
      name: "History",
      time: "2025-01-01T14:00:00", // وقت الحصة
      zoomLink: "https://zoom.us/j/555555555", // رابط Zoom
      classroomLink: "https://classroom.google.com/c/def789", // رابط Google Classroom
    },
  ];

  const currentTime = new Date(); // الوقت الحالي
  return (
    <>
     <div className="container mx-auto p-6 mt-16 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Today's Classes</h2>
      {classes.length === 0 ? (
        <p className="text-center text-[#f39f5f]">No classes scheduled for today.</p>
      ) : (
        <div className="space-y-4">
          {classes.map((classItem) => {
            const classTime = new Date(classItem.time); // تحويل وقت الحصة
            const isClassActive =
              currentTime >= classTime && 
              currentTime < new Date(classTime.getTime() + 60 * 60 * 1000); 

            return (
              <div
                key={classItem.id}
                className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                {/* معلومات الحصة */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {classItem.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {classTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                {/* الأزرار */}
                <div className="flex space-x-2">
                  <a
                    href={classItem.classroomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg ${
                      isClassActive
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    style={{ pointerEvents: isClassActive ? "auto" : "none" }}
                  >
                    Classroom
                  </a>
                  <a
                    href={classItem.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg ${
                      isClassActive
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    style={{ pointerEvents: isClassActive ? "auto" : "none" }}
                  >
                    Zoom
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
    
    </>
  )
}
