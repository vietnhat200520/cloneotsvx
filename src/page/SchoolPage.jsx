import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../component/layout/Header.jsx";
import BannerSchool from "../component/common/BannerSchool.jsx";
import SchoolName from "../component/common/SchoolName.jsx";
import Search from "../component/common/Search.jsx";
import ListcardSchool from "../component/course/ListcardSchool.jsx";
import FeedbackSchool from "../component/common/FeedbackSchool.jsx";
import StatsSchool from "../component/common/StatsSchool.jsx";
import CommunitySchool from "../component/common/CommunitySchool.jsx";
import Footer from "../component/layout/Footer.jsx";
import ButtonChat from "../component/common/ButtonChat.jsx";
import { coursesData } from "../data.js";
import "./SchoolPage.css";
import "../component/course/ListcardSchool.css";
export default function SchoolPage() {
const SCHOOL_ID = "neu";

  const [searchResults, setSearchResults] = useState(
    coursesData.filter((c) => c.school === SCHOOL_ID)
  );
  const [query, setQuery] = useState("");

  return (
    <Box className="schoolpage-root">
      <Header />
      
      <BannerSchool schoolId={SCHOOL_ID} />

      <Box className="schoolpage-nameandsearch">
        <SchoolName schoolId={SCHOOL_ID} />
        <Box className="schoolpage-search">
          <Search
            courses={coursesData.filter((c) => c.school === SCHOOL_ID)}
            query={query}
            onQueryChange={setQuery}
            onResults={setSearchResults}
          />
        </Box>
      </Box>

      <Box className="schoolpage-section">
        <ListcardSchool />
      </Box>

      <Box className="schoolpage-section">
        <FeedbackSchool />
      </Box>

      <Box className="schoolpage-section">
        <StatsSchool />
      </Box>

      <Box className="schoolpage-section">
        <CommunitySchool />
      </Box>

      <Footer />

      <ButtonChat link="#">
        Nhắn tin cho ôn thi sinh viên
      </ButtonChat>
    </Box>
  );

 
}