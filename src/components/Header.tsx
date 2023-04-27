import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";

interface props {
  title: string;
  subtitle: string;
}
const Header = (Props: props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        textTransform="uppercase"
        color={colors.gray[100]} 
        fontWeight="bold"
        sx={{ mb: 1 }}
      >
        {Props.title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[500]}>
        {Props.subtitle}
      </Typography>
    </Box>
  );
};

export default Header;