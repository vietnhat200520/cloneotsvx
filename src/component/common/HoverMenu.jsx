import React, { useState, useRef } from 'react';
import { Button, Menu, MenuItem, Box, Link } from '@mui/material';
import './HoverMenu.css';

const HoverMenu = ({ items = [], buttonLabel = "KHOÁ HỌC", baseHref = '#' }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const timeoutRef = useRef(null);
    const open = Boolean(anchorEl);

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

    return (
        <Box 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            sx={{ display: 'inline-block', position: 'relative' }} 
        >
            <Button
                // Ghi đè lớp root của Button
                classes={{ root:  'hovermenu-button' }}
                onClick={() => window.location.href = baseHref}
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
                        // Sử dụng classes.root cho Paper (khung menu)
                        classes: { root: 'hovermenu-paper' },
                        sx: { pointerEvents: 'auto' } 
                    },
                    list: { 
                        // Sử dụng classes.root cho List (danh sách menu)
                        classes: { root: 'hovermenu-list' } 
                    }
                }}
            >
                {items.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        disableRipple
                        onClick={handleMenuClose}
                        // Ghi đè lớp root của MenuItem
                        classes={{ root: 'hovermenu-item' }}
                    >
                        <Link 
                            href={item.href} 
                            underline="none" 
                            // Link là component đơn giản, vẫn dùng className hoặc sx là chuẩn nhất
                            classes={{ root: 'hovermenu-link' }}
                        >
                            {item.label}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default HoverMenu;