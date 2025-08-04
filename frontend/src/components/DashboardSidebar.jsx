import React, { useState } from 'react';
import { MdDashboard, MdPayments, MdWork, MdClose } from "react-icons/md";
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const sidebarLinks = [
    { to: "main", label: "Dashboard", icon: <MdDashboard /> },
    { to: "employee", label: "Employee Management", icon: <FaUsers /> },
    { to: "payroll", label: "Payroll & Finance", icon: <MdPayments /> },
    { to: "recuritment", label: "Recruitment", icon: <MdWork /> },
    { to: "events", label: "Events & HR Timeline", icon: <FaCalendarAlt /> },
    { to: "letter", label: "Letters & Documents", icon: <FaFileAlt /> },
    { to: "reports", label: "Reports & Analytics", icon: <FaChartBar /> },
    { to: "setting", label: "Settings", icon: <IoMdSettings /> },
    { to: "myaccount", label: "My Account", icon: <FaUserCircle /> },
];

const DashboardSidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="md:hidden fixed top-3 right-4 z-50">
                {open ? (
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl text-orange-500 bg-white p-2 rounded shadow"
                    >
                        <MdClose size={18} />
                    </button>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className="text-2xl text-orange-500 bg-white p-2 rounded border"
                    >
                        <FiMenu size={18} />
                    </button>
                )}
            </div>

            {/* Sidebar */}
            <div
                className={`bg-[#071026] border-r text-white bg-cover fixed md:static top-16 right-0 z-40 h-[calc(100vh-64px)] sm:w-[50%] md:w-[30%] xl:w-[20%] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0`}
            >
                <ul className="flex flex-col justify-start space-y-3 md:space-y-6 pt-0 md:pt-5 px-4 mt-10 md:mt-0">
                    {sidebarLinks.map((item, index) => (
                        <NavLink
                            to={item.to}
                            key={index}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 text-lg px-2 py-2 rounded-md transition ${isActive ? "bg-gray-600" : "hover:bg-gray-600"
                                }`
                            }
                        >
                            <span>{item.icon}</span> {item.label}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DashboardSidebar;
