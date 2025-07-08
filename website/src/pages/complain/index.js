import React from 'react'

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockComplainRegistered } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/Header";

const Complain = () => {

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
      field: "cnic",
      headerName: "CNIC #",
      flex: 1,
    },
    
    {
      field: "number",
      headerName: "Number Plate",
      flex: 1,
    },

    {
      field: "model",
      headerName: "Model",
      flex: 1,
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    
  ];


  return (
     <Box m="20px">
      <Header title="COMPLAIN" subtitle="Managing the complains registered against stolen of car" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockComplainRegistered} columns={columns} />
      </Box>
    </Box>
  )
}

export default Complain