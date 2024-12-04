import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, TableSortLabel } from '@mui/material';



const SalesRecord = () => {
    const [account, setAccount] = useState(''); // State for Select Account
    const [cashbookDuration, setCashbookDuration] = useState(''); // State for Cashbook Duration

    const handleAccountChange = (event) => {
        setAccount(event.target.value); // Update account value
    };

    const handleCashbookDurationChange = (event) => {
        setCashbookDuration(event.target.value); // Update cashbook duration value
    };
    const [order, setOrder] = useState('asc'); // sorting order: 'asc' or 'desc'
    const [orderBy, setOrderBy] = useState(''); // column by which sorting is done
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const rows = [
        { code: '001', name: 'Product A', price: 50 },
        { code: '002', name: 'Product B', price: 30 },
        { code: '003', name: 'Product C', price: 70 },
        // Add more rows here
    ];

    const columns = [
        { id: 'code', label: 'Code', minWidth: 100 },
        { id: 'name', label: 'Name', minWidth: 150 },
        { id: 'price', label: 'Price', minWidth: 100 },
    ];
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Function to sort the rows based on the selected column and sort order
    const sortedRows = rows.sort((a, b) => {
        if (orderBy) {
            if (order === 'asc') {
                return a[orderBy] < b[orderBy] ? -1 : 1;
            } else {
                return a[orderBy] > b[orderBy] ? -1 : 1;
            }
        }
        return 0;
    });

    return (
        <div className="main p-6">
            <div className="flex justify-between items-center bg-white">
                <h2 className="text-2xl font-bold">Sales Records</h2>
                <div className="flex items-center">
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center', '& > :not(style)': {m: 1}
                    }}>
                        <TextField
                            id="search-field"  // Ensure a unique ID for each input field
                            label="Search"
                            variant="outlined"  // Use the outlined variant for better styling
                            fullWidth  // Allows input to take the full width available
                        />
                    </Box>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end">
                <FormControl sx={{m: 1, minWidth: 300}} size="small">
                    <InputLabel id="select-account-label">Select Account</InputLabel>
                    <Select
                        labelId="select-account-label"
                        id="select-account"
                        value={account} // Use separate state for account
                        label="Select Account"
                        onChange={handleAccountChange}
                    >
                        <MenuItem value="a"><em>Admin</em></MenuItem>
                        <MenuItem value="m">Misbakh</MenuItem>
                        <MenuItem value="mz">Moiz</MenuItem>
                        <MenuItem value="k">Khuzaima</MenuItem>
                        <MenuItem value="u">Umer</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 300}} size="small">
                    <InputLabel id="select-duration-label">Cashbook Duration</InputLabel>
                    <Select
                        labelId="select-duration-label"
                        id="select-duration"
                        value={cashbookDuration} // Use separate state for cashbook duration
                        label="Cashbook Duration"
                        onChange={handleCashbookDurationChange}
                    >
                        <MenuItem value="1"><em>Today</em></MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={30}>1 Month</MenuItem>
                        <MenuItem value={180}>6 Months</MenuItem>
                        <MenuItem value={365}>1 Year</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="Record-table mt-4">
                <Paper sx={{width: '100%'}}>
                    <TableContainer sx={{maxHeight: 440}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align="left"
                                            style={{fontWeight: 'bold', top: 0, minWidth: column.minWidth}}
                                            sortDirection={orderBy === column.id ? order : false}
                                        >
                                            <TableSortLabel
                                                active={orderBy === column.id}
                                                direction={orderBy === column.id ? order : 'asc'}
                                                onClick={() => handleRequestSort(column.id)}
                                            >
                                                {column.label}
                                            </TableSortLabel>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedRows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align="left">
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );
};

export default SalesRecord;
