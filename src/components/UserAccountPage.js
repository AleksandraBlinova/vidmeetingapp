import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AppBarComponent from "./AppBar";
import "../styles/Users.css";

function UserAccountComponent() {
  return (
    <>
      <div className="user-account-container">
        <div className="app-bar">
          {" "}
          <AppBarComponent />
        </div>

        <div className="user-info-container">
          <div className="user-btns">
            {" "}
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginRight: "15px" }}
            >
              Change password
            </Button>{" "}
            <img style={{ width: "40px", height: "40px" }} src="./icon.png" />
          </div>{" "}
          <Grid item xs={8}>
            <img
              src="./img.png"
              style={{
                width: "180px",
                height: "180px",
                marginTop: "80px",
              }}
            />
            <h2>Aleksandra Blinova</h2>
          </Grid>
          <Box sx={{ "& > :not(style)": { m: 3 } }}>
            <TextField
              id="outlined-password-input"
              label="Full name"
              type="password"
              autoComplete="current-password"
            />

            <TextField
              id="outlined-password-input"
              label="Phone"
              type="password"
              autoComplete="current-password"
            />

            <TextField
              id="outlined-password-input"
              label="Email"
              type="password"
              autoComplete="current-password"
            />
          </Box>
        </div>
      </div>
    </>
  );
}
export default UserAccountComponent;
