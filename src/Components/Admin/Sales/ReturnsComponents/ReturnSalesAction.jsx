import React, {useState} from "react";
const SalesAction = () => {
    return (
        <div className="">
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
                            className="px-4 py-2 text-sm font-medium text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">Complete Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesAction;
