import React from "react";
import AppBarComponent from "../../navbar/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Options = () => {
  return (
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
      </Grid>
    </Box>
  );
};

export default Options;
