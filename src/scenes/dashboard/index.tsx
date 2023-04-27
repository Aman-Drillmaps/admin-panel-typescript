import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title={"Dashboard"} subtitle={"Welcome To Dashboard"} />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
