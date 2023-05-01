import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./features/home/Home";
import Applications from "./features/applications/Applications";
import Resources from "./features/resources/Resources";
import "./App.css";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" component="div">
              Elanco.com
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Box>
  );
}

export default App;
