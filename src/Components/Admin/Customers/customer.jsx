import React, { useState } from "react";
import {
    Box,
    Button,
    Modal,
    TextField,
    Typography,
    Card,
    CardContent,
    Avatar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [newCustomer, setNewCustomer] = useState({
        name: "",
        phone: "",
        email: "",
        cnic: "",
        address: "",
    });

    const handleAddModalOpen = () => setIsAddModalOpen(true);
    const handleAddModalClose = () => setIsAddModalOpen(false);

    const handleDetailsModalOpen = (customer) => {
        setSelectedCustomer(customer);
        setIsDetailsModalOpen(true);
    };
    const handleDetailsModalClose = () => setIsDetailsModalOpen(false);

    const handleAddCustomer = () => {
        const updatedCustomers = [...customers, { ...newCustomer, id: customers.length + 1 }];
        setCustomers(updatedCustomers);
        setFilteredCustomers(updatedCustomers);
        setNewCustomer({ name: "", phone: "", email: "", cnic: "", address: "" });
        setIsAddModalOpen(false);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query === "") {
            setFilteredCustomers(customers);
        } else {
            const filtered = customers.filter((customer) =>
                Object.values(customer)
                    .join(" ")
                    .toLowerCase()
                    .includes(query)
            );
            setFilteredCustomers(filtered);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "phone", headerName: "Phone", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "cnic", headerName: "CNIC", width: 150 },
        { field: "address", headerName: "Address", width: 300 },
    ];

    return (
        <div className="container mx-auto max-w-6xl p-6">
            {/* Header */}
            <header className="flex items-center justify-between bg-white rounded mb-4">
                <Typography variant="h5" component="h1" className="font-semibold">
                    Customers
                </Typography>
                <div className="flex items-center">
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{ marginRight: "1rem" }}
                    />
                    {customers.length > 0 && (
                        <div style={{ marginRight: "1rem" }}>
                            <Button
                                variant={viewMode === "grid" ? "contained" : "outlined"}
                                onClick={() => setViewMode("grid")}
                                sx={{
                                    marginRight: "0.5rem",
                                    backgroundColor: viewMode === "grid" ? '#2D72B4' : 'transparent',
                                    color: viewMode === "grid" ? '#fff' : '#2D72B4',
                                    borderColor: '#2D72B4',
                                    '&:hover': {
                                        backgroundColor: viewMode === "grid" ? '#1c4f80' : 'transparent',
                                        borderColor: '#2D72B4',
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-grid-dots">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                </svg>
                            </Button>

                            <Button
                                variant={viewMode === "list" ? "contained" : "outlined"}
                                onClick={() => setViewMode("list")}
                                sx={{
                                    backgroundColor: viewMode === "list" ? '#2D72B4' : 'transparent',
                                    color: viewMode === "list" ? '#fff' : '#2D72B4',
                                    borderColor: '#2D72B4',
                                    '&:hover': {
                                        backgroundColor: viewMode === "list" ? '#1c4f80' : 'transparent',
                                        borderColor: '#2D72B4',
                                    }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 6l11 0" />
                                    <path d="M9 12l11 0" />
                                    <path d="M9 18l11 0" />
                                    <path d="M5 6l0 .01" />
                                    <path d="M5 12l0 .01" />
                                    <path d="M5 18l0 .01" />
                                </svg>
                            </Button>

                        </div>
                    )}
                    <Button
                        variant="contained"
                        onClick={handleAddModalOpen}
                        startIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"/>
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
                        Add New Customer
                    </Button>
                </div>
            </header>

            {/* Customer Display Section */}
            {filteredCustomers.length === 0 ? (
                <Box
                    className="flex items-center justify-center h-64 border border-gray-300 rounded-md bg-white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box textAlign="center">
                        <img
                            src="https://mobiles.sahabautos.com/images/DataNotFound.svg?a6502a0b1c3c557085d25733cdff0872"
                            alt="Data Not Found"
                            className="mx-auto mb-4 h-20"
                            style={{ width: "50%" }}
                        />
                        <Typography variant="h6" gutterBottom>
                            Customers Data Not Found
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Kindly add Customers and Clients
                        </Typography>
                        <Button
                            variant="contained"
                            style={{ marginTop: "1rem" }}
                            onClick={handleAddModalOpen}
                            startIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor"
                                     className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"/>
                                </svg>
                            }
                            sx={{
                                backgroundColor: '#2D72B4',
                                color: 'white',
                                marginTop:1,
                                height: 40,
                                '&:hover': {
                                    backgroundColor: '#245a8d',
                                },
                            }}
                        >
                            Add New Customer
                        </Button>
                    </Box>
                </Box>
            ) : viewMode === "grid" ? (
                <Box className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCustomers.map((customer) => (
                        <Card
                            key={customer.id}
                            onClick={() => handleDetailsModalOpen(customer)}
                            className="cursor-pointer hover:shadow-lg transition"
                        >
                            <CardContent className="flex items-center gap-4">
                                <Avatar>{customer.name.charAt(0).toUpperCase()}</Avatar>
                                <Box>
                                    <Typography variant="h6">{customer.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {customer.phone}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Box style={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={filteredCustomers}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        onRowClick={(params) => handleDetailsModalOpen(params.row)}
                    />
                </Box>
            )}

            {/* Add Customer Modal */}
            <Modal
                open={isAddModalOpen}
                onClose={handleAddModalClose}
                aria-labelledby="add-customer-title"
                aria-describedby="add-customer-description"
            >
                <Box
                    className="bg-white p-6 rounded-md shadow-lg"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        maxWidth: "500px",
                    }}
                >
                    <Typography
                        id="add-customer-title"
                        variant="h6"
                        component="h2"
                        gutterBottom
                    >
                        Add New Customer
                    </Typography>
                    <Box
                        component="form"
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        mt={2}
                    >
                        <TextField
                            label="Customer Name *"
                            value={newCustomer.name}
                            onChange={(e) =>
                                setNewCustomer({ ...newCustomer, name: e.target.value })
                            }
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Phone Number *"
                            value={newCustomer.phone}
                            onChange={(e) =>
                                setNewCustomer({ ...newCustomer, phone: e.target.value })
                            }
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            value={newCustomer.email}
                            onChange={(e) =>
                                setNewCustomer({ ...newCustomer, email: e.target.value })
                            }
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Customer CNIC"
                            value={newCustomer.cnic}
                            onChange={(e) =>
                                setNewCustomer({ ...newCustomer, cnic: e.target.value })
                            }
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Address"
                            value={newCustomer.address}
                            onChange={(e) =>
                                setNewCustomer({ ...newCustomer, address: e.target.value })
                            }
                            variant="outlined"
                            multiline
                            rows={3}
                            fullWidth
                        />
                    </Box>
                    <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
                        <Button onClick={handleAddModalClose} color="secondary">
                            Cancel
                        </Button>
                        <Button variant="contained"
                                sx={{backgroundColor: '#2D72B4',}}
                                onClick={handleAddCustomer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 className="mr-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-check">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
                            </svg>
                            Save Customer
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Customer Details Modal */}
            {selectedCustomer && (
                <Modal
                    open={isDetailsModalOpen}
                    onClose={handleDetailsModalClose}
                    aria-labelledby="customer-details-title"
                >
                    <Box
                        className="bg-white p-6 rounded-md shadow-lg"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "90%",
                            maxWidth: "500px",
                        }}
                    >
                        <Typography id="customer-details-title" variant="h6" gutterBottom>
                            Customer Details
                        </Typography>
                        <Box mt={2}>
                            <Typography>
                                <strong>Name:</strong> {selectedCustomer.name}
                            </Typography>
                            <Typography>
                                <strong>Phone:</strong> {selectedCustomer.phone}
                            </Typography>
                            <Typography>
                                <strong>Email:</strong> {selectedCustomer.email || "N/A"}
                            </Typography>
                            <Typography>
                                <strong>CNIC:</strong> {selectedCustomer.cnic || "N/A"}
                            </Typography>
                            <Typography>
                                <strong>Address:</strong> {selectedCustomer.address || "N/A"}
                            </Typography>
                        </Box>
                        <Box mt={4} textAlign="right">
                            <Button onClick={handleDetailsModalClose} variant="contained">
                                Close
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default Customers;
