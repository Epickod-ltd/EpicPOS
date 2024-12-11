import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, Tabs, Tab, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import * as XLSX from "xlsx";
import { Grid, Card } from "@mui/material";
// Extend dayjs with the isBetween plugin
dayjs.extend(isBetween);

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [startDate, setStartDate] = useState(dayjs().startOf('month').format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [filteredData, setFilteredData] = useState([]);
    const [reportsData, setReportsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Report Name", width: 200 },
        { field: "date", headerName: "Date", width: 150 },
        { field: "value", headerName: "Value", width: 150 },
    ];

    // Simulating fetching data (can be replaced with API call)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const data = [
                { id: 1, name: "Report A", date: "2024-12-01", value: 150 },
                { id: 2, name: "Report B", date: "2024-12-05", value: 200 },
                { id: 3, name: "Report A", date: "2024-12-10", value: 250 },
                { id: 4, name: "Report B", date: "2024-12-12", value: 300 },
                { id: 5, name: "Report A", date: "2024-12-15", value: 350 },
            ];
            setReportsData(data);
            setFilteredData(data);
            setLoading(false);
        }, 1000);
    }, []);

    const handleDateFilter = () => {
        setLoading(true);
        const filtered = reportsData.filter(report => {
            const reportDate = dayjs(report.date);
            return reportDate.isBetween(startDate, endDate, null, "[]");
        });
        setFilteredData(filtered);
        setLoading(false);
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setFilteredData([]);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = reportsData.filter((report) =>
            report.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(filteredData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Reports");
        XLSX.writeFile(wb, "reports.xlsx");
    };

    const calculateSummary = () => {
        const totalValue = filteredData.reduce((acc, report) => acc + report.value, 0);
        return {
            totalReports: filteredData.length,
            totalValue,
            avgValue: (totalValue / filteredData.length).toFixed(2),
        };
    };

    return (
        <div className="container mx-auto max-w-6xl p-6">
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
                <Typography variant="h4" className="font-semibold">Reports</Typography>
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

            {/* Filters (Search on the left, Date Filters on the right) */}
            <div className="flex justify-between mb-6">
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <TextField
                        label="Search Reports"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearch}
                        sx={{ width: 300 }}
                    />
                </div>

                <div className="flex items-center gap-4">
                    {/* Date Filters */}
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

            {/* Report Summary */}
            <Box className="mb-6">
                <Grid container spacing={3}>
                    {/* Total Reports */}
                    <Grid item xs={12} sm={4}>
                        <Card
                            sx={{
                                padding: 2,
                                backgroundColor: '#F9FAFB',
                                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.08)', // Lighter shadow
                                borderRadius: 2,
                            }}
                        >
                            <Box display="flex" alignItems="center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30" // Reduced size
                                    height="30"
                                    fill="#2D72B4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM10 7h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2ZM10 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2ZM10 15h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z" />
                                </svg>
                                <Box ml={2}>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        Total Reports
                                    </Typography>
                                    <Typography variant="h6">
                                        {calculateSummary().totalReports}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Total Value */}
                    <Grid item xs={12} sm={4}>
                        <Card
                            sx={{
                                padding: 2,
                                backgroundColor: '#F9FAFB',
                                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.08)', // Lighter shadow
                                borderRadius: 2,
                            }}
                        >
                            <Box display="flex" alignItems="center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30" // Reduced size
                                    height="30"
                                    fill="#28A745"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 16h-2v-2h2Zm0-4h-2V7h2Z" />
                                </svg>
                                <Box ml={2}>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        Total Value
                                    </Typography>
                                    <Typography variant="h6">
                                        ${calculateSummary().totalValue}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Average Value */}
                    <Grid item xs={12} sm={4}>
                        <Card
                            sx={{
                                padding: 2,
                                backgroundColor: '#F9FAFB',
                                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.08)', // Lighter shadow
                                borderRadius: 2,
                            }}
                        >
                            <Box display="flex" alignItems="center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30" // Reduced size
                                    height="30"
                                    fill="#FFC107"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 16h-2v-2h2Zm0-4h-2V7h2Z" />
                                </svg>
                                <Box ml={2}>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        Average Value
                                    </Typography>
                                    <Typography variant="h6">
                                        ${calculateSummary().avgValue}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>


            {/* Tabs */}
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="Report Tabs"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 4 }}
            >
                <Tab label="Report A" />
                <Tab label="Report B" />
            </Tabs>

            {/* Report Data Table */}
            {loading ? (
                <Box className="flex justify-center items-center h-64">
                    <CircularProgress />
                </Box>
            ) : filteredData.length === 0 ? (
                <Box className="flex justify-center items-center h-64 bg-gray-100 rounded-lg p-4">
                    <Typography>No data available for the selected filters.</Typography>
                </Box>
            ) : (
                <Box sx={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={filteredData}
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

export default Reports;
