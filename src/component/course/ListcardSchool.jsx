import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { coursesData } from '../../data';
import CourseCard from './CourseCard';
import './ListcardSchool.css';

const ListcardSchool = () => {
  // 1. Lọc dữ liệu trường NEU
  const neuCourses = coursesData.filter(course => course.school === "neu");

  // 2. Nhóm dữ liệu theo Branch
  const groupedCourses = neuCourses.reduce((acc, course) => {
    const branch = course.branch || "Khác";
    if (!acc[branch]) acc[branch] = [];
    acc[branch].push(course);
    return acc;
  }, {});

  // 3. State quản lý số lượng hiển thị cho từng Branch
  // Cấu trúc: { "Kế toán": 8, "Kinh tế vi mô": 8 }
  const [visibleCounts, setVisibleCounts] = useState(
    Object.keys(groupedCourses).reduce((acc, key) => ({ ...acc, [key]: 8 }), {})
  );

  const handleLoadMore = (branch) => {
    setVisibleCounts(prev => ({
      ...prev,
      [branch]: prev[branch] + 8
    }));
  };

  return (
    <Box className="list-card-section">
      {Object.keys(groupedCourses).map((branchName) => {
        const coursesInBranch = groupedCourses[branchName];
        const visibleLimit = visibleCounts[branchName];
        const displayedCourses = coursesInBranch.slice(0, visibleLimit);

        return (
          <Box key={branchName} className="branch-group">
            {/* Tiêu đề Branch */}
            <Typography variant="h5" className="branch-title">
              {branchName.toUpperCase()} ({coursesInBranch.length} KHOÁ)
            </Typography>

            {/* Grid hiển thị 4 cột */}
            <Grid container spacing={3} classes={{ root: 'course-grid-root' }}>
              {displayedCourses.map((course) => (
                <Grid item xs={12} sm={6} md={3} key={course.id} classes={{ root: 'course-item-root' }}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>

            {/* Nút Xem thêm */}
            {visibleLimit < coursesInBranch.length && (
              <Box className="load-more-wrapper">
                <Button 
                  variant="outlined" 
                  onClick={() => handleLoadMore(branchName)}
                  classes={{ root: 'btn-load-more-root' }}
                >
                  Xem thêm
                </Button>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ListcardSchool;