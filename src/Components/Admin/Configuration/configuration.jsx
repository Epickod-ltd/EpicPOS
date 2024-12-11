import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Configuration = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === "current") setShowCurrentPassword(!showCurrentPassword);
        if (field === "new") setShowNewPassword(!showNewPassword);
        if (field === "confirm") setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-6">
            {/* Page Header */}
            <header className="w-full mb-8">
                <div className="flex justify-between items-center">
                    <Typography variant="h5" className="font-semibold">
                        Manage Company Data
                    </Typography>
                    <Button
                        variant="contained"
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
                        Save General Settings
                    </Button>
                </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
                {/* Company Info Section */}
                <Card className="flex-1">
                    <CardContent>
                        <Typography variant="h6" className="mb-4">
                            Company Info
                        </Typography>
                        <div className="space-y-4 mt-4">
                            <TextField label="Company Name" fullWidth variant="outlined" />
                            <TextField label="Phone Number" fullWidth variant="outlined" />
                            <TextField label="Company Email" fullWidth variant="outlined" />
                            <TextField label="Company Website Link" fullWidth variant="outlined" />
                        </div>
                    </CardContent>
                </Card>

                {/* Description Section */}
                <Card className="flex-1">
                    <CardContent>
                        <Typography variant="h6" className="mb-6">
                            Additional Information
                        </Typography>
                        <div className="space-y-6 mt-4">
                            <TextField
                                label="Short Company Description"
                                fullWidth
                                multiline
                                rows={3}
                                variant="outlined"
                            />
                            <TextField
                                label="Company Address"
                                fullWidth
                                multiline
                                rows={3}
                                variant="outlined"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Change Password Section */}
            <div className="w-full mt-8">
                <Card>
                    <CardContent>
                        <Typography variant="h6" className="mb-4 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                                <path d="M15 9h.01" />
                            </svg>
                            Change Password
                        </Typography>
                        <div className="space-y-4 mt-4">
                            <TextField
                                label="Current Password"
                                type={showCurrentPassword ? "text" : "password"}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => togglePasswordVisibility("current")}>
                                            {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                }}
                            />
                            <TextField
                                label="New Password"
                                type={showNewPassword ? "text" : "password"}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => togglePasswordVisibility("new")}>
                                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                }}
                            />
                            <TextField
                                label="Confirm New Password"
                                type={showConfirmPassword ? "text" : "password"}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => togglePasswordVisibility("confirm")}>
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                }}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Configuration;
