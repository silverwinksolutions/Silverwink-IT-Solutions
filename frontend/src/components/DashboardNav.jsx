import React, { useContext, useEffect, useRef, useState } from 'react'
import sitelogo from '../assets/silverwinkLogo.png';
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { AppContext } from '../contexts/AppContextProvider';
import { toast } from 'sonner';

const DashboardNav = () => {
    const { navigate, setToken } = useContext(AppContext)
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
    };

    const handleLogout = () => {
        setToken("");
        localStorage.removeItem("token");
        navigate("/login");
        toast.success('Logged Out Successfully');
    }
    return (
        <div>
            <div className="w-full h-16 border-b pr-14 md:px-0">
                <nav className="flex  items-center justify-between mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:px-10">
                    {/* Logo section */}
                    <div className="flex justify-center items-center gap-3">
                        <img
                            src={sitelogo}
                            alt="Silverwink Logo"
                            width={50}
                            className="cursor-pointer"
                        />
                        <div className="flex flex-col items-start sm:items-center cursor-pointer leading-tight">
                            <h1 className="text-[#f0b249] text-base sm:text-lg md:text-xl font-semibold">SILVERWINK</h1>
                            <p className="text-[10px] sm:text-sm text-gray-500 font-light tracking-wide">
                                IT SOLUTIONS
                            </p>
                        </div>
                    </div>


                    <div className="flex  justify-center  items-center gap-3 sm:gap-6 sm:w-auto">
                        {/* Search Box */}
                        <form onSubmit={handleSearch} className="hidden sm:flex w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Search here..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full sm:w-56 p-2 rounded-l-md text-black placeholder-gray-500 border border-gray-400 focus:outline-none focus:ring focus:ring-yellow-400"
                            />
                            <button
                                type="submit"
                                className="bg-[#f0b249] hover:bg-yellow-500 px-4 py-2 rounded-r-md text-black font-medium"
                            >
                                Search
                            </button>
                        </form>
                        <div className='flex items-center gap-4 md:gap-7'>
                            <div className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 cursor-pointer">
                                <IoMdNotifications size={30} />
                            </div>

                            {/* Profile Icon */}
                            <div className='relative' ref={dropdownRef}>
                                <div className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
                                    onClick={() => setOpen(!open)}>
                                    <FaUserAlt size={24} />
                                </div>
                                {open && (
                                    <div className=' left-1/2 transform -translate-x-1/2 absolute w-30 z-10'>
                                        <div className='py-5 '>
                                            <div className="bg-white/20 backdrop-blur-lg border border-white/20 ">

                                                <ul className='text-black flex flex-col justify-center items-center text-center'>
                                                    <li className=' w-full hover:bg-white/40 hover:cursor-pointer py-2'>My Profile</li>
                                                    <li onClick={handleLogout} className=' w-full hover:bg-white/40 hover:cursor-pointer text-red-500 py-2'>Logout</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default DashboardNav
