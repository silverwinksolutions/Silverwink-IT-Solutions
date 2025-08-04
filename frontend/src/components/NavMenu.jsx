import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const NavMenu = ({ items = [] }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* 📱 Mobile Navbar */}
            <div className="lg:hidden flex justify-between rounded-2xl  items-center w-[90%] mx-auto px-4 py-3  text-white shadow-md relative">
                <h1 className="text-xl tracking-wide font-semibold">Menu</h1>
                <button onClick={() => setOpen(prev => !prev)} aria-label="Toggle Menu">
                    {open ? <IoMdClose size={24} /> : <FiMenu size={24} />}
                </button>

                {/* ⬇️ Animated Dropdown Menu */}
                <div
                    ref={menuRef}
                    className={`absolute top-full right-4 mt-2 w-56  border border-slate-700 bg-slate-950 rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ease-out origin-top-right transform
                    ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                    `}
                >
                    <ul className="flex flex-col p-2">
                        {items.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-white text-sm rounded-md transition duration-150 ${
                                            isActive ? 'bg-slate-700 font-semibold' : 'hover:bg-slate-800'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 💻 Desktop Navbar */}
            <nav className="hidden lg:block  text-white p-3 rounded-md w-full shadow-sm">
                <ul className="flex flex-wrap items-center justify-evenly gap-4">
                    {items.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-md border border-white text-sm transition-all duration-300 ${
                                        isActive ? 'bg-slate-700 font-semibold' : 'hover:bg-slate-600'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default NavMenu;
