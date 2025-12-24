import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Sidebar from "../component/layout/Sidebar.jsx";
import CourseList from "../component/course/CourseList.jsx";
import Search from "../component/common/Search.jsx";
import Footer from "../component/layout/Footer.jsx";
import Banner from "../component/common/Banner.jsx";
import { categoriesData, coursesData, bannerData } from "../data.js";
import  ButtonChat  from "../component/common/ButtonChat.jsx";
import './HomePage.css';

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(coursesData || []);

  return (
    <Box className="homepage-root">
      <Banner slidesData={bannerData} />
      
     
      <Container  classes ={{root: 'mainContainer'}}>
        
        {/* Bên trái: Sidebar (Danh mục) */}
        <Box className="sidebarWrapper">
          <Sidebar categories={categoriesData} />
        </Box>

        {/* Bên phải: Tiêu đề, Search và Danh sách khóa học */}
        <Box className="contentWrapper">
          <Box className="headerSection">
            <h2 className="title">
              Tất cả khóa học <span className="count">({filtered.length} Khóa học)</span>
            </h2>
            <Box className="searchBox">
              <Search
                courses={coursesData}
                query={query}
                onQueryChange={setQuery}
                onResults={setFiltered}
              />
            </Box>
          </Box>

          <CourseList courses={filtered} />
        </Box>
        <Box>
    <ButtonChat link="#">
                Nhắn tin cho ôn thi sinh viên 
              </ButtonChat>
   </Box>
      </Container>

      <Footer />
    </Box>
  );
}