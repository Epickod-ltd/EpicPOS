import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography, Grid } from "@mui/material";

const AddItemModal = ({ onClose, onAdd }) => {



    const [formData, setFormData] = useState({
        name: "",
        quantity: "",
        type: "",
        purchasePrice: "",
        salePrice: "",
        wholesalePrice: "",
        date: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add item logic
        onAdd({
            id: Date.now(),
            ...formData,
        });
        onClose(); // Close the modal after adding the item
    };

    return (
        <Modal open onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 500, // Increase width for better display
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Add New Item
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* First Row (Item Name and Quantity) */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Item Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                                type="number"
                            />
                        </Grid>

                        {/* Second Row (Type and Purchase Price) */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Type"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Purchase Price"
                                name="purchasePrice"
                                value={formData.purchasePrice}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                                type="number"
                            />
                        </Grid>

                        {/* Third Row (Sale Price and Wholesale Price) */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Sale Price"
                                name="salePrice"
                                value={formData.salePrice}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Wholesale Price"
                                name="wholesalePrice"
                                value={formData.wholesalePrice}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                                type="number"
                            />
                        </Grid>

                        {/* Last Row (Date) */}
                        <Grid item xs={12}>
                            <TextField
                                label="Date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <div className="flex justify-end space-x-2 mt-4">
                        <Button onClick={onClose} variant="outlined" color="secondary">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundColor: '#2D72B4', // Custom color
                                color: "#fff",
                                '&:hover': {
                                    backgroundColor: '#245a8d',
                                },
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor"
                                 className="mr-2 icon icon-tabler icons-tabler-filled icon-tabler-circle-check">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
                            </svg>
                            Save Item
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default AddItemModal;
