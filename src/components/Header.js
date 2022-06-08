import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, Tab, Tabs } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,97,121,0.9598039899553571) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Story Blog</Typography>
        <Box display="flex">
          <Tabs value={0}>
            <Tab label="All Blog Posts" />
            <Tab label="My Blog Posts" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button variant="contained" sx={{ margin: 1, borderRadius: 2 }}>
            Login
          </Button>
          <Button variant="contained" sx={{ margin: 1, borderRadius: 2 }}>
            SignUp
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
