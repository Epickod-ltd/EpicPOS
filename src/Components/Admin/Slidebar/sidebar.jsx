import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import PurchaseStock from "../PurchaseStock/purchaseStock";

const Sidebar = ({isSidebarOpen}) => {
    const navigate = useNavigate();
    const currentLocation = useLocation(); // Renamed variable

    const handleNavigation = (path) => {
        navigate(path);
    };

    const isActive = (path) => currentLocation.pathname === path; // Use the new variable name

    return (
        <aside
            className={`bg-white border-r text-gray-500 w-64 h-screen px-4 py-6 flex flex-col transition-transform duration-300 transform ${
                isSidebarOpen ? "translate-x-0 backdrop-blur-md" : "-translate-x-full"
            } fixed top-0 left-0 z-10 md:translate-x-0 md:backdrop-blur-0 backdrop-blur-none md:relative`}
            style={{height: '100vh'}} // Make sure it's always at least the viewport height
        >
            <div className="flex items-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0C18.6429 0 24 5.35714 24 12C24 18.6429 18.6429 24 12 24C5.35714 24 0 18.6429 0 12C0 5.35714 5.35714 0 12 0Z"
                        fill="#2D72B4"/>
                    <path
                        d="M16.6286 10.2429L8.61429 14.8714C8.61429 14.8714 8.27142 11.9571 10.2 10.5C11.8286 9.3 15.6 7.24286 15.6 7.24286"
                        fill="white"/>
                    <path
                        d="M20.8286 9.85715C21.4286 13.4143 19.4572 17.7 16.2 19.6286C12 22.0286 6.6429 20.6143 4.20005 16.3714C1.80005 12.1714 3.21433 6.77143 7.41433 4.32857C11.6143 1.88572 17.0143 3.34286 19.4143 7.54286C19.4572 7.62857 19.8001 8.22857 19.8001 8.35715L16.4143 10.3286C16.3286 10.2 16.1143 9.64286 16.0715 9.51429C14.7001 7.15714 11.6143 6.08572 9.2572 7.45715C6.94291 8.82857 5.91434 12.1714 7.28577 14.5286C8.61434 16.8429 12.0858 17.9571 14.4001 16.6286C15.1715 16.2 16.5858 15.1286 17.1858 13.5429C18.0429 11.3571 18.8572 10.6714 20.8286 9.85715Z"
                        fill="white"/>
                </svg>
                <h2 className="text-xl font-bold text-gray-800 ml-1">EpicPOS</h2>
            </div>
            <div className="overflow-y-auto mb-16 scrollable-area ">
                <ul className="space-y-4 mr-2">
                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-home-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                            <path d="M10 12h4v4h-4z"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Home
                    </span>
                    </li>


                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/sales") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/sales")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-up">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                            <path d="M12.5 17h-6.5v-14h-2"/>
                            <path d="M6 5l14 1l-.854 5.977m-2.646 1.023h-10.5"/>
                            <path d="M19 22v-6"/>
                            <path d="M22 19l-3 -3l-3 3"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/sales") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Sales
                    </span>
                    </li>

                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/WholeSale") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/WholeSale")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-code">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                            <path d="M11.5 17h-5.5v-14h-2"/>
                            <path d="M6 5l14 1l-1 7h-13"/>
                            <path d="M20 21l2 -2l-2 -2"/>
                            <path d="M17 17l-2 2l2 2"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/WholeSale") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Whole Sale
                    </span>
                    </li>

                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/salesReturns") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/salesReturns")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-refund">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"/>
                            <path d="M3 10h18"/>
                            <path d="M7 15h.01"/>
                            <path d="M11 15h2"/>
                            <path d="M16 19h6"/>
                            <path d="M19 16l-3 3l3 3"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/salesReturns") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Returns
                    </span>
                    </li>


                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/salesRecord") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/salesRecord")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-report">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"/>
                            <path d="M18 14v4h4"/>
                            <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"/>
                            <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                            <path d="M8 11h4"/>
                            <path d="M8 15h3"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/salesRecord") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Sales Record
                    </span>
                    </li>

                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/ProductCategory") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/ProductCategory")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-category">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4h6v6h-6z"/>
                            <path d="M14 4h6v6h-6z"/>
                            <path d="M4 14h6v6h-6z"/>
                            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/ProductCategory") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Product Category
                    </span>
                    </li>
                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/PurchaseStock") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/PurchaseStock")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-check">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248"/>
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5"/>
                            <path d="M15 19l2 2l4 -4"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/PurchaseStock") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Purchases & Stock
                    </span>
                    </li>

                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/customers") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/customers")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-users">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/customers") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Customers
                    </span>
                    </li>


                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/suppliers") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/suppliers")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"/>
                            <path d="M3 9l4 0"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/suppliers") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Suppliers
                    </span>
                    </li>
                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/reports") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/reports")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-file-description">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                            <path d="M9 17h6"/>
                            <path d="M9 13h6"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/reports") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Reports
                    </span>
                    </li>
                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/cashbook") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/cashbook")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-cash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/>
                            <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/cashbook") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Cashbook
                    </span>
                    </li>
                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/user") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/user")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-user">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/user") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Users
                    </span>
                    </li>
                    <li className={`p-2 rounded-lg cursor-pointer flex items-center ${
                        isActive("/StoreConfiguration") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                    }`} onClick={() => handleNavigation("/StoreConfiguration")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-cog">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7"/>
                            <path d="M7 20h5"/>
                            <path d="M9 16v4"/>
                            <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M19.001 15.5v1.5"/>
                            <path d="M19.001 21v1.5"/>
                            <path d="M22.032 17.25l-1.299 .75"/>
                            <path d="M17.27 20l-1.3 .75"/>
                            <path d="M15.97 17.25l1.3 .75"/>
                            <path d="M20.733 20l1.3 .75"/>
                        </svg>
                        <span
                            className={`ml-2 text-sm tracking-wide font-semibold ${
                                isActive("/StoreConfiguration") ? "text-[#2D72B4]" : "text-gray-800"
                            }`}
                        >
                        Store Configuration
                    </span>
                    </li>

                </ul>
            </div>
            {/* Settings Tab at the Bottom */}
            <div className="mt-1 fixed bottom-0 left-0 w-full bg-white z-50 py-4 px-4">
                <div className="v-navigation-drawer__append">
                    <div className="v-list v-sheet theme--light v-list--dense v-list--nav">
                        <ul className="space-y-4">
                            <li className={` py-2 px-2 rounded-lg cursor-pointer flex items-center ${
                                isActive("/configuration") ? "bg-gray-100 text-[#2D72B4]" : "text-gray-800 hover:bg-gray-200"
                            }`} onClick={() => handleNavigation("/configuration")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-devices-cog">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M13 14.5v-5.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3"/>
                                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8"/>
                                    <path d="M16 9h2"/>
                                    <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                    <path d="M19.001 15.5v1.5"/>
                                    <path d="M19.001 21v1.5"/>
                                    <path d="M22.032 17.25l-1.299 .75"/>
                                    <path d="M17.27 20l-1.3 .75"/>
                                    <path d="M15.97 17.25l1.3 .75"/>
                                    <path d="M20.733 20l1.3 .75"/>
                                </svg>
                                <span
                                    className={`ml-2 text-sm tracking-wide font-semibold ${
                                        isActive("/configuration") ? "text-[#2D72B4]" : "text-gray-800"
                                    }`}
                                >
                        Configuration
                    </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

