import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";

interface props {
  title: string;
  subtitle: string;
  isButton: boolean;
}
const Header = (Props: props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb={"30px"}>
      <Box display="flex" justifyContent="space-between">
        <Box>
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
        <Box>
          {Props?.isButton && (
            <Button
              variant="contained"
              id="Button"
              sx={{ backgroundColor: colors.greenAccent[400] }}
            >
              +Add Contact
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
