import React, { useState } from 'react';
import {
    Tab,
    Tabs,
    Box,
    Typography,
    SvgIcon,
    Button,
    Modal,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog,
    TextField,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Delete as DeleteIcon } from '@mui/icons-material';

// Simple SVG Icons for Tabs and Actions
const ProductColorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-palette">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path
            d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/>
        <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
    </svg>
);

const ProductQualityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-antenna-bars-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 18l0 -3"/>
        <path d="M10 18l0 -6"/>
        <path d="M14 18l0 -9"/>
        <path d="M18 18l0 -12"/>
    </svg>
);

const ProductCompanyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-building-community">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"/>
        <path d="M13 7l0 .01"/>
        <path d="M17 7l0 .01"/>
        <path d="M17 11l0 .01"/>
        <path d="M17 15l0 .01"/>
    </svg>
);

const EmployeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-users-group">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"/>
        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
        <path d="M17 10h2a2 2 0 0 1 2 2v1"/>
        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
        <path d="M3 13v-1a2 2 0 0 1 2 -2h2"/>
    </svg>
);

const StoreConfiguration = () => {
    const [value, setValue] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for delete dialog
    const [currentRow, setCurrentRow] = useState(null); // State to track the row being deleted
    const [newRecord, setNewRecord] = useState({
        name: '',
        hex: '',
        grade: '',
        description: '',
        location: '',
        role: '',
    });

    const handleChange = (event, newValue) => setValue(newValue);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleDeleteRow = () => {
        // Logic to delete the current row (e.g., remove it from the state)
        console.log('Deleting row: ', currentRow);
        // After deletion, close the dialog
        setOpenDeleteDialog(false);
    };

    const handleCancelDelete = () => {
        // Close the dialog without deleting
        setOpenDeleteDialog(false);
    };

    const handleMenuClick = (event, row) => {
        setCurrentRow(row); // Store the current row
        setOpenDeleteDialog(true); // Open the delete confirmation dialog
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setNewRecord((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveNewRecord = () => {
        // Logic to save the new record based on the selected tab
        console.log('New Record:', newRecord);
        // Close the modal
        setOpenModal(false);
    };

    // Sample data for DataGrid
    const productColors = [
        { id: 1, name: 'Red', hex: '#FF0000' },
        { id: 2, name: 'Blue', hex: '#0000FF' },
        { id: 3, name: 'Green', hex: '#008000' },
    ];

    const productQuality = [
        { id: 1, grade: 'A', description: 'High Quality' },
        { id: 2, grade: 'B', description: 'Medium Quality' },
        { id: 3, grade: 'C', description: 'Low Quality' },
    ];

    const productCompanies = [
        { id: 1, name: 'Company A', location: 'USA' },
        { id: 2, name: 'Company B', location: 'Germany' },
        { id: 3, name: 'Company C', location: 'China' },
    ];

    const employees = [
        { id: 1, name: 'John Doe', role: 'Manager' },
        { id: 2, name: 'Jane Smith', role: 'Developer' },
        { id: 3, name: 'Mike Johnson', role: 'Designer' },
    ];

    // Columns for DataGrid
    const colorColumns = [
        { field: 'name', headerName: 'Name', width: 180 },
        {
            field: 'actions', headerName: 'Actions', width: 180, renderCell: (params) => (
                <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    onClick={(e) => handleMenuClick(e, params.row)}  // Open menu on click
                    sx={{ textTransform: 'none' }}
                >
                    Delete
                </Button>
            ),
        }
    ];

    const qualityColumns = [
        { field: 'grade', headerName: 'Grade', width: 180 },
        { field: 'description', headerName: 'Description', width: 180 },
        {
            field: 'actions', headerName: 'Actions', width: 180, renderCell: (params) => (
                <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    onClick={(e) => handleMenuClick(e, params.row)}  // Open menu on click
                    sx={{ textTransform: 'none' }}
                >
                    Delete
                </Button>
            ),
        }
    ];

    const companyColumns = [
        { field: 'name', headerName: 'Company Name', width: 180 },
        { field: 'location', headerName: 'Location', width: 180 },
        {
            field: 'actions', headerName: 'Actions', width: 180, renderCell: (params) => (
                <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    onClick={(e) => handleMenuClick(e, params.row)}  // Open menu on click
                    sx={{ textTransform: 'none' }}
                >
                    Delete
                </Button>
            ),
        }
    ];

    const employeeColumns = [
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'role', headerName: 'Role', width: 180 },
        {
            field: 'actions', headerName: 'Actions', width: 180, renderCell: (params) => (
                <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    onClick={(e) => handleMenuClick(e, params.row)}  // Open menu on click
                    sx={{ textTransform: 'none' }}
                >
                    Delete
                </Button>
            ),
        }
    ];

    return (
        <div className="w-full">
            <div className="bg-white rounded-lg p-4">
                <Tabs value={value} onChange={handleChange} aria-label="Product Management Tabs">
                    <Tab
                        label="Product Colors"
                        icon={<ProductColorIcon />}
                        iconPosition="start" // Ensures icon is on the left
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingLeft: 2,
                            paddingRight: 2,
                        }}
                    />
                    <Tab
                        label="Product Quality"
                        icon={<ProductQualityIcon />}
                        iconPosition="start" // Ensures icon is on the left
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingLeft: 2,
                            paddingRight: 2,
                        }}
                    />
                    <Tab
                        label="Product Companies"
                        icon={<ProductCompanyIcon />}
                        iconPosition="start" // Ensures icon is on the left
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingLeft: 2,
                            paddingRight: 2,
                        }}
                    />
                    <Tab
                        label="Employees"
                        icon={<EmployeeIcon />}
                        iconPosition="start" // Ensures icon is on the left
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            paddingLeft: 2,
                            paddingRight: 2,
                        }}
                    />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <Button
                            variant="contained"
                            onClick={handleOpenModal}
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
                            Add New Product Color
                        </Button>
                    </Box>
                    <div style={{ height: 'auto', width: '100%' }}>
                        <DataGrid rows={productColors} columns={colorColumns} pageSize={5} />
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <Button
                            variant="contained"
                            onClick={handleOpenModal}
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
                            Add Product Quality
                        </Button>
                    </Box>
                    <div style={{height: 'auto', width: '100%'}}>
                        <DataGrid rows={productQuality} columns={qualityColumns} pageSize={5}/>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <Button
                            variant="contained"
                            onClick={handleOpenModal}
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
                            Add New Company
                        </Button>
                    </Box>
                    <div style={{ height: 'auto', width: '100%' }}>
                        <DataGrid rows={productCompanies} columns={companyColumns} pageSize={5} />
                    </div>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <Button
                            variant="contained"
                            onClick={handleOpenModal}
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
                            Add New Employee
                        </Button>
                    </Box>
                    <div style={{ height: 'auto', width: '100%' }}>
                        <DataGrid rows={employees} columns={employeeColumns} pageSize={5} />
                    </div>
                </TabPanel>

                {/* Modal for Adding New Record */}
                <Modal open={openModal} onClose={handleCloseModal}>
                    <Box sx={{ width: 400, padding: 2, margin: 'auto', backgroundColor: 'white', marginTop: '10%' }}>
                        <Typography variant="h6" className="mb-4">Add New Record</Typography>

                        {/* Render Name field only if it's not Product Quality tab */}
                        {value !== 1 && (
                            <TextField
                                label="Name"
                                name="name"
                                value={newRecord.name}
                                onChange={handleChangeInput}
                                fullWidth
                                margin="normal"
                            />
                        )}

                        {/* Fields for Product Quality */}
                        {value === 1 && (
                            <>
                                <TextField
                                    label="Grade"
                                    name="grade"
                                    value={newRecord.grade}
                                    onChange={handleChangeInput}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Description"
                                    name="description"
                                    value={newRecord.description}
                                    onChange={handleChangeInput}
                                    fullWidth
                                    margin="normal"
                                />
                            </>
                        )}

                        {/* Fields for Product Companies */}
                        {value === 2 && (
                            <>
                                <TextField
                                    label="Location"
                                    name="location"
                                    value={newRecord.location}
                                    onChange={handleChangeInput}
                                    fullWidth
                                    margin="normal"
                                />
                            </>
                        )}

                        {/* Fields for Employees */}
                        {value === 3 && (
                            <>
                                <TextField
                                    label="Role"
                                    name="role"
                                    value={newRecord.role}
                                    onChange={handleChangeInput}
                                    fullWidth
                                    margin="normal"
                                />
                            </>
                        )}

                        <Button
                            variant="contained"
                            onClick={handleSaveNewRecord}
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
                            save
                        </Button>
                    </Box>
                </Modal>


                {/* Delete Confirmation Dialog */}
                <Dialog open={openDeleteDialog}>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            Are you sure you want to delete this record?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={handleCancelDelete}>Cancel</Button>
                        <Button color="secondary" onClick={handleDeleteRow}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

// TabPanel Component for handling the Tab content
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default StoreConfiguration;