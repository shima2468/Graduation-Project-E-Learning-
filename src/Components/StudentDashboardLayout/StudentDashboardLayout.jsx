import React, { useState } from 'react'
import styles from  './StudentDashboardLayout.module.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import { Link, Outlet } from 'react-router-dom';


export default function StudentDashboardLayout() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
         <DashboardHeader  isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar} />
        

           {isSidebarOpen && (
                <div className="w-64 bg-[#F4EEE5] text-gray-200 flex flex-col max-h ">
               
                <aside id="separator-sidebar" class="fixed top-0 left-0   w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                                            <div class="h-full px-3 py-24 overflow-y-auto bg-[#F4EEE5] dark:bg-gray-800">
                                                <ul class="space-y-2 font-medium">
                                                  <Link to="details">
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                       
                                                         <i class="fa-solid fa-user-group text-lg main-color"></i>
                                                        <span class="ms-3">General information</span>
                                                      </a>
                                                  </li>
                                                  </Link>
                                                  
                                                  <li className="relative">
                                                                      {/* الرابط الرئيسي الذي يحتوي على الأيقونة والنص */}
                                                                      <a 
                                                                        href="#" 
                                                                        className="flex items-center p-2 main-color rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                                        onClick={() => setIsOpen1(!isOpen1)} // عند الضغط على الأيقونة يتم تغيير حالة العرض
                                                                      >
                                                                        <i className="fa-solid fa-book-open-reader text-xl main-color"></i>
                                                                        <span className="flex-1 ms-3 whitespace-nowrap">Subjects materials</span>
                                                                        <i className={`fa-solid ${isOpen1 ? 'fa-minus' : 'fa-plus'} ml-2`} />
                                                                      </a>

                                                                      <Link to="Subjects">
                                                                      
                                                                                  {isOpen1 && (
                                                                                    <ul className="mt-2 pl-6">
                                                                                      <li>
                                                                                        <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                                                                List of materials
                                                                                        </a>
                                                                                      </li>
                                                                                    
                                                                                    </ul>
                                                                                  )}
                                                                      </Link>
                                                                     
                                                 </li>
                                                  
                                                 <li className="relative">
                                                                      {/* الرابط الرئيسي الذي يحتوي على الأيقونة والنص */}
                                                                      <a 
                                                                        href="#" 
                                                                        className="flex items-center p-2 main-color rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                                        onClick={() => setIsOpen2(!isOpen2)} // عند الضغط على الأيقونة يتم تغيير حالة العرض
                                                                      >
                                                                        <i className="fa-solid fa-book-atlas text-xl main-color"></i> 
                                                                        <span className="flex-1 ms-3 whitespace-nowrap">E-library</span>
                                                                        <i className={`fa-solid ${isOpen2 ? 'fa-minus' : 'fa-plus'} ml-2`} />
                                                                      </a>
                                                                     
                                                                      <Link to="E-library">
                                                                      {isOpen2 && (
                                                                        <ul className="mt-2 pl-6">
                                                                          <li>
                                                                            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                                              Material 
                                                                            </a>
                                                                          </li>
                                                                         
                                                                        </ul>
                                                                      )}
                                                                      
                                                                      
                                                                      </Link>
                                                                    
                                                 </li>
                                                 <li className="relative">
                                                                      {/* الرابط الرئيسي الذي يحتوي على الأيقونة والنص */}
                                                                      <a 
                                                                        href="#" 
                                                                        className="flex items-center p-2 main-color rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                                        onClick={() => setIsOpen3(!isOpen3)} // عند الضغط على الأيقونة يتم تغيير حالة العرض
                                                                      >
                                                                        <i className="fa-solid fa-clipboard-list text-xl main-color"></i> 
                                                                        <span className="flex-1 ms-3 whitespace-nowrap">Exams</span>
                                                                        <i className={`fa-solid ${isOpen3 ? 'fa-minus' : 'fa-plus'} ml-2`} />
                                                                      </a>

                                                                      {/* القائمة الفرعية تظهر فقط عند فتح العنصر */}
                                                                      <Link to="Student-Exams">
                                                                      {isOpen3 && (
                                                                        <ul className="mt-2 pl-6">
                                                                          <li>
                                                                            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                                                Exam list
                                                                            </a>
                                                                          </li>
                                                                          
                                                                        </ul>
                                                                      )}
                                                                      
                                                                      
                                                                      </Link>
                                                                      
                                                 </li>
                                                 <li className="relative">
                                                                      {/* الرابط الرئيسي الذي يحتوي على الأيقونة والنص */}
                                                                      <a 
                                                                        href="#" 
                                                                        className="flex items-center p-2 main-color rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                                        onClick={() => setIsOpen4(!isOpen4)} // عند الضغط على الأيقونة يتم تغيير حالة العرض
                                                                      >
                                                                        <i className="fa-solid fa-chalkboard-teacher text-xl main-color"></i> 
                                                                        <span className="flex-1 ms-3 whitespace-nowrap">Class meetings</span>
                                                                        <i className={`fa-solid ${isOpen4 ? 'fa-minus' : 'fa-plus'} ml-2`} />
                                                                      </a>

                                                                      {/* القائمة الفرعية تظهر فقط عند فتح العنصر */}
                                                                      <Link to="Student-ClassMeeting">
                                                                      {isOpen4 && (
                                                                        <ul className="mt-2 pl-6">
                                                                          <li>
                                                                            <a href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                                                  E-Classes
                                                                            </a>
                                                                          </li>
                                                                            
                                                                        </ul>
                                                                      )}
                                                                      </Link>
                                                                     
                                                 </li>
                                                 
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <svg class="flex-shrink-0 w-5 h-5 main-color  transition duration-75 dark:text-gray-400 group-hover:main-color  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                                                        </svg>
                                                        <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        
                                                        <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                                      </a>
                                                  </li>
                                                </ul>
                                                <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                       
                                                        <span class="ms-3">Upgrade to Pro</span>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                        
                                                        <span class="ms-3">Documentation</span>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                       
                                                        <span class="ms-3">Components</span>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" class="flex items-center p-2 main-color  transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                       
                                                        <span class="ms-3">Help</span>
                                                      </a>
                                                  </li>
                                                </ul>
                                            </div>
                </aside>
                
                          </div>
               )
    
         }
   
        {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between bg-white shadow-md px-4 py-2">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <h1 className="text-xl font-bold">Student Dashboard</h1>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
 




    </>
       
  )
}
