import React, { useState } from "react";
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    Button,
    Menu,
    FormControl,
    Select,
    ListItemIcon,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid from Material UI

const SalesRecord = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleEditClick = () => {
        setEditModalOpen(true);
        handleCloseMenu();
    };

    const handleDeleteClick = () => {
        setDeleteModalOpen(true);
        handleCloseMenu();
    };

    const closeEditModal = () => setEditModalOpen(false);
    const closeDeleteModal = () => setDeleteModalOpen(false);

    const handleEditSave = () => {
        console.log("Edited row:", selectedRow);
        closeEditModal();
    };

    const handleConfirmDelete = () => {
        console.log("Deleted row:", selectedRow);
        closeDeleteModal();
    };

    const rows = [
        {
            id: 1,
            clientType: "Corporate",
            discount: 10,
            tax: 5,
            subtotal: 100,
            grandtotal: 105,
            date: "2024-12-03",
        },
        // Add more rows here as needed
    ];

    const columns = [
        { field: "id", headerName: "SR", width: 100 },
        { field: "clientType", headerName: "Client Type", width: 150 },
        { field: "discount", headerName: "Discount (₨)", width: 150 },
        { field: "tax", headerName: "Tax (₨)", width: 150 },
        { field: "subtotal", headerName: "Subtotal (₨)", width: 150 },
        { field: "grandtotal", headerName: "Grand Total (₨)", width: 150 },
        { field: "date", headerName: "Date", width: 180 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => (
                <div>
                    <Button
                        aria-controls={menuOpen ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? "true" : undefined}
                        onClick={(event) => handleMenuClick(event, params.row)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                        </svg>
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem onClick={handleEditClick}>
                            <ListItemIcon>
                                <EditIcon fontSize="small"/>
                            </ListItemIcon>
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleDeleteClick}>
                            <ListItemIcon>
                                <DeleteIcon fontSize="small" />
                            </ListItemIcon>
                            Delete
                        </MenuItem>
                    </Menu>
                </div>
            ),
        },
    ];

    return (
        <div className="main p-6">
            <h2 className="text-2xl font-bold">Sales Records</h2>
            <div className="Record-table mt-4">
                <Box sx={{ width: "100%", height: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5, 10, 25]}
                        disableSelectionOnClick
                    />
                </Box>
            </div>

            {/* Edit Modal */}
            <Dialog open={editModalOpen} onClose={closeEditModal}>
                <DialogTitle>Edit Record</DialogTitle>
                <DialogContent>
                    {columns
                        .filter((column) => column.field !== "action") // Exclude 'action' column from editing
                        .map((column) => (
                            <TextField
                                key={column.field}
                                label={column.headerName}
                                fullWidth
                                value={selectedRow?.[column.field] || ""}
                                onChange={(e) =>
                                    setSelectedRow({
                                        ...selectedRow,
                                        [column.field]: column.field === "id" || column.field === "discount" || column.field === "tax" || column.field === "subtotal" || column.field === "grandtotal"
                                            ? Number(e.target.value) // Ensure numeric fields are numbers
                                            : e.target.value,
                                    })
                                }
                                margin="dense"
                            />
                        ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeEditModal}>Cancel</Button>
                    <Button onClick={handleEditSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Modal */}
            <Dialog open={deleteModalOpen} onClose={closeDeleteModal}>
                <DialogTitle>Delete Record</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this record?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDeleteModal}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SalesRecord;
