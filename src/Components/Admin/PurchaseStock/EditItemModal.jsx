import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const EditItemModal = ({ item, onClose, onEdit, setShowModal }) => {
    const [editedItem, setEditedItem] = useState(item);

    // Update the form whenever the item prop changes
    useEffect(() => {
        setEditedItem(item);
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onEdit(editedItem);  // Pass the updated item to the parent component
        onClose();  // Close the modal
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Edit Item</DialogTitle>
            <DialogContent>
                <TextField
                    label="Item Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={editedItem.name || ''}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Quantity"
                    variant="outlined"
                    fullWidth
                    name="quantity"
                    value={editedItem.quantity || ''}
                    onChange={handleChange}
                    margin="normal"
                    type="number"
                />
                <TextField
                    label="Type"
                    variant="outlined"
                    fullWidth
                    name="type"
                    value={editedItem.type || ''}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Purchase Price"
                    variant="outlined"
                    fullWidth
                    name="purchasePrice"
                    value={editedItem.purchasePrice || ''}
                    onChange={handleChange}
                    margin="normal"
                    type="number"
                />
                <TextField
                    label="Sale Price"
                    variant="outlined"
                    fullWidth
                    name="salePrice"
                    value={editedItem.salePrice || ''}
                    onChange={handleChange}
                    margin="normal"
                    type="number"
                />
                <TextField
                    label="Wholesale Price"
                    variant="outlined"
                    fullWidth
                    name="wholesalePrice"
                    value={editedItem.wholesalePrice || ''}
                    onChange={handleChange}
                    margin="normal"
                    type="number"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditItemModal;
