import React from "react";

const IncomeDetails = () => {
    const incomeData = [
        {
            title: "Account Balance",
            amount: "12,345",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="12" width="4" height="10" rx="2" fill="#CCE1FF" />
                    <rect x="10" y="7.5" width="4" height="14.5" rx="2" fill="#3981F7" />
                    <rect x="18" y="2" width="4" height="20" rx="2" fill="#93BAFB" />
                </svg>
            ),
        },
        {
            title: "New Sales",
            amount: "3,210",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="9" width="21" height="13.5" rx="3" fill="#CCE1FF" />
                    <rect x="1.5" y="3" width="21" height="4.5" rx="2" fill="#93BAFB" />
                    <rect x="5.25" y="0.75" width="2.25" height="4.5" rx="1.125" fill="white" />
                    <rect x="16.5" y="0.75" width="2.25" height="4.5" rx="1.125" fill="white" />
                    <rect x="4.5" y="15" width="4.5" height="4.5" rx="1" fill="#3981F7" />
                </svg>
            ),
        },
        {
            title: "Connected",
            subtitle: "PayPal",
            percentage: 12.7,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#3981F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
                    <path d="M18 20v-17" />
                    <path d="M15 6l3 -3l3 3" />
                </svg>
            ),
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Merged cards in a row */}
            <div className="p-4 flex items-start justify-between rounded-lg border border-gray-300 bg-white text-gray-800">
                {/* First card */}
                <div className="flex-1 pr-4">
                    <div className="flex items-start">
                        <div className="mr-4">{incomeData[0].icon}</div>
                        <div>
                        <p className="text-sm text-gray-400">{incomeData[0].title}</p>
                        <h2 className="text-3xl font-semibold">${incomeData[0].amount}</h2>
                        </div>
                    </div>
                </div>
                {/* Vertical divider */}
                <div className="w-px h-full bg-gray-300 mx-4"></div>
                {/* Second card */}
                <div className="flex-1 pl-4">
                    <div className="flex items-start">
                        <div className="mr-4">{incomeData[1].icon}</div>
                        <div>
                            <p className="text-sm text-gray-400">{incomeData[1].title}</p>
                            <h2 className="text-3xl font-semibold">${incomeData[1].amount}</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Third card */}
            <div className="p-4 rounded-lg border border-gray-300 bg-white text-gray-800 md:w-1/2">
    {/* Top heading with three-dot icon */}
    <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">Withdraw Method</p>
        {/* Three-dot icon */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <circle cx="12" cy="6" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="18" r="1.5" />
        </svg>
    </div>

    {/* PayPal details inline */}
    <div className="flex items-center mt-2">
    {/* Icon */}
    <div className="mr-4">{incomeData[2].icon}</div>

    {/* Text inline */}
    <div>
        <div className="flex items-center">
            <h2 className="text-sm font-bold">{incomeData[2].subtitle}</h2>
            <p className="bg-green-300 py-1 px-2 rounded-full text-[10px] text-gray-700 ml-2">{incomeData[2].title}</p>
        </div>
        {/* Verified text */}
        <p className="text-gray-400 text-[12px] mt-1">verified</p>
    </div>
</div>
</div>
        </div>
    );
};

export default IncomeDetails;
