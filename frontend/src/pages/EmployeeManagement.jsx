import React from 'react'
import PageWrapper from '../components/PageWrapper.jsx'
import NavMenu from '../components/NavMenu.jsx'
import { Outlet } from 'react-router-dom';
import dashboardbackground from '../assets/dashboardbackground.jpg'
const navItems = [
  { name: "All Employees", path: "all" },
  { name: "Add New Employee", path: "add" },
  { name: "Departments", path: "department" },
  { name: "Attendance", path: "attendance" },
  { name: "Leave Management", path: "leave" },
];
const EmployeeManagement = () => {
  return (
    <PageWrapper>
      <div >
        <div className=' w-full bg-[#071026] min-h-screen  py-4 px-10'>
          <NavMenu items={navItems} />
          <div className='h-full'>
            <Outlet />
          </div>
        </div>

      </div>
    </PageWrapper>
  )
}

export default EmployeeManagement
