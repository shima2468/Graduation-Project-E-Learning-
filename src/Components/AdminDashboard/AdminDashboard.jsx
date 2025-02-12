import React, { useState } from 'react';
import styles from './AdminDashboard.module.css';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { Link, Outlet } from 'react-router-dom';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMainItem, setActiveMainItem] = useState(null); // لإدارة القائمة الرئيسية
  const [activeSubItem, setActiveSubItem] = useState(null);   // لإدارة القوائم الفرعية

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const toggleMainMenu = (item) => {
    setActiveMainItem(activeMainItem === item ? null : item);
  };

  const toggleSubMenu = (item) => {
    setActiveSubItem(activeSubItem === item ? null : item);
  };

  return (
    <>
      <DashboardHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div className="w-64 text-gray-900 flex flex-col">
          <aside
            className="fixed top-0 left-0 w-64 h-screen transition-transform"
            style={{ backgroundColor: '#F4EEE5' }}
          >
            <div className="h-full px-3 py-6 overflow-y-auto pt-20">
              <ul className="space-y-4">
                <li>
                  <Link to="/admin/AdminDashboard" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-home mr-2"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('stages')}
                  >
                    <i className="fa-solid fa-school mr-2"></i>
                    <span>School Stages</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'stages' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>
                  {activeMainItem === 'stages' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <Link to="stageList" className="block p-2 hover:bg-gray-300 rounded">
                          Stage List
                        </Link>
                      </li>
                      
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('classes')}
                  >
                    <i className="fa-solid fa-graduation-cap mr-2"></i>
                    <span>Classes</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'classes' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>
                  {activeMainItem === 'classes' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <Link to="ListClasses" className="block p-2 hover:bg-gray-300 rounded">
                          Class List
                        </Link>
                      </li>
                      
                     
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('sections')}
                  >
                    <i class="fas fa-table me-2"></i>


                    <span>Class sections</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'sections' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>
                  {activeMainItem === 'sections' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <Link to="ClassSections" className="block p-2 hover:bg-gray-300 rounded">
                          Class List
                        </Link>
                      </li>
                      
                     
                    </ul>
                  )}
                </li>

                {/* Student Main Section */}
                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('Student')}
                  >
                    <i className="fa-solid fa-chalkboard mr-2"></i>
                    <span>Student</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'Student' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>

                  {activeMainItem === 'Student' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <button
                          className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                          onClick={() => toggleSubMenu('StudentInformation')}
                        >
                          <span>Student Information</span>
                          <i
                            className={`ml-auto fa-solid ${
                              activeSubItem === 'StudentInformation' ? 'fa-minus' : 'fa-plus'
                            }`}
                          />
                        </button>

                        {activeSubItem === 'StudentInformation' && (
                          <ul className="pl-6 mt-2 space-y-2">
                            <li>
                              <Link to="addNewStudent" className="block p-1 hover:bg-gray-300 rounded">
                                Add a New Student
                              </Link>
                            </li>
                            <li>
                              <Link to="StudentList" className="block p-1 hover:bg-gray-300 rounded">
                                Student List
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Student Upgrade Section */}
                      <li>
                        <button
                          className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                          onClick={() => toggleSubMenu('StudentUpgrade')}
                        >
                          <span>Student Upgrade</span>
                          <i
                            className={`ml-auto fa-solid ${
                              activeSubItem === 'StudentUpgrade' ? 'fa-minus' : 'fa-plus'
                            }`}
                          />
                        </button>

                        {activeSubItem === 'StudentUpgrade' && (
                          <ul className="pl-6 mt-2 space-y-2">
                            <li>
                              <Link to="addNewUpgrade" className="block p-1 hover:bg-gray-300 rounded">
                                Add a New Upgrade
                              </Link>
                            </li>
                            <li>
                              <Link to="UpgradeList" className="block p-1 hover:bg-gray-300 rounded">
                                Upgrade List
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Graduates Section */}
                      <li>
                        <button
                          className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                          onClick={() => toggleSubMenu('Graduates')}
                        >
                          <span>Graduates</span>
                          <i
                            className={`ml-auto fa-solid ${
                              activeSubItem === 'Graduates' ? 'fa-minus' : 'fa-plus'
                            }`}
                          />
                        </button>

                        {activeSubItem === 'Graduates' && (
                          <ul className="pl-6 mt-2 space-y-2">
                            <li>
                              <Link to="AddNewGraduation" className="block p-1 hover:bg-gray-300 rounded">
                                Add New Graduation
                              </Link>
                            </li>
                            <li>
                              <Link to="GraduationList" className="block p-1 hover:bg-gray-300 rounded">
                                Graduation List
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

      
                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('teachers')}
                  >
                     <i className="fa-solid fa-chalkboard-teacher mr-2"></i>
                    <span>Teachers</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'teachers' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>
                  {activeMainItem === 'teachers' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <Link to="TeacherList" className="block p-2 hover:bg-gray-300 rounded">
                          Teachers List
                        </Link>
                      </li>
                      
                     
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('Parents')}
                  >
                    <i className="fa-solid fa-eye mr-2"></i>
                    <span>Parents</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'Parents' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>
                  {activeMainItem === 'Parents' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <Link to="ParentsList" className="block p-2 hover:bg-gray-300 rounded">
                           Parents List
                        </Link>
                      </li>
                      
                     
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/admin/employees" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-users mr-2"></i>
                    <span>Tuition fees</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/attendance" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-calendar-check mr-2"></i>
                    <span>Attendance</span>
                  </Link>
                </li>
                <li>
                  <button
                    className="flex items-center p-2 w-full hover:bg-gray-300 rounded"
                    onClick={() => toggleMainMenu('exams')}
                  >
                    <i className="fa-solid fa-file-alt mr-2"></i>
                    <span>Exams</span>
                    <i
                      className={`ml-auto fa-solid ${
                        activeMainItem === 'exams' ? 'fa-minus' : 'fa-plus'
                      }`}
                    />
                  </button>
                  {activeMainItem === 'exams' && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <Link to="addNewExam" className="block p-2 hover:bg-gray-300 rounded">
                          Add New Exam
                        </Link>
                      </li>
                      <li>
                        <Link to="examList" className="block p-2 hover:bg-gray-300 rounded">
                          Exam List
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/admin/library" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-book mr-2"></i>
                    <span>Library</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/online-classes" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-laptop mr-2"></i>
                    <span>Online Classes</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/settings" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-cog mr-2"></i>
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users" className="flex items-center p-2 hover:bg-gray-300 rounded">
                    <i className="fa-solid fa-user mr-2"></i>
                    <span>Users</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      )}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}
