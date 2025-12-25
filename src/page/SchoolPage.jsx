import React, { useState } from "react";
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

const SCHOOL_ID = "neu";

export default function SchoolPage() {
  const [searchResults, setSearchResults] = useState(
    coursesData.filter((c) => c.school === SCHOOL_ID)
  );
  const [query, setQuery] = useState("");

  return (
    <div className="schoolpage-root">
      <Header />
      
      <BannerSchool schoolId={SCHOOL_ID} />

      <div className="schoolpage-nameandsearch">
        <SchoolName schoolId={SCHOOL_ID} />
        <div className="schoolpage-search">
          <Search
            courses={coursesData.filter((c) => c.school === SCHOOL_ID)}
            query={query}
            onQueryChange={setQuery}
            onResults={setSearchResults}
          />
        </div>
      </div>

      <div className="schoolpage-section">
        <ListcardSchool />
      </div>

      <div className="schoolpage-section">
        <FeedbackSchool />
      </div>

      <div className="schoolpage-section">
        <StatsSchool />
      </div>

      <div className="schoolpage-section">
        <CommunitySchool />
      </div>

      <Footer />

      <ButtonChat link="#">
        Nhắn tin cho ôn thi sinh viên
      </ButtonChat>
    </div>
  );
}