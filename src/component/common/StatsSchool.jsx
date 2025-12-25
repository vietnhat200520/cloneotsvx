import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Bạn có thể thay bằng icon tương ứng
import GroupsIcon from '@mui/icons-material/Groups';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './StatsSchool.css';

const statsData = [
  { id: 1, value: "152", label: "Khóa Luyện", icon: <SchoolIcon /> },
  { id: 2, value: "1.8k", label: "9-10 Điểm", icon: <StarBorderIcon /> },
  { id: 3, value: "10k+", label: "Feedback", icon: <ChatBubbleOutlineIcon /> },
  { id: 4, value: "36k", label: "Học Viên", icon: <GroupsIcon /> },
];

const StatsSchool = () => {
  return (
    <Box className="stats-container">
      <Box className="stats-header">
        <Typography variant="h5" className="stats-title-top">ÔN THI SINH VIÊN</Typography>
        <Typography variant="h4" className="stats-title-main">THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN</Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" classes={{ root: 'stats-grid-root' }}>
        {statsData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id} classes={{ root: 'stats-item-root' }}>
            <Box className="stat-card">
              <Box className="icon-wrapper">
                {item.icon}
              </Box>
              <Typography variant="h4" className="stat-value">{item.value}</Typography>
              <Typography variant="body1" className="stat-label">{item.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSchool;