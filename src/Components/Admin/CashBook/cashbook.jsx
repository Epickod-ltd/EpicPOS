import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import * as XLSX from "xlsx";
import { Grid, Card } from "@mui/material";

dayjs.extend(isBetween);

const Cashbook = () => {
    const [startDate, setStartDate] = useState(dayjs().startOf("month").format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "date", headerName: "Date", width: 150 },
        { field: "description", headerName: "Description", width: 200 },
        { field: "debit", headerName: "Debit ($)", width: 150 },
        { field: "credit", headerName: "Credit ($)", width: 150 },
        { field: "balance", headerName: "Balance ($)", width: 150 },
    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const data = [
                { id: 1, date: "2024-12-01", description: "Opening Balance", debit: 0, credit: 1000, balance: 1000 },
                { id: 2, date: "2024-12-05", description: "Office Supplies", debit: 200, credit: 0, balance: 800 },
                { id: 3, date: "2024-12-10", description: "Project Income", debit: 0, credit: 500, balance: 1300 },
                { id: 4, date: "2024-12-12", description: "Utility Bill", debit: 100, credit: 0, balance: 1200 },
                { id: 5, date: "2024-12-15", description: "Miscellaneous", debit: 50, credit: 0, balance: 1150 },
            ];
            setTransactions(data);
            setFilteredTransactions(data);
            setLoading(false);
        }, 1000);
    }, []);

    const handleDateFilter = () => {
        setLoading(true);
        const filtered = transactions.filter((transaction) => {
            const transactionDate = dayjs(transaction.date);
            return transactionDate.isBetween(startDate, endDate, null, "[]");
        });
        setFilteredTransactions(filtered);
        setLoading(false);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = transactions.filter((transaction) =>
            transaction.description.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredTransactions(filtered);
    };

    const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(filteredTransactions);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Cashbook");
        XLSX.writeFile(wb, "cashbook.xlsx");
    };

    const calculateSummary = () => {
        const totalDebits = filteredTransactions.reduce((acc, transaction) => acc + transaction.debit, 0);
        const totalCredits = filteredTransactions.reduce((acc, transaction) => acc + transaction.credit, 0);
        const balance = totalCredits - totalDebits;
        return {
            totalDebits,
            totalCredits,
            balance,
        };
    };

    const summaryCards = [
        {
            label: "Total Debits",
            value: `$${calculateSummary().totalDebits}`,
            color: "#F44336", // Red icon background for debits
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-refund">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"/>
                    <path d="M3 10h18"/>
                    <path d="M7 15h.01"/>
                    <path d="M11 15h2"/>
                    <path d="M16 19h6"/>
                    <path d="M19 16l-3 3l3 3"/>
                </svg>
            ),
        },
        {
            label: "Total Credits",
            value: `$${calculateSummary().totalCredits}`,
            color: "#4CAF50", // Green icon background for credits
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"/>
                    <path d="M3 10h18"/>
                    <path d="M16 19h6"/>
                    <path d="M19 16l3 3l-3 3"/>
                    <path d="M7.005 15h.005"/>
                    <path d="M11 15h2"/>
                </svg>
            ),
        },
        {
            label: "Current Balance",
            value: `$${calculateSummary().balance}`,
            color: "#FFC107", // Yellow icon background for balance
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="icon icon-tabler icons-tabler-outline icon-tabler-building-bank">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l18 0"/>
                    <path d="M3 10l18 0"/>
                    <path d="M5 6l7 -3l7 3"/>
                    <path d="M4 10l0 11"/>
                    <path d="M20 10l0 11"/>
                    <path d="M8 14l0 3"/>
                    <path d="M12 14l0 3"/>
                    <path d="M16 14l0 3"/>
                </svg>
            ),
        },
    ];

    return (
        <div className="container mx-auto max-w-6xl p-6">
            <header className="flex items-center justify-between mb-6">
                <Typography variant="h4" className="font-semibold">
                    Cashbook
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleExport}
                    startIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                             stroke="#fafafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-table-down">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"/>
                            <path d="M3 10h18"/>
                            <path d="M10 3v18"/>
                            <path d="M19 16v6"/>
                            <path d="M22 19l-3 3l-3 -3"/>
                        </svg>
                    }
                    sx={{
                        backgroundColor: '#2D72B4',
                        color: 'white',
                        height: 40,
                        '&:hover': {
                            backgroundColor: '#245a8d',
                        },
                    }}
                >
                    Export to Excel
                </Button>
            </header>

            {/* Filters */}
            <div className="flex justify-between mb-6">
                <TextField
                    label="Search Transactions"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearch}
                    sx={{ width: 300 }}
                />
                <div className="flex items-center gap-4">
                    <TextField
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{ width: 220 }}
                    />
                    <TextField
                        label="End Date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{ width: 220 }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleDateFilter}
                        startIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="icon icon-tabler icons-tabler-outline icon-tabler-filter-pause">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M12.97 19.677l-3.97 1.323v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5"/>
                                <path d="M17 17v5"/>
                                <path d="M21 17v5"/>
                            </svg>
                        }
                        sx={{
                            backgroundColor: '#2D72B4',
                            color: 'white',
                            height: 55,
                            '&:hover': {
                                backgroundColor: '#245a8d',
                            },
                        }}
                    >
                        Apply Filter
                    </Button>
                </div>
            </div>

            {/* Summary Cards */}
            <Box className="mb-6">
                <Grid container spacing={3}>
                    {summaryCards.map((card, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: 2,
                                    backgroundColor: "#F9FAFB", // Light gray background
                                    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                                    borderRadius: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        backgroundColor: card.color,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {card.icon}
                                </Box>
                                <Box ml={2}>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        {card.label}
                                    </Typography>
                                    <Typography variant="h6">{card.value}</Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            {/* Data Table */}
            {loading ? (
                <Box className="flex justify-center items-center h-64">
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ height: "auto", width: "100%" }}>
                    <DataGrid
                        rows={filteredTransactions}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </Box>
            )}
        </div>
    );
};

export default Cashbook;
