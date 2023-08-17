import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Enter into Student Info System
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "40px" }} item xs={12}>
          <NavLink to="/chat">
            <Button variant="contained" color="primary">
              Enroll Now!
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
