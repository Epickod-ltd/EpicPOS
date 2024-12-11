import React, { useState, useMemo } from "react";
import { Button, Grid, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Delete icon
import { TableSortLabel } from '@mui/material';  // For sorting

const ProductCategory = () => {
    const [categories, setCategories] = useState(["Electronics", "Fashion", "Home Appliances", "Books"]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [newCategory, setNewCategory] = useState("");

    // Sorting states
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('category');

    // Handle page change for categories table
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Filter categories based on the search query
    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle sorting functionality
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // Sorting the categories
    const sortedCategories = useMemo(() => {
        const compare = (a, b) => {
            if (a < b) return order === 'asc' ? -1 : 1;
            if (a > b) return order === 'asc' ? 1 : -1;
            return 0;
        };
        return filteredCategories.sort(compare);
    }, [filteredCategories, order]);

    // Handle opening the delete confirmation dialog
    const handleDeleteClick = (category) => {
        setCategoryToDelete(category);
        setOpenDeleteDialog(true);
    };

    // Handle closing the delete confirmation dialog
    const handleCloseDialog = () => {
        setOpenDeleteDialog(false);
        setCategoryToDelete(null);
    };

    // Handle confirming the deletion of the category
    const handleConfirmDelete = () => {
        setCategories(categories.filter(category => category !== categoryToDelete));
        setOpenDeleteDialog(false);
        setCategoryToDelete(null);
    };

    // Handle opening the add category dialog
    const handleAddCategoryClick = () => {
        setOpenAddDialog(true);
    };

    // Handle closing the add category dialog
    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
        setNewCategory("");
    };

    // Handle adding a new category
    const handleAddCategory = () => {
        if (newCategory.trim()) {
            setCategories([...categories, newCategory]);
        }
        setOpenAddDialog(false);
        setNewCategory("");
    };

    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 4 }}>
            {/* Search bar and Add Category button */}
            <Grid container spacing={3} mb={6} alignItems="center">
                {/* Search Bar */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
                        <input
                            type="text"
                            placeholder="Search for a Category..."
                            className="w-full p-2 pl-4 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                flexGrow: 1,
                                height: "40px",
                                border: "1px solid #ccc",
                            }}
                        />
                        {searchQuery && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    width: "100%",
                                    backgroundColor: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    marginTop: "4px",
                                    maxHeight: "160px",
                                    overflowY: "auto",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    zIndex: 10,
                                }}
                            >
                                {filteredCategories.length === 0 ? (
                                    <li style={{ padding: "8px", color: "#666" }}>No results found</li>
                                ) : (
                                    filteredCategories.map((category, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                padding: "8px",
                                                color: "#333",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => setSearchQuery(category)}
                                        >
                                            {category}
                                        </li>
                                    ))
                                )}
                            </ul>
                        )}
                    </Box>
                </Grid>

                {/* Add Category Button */}
                <Grid item xs={12} sm={6} sx={{ textAlign: { xs: "center", sm: "right" } }}>
                    <Button
                        variant="contained"
                        onClick={handleAddCategoryClick}
                        sx={{
                            backgroundColor: "#2D72B4",
                            color: "#fff",
                            borderRadius: "5px",
                            textTransform: "none",
                            padding: "8px 20px",
                            "&:hover": {
                                backgroundColor: "#245a8b",
                            },
                            height: "40px",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="currentColor"
                             className="mr-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"/>
                        </svg>
                        Add Category
                    </Button>
                </Grid>
            </Grid>

            {/* Categories Table */}
            <Box mb={6}>
                <Typography variant="h6" gutterBottom>Product Categories</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Sr
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === 'category'}
                                        direction={orderBy === 'category' ? order : 'asc'}
                                        onClick={(e) => handleRequestSort(e, 'category')}
                                    >
                                        Category
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedCategories
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((category, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{page * rowsPerPage + index + 1}</TableCell> {/* Serial Number */}
                                        <TableCell>{category}</TableCell>
                                        <TableCell>
                                            <Button
                                                color="error"
                                                onClick={() => handleDeleteClick(category)}
                                                startIcon={<DeleteIcon />}
                                                variant="outlined"  // Apply outlined style to the button
                                                sx={{
                                                    textTransform: "none",  // Ensures the text is not transformed to uppercase
                                                }}
                                            >
                                                Delete  {/* This is the text next to the icon */}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredCategories.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDeleteDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Are you sure you want to delete the category "{categoryToDelete}"?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="secondary">Delete</Button>
                </DialogActions>
            </Dialog>

            {/* Add Category Dialog */}
            <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Category Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog} color="primary">Cancel</Button>
                    <Button onClick={handleAddCategory} color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ProductCategory;
