import React, { useState } from "react";

const SearchInput = () => {
    const [query, setQuery] = useState(""); // State for search input
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

    const items = ["Mobile", "Charger", "headphones", "Screen", "Panel", "Air Pods", "Covers"]; // Sample items

    // Filtered items based on search query
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    // Handle input change
    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setShowDropdown(true);
    };

    // Handle dropdown selection
    const handleSelect = (item) => {
        setQuery(item);
        setShowDropdown(false);
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
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
                                    <path d="M4 17v1a2 2 0 0 0 2 2h2" />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v1" />
                                    <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
                                    <path d="M5 11h1v2h-1z" />
                                    <path d="M10 11l0 2" />
                                    <path d="M14 11h1v2h-1z" />
                                    <path d="M19 11l0 2" />
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

                    {/* Search Product */}
                    <div className="mt-4">
                        <div className="relative w-full">
                            {/* Search Input */}
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                onFocus={() => setShowDropdown(true)}
                                placeholder="Search for a Product..."
                                className="w-full p-2 pl-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />

                            {/* Dropdown */}
                            {showDropdown && query.trim() && (
                                <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-auto shadow-lg z-10">
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelect(item)}
                                                className="p-2 cursor-pointer hover:bg-blue-100"
                                            >
                                                {item}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2 text-gray-500">No results found</li>
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side (Smaller) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-300">
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-4">
                            {/* Heading */}
                            <h2 className="text-md font-bold text-gray-700">Add Customer</h2>
                            {/* Add New Button */}
                            <button
                                className="px-3 py-2 bg-[#2D72B4] text-white rounded-md text-sm flex items-center space-x-2 justify-center"
                                onClick={() => alert("Button Clicked!")} // Button action (replace with actual function)
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"
                                    />
                                </svg>
                                <span className="sm:inline">Add</span>
                            </button>
                        </div>

                        {/* Search Input and Dropdown */}
                        <div className="mt-4">
                            <div className="relative w-full">
                                {/* Search Input */}
                                <input
                                    type="text"
                                    value={query}
                                    onChange={handleInputChange}
                                    onFocus={() => setShowDropdown(true)}
                                    placeholder="Search customer name..."
                                    className="w-full p-2 pl-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                />

                                {/* Dropdown */}
                                {showDropdown && query.trim() && (
                                    <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-auto shadow-lg z-10">
                                        {filteredItems.length > 0 ? (
                                            filteredItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleSelect(item)}
                                                    className="p-2 cursor-pointer hover:bg-blue-100"
                                                >
                                                    {item}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="p-2 text-gray-500">No results found</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
