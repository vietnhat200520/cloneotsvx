import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Sidebar from "../component/layout/Sidebar.jsx";
import CourseList from "../component/course/CourseList.jsx";
import { categoriesData, coursesData } from "../data.js";
import  SchoolName  from "../component/common/SchoolName.jsx";
import  ButtonChat  from "../component/common/ButtonChat.jsx";
import  StatsSchool  from "../component/common/StatsSchool.jsx";
import  CommunitySchool  from "../component/common/CommunitySchool.jsx";
import  FeedbackSchool  from "../component/common/FeedbackSchool.jsx";
import  BannerSchool  from "../component/common/BannerSchool.jsx";
import  ListcardSchool  from "../component/course/ListcardSchool.jsx";
export default function CoursePage() {

  const currentSchoolId = "xaydung";
  return (

    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        gap: 2,
        mt: 4,
        width: "100%",
        px: { xs: 2, sm: 3 },
      }}
    >    <Box><section >
        <StatsSchool />
      </section></Box>
      <Box><CommunitySchool/></Box>
      <Box><FeedbackSchool/></Box>
      {/* Danh mục khóa học (Sidebar) thêm vào bên trái */}
      <Box
        sx={{
          flexShrink: 0,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
        }}
      >
        <Sidebar categories={categoriesData} />
      </Box>
  
      <Box>
      
      {/* Chỉ cần truyền id, component sẽ tự tìm tên "ĐẠI HỌC XÂY DỰNG" */}
      <SchoolName schoolId={currentSchoolId} />
         <BannerSchool schoolId={currentSchoolId} />
      {/* Hiển thị các nội dung khác của trường */}
    </Box>
<Box>
  <ButtonChat link="#">
                Nhắn tin cho ôn thi sinh viên 
              </ButtonChat>
</Box>

      {/* Phần nội dung giữ nguyên như trước */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Danh sách khóa học
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Trang này có thể dùng để hiển thị các khóa học nổi bật hoặc thông tin chi tiết theo nhu cầu riêng.
          </Typography>
        </Box>
        <CourseList courses={coursesData} />
      </Box>
      <Box><ListcardSchool /></Box>
    </Container>
  );
}
