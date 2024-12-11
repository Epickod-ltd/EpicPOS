import React, { useState } from "react";
import {TextField} from "@mui/material";

const ReturnsSearchInput = () => {
    const [query, setQuery] = useState(""); // State for search input
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const items = ["Mobile", "Charger", "headphones", "Screen", "Panel", "Air Pods", "Covers"]; // Sample items

    // Filtered items based on search query
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    // Define state variables
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [cash, setCash] = useState(0);

    // You can use these variables in your component logic
    const calculateGrandTotal = () => {
        setGrandTotal(subtotal - discount + tax);

    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                {/* Left Side (Wider) */}
                <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-gray-300">
                    <div className="mb-1">
                        <label htmlFor="barcode" className="text-gray-600 font-medium">
                            <div className="flex items-center space-x-2 w-full">
                                {/* Barcode Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2D72B4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-barcode text-gray-600"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 7v-1a2 2 0 0 1 2 -2h2"/>
                                    <path d="M4 17v1a2 2 0 0 0 2 2h2"/>
                                    <path d="M16 4h2a2 2 0 0 1 2 2v1"/>
                                    <path d="M16 20h2a2 2 0 0 0 2 -2v-1"/>
                                    <path d="M5 11h1v2h-1z"/>
                                    <path d="M10 11l0 2"/>
                                    <path d="M14 11h1v2h-1z"/>
                                    <path d="M19 11l0 2"/>
                                </svg>
                                {/* Text */}
                                <span className="text-gray-600 font-medium flex-grow">
                  Scan or Enter Product Code:
                </span>
                            </div>
                        </label>
                        <div className="relative w-full mt-2">
                            {/* Input Field */}
                            <input
                                type="text"
                                id="barcode"
                                className="w-full p-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Scan barcode or enter manually..."
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side (Smaller) */}
                <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-gray-300 flex flex-col">
                    <div className="space-y-2 flex-grow">
                        <div className="flex justify-between">
                            <span className="text-sm">Subtotal</span>
                            <span className="text-sm">₨ {subtotal}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Discount</span>
                            <TextField
                                type="number"
                                size="small"
                                value={discount}
                                disabled
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Tax (%)</span>
                            <TextField
                                type="number"
                                size="small"
                                value={tax}
                                onChange={(e) => setTax(Number(e.target.value))}
                            />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold text-sm">Grand Total</span>
                            <span className="font-bold text-sm">₨ {grandTotal}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Cash</span>
                            <TextField
                                type="number"
                                size="small"
                                value={cash}
                                onChange={(e) => setCash(Number(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnsSearchInput;
