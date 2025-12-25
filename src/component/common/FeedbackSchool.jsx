import React, { useState } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import { feedbackData } from '../../data';
import './FeedbackSchool.css';

const FeedbackSchool = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Hiển thị cố định 4 ảnh trên 1 hàng (1 trang)

  const handleChangePage = (event, value) => {
    setPage(value);
    // Cuộn nhẹ lên đầu phần feedback khi chuyển trang
    const section = document.querySelector('.feedback-section');
    if (section) {
      window.scrollTo({ behavior: 'smooth', top: section.offsetTop - 50 });
    }
  };

  // Logic phân trang
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feedbackData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box className="feedback-section">
      <Typography variant="h4" className="feedback-title">
        PHẢN HỒI CỦA HỌC VIÊN KỲ TRƯỚC
      </Typography>

      {/* Thay thế Grid bằng CSS Grid */}
      <Box className="feedback-grid-custom">
        {currentItems.map((item) => (
          <Box className="feedback-item-custom" key={item.id}>
            <Box className="feedback-card">
              <img src={item.image} alt={`Feedback ${item.id}`} className="feedback-img" />
            </Box>
          </Box>
        ))}
      </Box>

      <Box className="pagination-wrapper">
        <Pagination 
          count={Math.ceil(feedbackData.length / itemsPerPage)} 
          page={page}
          onChange={handleChangePage}
          className="pagination-root" // Sử dụng className trực tiếp
          shape="circular"
        />
      </Box>
    </Box>
  );
};

export default FeedbackSchool;