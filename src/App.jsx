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
    fontFamily: ['Arial', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0, // 1 thẻ/hàng (width < 493px)
      sm: 493, // 2 thẻ/hàng (width 493px - 779px)
      md: 780, // 3 thẻ/hàng (width ≥ 780px)
      lg: 1000,
      xl: 1536,
    },
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