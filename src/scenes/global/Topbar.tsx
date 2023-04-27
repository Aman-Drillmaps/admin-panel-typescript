import React from "react";
import { Box, IconButton, colors, useTheme, TextField } from "@mui/material";
import { useContext } from "react";
import { ColorModeContax } from "../../Theme";
import { tokens } from "../../Theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import SettingsdOutlinedIcon from "@mui/icons-material/Settings";
import PersonOutlinedIcon from "@mui/icons-material/Person";
import SearchOutlinedIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ColorMode = useContext(ColorModeContax);
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search Bar */}
        <Box
          display="flex"
          sx={{ backgroundColor: colors.primary[400], borderRadius: "3px" }}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchOutlinedIcon />
          </IconButton>
        </Box>
        {/* Icons Section */}
        <Box display="flex">
          <IconButton
            sx={{ p: 1 }}
            onClick={ColorMode.toggleColorMode} 
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton type="button" sx={{ p: 1 }}>
            <NotificationAddOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: 1 }}>
            <SettingsdOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: 1 }}>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
