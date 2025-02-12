import React, { useState } from 'react'
import styles from  './ParentsList.module.css'
import { IoClose } from 'react-icons/io5'; 
export default function ParentsList() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  return (
    <div className="min-h-screen p-6 mt-14">
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="border-b p-4 flex justify-between items-center">
        <h1 className="text-2xl ">Add Parent</h1>
      </div>

      <div className="flex justify-center border-b p-4">
        <div className="flex items-center">
          <div className="text-center mx-4 ">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-[#F39F5F] text-white' : 'bg-gray-300 text-gray-500'}`}>1</div>
            <p className='mt-2 font-bold'> Father's Information</p>
          </div>
          <div className={`w-12 border-b-2 ${step >= 2 ? 'border-[#F39F5F]' : 'border-gray-300'}`}></div>
          <div className="text-center mx-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-[#F39F5F] text-white' : 'bg-gray-300 text-gray-500'}`}>2</div>
            <p className='mt-2 font-bold'>Mother's Information</p>
          </div>
          <div className={`w-12 border-b-2 ${step === 3 ? 'border-[#F39F5F]' : 'border-gray-300'}`}></div>
          <div className="text-center mx-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-[#F39F5F] text-white' : 'bg-gray-300 text-gray-500'}`}>3</div>
            <p className='mt-2 font-bold'>Attachments & Confirmation</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {step === 1 && (
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 ">Father's Name (Arabic)</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg p-2"
                  placeholder="Father's Name"
                />
              </div>
              <div>
                <label className="block mb-2 ">Father's Name (English)</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg p-2"
                  placeholder="Father's Name"
                />
              </div>
              <div>
                <label className="block mb-2 ">ID Number</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg p-2"
                  placeholder="ID Number"
                />
              </div>
              <div>
                <label className="block mb-2 ">Passport Number</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg p-2"
                  placeholder="Passport Number"
                />
              </div>
              <div>
                <label className="block mb-2 ">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg p-2"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label className="block mb-2 ">Nationality</label>
                <select className="w-full border-gray-300 rounded-lg p-2">
                  <option>Select from the list...</option>
                  <option>Saudi</option>
                  <option>Egyptian</option>
                  <option>Jordanian</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 ">Blood Type</label>
                <select className="w-full border-gray-300 rounded-lg p-2">
                  <option>Select from the list...</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>O+</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 ">Address</label>
                <textarea
                  className="w-full border-gray-300 rounded-lg p-2"
                  rows="1"
                  placeholder="Enter the address here..."
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={handlePrevious}
                disabled={step === 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-[#F39F5F] text-white rounded hover:bg-[#e6975a]"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 ">Mother's Name (Arabic)</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="Mother's Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 ">Mother's Name (English)</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="Mother's Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 ">ID Number</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="ID Number"
                  />
                </div>
                <div>
                  <label className="block mb-2 ">Passport Number</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="Passport Number"
                  />
                </div>
                <div>
                  <label className="block mb-2 ">Phone Number</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block mb-2 ">Nationality</label>
                  <select className="w-full border-gray-300 rounded-lg p-2">
                    <option>Select from the list...</option>
                    <option>Saudi</option>
                    <option>Egyptian</option>
                    <option>Jordanian</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 ">Blood Type</label>
                  <select className="w-full border-gray-300 rounded-lg p-2">
                    <option>Select from the list...</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 ">Address</label>
                  <textarea
                    className="w-full border-gray-300 rounded-lg p-2"
                    rows="1"
                    placeholder="Enter the address here..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="py-2 px-4 bg-[#F39F5F] text-white rounded hover:bg-[#e6975a]"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg ">Attachments & Confirmation</h2>
            <p className="mb-4">Are you sure you want to save the data?</p>
            <div className="mb-4">
              <label className="block mb-2 ">Upload File</label>
              <input type="file" className="w-full border-gray-300 rounded-lg p-2" />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-[#F39F5F] text-white rounded hover:bg-[#e6975a]"
              >
                Save Information
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
