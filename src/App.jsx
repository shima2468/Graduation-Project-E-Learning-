import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import SignUp from './Components/SignUp/SignUp'
import Teachers from "./Components/Teachers/Teachers";
import TeacherDetails from "./Components/TeacherDetails/TeacherDetails";
import Books from './Components/books/books'
import StudentDetailes from './Components/StudentDetailes/StudentDetailes'
import TeachersDetailsInfo from './Components/TeachersDetailsInfo/TeachersDetailsInfo'
import Parents from './Components/Parents/Parents'
import AcademicStages from './Components/AcademicStages/AcademicStages'
import Courses from './Components/Courses/Courses'
import TeacherSignUp from './Components/TeacherSignUp/TeacherSignUp'
import LogIn from './Components/LogIn/LogIn'
import TeachersDashboard from './Components/TeachersDashboard/TeachersDashboard'
import ParentsDashboard from './Components/ParentsDashboard/ParentsDashboard'
import StudentDashboardLayout from './Components/StudentDashboardLayout/StudentDashboardLayout'
import DashboardLayout from './Components/DashboardLayout/DashboardLayout'
import StudentSubject from './Components/StudentSubject/StudentSubject'
import StudentExams from './Components/StudentExams/StudentExams'
import StudentClassMeeting from './Components/StudentClassMeeting/StudentClassMeeting'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import AddNewStudent from './Components/AddNewStudent/AddNewStudent'
import StudentList from './Components/StudentList/StudentList'
import AddNewUpgrade from './Components/AddNewUpgrade/AddNewUpgrade'
import UpgradeList from './Components/UpgradeList/UpgradeList'
import AddNewExam from './Components/AddNewExam/AddNewExam'
import ExamList from './Components/ExamList/ExamList'
import ClassList from './Components/ClassList/ClassList'
import AddNewGraduation from './Components/AddNewGraduation/AddNewGraduation'
import GraduationList from './Components/GraduationList/GraduationList'
import TeachersList from './Components/TeachersList/TeachersList'
import ParentsList from './Components/ParentsList/ParentsList'
import StagesList from './Components/StagesList/StagesList'
import SectionList from './Components/SectionList/SectionList'
import ContactUs from './Components/ContactUs/ContactUs'


function App() {
  
  let routes = createBrowserRouter ([{
     path:"",element:<Layout/> , children:[
       {index:true, element:<Home/>},
       {
        path: "/dashboard",
        element: <StudentDashboardLayout />, // لوحة التحكم
        children: [
            { index: true, element: <StudentDetailes /> }, // المسار الافتراضي
            { path: "details", element: <StudentDetailes /> },
            { path: "Subjects", element: <StudentSubject/> },
            { path: "E-library", element:<Books/> },
            { path: "Student-Exams", element:<StudentExams/> },
            { path: "Student-ClassMeeting", element:<StudentClassMeeting/> },
        ],
    },
       {
        path: "/AdminDashboard",
        element: <AdminDashboard/>, 
        children: [
             {path:"addNewStudent", element:<AddNewStudent/>},
             {path:"StudentList", element:<StudentList/>},
             {path:"addNewUpgrade", element:<AddNewUpgrade/>},
             {path:"UpgradeList", element:<UpgradeList/>},
             {path:"addNewExam", element:<AddNewExam/>},
             {path:"examList", element:<ExamList/>},
             {path:"stageList", element:<StagesList/>},
             {path:"ListClasses", element:<ClassList/>},
             {path:"AddNewGraduation", element:<AddNewGraduation/>},
             {path:"GraduationList", element:<GraduationList/>},
             {path:"TeacherList", element:<TeachersList/>},
             {path:"ParentsList", element:<ParentsList/>},
             {path:"ClassSections", element:<SectionList/>}
        ],
    },
       {path:"SignUp", element:<SignUp/>},
       {path:"Home", element:<Home/>},
       {path:"LogIn", element:<LogIn/>},
       {path:"home", element:<SignUp/>},
       {path:"AcademicStage", element:<AcademicStages/>},
       {path:"courses", element:<Courses/>},
       {path:"Contact", element:<ContactUs/>},
       { path: "Teachers", element: <Teachers /> },
       { path: "Teachers/teacherDetails", element: <TeacherDetails /> },
       { path: "Book", element: <Books/> },
      //  { path: "Student", element:<StudentDetailes/> },
       { path: "TeacherDetInf", element:<TeachersDetailsInfo/> },
       { path: "Parents", element:<Parents/> },
       { path: "TeacherSignUp", element:<TeacherSignUp/> },

       
       
    ]
  }])

  return (
    <>
         <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
export default App;