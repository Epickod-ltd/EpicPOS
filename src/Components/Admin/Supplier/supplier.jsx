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

const Suppliers = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [suppliers, setSuppliers] = useState([]);
    const [filteredSuppliers, setFilteredSuppliers] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [newSupplier, setNewSupplier] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        address: "",
    });

    const handleAddModalOpen = () => setIsAddModalOpen(true);
    const handleAddModalClose = () => setIsAddModalOpen(false);

    const handleDetailsModalOpen = (supplier) => {
        setSelectedSupplier(supplier);
        setIsDetailsModalOpen(true);
    };
    const handleDetailsModalClose = () => setIsDetailsModalOpen(false);

    const handleAddSupplier = () => {
        const updatedSuppliers = [...suppliers, { ...newSupplier, id: suppliers.length + 1 }];
        setSuppliers(updatedSuppliers);
        setFilteredSuppliers(updatedSuppliers);
        setNewSupplier({ name: "", phone: "", email: "", company: "", address: "" });
        setIsAddModalOpen(false);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query === "") {
            setFilteredSuppliers(suppliers);
        } else {
            const filtered = suppliers.filter((supplier) =>
                Object.values(supplier)
                    .join(" ")
                    .toLowerCase()
                    .includes(query)
            );
            setFilteredSuppliers(filtered);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "phone", headerName: "Phone", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "company", headerName: "Company", width: 200 },
        { field: "address", headerName: "Address", width: 300 },
    ];

    return (
        <div className="container mx-auto max-w-6xl p-6">
            <h1 className="font-bold mb-4 text-lg">Suppliers</h1>
            {/* Header */}
            <header className="flex items-center justify-between bg-white rounded mb-4">
                {/* Left-aligned elements */}
                <div className="flex items-center">
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{marginRight: "1rem"}}
                    />
                    {suppliers.length > 0 && (
                        <div style={{marginRight: "1rem"}}>
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
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-grid-dots">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
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
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-list">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 6l11 0"/>
                                    <path d="M9 12l11 0"/>
                                    <path d="M9 18l11 0"/>
                                    <path d="M5 6l0 .01"/>
                                    <path d="M5 12l0 .01"/>
                                    <path d="M5 18l0 .01"/>
                                </svg>
                            </Button>
                        </div>
                    )}
                </div>

                {/* Right-aligned Add New Supplier button */}
                <div className="flex items-center">
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
                        Add New Supplier
                    </Button>
                </div>
            </header>
            {/* Supplier Display Section */}
            {filteredSuppliers.length === 0 ? (
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
                            style={{width: "50%"}}
                        />
                        <Typography variant="h6" gutterBottom>
                            Supplier Data Not Found
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Kindly add Suppliers
                        </Typography>
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
                                marginTop: 1,
                                height: 40,
                                '&:hover': {
                                    backgroundColor: '#245a8d',
                                },
                            }}
                        >
                            Add New Supplier
                        </Button>
                    </Box>
                </Box>
            ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSuppliers.map((supplier) => (
                        <Card key={supplier.id} sx={{maxWidth: 345, cursor: "pointer"}}
                              onClick={() => handleDetailsModalOpen(supplier)}>
                            <CardContent>
                                <Avatar alt={supplier.name} src="/static/images/avatar/1.jpg"
                                        sx={{width: 56, height: 56}}/>
                                <Typography variant="h6">{supplier.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{supplier.company}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <DataGrid
                        rows={filteredSuppliers}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        onRowClick={(params) => handleDetailsModalOpen(params.row)}
                        disableSelectionOnClick
                        sx={{minHeight: 400}}
                    />
                </div>
            )}

            {/* Add Supplier Modal */}
            <Modal open={isAddModalOpen} onClose={handleAddModalClose}>
                <Box className="bg-white p-4 rounded-md max-w-md mx-auto mt-11">
                    <Typography variant="h6" className="mb-4">
                        Add New Supplier
                    </Typography>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={newSupplier.name}
                        onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
                    />
                    <TextField
                        label="Phone"
                        fullWidth
                        margin="normal"
                        value={newSupplier.phone}
                        onChange={(e) => setNewSupplier({...newSupplier, phone: e.target.value})}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={newSupplier.email}
                        onChange={(e) => setNewSupplier({...newSupplier, email: e.target.value})}
                    />
                    <TextField
                        label="Company"
                        fullWidth
                        margin="normal"
                        value={newSupplier.company}
                        onChange={(e) => setNewSupplier({...newSupplier, company: e.target.value})}
                    />
                    <TextField
                        label="Address"
                        fullWidth
                        margin="normal"
                        value={newSupplier.address}
                        onChange={(e) => setNewSupplier({...newSupplier, address: e.target.value})}
                    />
                    <Box className="flex justify-end mt-4">
                        <Button
                            variant="contained"
                            onClick={handleAddSupplier}
                            startIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor"
                                     className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
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
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Supplier Details Modal */}
            {selectedSupplier && (
                <Modal open={isDetailsModalOpen} onClose={handleDetailsModalClose}>
                    <Box className="bg-white p-6 rounded-md max-w-lg mx-auto mt-20">
                        <Typography variant="h6" className="mb-4">Supplier Details</Typography>
                        <Typography variant="body1"><strong>Name:</strong> {selectedSupplier.name}</Typography>
                        <Typography variant="body1"><strong>Phone:</strong> {selectedSupplier.phone}</Typography>
                        <Typography variant="body1"><strong>Email:</strong> {selectedSupplier.email}</Typography>
                        <Typography variant="body1"><strong>Company:</strong> {selectedSupplier.company}</Typography>
                        <Typography variant="body1"><strong>Address:</strong> {selectedSupplier.address}</Typography>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default Suppliers;
