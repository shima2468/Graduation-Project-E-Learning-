import React from "react";
import History from "../../assets/history-image.jpg";
import Math from "../../assets/Math.jpg";
import English from "../../assets/English.png";
import Physics from "../../assets/physics-image.webp";
import Pdf from "../../assets/pdf-image.jpg";

export default function Books() {
  return (
    <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sidebar Section */}
      <div>
        {/* Search Box */}
        <div className="p-4 shadow-md mb-6 bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4 text-blue-900">Search</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-[#F39F5F] rounded-l-lg"
            />
            <button className="bg-[#F39F5F] text-white px-3 py-2 rounded-r-lg hover:bg-orange-400 text-sm">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
  
        {/* Books Section */}
        <div className="p-4 shadow-md bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Books</h2>
          <ul className="space-y-4">
            {[
              { image: History, title: "History book" },
              { image: Math, title: "Math book" },
              { image: English, title: "English book" },
              { image: Physics, title: "Physics" },
            ].map((book, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-lg flex items-center gap-4 shadow-sm"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-800">{book.title}</p>
                  <button className="bg-[#F39F5F] text-white px-4 py-1 mt-2 rounded-lg flex items-center gap-2 hover:bg-orange-400 text-xs">
                    <i className="fas fa-download"></i>
                    Download
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      {/* Main Section */}
      <div className="col-span-2">
        <div className="p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold mb-4 text-gray-800">External Files</h2>
          <ul className="space-y-6">
            {[
              {
                image: Pdf,
                subject: "Math",
                title: "File Name: Math Summary.pdf",
                description:
                  "A comprehensive summary of key algebra formulas for 12th grade, including solved examples.",
              },
              {
                image: Pdf,
                subject: "History",
                title: "File Name: Word War - Overview.pdf",
                description:
                  "Key events and impacts, including solved examples.",
              },
              {
                image: Pdf,
                subject: "English",
                title: "File Name: Vocabulary.pdf",
                description: "Examples, Questions on vocabulary.",
              },
              {
                image: Pdf,
                subject: "Physics",
                title: "File Name: Energy and Power.pdf",
                description: "Work, Energy, and Power concepts.",
              },
            ].map((file, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start gap-4"
              >
                <img
                  src={file.image}
                  alt={file.title}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{file.subject}</p>
                  <p className="font-bold text-gray-900 mb-2">{file.title}</p>
                  <p className="text-gray-700 mb-4">{file.description}</p>
                  <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 text-xs">
                      Share
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 flex items-center gap-2 text-xs">
                      <i className="fas fa-download"></i>
                      Download
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  
  );
}

