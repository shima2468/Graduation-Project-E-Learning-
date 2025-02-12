import React from 'react'
import styles from  './LogIn.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LogImg from "../../assets/icon-1.svg"
export default function LogIn() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("User Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  return (
    <div className="flex items-center justify-center h-screen -mt-12 bg-[#faf8f7] ">
    <div className="bg-white rounded-[15%] shadow-[#F39F5F] p-12 w-full max-w-md shadow-[1px_0_5px_rgba(0,0,0,0.2)]">
      {/* Header */}
      <div className="text-center">
        <div className="head flex justify-center items-center">
                    <img src={LogImg} alt=""  className='w-8 h-8'/>
                    <h1 className="text-3xl font-bold main-color mb-1">Login</h1>
        </div>
        <p className="main-color mb-6 text-[13px]">Enter Your Details To Sign In <br></br> To Your Account</p>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
       
        <div className="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium main-color dark:text-white">Your email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Or Phone Number"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 main-color text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
           <label for="password" class="block mb-2 text-sm font-medium main-color dark:text-white">Your password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 main-color text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400" 
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        
        <div class="flex justify-between mt-5 mb-5">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium main-color dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-[#F39F5F] hover:bg-[#e59150] focus:ring-4 focus:outline-none focus:ring-[#F39F5F] font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-[#F39F5F] dark:hover:bg-[#F39F5F] dark:focus:ring-[#F39F5F]">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 mt-5 ms-2">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
      </form>

      {/* Footer */}
    
    </div>
  </div>
  )
}
