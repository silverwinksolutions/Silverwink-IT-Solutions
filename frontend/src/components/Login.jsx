import React, { useEffect } from 'react';
import loginbackground from '../assets/loginbackground4.jpg';
import { useForm } from 'react-hook-form';
import { data, NavLink } from 'react-router-dom';
import { AppContext } from '../contexts/AppContextProvider.jsx';
import axios from 'axios'
import { useContext } from 'react';
import { toast } from 'sonner';

const Login = () => {

    const { token, setToken, navigate, logout } = useContext(AppContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(import.meta.env.VITE_BACKEND_URI + "/user/login", data, { withCredentials: true });
            if (res.data.success) {
                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                toast.success(res.data.message);
                navigate("/dashboard");
                reset();
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    

    return (
        <div
            className="h-[93.3vh]  w-full bg-cover bg-center bg-no-repeat overflow-hidden "
            style={{ backgroundImage: `url(${loginbackground})` }}
        >
            <div className="h-full w-full  flex justify-center items-center md:items-center  pb-4 px-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="backdrop-blur-md bg-white/20 border border-white/30 px-6 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-20 md:py-20 lg:py-16 rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl shadow-xl text-black space-y-6"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">Login</h2>

                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-white">Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email format',
                                },
                            })}
                            className="bg-white/40 border border-white/30 px-4 py-3 rounded-lg text-black placeholder-gray-700 outline-none"
                            placeholder="Enter Email"
                            autoComplete="username"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-white">Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                            })}
                            className="bg-white/40 border border-white/30 px-4 py-3 rounded-lg text-black placeholder-gray-700 outline-none"
                            placeholder="Enter password"
                            autoComplete="current-password"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full bg-[#f0b249] disabled:bg-[#b88e3b] hover:bg-black disabled:cursor-not-allowed text-black hover:text-white transition-all duration-300 py-3 rounded-lg font-semibold"
                    >
                        {isSubmitting ? 'Loggin in...' : "Login"}
                    </button>
                    {/* Signup Option */}
                    <p className="text-center text-white text-sm pt-3">
                        Don't have an account?{" "}
                        <span className="text-[#f0b249] font-semibold hover:underline cursor-pointer">
                            Sign Up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
