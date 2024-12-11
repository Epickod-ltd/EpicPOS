import React, { useState } from "react";
import {
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    Box,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReturnsSalesTable = () => {
    const [tax, setTax] = useState(0);
    const [cash, setCash] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const subtotal = 0;
    const discount = 0;
    const taxAmount = (tax / 100) * subtotal;
    const grandTotal = subtotal - discount + taxAmount;

    const rows = [
        { id: 1, sr: 1, title: "Item A", unit: 100, quantity: 2, discount: 10, total: 190 },
        { id: 2, sr: 2, title: "Item B", unit: 150, quantity: 1, discount: 20, total: 130 },
    ];

    const columns = [
        { field: "sr", headerName: "SR#", width: 70 },
        { field: "title", headerName: "Item Title & Description", width: 250 },
        { field: "unit", headerName: "Unit (₨)", width: 120 },
        { field: "quantity", headerName: "Quantity", width: 120 },
        { field: "discount", headerName: "Discount (₨)", width: 150 },
        { field: "total", headerName: "Total (₨)", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => (
                <>
                    <Button
                        onClick={(event) => handleMenuClick(event, params.row)}
                        size="small"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                    </Button>
                </>
            ),
        },
    ];

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleEditDialogOpen = () => {
        setAnchorEl(null);
        setIsEditDialogOpen(true);
    };

    const handleEditDialogClose = () => {
        setIsEditDialogOpen(false);
        setSelectedRow(null);
    };

    const handleDeleteDialogOpen = () => {
        setAnchorEl(null);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setIsDeleteDialogOpen(false);
        setSelectedRow(null);
    };

    const handleSaveEdit = () => {
        console.log("Save changes:", selectedRow);
        setIsEditDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        console.log("Delete row:", selectedRow);
        setIsDeleteDialogOpen(false);
    };

    return (
        <div className="grid grid-cols-1 w-full gap-4 h-full">
            {/* Left Side */}
            <div className="lg:col-span-4 bg-white rounded-lg flex flex-col">
                <Box sx={{ flex: 1, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        autoHeight
                    />
                </Box>
            </div>


            {/* Actions Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <MenuItem onClick={handleEditDialogOpen}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <MenuItem onClick={handleDeleteDialogOpen}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>

            {/* Edit Dialog */}
            <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
                <DialogTitle>Edit Record</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Item Title & Description"
                        value={selectedRow?.title || ""}
                        onChange={(e) =>
                            setSelectedRow({ ...selectedRow, title: e.target.value })
                        }
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Unit (₨)"
                        type="number"
                        value={selectedRow?.unit || ""}
                        onChange={(e) =>
                            setSelectedRow({ ...selectedRow, unit: Number(e.target.value) })
                        }
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Quantity"
                        type="number"
                        value={selectedRow?.quantity || ""}
                        onChange={(e) =>
                            setSelectedRow({ ...selectedRow, quantity: Number(e.target.value) })
                        }
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Discount (₨)"
                        type="number"
                        value={selectedRow?.discount || ""}
                        onChange={(e) =>
                            setSelectedRow({ ...selectedRow, discount: Number(e.target.value) })
                        }
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Total (₨)"
                        type="number"
                        value={selectedRow?.total || ""}
                        onChange={(e) =>
                            setSelectedRow({ ...selectedRow, total: Number(e.target.value) })
                        }
                        margin="dense"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditDialogClose}>Cancel</Button>
                    <Button onClick={handleSaveEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog open={isDeleteDialogOpen} onClose={handleDeleteDialogClose}>
                <DialogTitle>Delete Record</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this record?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ReturnsSalesTable;
