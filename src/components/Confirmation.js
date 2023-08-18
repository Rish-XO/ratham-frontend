import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function Confirmation() {
  const name = useSelector((state) => state.chatHandler.name);
  const age = useSelector((state) => state.chatHandler.age);
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
          Your name {name} aged {age} has been added to student system. You may now exit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Confirmation;
