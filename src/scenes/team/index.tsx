import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataTeam } from "../../Data/MockData";
import AdminPanelSettingOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      HeaderName: "ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      HeaderName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      HeaderName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      HeaderName: "Age",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      HeaderName: "Phone",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "access",
      HeaderName: "Access Level",
      flex: 1,
      renderCell: (row: any) => {
        console.log(row)
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{backgroundColor: row.row.access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}}
            borderRadius='4px'

          >
            {row.row.access === 'admin' && <AdminPanelSettingOutlinedIcon /> }
            {row.row.access === 'manager' && <LockOpenOutlinedIcon /> }
            {row.row.access === 'user' && <SecurityOutlinedIcon /> }
            <Typography color={colors.gray[100]} sx={{ml: '5px'}}>{row.row.access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box m="20px">
          <Header
            title={"Team Information"}
            subtitle={"Here is Your Lovely Team"}
          />
        <Box m='40px 0 0 0' height='75vh' sx={{'& .MuiDataGrid-root': {border: 'none'} , '& MuiDataGrid-cell' : {
          borderBottom: 'none'
        }, '& .name-column--cell' : {
          color: colors.greenAccent[300]
        },
        '& .MuiDataGrid-columnHeaders' : {
          backgroundColor: colors.blueAccent[700], 
          borderBottom: 'none'
          
        }, 
        '& .MuiDataGrid-virtualScroller' : {
          backgroundColor: colors.primary[400]
        },
        '& .MuiDataGrid-footerContainer' : {
          borderTop: 'none',
          backgroundColor: colors.blueAccent[700]
          
        }}}>
          <DataGrid columns={columns} rows={mockDataTeam} />
        </Box>
      </Box>
    </>
  );
};

export default Team;
