import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Admin/Header/header";
import Sidebar from "./Components/Admin/Slidebar/sidebar";
import Dashboard from "./Components/Admin/Dashboard/dashboard";
import Sales from "./Components/Admin/Sales/sales";
import WholeSales from "./Components/Admin/Sales/wholeSale";
import SalesRecord from "./Components/Admin/Sales/salesRecord";
import Login from "./Components/Auth/Login/login";
import Signup from "./Components/Auth/Signup/signup";
import { ThemeProvider } from "@material-tailwind/react";
import WholeSale from "./Components/Admin/Sales/wholeSale";
import Returns from "./Components/Admin/Sales/salesReturn";
import ProductCategory from "./Components/Admin/ProductCategory/productCategory";
import PurchaseStock from "./Components/Admin/PurchaseStock/purchaseStock";
import Customers from "./Components/Admin/Customers/customer";
import Suppliers from "./Components/Admin/Supplier/supplier";
import Reports from "./Components/Admin/Reports/reports";
import Cashbook from "./Components/Admin/CashBook/cashbook";
import User from "./Components/Admin/User/user";
import StoreConfiguration from "./Components/Admin/StoreConfiguration/storeConfiguration";
import Configuration from "./Components/Admin/Configuration/configuration";

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Get the current route
    const location = useLocation();

    // Define routes where the Header and Sidebar should not appear
    const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Hide Sidebar and Header on Auth Pages */}
            {!isAuthPage && <Sidebar isSidebarOpen={isSidebarOpen} />}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Hide Header on Auth Pages */}
                {!isAuthPage && <Header toggleSidebar={toggleSidebar} />}
                <main className="flex-1 overflow-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/sales" element={<Sales />} />
                        <Route path="/salesRecord" element={<SalesRecord />} />
                        <Route path="/WholeSale" element={<WholeSale />} />
                        <Route path="/salesReturns" element={<Returns />} />
                        <Route path="/ProductCategory" element={<ProductCategory />} />
                        <Route path="/PurchaseStock" element={<PurchaseStock />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/suppliers" element={<Suppliers />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/cashbook" element={<Cashbook />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/StoreConfiguration" element={<StoreConfiguration />} />
                        <Route path="/configuration" element={<Configuration />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* Add more routes as needed */}
                    </Routes>
                </main>
            </div>
        </div>
    );
};

const AppWrapper = () => (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

export default AppWrapper;
