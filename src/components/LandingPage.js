import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Container>
        <Typography>Enter into Student Info System</Typography>
        <NavLink to="/chat">
          <Button>Enroll Now!</Button>
        </NavLink>
      </Container>
    </div>
  );
}

export default LandingPage;
