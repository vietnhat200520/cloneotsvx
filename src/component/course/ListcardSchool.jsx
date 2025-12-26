import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { coursesData } from '../../data';
import CourseCard from './CourseCard';
import './ListcardSchool.css';

const ListcardSchool = () => {
  
  const neuCourses = coursesData.filter(course => course.school === "neu");


  const groupedCourses = neuCourses.reduce((acc, course) => {
    const branch = course.branch || "Khác";
    if (!acc[branch]) acc[branch] = [];
    acc[branch].push(course);
    return acc;
  }, {});

  
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
       
            <Typography variant="h5" className="branch-title">
              {branchName.toUpperCase()} ({coursesInBranch.length} KHOÁ)
            </Typography>

            {/* Grid hiển thị 4 cột */}
            <Box className="course-grid-root">
              {displayedCourses.map((course) => (
                <Box  key={course.id} className="course-item-root">
                  <CourseCard course={course} />
                </Box>
              ))}
            </Box>

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