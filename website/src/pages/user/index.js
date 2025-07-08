import React from 'react'

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockCarRegistered } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/Header";

const User = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
   
    {
      field: "cnic",
      headerName: "National ID",
      flex: 1,
    },
    
    {
      field: "number",
      headerName: "Car Number Plate",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="User Management" subtitle="Managing Registered Vehicle Owners" />
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: 'white',
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#212c42',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: '#111111',
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: '#212c42',
          },
          "& .MuiCheckbox-root": {
            color: ` !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockCarRegistered} columns={columns} />

      </Box>
    </Box>
  )
}

export default User