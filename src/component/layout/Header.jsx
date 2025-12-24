import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Box, Typography, Container, Link, 
  IconButton, List, ListItem, useMediaQuery, Collapse 
} from '@mui/material';

import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import HoverMenu from '../common/HoverMenu.jsx';
import AuthButton from '../common/authButton.jsx';
import { courseItems } from '../../data';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:1000px)');
  const hideLogoText = useMediaQuery('(max-width:650px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Component chứa nội dung Menu (Dùng chung cho cả Desktop và Mobile logic)
  const MenuContent = ({ isVertical = false }) => (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: isVertical ? 'column' : 'row',
      alignItems: isVertical ? 'flex-start' : 'center',
      gap: isVertical ? 2 : 0 
    }}>
      <Link href="#" classes={{ root: 'nav-link' }}>TRANG CHỦ</Link>
      
      {/* HoverMenu vẫn giữ nguyên để hover hiện list khóa học */}
      <HoverMenu items={courseItems} buttonLabel="KHOÁ HỌC" baseHref="/khoa-hoc" />
      
      <Link href="#" classes={{ root: 'nav-link' }}>KÍCH HOẠT</Link>
      
      <IconButton classes={{ root: 'header-cart' }}>
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );

  return (
    <>
      <AppBar position="static" classes={{ root: 'custom-appbar' }}>
        <Container maxWidth={false} disableGutters className="header-container">
          <Toolbar classes={{ root: 'header-toolbar' }}>
            
            {/* 1. LOGO AREA */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Flogo-otsv.png&w=128&q=75"
                alt="Logo"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
              {!hideLogoText && (
                <Typography sx={{ ml: 1, color: 'orange', fontWeight: 'bold' }}>
                  Ôn thi nhàn, Kết quả cao
                </Typography>
              )}
            </Box>

            {/* 2. MENU AREA */}
            {isDesktop ? (
              <MenuContent />
            ) : (
              <IconButton onClick={handleDrawerToggle} classes={{ root: 'menu-icon-btn' }}>
                <MenuIcon />
              </IconButton>
            )}

            {/* 3. AUTH BUTTONS */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <AuthButton type="login" label="ĐĂNG NHẬP" onClick={() => {}} />
              <AuthButton type="register" label="ĐĂNG KÝ" onClick={() => {}} />
            </Box>

          </Toolbar>
        </Container>

        {/* 4. COLLAPSE MENU (Hiển thị ngay dưới AppBar khi < 1000px) */}
        {!isDesktop && (
          <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
            <Box classes={{ root: 'mobile-menu-container' }}>
              <MenuContent isVertical={true} />
            </Box>
          </Collapse>
        )}
      </AppBar>
    </>
  );
}

export default Header;