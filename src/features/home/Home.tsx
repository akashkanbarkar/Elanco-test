import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../app/component/Card";
import { heading } from "../../data/homeHeading";
import "./home.css";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          About Application :
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {heading}
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <div className="box-container">
          <Card
            linkName="Click here"
            link="/applications"
            about={heading}
            name="Application"
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="box-container">
          <Card
            linkName="Click here"
            link="/resources"
            about={heading}
            name="Resources"
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
