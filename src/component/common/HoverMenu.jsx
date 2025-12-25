import React, { useState, useRef } from 'react';
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HoverMenu.css';

const HoverMenu = ({ items = [], buttonLabel = "KHOÁ HỌC", baseHref = '#' }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const timeoutRef = useRef(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate(); // Khởi tạo hook điều hướng

    const handleMouseEnter = (event) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setAnchorEl(null);
        }, 200);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Hàm xử lý chuyển trang
    const handleItemClick = (path) => {
        navigate(path);
        handleMenuClose();
    };

    return (
        <Box 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            sx={{ display: 'inline-block', position: 'relative' }} 
        >
            <Button
                classes={{ root: 'hovermenu-button' }}
                onClick={() => navigate(baseHref)} // Dùng navigate thay vì window.location
            >
                {buttonLabel}
            </Button>
            
            <Menu
                id="hover-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                disableRestoreFocus
                disableScrollLock
                disableAutoFocusItem
                sx={{ pointerEvents: 'none' }} 
                slotProps={{
                    paper: { 
                        classes: { root: 'hovermenu-paper' },
                        sx: { pointerEvents: 'auto' } 
                    },
                    list: { 
                        classes: { root: 'hovermenu-list' } 
                    }
                }}
            >
                {items.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        disableRipple
                        // Khi click vào item thì gọi hàm navigate
                        onClick={() => handleItemClick(item.href)}
                        classes={{ root: 'hovermenu-item' }}
                    >
                        {/* Thay Link bằng Typography để tránh xung đột hành vi click */}
                        <Typography 
                            className="hovermenu-link"
                            sx={{ cursor: 'pointer', width: '100%' }}
                        >
                            {item.label}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default HoverMenu;