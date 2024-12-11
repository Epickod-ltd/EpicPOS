import React, { useState } from "react";

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-100 overflow-hidden">
            <div className="flex flex-grow">
                {/* Left side: Login Form */}
                <div className="w-full md:w-1/3 flex flex-col justify-center items-start px-8 bg-white shadow-lg">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3 mb-6 mt-6">
                        <img src="/assets/logo.png" alt="Logo" className="h-10 w-10" />
                        <h1 className="text-2xl font-bold text-gray-800">EpicPOS</h1>
                    </div>

                    {/* Login Form */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Nice to see you again!</h2>
                    <form className="w-full max-w-sm">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D72B4]"
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D72B4]"
                            />
                            {/* Eye Icon for Toggle */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-10 text-gray-500 hover:text-[#2D72B4]"
                            >
                                {passwordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                                        <path d="M3 3l18 18" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#2D72B4] text-white py-2 px-4 rounded-md hover:bg-[#2D72B4] transition duration-300"
                        >
                            Login
                        </button>

                        {/* Horizontal Line */}
                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-4 text-gray-500 text-sm">or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Login with Google Button */}
                        <button
                            type="button"
                            className="w-full border border-gray-300 text-gray-100 py-2 px-4 rounded-md bg-[#333333] transition duration-300 flex items-center justify-center"
                        >
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.369 10.728C20.3698 10.0466 20.3118 9.36638 20.1956 8.69481H10.6998V12.546H16.1385C16.0272 13.1611 15.7917 13.7474 15.446 14.2697C15.1004 14.7919 14.6519 15.2393 14.1275 15.5847V18.0846H17.3734C19.2739 16.3444 20.369 13.7709 20.369 10.728Z" fill="#2D72B4"/>
                            <path d="M10.6997 20.5C13.417 20.5 15.7049 19.6139 17.3734 18.0862L14.1274 15.5864C13.224 16.1947 12.0605 16.5419 10.6997 16.5419C8.07334 16.5419 5.84414 14.7836 5.04699 12.4143H1.70319V14.9906C2.54126 16.6467 3.82635 18.0389 5.415 19.0118C7.00364 19.9847 8.8333 20.4999 10.6997 20.5Z" fill="#34A853"/>
                            <path d="M5.04698 12.414C4.62556 11.1724 4.62556 9.82792 5.04698 8.58638V6.01012H1.70317C0.998154 7.40332 0.630981 8.94094 0.630981 10.5002C0.630981 12.0594 0.998154 13.597 1.70317 14.9902L5.04698 12.414Z" fill="#FBBC04"/>
                            <path d="M10.6997 4.45879C12.1357 4.43549 13.5232 4.97429 14.5624 5.95872L17.4363 3.10469C15.6139 1.40488 13.1997 0.471659 10.6997 0.500656C8.8333 0.500741 7.00364 1.01598 5.415 1.98886C3.82635 2.96174 2.54126 4.35397 1.70319 6.0101L5.04699 8.58636C5.84414 6.21704 8.07334 4.45879 10.6997 4.45879Z" fill="#EA4335"/>
                            </svg>
                            <span className="ml-2">Login with Google</span>
                        </button>

                        <p className="text-sm text-gray-500 mt-4">
                            Don't have an account?{" "}
                            <a href="#" className="text-[#2D72B4] hover:underline">
                                Sign up
                            </a>
                        </p>
                    </form>
                    <div className="flex justify-between items-center w-full mt-auto mb-6">
                    {/* Left-aligned section */}
                         <div className="flex items-center space-x-3">
                            <img src="/assets/logo.png" alt="Logo" className="h-4 w-4" />
                             <p className="text-sm text-gray-500">EpicPOS</p>
                             </div>

                    {/* Right-aligned section */}
                         <div className="flex items-center justify-end w-full">
                            <p className="text-sm text-gray-500">© EPIC-POS 2024</p>
                         </div>
                    </div>
                </div>
                {/* Right side: Image */}
                <div
                    className="hidden md:flex md:w-1/2 bg-cover bg-center justify-center items-center ml-20"
                    style={{ backgroundImage: "url('/assets/login-img.png')", backgroundSize: "contain" }}
                />
            </div>
        </div>
    );
};

export default LoginPage;
