import * as React from "react";
import AppBarComponent from "../../navbar/AppBar";
import "./UserAccountComponent.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UserAccountComponent() {
  return (
    <>
      <div className="user-account-container">
        <div className="app-bar">
          {" "}
          <AppBarComponent />
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={6}>
              <div className="user-container">
                <div className="options">
                  <p className="options-p">Options</p>
                </div>

                <div className="user-menu">
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Events</p>
                  </div>
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Contacts</p>
                  </div>
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Users</p>
                  </div>
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Email</p>
                  </div>
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Notifications</p>
                  </div>
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Chat</p>
                  </div>
                  <div className="user-menu-item">
                    <p className="user-menu-item-p">Calls</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="user-info-container">
                <div className="user-btns">
                  {" "}
                  <Button variant="outlined" color="secondary">
                    Change password
                  </Button>
                  <img />
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
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
export default UserAccountComponent;
