import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import './Search.css';

/**
 * Ô tìm kiếm khóa học theo title.
 * - Nhập xong, bấm icon kính lúp mới thực hiện lọc.
 * - Lọc không phân biệt hoa thường, bỏ khoảng trắng đầu/cuối.
 */
export default function Search({
  courses = [],
  query = "",
  onQueryChange,
  onResults,
}) {
  const [localQuery, setLocalQuery] = React.useState(query);

  React.useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const handleSearch = () => {
    const q = localQuery.trim().toLowerCase();
    const filtered = q
      ? courses.filter((c) => c.title.toLowerCase().includes(q))
      : courses;

    onQueryChange?.(localQuery);
    onResults?.(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

    return (
    <TextField
      classes={{ root: 'search-field' }}
      value={localQuery}
      onChange={(e) => setLocalQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Tìm kiếm khoá học..."
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Tìm kiếm"
              onClick={handleSearch}
              edge="end"
              size="small"
            >
              <SearchIcon sx={{ color: "#9aa0a6" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

