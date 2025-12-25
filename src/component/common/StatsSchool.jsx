import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
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

      {/* Sử dụng Box với CSS Grid thay cho Grid MUI */}
      <Box className="stats-grid-custom">
        {statsData.map((item) => (
          <Box className="stat-card" key={item.id}>
            <Box className="icon-wrapper">
              {item.icon}
            </Box>
            <Typography variant="h4" className="stat-value">{item.value}</Typography>
            <Typography variant="body1" className="stat-label">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatsSchool;