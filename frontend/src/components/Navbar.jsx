import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import sitelogo from '../assets/silverwinkLogo.png'
import { VscMail } from "react-icons/vsc";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [nav, setNav] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 130) {
                setNav(true)
                // alert('scrolled more than 60')
            }
            else {
                setNav(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div className='hidden lg:flex h-7 w-full mx-auto items-center justify-between px-2'>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center gap-2'><VscMail size={22} /><span className='text-sm'>contact@silverwinksolutions.com</span></div>
                    <div className=' hidden xl:flex border-gray-500 items-center px-5'>
                        <IoIosCall /> <span className='text-sm'>+91-6396964636</span>
                    </div>
                    <div className='ml-20 flex'><span className='text-blue-600 text-xs'>Update: <span className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cupiditate.</span></span></div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <span className='text-sm'>Follow Us:</span>
                    <div className='flex items-center'>
                        <div className='flex justify-self-auto  lg:w-32 items-center gap-4 lg:gap-5'>
                            <TiSocialFacebook className='text-gray-300 hover:text-black hover:cursor-pointer transition-colors duration-400 ease-in' size={22} />
                            <RiTwitterXFill className='text-gray-300 hover:text-black hover:cursor-pointer transition-colors duration-400 ease-in' size={18} />
                            <IoLogoInstagram className='text-gray-300 hover:text-black hover:cursor-pointer transition-colors duration-400 ease-in' size={18} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <nav className={`flex bg-white mx-auto max-w-screen h-15 px-5 lg:px-10 xl:px-26 py-1  gap-4 md:justify-between justify-between items-center ${nav ? "fixed top-0 w-full z-30 transition-all ease-in duration-700" : " "}`}>
                <div className='flex justify-center items-center md:gap-1 gap-5'>
                    <Link to={'/'} > <img width={50} className='cursor-pointer' src={sitelogo} alt="" /></Link>
                    <Link to={'/'} >
                        <div className='flex flex-col justify-center cursor-pointer items-center'>
                            <h1 className='text-[#f0b249] text-sm sm:text-md lg:text-xl'>SILVERWINK</h1>
                            <p className='sm:text-[12px] text-[9px]'>IT SOLUTIONS</p>
                        </div>
                    </Link>
                </div>
                <ul className='gap-5 hidden md:flex '>
                    <div className='group relative'>
                        <NavLink to='/' className="flex flex-col items-center gap-1">
                            <p>HOME</p>
                            <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-center"></span>
                        </NavLink>
                        <div className='absolute z-20 py-5 w-52 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-600 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
                            <div className=' border bg-white'>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                            </div>
                        </div>
                    </div>
                    <div className='group relative'>
                        <NavLink to='/page' className="flex flex-col items-center gap-1">
                            <p>PAGE</p>
                            <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-center"></span>
                        </NavLink>
                        <div className='absolute z-20 py-5 w-52 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-600 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
                            <div className=' border bg-white'>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                            </div>
                        </div>
                    </div>
                    <div className='group relative'>
                        <NavLink to='/services' className="flex flex-col items-center gap-1">
                            <p>SERVICES</p>
                            <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-center"></span>
                        </NavLink>
                        <div className='absolute z-20 py-5 w-52 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-600 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
                            <div className=' border bg-white'>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                            </div>
                        </div>
                    </div>
                    <NavLink to='/shop' className="flex group flex-col items-center gap-1">
                        <p>SHOP</p>
                        <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-center"></span>
                    </NavLink>
                    <NavLink to='/news' className="flex group flex-col items-center gap-1">
                        <p>NEWS</p>
                        <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-center"></span>
                    </NavLink>
                    <div className='group relative'>
                        <NavLink to='/contact' className="flex flex-col items-center gap-1">
                            <p>CONTACT</p>
                            <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-center"></span>
                        </NavLink>
                        <div className='absolute z-20 py-5 w-52 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-600 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
                            <div className=' border bg-white'>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                                <div className='text-center hover:bg-amber-100 hover:cursor-pointer py-2 border-b border-gray-500'>OPTION 1</div>
                            </div>
                        </div>
                    </div>
                </ul>

                <div className='bg-[#f0b249]  font-medium hover:scale-102 active:scale-90 active:bg-black active:text-white hover:bg-black hover:cursor-pointer hover:text-white transition-all duration-300 rounded-md lg:px-5 px-2 lg:py-2 text-xs py-2 text-nowrap sm:text-[17px]'>Free Consultation</div>
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                        <div className='space-y-1'>
                            <span className='block w-6 h-0.5 bg-black'></span>
                            <span className='block w-6 h-0.5 bg-black'></span>
                            <span className='block w-6 h-0.5 bg-black'></span>
                        </div>
                    </button>
                </div>
            </nav>
            {/* sidebar  */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <img width={45} src={sitelogo} alt="logo" />
                    <button onClick={() => setIsOpen(false)} className='text-2xl font-bold'><FaArrowRight /></button>
                </div>
                <ul className='flex flex-col gap-4 text-center py-4'>
                    <NavLink onClick={() => setIsOpen(false)} to='/' className="hover:text-[#f0b249] hover:bg-black w-full h-full border-b">HOME</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to='/page' className="hover:text-[#f0b249] hover:bg-black w-full border-b">PAGE</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to='/services' className="hover:text-[#f0b249] hover:bg-black w-full border-b">SERVICES</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to='/shop' className="hover:text-[#f0b249] hover:bg-black w-full border-b">SHOP</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to='/news' className="hover:text-[#f0b249] hover:bg-black w-full border-b">NEWS</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to='/contact' className="hover:text-[#f0b249] hover:bg-black w-full border-b">CONTACT</NavLink>
                </ul>
                <div className='flex items-center justify-center'>
                    <div className='  flex md:hidden lg:flex justify-self-auto  lg:w-32 items-center gap-4 lg:gap-5'>
                        <TiSocialFacebook className=' hover:text-black hover:cursor-pointer transition-colors duration-400 ease-in' size={24} />
                        <RiTwitterXFill className=' hover:text-black hover:cursor-pointer transition-colors duration-400 ease-in' size={20} />
                        <IoLogoInstagram className=' hover:text-black hover:cursor-pointer transition-colors duration-400 ease-in' size={20} />
                    </div>
                    <div className=' border-l hidden xl:flex border-gray-500 items-center px-5'>
                        <IoIosCall /> <span>+91-8938970130</span>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed inset-0 bg-black opacity-10 z-40'
                ></div>
            )}

            <hr />

        </div>

    )
}

export default Navbar
