import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { categoriesData } from '../../data'; // Đường dẫn tới file data.js

const SchoolName = ({ schoolId }) => {
  // Tìm dữ liệu trường dựa trên id truyền vào
  const university = categoriesData.find((item) => item.id === schoolId);

  // Nếu không tìm thấy id, trả về null hoặc thông báo lỗi
  if (!university) return null;

  return (
    <Box sx={{ display: 'inline-block', my: 3 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        {/* Icon mũ cử nhân */}
        <SchoolIcon sx={{ color: '#e31e24', fontSize: { xs: 30, md: 40 } }} />
        
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: '#e31e24',
              fontFamily: 'SVN-Poppins !important',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '3px solid #e31e24', // Đường gạch chân đỏ đậm
              pb: 0.5,
              lineHeight: 1.2
            }}
          >
            {university.school}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default SchoolName;