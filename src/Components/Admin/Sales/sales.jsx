import React, {useState} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Sales = () => {
    const [tax, setTax] = useState(0);
    const [cash, setCash] = useState(0);

    const subtotal = 0; // You can dynamically calculate this value
    const discount = 0; // You can dynamically calculate this value
    const taxAmount = (tax / 100) * subtotal;
    const grandTotal = subtotal - discount + taxAmount;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const [scannedCode, setScannedCode] = useState("");
    const handleScan = (event) => {
        setScannedCode(event.target.value); // Simulate barcode scan
    };

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

    const data = [
        {id: 1, name: "John", age: 25},
        {id: 2, name: "Jane", age: 30},
        {id: 3, name: "Mike", age: 35},
    ];

    return (
        <div className="p-6">

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
                                <span className="text-gray-600 font-medium flex-grow">Scan or Enter Product Code:</span>
                            </div>
                        </label>
                        <div className="relative w-full mt-2">
                            {/* Input Field */}
                            <input
                                type="text"
                                id="barcode"
                                className="w-full p-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                value={scannedCode}
                                onChange={handleScan}
                                placeholder="Scan barcode or enter manually..."
                            />

                            {/* Search Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </div>
                    </div>
                    <p className="text-gray-600 ml-2">
                        <strong>Scanned Code:</strong> {scannedCode || "None"}
                    </p>
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
                                className="px-3 py-2 bg-[#2D72B4] text-white rounded-full text-sm flex items-center space-x-2 justify-center"
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
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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

            <div className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                    {/* Left Side (Wider) */}
                    <div className="lg:col-span-4 bg-white rounded-lg border border-gray-300 overflow-x-auto">
                        <table className="min-w-full table-auto bg-white border-collapse rounded-lg">
                            <thead className="bg-gray-100 rounded-t-lg">
                            <tr>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b rounded-tl-lg">SR#</th>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b">Item Title &
                                    Description
                                </th>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b">Unit (₨)</th>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b">Quantity</th>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b">Discount (₨)
                                </th>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b">Total (₨)</th>
                                <th className="px-4 py-2 text-left font-semibold text-gray-600 border-b rounded-tr-lg">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-2 border-b text-center">1</td>
                                <td className="px-4 py-2 border-b">Item A - Description of the item goes here.</td>
                                <td className="px-4 py-2 border-b text-center">₨ 100</td>
                                <td className="px-4 py-2 border-b text-center">2</td>
                                <td className="px-4 py-2 border-b text-center">₨ 10</td>
                                <td className="px-4 py-2 border-b text-center">₨ 190</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <div>
                                        {/* Dashboard Button with Positioned Menu */}
                                        <Button
                                            id="demo-positioned-button"
                                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                            </svg>
                                        </Button>

                                        <Menu
                                            id="demo-positioned-menu"
                                            aria-labelledby="demo-positioned-button"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <EditIcon fontSize="small"/>
                                                </ListItemIcon>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <DeleteIcon fontSize="small"/>
                                                </ListItemIcon>
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Right Side (Smaller) */}
                    <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-gray-300">
                        <div className="v-data-table theme--light">
                            <div className="v-data-table__wrapper w-full justify-between overflow-x-auto">
                                <table className="min-w-full">
                                    <tbody>
                                    <tr>
                                        <td className="text-sm">Subtotal</td>
                                        <td></td>
                                        <td className="text-sm">₨<span className="ml-1">{subtotal}</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Discount</td>
                                        <td>
                                            <input
                                                type="number"
                                                disabled
                                                readOnly
                                                className="p-1 rounded-md border-2 border-gray-200 bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-full"
                                                value={discount}
                                            />
                                        </td>
                                        <td className="text-sm flex mt-2">₨ <span className="ml-1">{discount}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Tax (%)</td>
                                        <td>
                                            <input
                                                type="number"
                                                className="p-1 rounded-md border-2 border-gray-200 bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-full"
                                                value={tax}
                                                onChange={(e) => setTax(Number(e.target.value))}
                                            />
                                        </td>
                                        <td className="text-sm flex mt-2">₨ <span className="ml-1">{taxAmount}</span>
                                        </td>
                                    </tr>
                                    <tr className="text-bold text-sm">
                                        <td>Grand Total</td>
                                        <td></td>
                                        <td>₨ {grandTotal}</td>
                                    </tr>
                                    <tr className="text-bold text-sm">
                                        <td>Cash</td>
                                        <td>
                                            <input
                                                type="number"
                                                placeholder="Cash"
                                                className="w-full p-1 rounded-md border-2 border-gray-200 bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                value={cash}
                                                onChange={(e) => setCash(Number(e.target.value))}
                                            />
                                        </td>
                                        <td>₨ {cash}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="salesAction border border-gray-300 w-full mt-4 p-6 rounded-lg">
                <div className="flex justify-between">
                    <div className="">
                        <button
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-[#2D72B4] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">Go to List of Sales
                        </button>
                    </div>
                    <div className="flex w-1/2 justify-end space-x-2">
                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md">Cancel
                        </button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-[#2D72B4] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">Complete Sale
                        </button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Sales;
