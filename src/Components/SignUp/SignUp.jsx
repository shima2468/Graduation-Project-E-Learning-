import React, { useState } from 'react'
import styles from  './SignUp.module.css'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik';
export default function SignUp() {
 

// async function registerForm(values){
//   // let data = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
//   // بس بدي اهندل لما تكون الداتا تمام ولا لا
//   // كنت حطاها الاول ففارلايبل بس لا هلقيت دحطها بريتيرن عشان اقدر استخدم الذين والكاش
  
//   // بدي اول ما هالفنكشن تشتغل تسير ترو
//   setIsLoading(true)
//   return await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(data=>{
//       console.log(data);
//       // السكسسيس راجعه في داتا دوت داتا دوت مسيج
//       // بدي اخزن الداتا انها سكيس في يوذ ستيت 
//       console.log(data.data.message);
      
//       setuserMessage(data.data.message)
//       // بدي اعمل ري دايريكت ع اللقو ان
//       // بسموها بالرياكت راوتر دوم نفقيت 
//       // لازم بالاول اعمل امبورت لهوك اسمها يوذ نفقيت
//       // وهاخد منه انستنس هوا هاحده من الراوتر دووم 
//       navgate("/login")
  
//       // لو الداتا رجعت صح بدي اوقف اللودر
//       // في الحالتين اول ما الاي بي اي ترد عليا هوقف اللودر
      
//       setIsLoading(false)
     
      
//   }).catch((err)=> {
//      // console.log('Error:', err.response.data));
//     // بدي اعمل لما اكزن مدحله اليوزر مرتيت كخساب يقلي ايميل اوردي اقزيست
//     // console.log(err.response.data.message) 
//     setIsLoading(false);
//     setUserErr(err.response.data.message)

//   }
   
//   )
    
    

// }

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
  <div className="flex items-center justify-center h-screen bg-gray-50">
    <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm mb-2">
          <span className="text-gray-400">Login</span>
          <span className="text-orange-500 font-semibold cursor-pointer ml-2">Sign up</span>
        </div>
        <h1 className="text-2xl font-bold text-black mb-1">Sign up</h1>
        <p className="text-gray-600 mb-6">Enter Your Details To Sign Up To Your Account</p>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.userName}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Or Phone Number"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        {/* Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-3 rounded-md font-semibold hover:bg-orange-500 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Sign Up
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="text-center text-sm mt-6 text-gray-500">
        Already have an account? <span className="text-black font-semibold cursor-pointer">Log in</span>
      </p>
    </div>
  </div>
);












}
