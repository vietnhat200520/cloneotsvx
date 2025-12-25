import React from 'react';
import { Box, Typography } from '@mui/material';
import { categoriesData } from '../../data'; // Giả sử file data nằm cùng thư mục
import './BannerSchool.css';

const BannerSchool = ({ schoolId }) => {
    // Tìm kiếm dữ liệu trường dựa trên schoolId
    const schoolData = categoriesData.find((item) => item.id === schoolId);

    // Nếu không tìm thấy Id, trả về null hoặc banner mặc định
    if (!schoolData) return null;

    return (
        <Box className="banner-school-root">
            {/* Ảnh banner */}
            <img 
                src={schoolData.image} 
                alt={schoolData.school} 
                className="banner-school-image" 
            />
            
            {/* Lớp phủ màu sáng */}
            <Box className="banner-overlay" />

          
            
        </Box>
    );
};

export default BannerSchool;