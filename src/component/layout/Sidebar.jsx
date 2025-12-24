import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import './Sidebar.css';
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Sidebar({ categories }) {
  const [openMain, setOpenMain] = useState(false);          // mở/đóng menu chính
  const [openSub, setOpenSub] = useState({});               // mở submenu theo id
  const [active, setActive] = useState(null);               // mục active

  const toggleMain = () => setOpenMain(!openMain);

  const toggleSub = (id) => {
    setOpenSub((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClickCategory = (id, hasSubmenu) => {
    setActive(id);

    if (hasSubmenu) {
      toggleSub(id);
    }
  };

  return (
    <aside>
      <Box className="sidebar">
        {/* BUTTON CHÍNH */}
        <Button
          onClick={toggleMain}
          fullWidth
          classes={{ root: 'sidebar-button' }}
        >
          <MenuIcon sx={{ mr: 1 }} />
          Danh mục khóa học
        </Button>

        
        <Collapse in={openMain}>
          <List className="sidebar-list">
            {categories.map((cat) => (
              <Box key={cat.id}>
                {/* ITEM CHA */}
                <ListItemButton
                  onClick={() =>
                    handleClickCategory(cat.id, cat.branch?.length > 0)
                  }
                  sx={{
                    background:
                      active === cat.id ? "rgba(0,0,0,0.05)" : "transparent",
                  }}
                  className={active === cat.id ? 'list-item-active' : ''}
                >
                  <ListItemText
                    primary={cat.school}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  />

                  {cat.branch?.length > 0 && (
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: openSub[cat.id] ? "rotate(180deg)" : "none",
                          transition: "0.3s",
                        }}
                      />
                    </ListItemIcon>
                  )}
                </ListItemButton>

                {/* SUBMENU */}
                {cat.branch?.length > 0 && (
                  <Collapse in={openSub[cat.id]}>
                    <List className="submenu" sx={{ pl: 3 }}>
                      {cat.branch.map((item, index) => {
                        const subId = `${cat.id}-${index}`;

                        return (
                          <ListItemButton
                            key={subId}
                            onClick={() => setActive(subId)}
                            sx={{
                              background:
                                active === subId
                                  ? "rgba(0,0,0,0.05)"
                                  : "transparent",
                            }}
                            className={active === subId ? 'list-item-active' : ''}
                          >
                            <ListItemText
                              primary={item}
                              primaryTypographyProps={{
                                fontSize: "14px",
                              }}
                            />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                )}

                <Divider />
              </Box>
            ))}
          </List>
        </Collapse>
      </Box>
    </aside>
  );
}
