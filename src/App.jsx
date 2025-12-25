// App.jsx
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/layout/Header.jsx';

import HomePage from './page/HomePage.jsx';
import CoursePage from './page/CoursePage.jsx';
import SchoolPage from './page/SchoolPage.jsx';

// Tạo một theme với các breakpoint theo yêu cầu
const theme = createTheme({
  typography: {
    fontFamily: ['SVN-Poppins', 'sans-serif'].join(','),
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CoursePage" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/schools" element={<SchoolPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;