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
    Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [newUser, setNewUser] = useState({
        name: "",
        phone: "",
        email: "",
        role: "",
        address: "",
    });

    const handleAddModalOpen = () => setIsAddModalOpen(true);
    const handleAddModalClose = () => setIsAddModalOpen(false);

    const handleDetailsModalOpen = (user) => {
        setSelectedUser(user);
        setIsDetailsModalOpen(true);
    };
    const handleDetailsModalClose = () => setIsDetailsModalOpen(false);

    const handleAddUser = () => {
        const updatedUsers = [...users, { ...newUser, id: users.length + 1 }];
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setNewUser({ name: "", phone: "", email: "", role: "", address: "" });
        setIsAddModalOpen(false);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
                Object.values(user)
                    .join(" ")
                    .toLowerCase()
                    .includes(query)
            );
            setFilteredUsers(filtered);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "phone", headerName: "Phone", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "role", headerName: "Role", width: 150 },
        { field: "address", headerName: "Address", width: 300 },
    ];

    return (
        <div className="container mx-auto max-w-6xl p-6">
            {/* Header */}
            <header className="flex items-center justify-between bg-white rounded mb-4">
                <Typography variant="h5" component="h1" className="font-semibold">
                    Users
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
                    {users.length > 0 && (
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
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-grid-dots">
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
                                        backgroundColor: '#245a8d',
                                    },
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list">
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
                        sx={{backgroundColor: '#2D72B4',
                            '&:hover': {
                                backgroundColor: '#245a8d',
                            },
                        }}

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="currentColor"
                             className="mr-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"/>
                        </svg>
                        Add New User
                    </Button>
                </div>
            </header>

            {/* User Display Section */}
            {filteredUsers.length === 0 ? (
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
                            User Data Not Found
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Kindly add Users
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{backgroundColor: '#2D72B4',
                                '&:hover': {
                                    backgroundColor: '#245a8d',
                                },
                            }}
                            style={{marginTop: "1rem"}}
                            onClick={handleAddModalOpen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 className="mr-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"/>
                            </svg>
                            Add New User
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box>
                    {viewMode === "grid" ? (
                        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredUsers.map((user) => (
                                <Card
                                    key={user.id}
                                    className="shadow-md rounded-md"
                                    onClick={() => handleDetailsModalOpen(user)}
                                >
                                <CardContent className="p-4">
                                        <Avatar alt={user.name} src={`https://www.gravatar.com/avatar/${user.email}`} />
                                        <Typography variant="h6">{user.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {user.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    ) : (
                        <Box className="bg-white border rounded shadow">
                            <DataGrid
                                rows={filteredUsers}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                disableSelectionOnClick
                                onRowClick={(e) => handleDetailsModalOpen(e.row)}
                            />
                        </Box>
                    )}
                </Box>
            )}

            {/* Add User Modal */}
            <Modal
                open={isAddModalOpen}
                onClose={handleAddModalClose}
                className="flex items-center justify-center"
            >
                <Box className="bg-white rounded-lg shadow-lg w-full md:w-96 p-6">
                    <Typography variant="h6" gutterBottom>
                        Add New User
                    </Typography>
                    <TextField
                        label="Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone"
                        value={newUser.phone}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Role"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Address"
                        value={newUser.address}
                        onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <Box className="flex justify-end">
                        <Button onClick={handleAddModalClose} variant="outlined" color="secondary" sx={{ mr: 2 }}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddUser} variant="contained" sx={{ backgroundColor: "#2D72B4" }}>
                            Add User
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* User Details Modal */}
            <Modal
                open={isDetailsModalOpen}
                onClose={handleDetailsModalClose}
                aria-labelledby="user-details-modal"
                aria-describedby="modal-to-view-user-details"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: 400,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: 24,
                        padding: 2,
                        outline: 'none',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}
                    >
                        <Button onClick={handleDetailsModalClose} sx={{ color: '#FF5733' }}>Close</Button>
                    </Box>
                    {selectedUser ? (
                        <Box sx={{ textAlign: 'center' }}>
                            <Avatar
                                sx={{
                                    width: 100,
                                    height: 100,
                                    margin: '0 auto 20px',
                                    backgroundColor: '#2D72B4',
                                }}
                            >
                                {selectedUser.name.charAt(0)}
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {selectedUser.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 1 }}>
                                {selectedUser.email}
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: 1 }}>
                                <strong>Phone:</strong> {selectedUser.phone}
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: 1 }}>
                                <strong>Role:</strong> {selectedUser.role}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Address:</strong> {selectedUser.address}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography variant="body2">No details available</Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default Users;
