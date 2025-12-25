import React, { useState } from 'react';
import { Box, Typography, Grid, Pagination } from '@mui/material';
import { feedbackData } from '../../data';
import './FeedbackSchool.css';

const FeedbackSchool = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Hiển thị 4 ảnh mỗi trang như yêu cầu

  const handleChangePage = (event, value) => {
    setPage(value);
    // Cuộn nhẹ lên đầu phần feedback khi chuyển trang
    window.scrollTo({ behavior: 'smooth', top: event.target.offsetTop - 100 });
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

      <Grid container spacing={2} classes={{ root: 'feedback-grid-root' }}>
        {currentItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id} classes={{ root: 'feedback-item-root' }}>
            <Box className="feedback-card">
              <img src={item.image} alt={`Feedback ${item.id}`} className="feedback-img" />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box className="pagination-wrapper">
        <Pagination 
          count={Math.ceil(feedbackData.length / itemsPerPage)} 
          page={page}
          onChange={handleChangePage}
          classes={{ root: 'pagination-root' }}
        />
      </Box>
    </Box>
  );
};

export default FeedbackSchool;