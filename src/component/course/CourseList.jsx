// CourseList.jsx
import React, { useState } from "react";
import { Grid, Pagination, Box, Typography } from "@mui/material"; 
import CourseCard from "./CourseCard.jsx";
import './CourseList.css';

// Cấu hình: 3 hàng * 3 cột = 9 thẻ trên mỗi trang
const CARDS_PER_PAGE = 9; 

export default function CourseList({ courses }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCourses = courses.length;
  const totalPages = Math.ceil(totalCourses / CARDS_PER_PAGE); 
  const indexOfLastCard = currentPage * CARDS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
  
  const currentCards = courses.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <Box className="course-list-container">
      <Box className="course-grid">
        {currentCards.map((course) => (
          <div key={course.id} className="grid-item">
            <CourseCard course={course} />
          </div>
        ))}
      </Box>

      {/* PHẦN PHÂN TRANG */}
      {totalCourses > CARDS_PER_PAGE && (
        <div className="pagination-wrapper">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            variant="outlined"
          />
        </div>
      )}
    </Box>
  );
}