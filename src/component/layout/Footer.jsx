import React from 'react';
import { Box, Container, Typography, Link, List, ListItem } from '@mui/material';
import { LocationOn as LocationOnIcon } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
    return (
        <Box component="footer" className="footer-container">
            <Container maxWidth="lg" className="footer-inner">
                <div className="footer-grid">
                    {/* Cột 1 */}
                    <div className="footer-item col-info">
                        <Typography className="column-title">THÔNG TIN</Typography>
                        <Typography className="footer-text">Email: info@onthisinhvien.vn</Typography>
                        <Typography className="footer-text">Hotline: 02473 010 929</Typography>
                        <Typography className="footer-text">Giờ làm việc: 8h00 - 11h30, 14h - 17h30</Typography>
                        <Box className="footer-address">
                            <LocationOnIcon className="footer-icon" />
                            <Typography className="footer-text">Địa chỉ: Số 355 ngõ Quỳnh, Bạch Mai, Hà Nội</Typography>
                        </Box>
                    </div>

                    {/* Cột 2 */}
                    <div className="footer-item col-util">
                        <Typography className="column-title">TIỆN ÍCH</Typography>
                        <List disablePadding>
                            {['Trang chủ', 'Khoá học', 'Đề thi'].map((item) => (
                                <ListItem key={item} disablePadding>
                                    <Link className="footer-link">{item}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>

                    {/* Cột 3 */}
                    <div className="footer-item col-policy">
                        <Typography className="column-title">CHÍNH SÁCH</Typography>
                        <List disablePadding>
                            {['Chính sách bảo mật', 'Hoàn trả học phí', 'Hướng dẫn'].map((item) => (
                                <ListItem key={item} disablePadding>
                                    <Link className="footer-link">{item}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>

                    {/* Cột 4 */}
                    <div className="footer-item col-partner">
                        <Typography className="column-title">LIÊN KẾT</Typography>
                        <List disablePadding>
                            {['Shopee NEU', 'Shopee UEH', 'Shopee TMU'].map((item) => (
                                <ListItem key={item} disablePadding>
                                    <Link className="footer-link">{item}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>

                    {/* Cột 5 */}
                    <div className="footer-item col-app">
                        <Typography className="column-title">TẢI APP</Typography>
                        <Link className="footer-link" style={{display: 'block'}}>Google Play</Link>
                        <Link className="footer-link" style={{display: 'block'}}>App Store</Link>
                    </div>
                </div>
            </Container>

            <Box className="footer-bottom">
                <Typography className="footer-copyright">
                    @2013 - Công ty Cổ phần Đầu tư và Phát triển koolsoft
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;