import { Box, IconButton, useTheme, Typography, colors } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import {
  Menu,
  MenuItem,
  SubMenu,
  Sidebar,
  useProSidebar,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HelpOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
interface props {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: any;
  setSelected: any;
}

const Item = (Props: props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={Props.selected === Props.title}
      style={{ color: `${colors.gray[100]}` }}
      onClick={() => Props.setSelected(Props.title)}
      icon={Props.icon}
    >
      <Typography>{Props.title}</Typography>
      <Link to={Props.to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar } = useProSidebar();
  const [isCollaps, setIsCollaps] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important  `,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar>
        <Menu>
          <MenuItem>
            {!isCollaps && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  Admin
                </Typography>
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!isCollaps && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                <img
                  src="./user.jpg"
                  alt="User Profile"
                  width="80px"
                  height="80px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.gray[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Mohd Aman
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin Owner
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu Items */}
          <Box padding={isCollaps ? undefined : "10px"}>
            <Item
              title={"Dashboard"}
              to={"/"}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h6" color={colors.gray[300]} sx={{m: '15px 0 5px 20px'}}>
              Data

            </Typography>
            <Item
              title={"Manage Team"}
              to={"/team"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Invoices Balance"}
              to={"/invoice"}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Profile Form"}
              to={"/form"}
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
