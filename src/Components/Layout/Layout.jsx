import React from 'react'
import styles from  './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'

export default function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isDashboardAdmin = location.pathname.startsWith('/AdminDashboard');

  return (
    <>
      {/* Render Navbar and Footer only if not on Dashboard */}
      {!(isDashboard || isDashboardAdmin) && <Navbar />}
      
      <Outlet />
      
      {!(isDashboard || isDashboardAdmin) && <Footer />}
    </>
  );
}
