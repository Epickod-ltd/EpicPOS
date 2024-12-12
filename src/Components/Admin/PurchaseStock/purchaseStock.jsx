import React, {useState} from "react";
import AddItemModal from "./AddItemModal"; // Add item modal
import EditItemModal from "./EditItemModal"; // Edit item modal
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const PurchaseStock = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'Item A', quantity: 10, type: 'Type 1', purchasePrice: 50, salePrice: 70, wholesalePrice: 45},
        {id: 2, name: 'Item B', quantity: 20, type: 'Type 2', purchasePrice: 30, salePrice: 50, wholesalePrice: 25},
        {id: 3, name: 'Item C', quantity: 15, type: 'Type 1', purchasePrice: 60, salePrice: 80, wholesalePrice: 55},
        {id: 4, name: 'Item D', quantity: 25, type: 'Type 3', purchasePrice: 40, salePrice: 60, wholesalePrice: 35},
        {id: 5, name: 'Item E', quantity: 30, type: 'Type 2', purchasePrice: 45, salePrice: 65, wholesalePrice: 40},
    ]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);  // For editing


    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("name");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // State for Confirmation Dialog
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);  // To store the item being deleted

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleEdit = (item) => {
        setSelectedItem(item);  // Set the item for editing
        setShowModal(true);      // Show the modal
    };

    // Open Delete Confirmation Dialog
    const handleDelete = (itemId) => {
        setItemToDelete(itemId);  // Set the item to be deleted
        setOpenDeleteDialog(true); // Show confirmation dialog
    };

    // Confirm Deletion
    const handleConfirmDelete = () => {
        setItems((prevItems) => prevItems.filter(item => item.id !== itemToDelete));
        setOpenDeleteDialog(false);  // Close the dialog
    };

    // Cancel Deletion
    const handleCloseDialog = () => {
        setOpenDeleteDialog(false); // Close the dialog without deleting
    };

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Sorting utility functions
    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1]; // Preserve the order for equal elements
        });
        return stabilizedThis.map((el) => el[0]);
    };

    const getComparator = (order, orderBy) => {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    };

    const sortedItems = stableSort(items, getComparator(order, orderBy));
    const paginatedItems = sortedItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    // Define the handleUpdateItem function for updating an item
    const handleUpdateItem = (updatedItem) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
        setShowModal(false); // Close the modal after updating
        setSelectedItem(null); // Reset selected item (if any)
    };

    const handleActionMenuOpen = (event, item) => {
        setSelectedItem(item); // Set selected item for menu actions
        setAnchorEl(event.currentTarget); // Open the menu
    };

    const handleActionMenuClose = () => {
        setAnchorEl(null); // Close the menu
    };

    const handleEditAction = () => {
        setShowModal(true); // Open the edit modal
        handleActionMenuClose(); // Close the menu
    };

    const handleDeleteAction = () => {
        handleDelete(selectedItem.id); // Trigger delete confirmation
        handleActionMenuClose(); // Close the menu
    };

    return (
        <div className="p-6">
            <h1 className="font-bold mb-4 text-lg">Purchases & Stock</h1>
            {/* Header with Search Bar and Add Item Button */}
            <div className="flex justify-between items-center mb-6">
                <input
                    type="text"
                    placeholder="Search items..."
                    className="border p-2 rounded-md w-64"
                />
                <button
                    className="shadow-md bg-[#2D72B4] hover:bg-[#245a8d] text-white px-4 py-2 rounded-md flex items-center"
                    onClick={() => {
                        setSelectedItem(null); // Clear selected item for adding new item
                        setShowModal(true); // Show Add Item Modal
                    }}
                >
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="currentColor"
                         className="mr-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"/>
                    </svg>

                    Add New Item
                </button>
            </div>

            {/* Modal: Add or Edit Item */}
            {showModal && (
                selectedItem ? (
                    <EditItemModal
                        item={selectedItem}
                        onClose={() => setShowModal(false)}
                        onUpdate={handleUpdateItem}
                    />
                ) : (
                    <AddItemModal
                        onClose={() => setShowModal(false)}
                        onAdd={handleAddItem}
                    />
                )
            )}

            {/* Stock Details Table with Pagination, Sorting */}
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 750}} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={orderBy === "name" ? order : "asc"}
                                    onClick={() => handleRequestSort("name")}
                                >
                                    Item Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={orderBy === "quantity"}
                                    direction={orderBy === "quantity" ? order : "asc"}
                                    onClick={() => handleRequestSort("quantity")}
                                >
                                    Quantity
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Purchase Price</TableCell>
                            <TableCell align="right">Sale Price</TableCell>
                            <TableCell align="right">Wholesale Price</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell align="right">{item.quantity}</TableCell>
                                <TableCell align="right">{item.type}</TableCell>
                                <TableCell align="right">{item.purchasePrice}</TableCell>
                                <TableCell align="right">{item.salePrice}</TableCell>
                                <TableCell align="right">{item.wholesalePrice}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        aria-controls="menu"
                                        aria-haspopup="true"
                                        onClick={(event) => handleActionMenuOpen(event, item)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                                        </svg>
                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleActionMenuClose}
                                        PaperProps={{
                                            style: {
                                                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)', // Lighter shadow
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleEditAction} style={{fontSize: '0.9rem'}}>
                                            <EditIcon
                                                style={{fontSize: '22px', color: '#a5a5a5', marginRight: '12px'}}/> Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleDeleteAction} style={{fontSize: '0.9rem'}}>
                                            <DeleteIcon style={{
                                                fontSize: '22px',
                                                color: '#a5a5a5',
                                                marginRight: '12px'
                                            }}/> Delete
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this item?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PurchaseStock;
