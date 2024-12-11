import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler);

const HistoryDetails = () => {
    const [selectedRange, setSelectedRange] = useState("1M");

    const handleTabChange = (range) => {
        setSelectedRange(range);
        // Add logic to filter data based on the selected range
    };

    const data = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Payment History",
                data: [500, 1200, 800, 1500],
                borderColor: "#3981F7",
                backgroundColor: "rgba(57, 129, 247, 0.2)", // Fill color for area chart
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { display: false }, // Remove gridlines for x-axis
            },
            y: {
                grid: { display: false },
                ticks: { display: false }, // Remove y-axis labels
                border: { display: false }, // Remove the vertical line from y-axis
            },
        },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Payment History Graph */}
            <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-800">Payment History</h2>
                    {/* Tabs for Time Range */}
                    <div className="flex space-x-2">
                        {["1M", "3M", "6M", "1Y"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`px-2 py-1 rounded-lg text-[10px] font-medium ${
                                    selectedRange === tab
                                        ? "bg-[#2D72B4] text-white"
                                        : "border border-gray-300 text-gray-800"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Payment Details */}
                <p className="text-lg text-gray-800 font-semibold">$5000 <span className="text-lg text-gray-400 font-semibold">.69</span> </p>
                <p className="text-[12px] text-gray-400 mb-2">
                    <span className="bg-green-300 py-1 px-2 rounded-full text-[10px] text-gray-700 mr-2">+23% </span>
                      vs last month
                </p>
                <div className="h-64 w-full">
                    <Line data={data} options={options} />
                </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex items-center justify-between mb-4">
        <div>
            <h2 className="text-lg font-bold text-gray-800">Transaction History</h2>
            <p className="text-sm text-gray-500">Track your recent transactions</p>
        </div>
        {/* See All Button */}
        <button className="text-sm text-[#2D72B4]">See All</button>
    </div>
    <ul className="divide-y divide-gray-200">
        {[
            {
                id: 1,
                avatar: "https://flowbite.com/docs/images/people/profile-picture-1.jpg", // Replace with actual image URL
                title: "Payment Received",
                description: "You have successfully received a payment.",
                date: "2024-11-20",
                amount: "+ $200",
            },
            {
                id: 2,
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg", // Replace with actual image URL
                title: "Subscription Renewal",
                description: "Your subscription has been renewed.",
                date: "2024-11-18",
                amount: "- $50",
            },
            {
                id: 3,
                avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", // Replace with actual image URL
                title: "Refund Issued",
                description: "A refund has been issued for your previous purchase.",
                date: "2024-11-15",
                amount: "- $30",
            },
        ].map((transaction) => (
            <li key={transaction.id} className="py-2 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <img
                        src={transaction.avatar}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-800">{transaction.title}</p>
                        <p className="text-sm text-gray-500">{transaction.description}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p
                        className={`text-sm font-bold ${
                            transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {transaction.amount}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
            </li>
        ))}
    </ul>
</div>
        </div>
    );
};

export default HistoryDetails;
