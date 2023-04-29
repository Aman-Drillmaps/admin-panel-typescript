import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Box m="20px">
          <Header title={"Dashboard"} subtitle={"Welcome To Dashboard"} isButton={false} />
      </Box>
    </>
  );
};

export default Dashboard;
