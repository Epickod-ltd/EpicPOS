import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Avatar, Typography, List, ListItem, ListItemText, Divider, Badge, Button } from "@mui/material";
import { Person, Settings, Logout, Notifications as NotificationsIcon, MarkUnreadChatAlt, Menu as MenuIcon } from "@mui/icons-material";

const Header = ({ toggleSidebar }) => {
    const [anchorEl, setAnchorEl] = useState(null); // For profile menu
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null); // For notifications menu

    const notifications = [
        { id: 1, message: "New message from John", time: "5 mins ago", unread: true },
        { id: 2, message: "Project deadline approaching", time: "2 hours ago", unread: false },
        { id: 3, message: "Your report has been reviewed", time: "1 day ago", unread: true },
        { id: 4, message: "System update completed", time: "3 days ago", unread: false },
    ];

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationsMenuOpen = (event) => {
        setNotificationsAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationsMenuClose = () => {
        setNotificationsAnchorEl(null);
    };

    const clearAllNotifications = () => {
        alert("All notifications cleared");
        // Implement logic to mark all notifications as read or clear them from state
    };

    return (
        <header className="bg-white text-gray-800 px-6 py-3 flex items-center justify-between">
            {/* Left Section: Greeting Text */}
            <div className="w-full md:w-1/2 mb-3 md:mb-0">
                <h1 className="text-lg md:text-xl font-bold">Good Morning, Chris</h1>
                <p className="text-gray-600 text-sm">Here’s your dashboard overview.</p>
            </div>

            {/* Right Section: Actions */}
            <div className="w-full md:w-auto flex items-center justify-end space-x-4 gap-4">
                {/* Button */}
                <button
                    className="px-4 py-2 bg-[#2D72B4] text-white rounded-full text-sm items-center space-x-2 hidden lg:flex"
                    onClick={() => alert("Button Clicked!")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
                    </svg>
                    <span>Create a Contact</span>
                </button>

                {/* Bell Icon */}
                <IconButton onClick={handleNotificationsMenuOpen} className="relative">
                    <Badge badgeContent={notifications.filter(n => n.unread).length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                {/* Profile Avatar */}
                <IconButton onClick={handleMenuOpen}>
                    <Avatar
                        alt="Profile Picture"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    />
                </IconButton>

                {/* Notifications Menu */}
                <Menu
                    anchorEl={notificationsAnchorEl}
                    open={Boolean(notificationsAnchorEl)}
                    onClose={handleNotificationsMenuClose}
                    PaperProps={{
                        style: { width: 320, maxHeight: 400, overflowY: "auto" },
                    }}
                >
                    <div className="px-4 py-2 flex justify-between items-center">
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Notifications</Typography>
                        <Button
                            variant="outlined"
                            size="small"
                            color="secondary"
                            onClick={clearAllNotifications}
                        >
                            Clear All
                        </Button>
                    </div>
                    <Divider />
                    <List sx={{ padding: 0 }}>
                        {notifications.map((notification) => (
                            <ListItem
                                key={notification.id}
                                button
                                sx={{
                                    backgroundColor: notification.unread ? "#f1f8ff" : "transparent",
                                    borderRadius: 1,
                                    marginBottom: 1,
                                    "&:hover": {
                                        backgroundColor: "#e3f2fd",
                                    },
                                }}
                                onClick={() => alert(`Clicked on: ${notification.message}`)}
                            >
                                <Avatar sx={{ width: 32, height: 32, marginRight: 2 }} />
                                <ListItemText
                                    primary={notification.message}
                                    secondary={notification.time}
                                    sx={{ fontWeight: notification.unread ? "bold" : "normal" }}
                                />
                                {notification.unread && <MarkUnreadChatAlt fontSize="small" sx={{ color: "#42a5f5" }} />}
                            </ListItem>
                        ))}
                    </List>
                </Menu>

                {/* Profile Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                        style: { width: 200 },
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <Person fontSize="small" style={{ marginRight: 8 }} />
                        <Typography variant="inherit">Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Settings fontSize="small" style={{ marginRight: 8 }} />
                        <Typography variant="inherit">Settings</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Logout fontSize="small" style={{ marginRight: 8 }} />
                        <Typography variant="inherit">Logout</Typography>
                    </MenuItem>
                </Menu>
            </div>

            {/* Mobile Hamburger Icon (Right side) */}
            <div className="lg:hidden flex items-center justify-end">
                <IconButton onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
            </div>
        </header>
    );
};

export default Header;
