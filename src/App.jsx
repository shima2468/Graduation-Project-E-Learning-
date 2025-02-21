import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Teachers from "./Components/Teachers/Teachers";
import AcademicStages from './Components/AcademicStages/AcademicStages'
import Courses from './Components/Courses/Courses'
import ContactUs from './Components/ContactUs/ContactUs'
import Services from './Components/Services/Services'


function App() {
  
  let routes = createBrowserRouter ([{
     path:"",element:<Layout/> , children:[
     
       {path:"/", element:<Home/>},
       {path:"AcademicStage", element:<AcademicStages/>},
       {path:"courses", element:<Courses/>},
       {path:"Contact", element:<ContactUs/>},
       { path: "Teachers", element: <Teachers /> },
       {path:"Services" , element:<Services/>}


       
       
    ]
  }])

  return (
    <>
         <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
export default App;