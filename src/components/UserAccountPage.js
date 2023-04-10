import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ListItem } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import CallIcon from "@mui/icons-material/Call";
import ContactsIcon from "@mui/icons-material/Contacts";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

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
              sx={{ marginRight: "15px", fontSize: "1rem" }}
            >
              Change information
            </Button>{" "}
          </div>{" "}
          <Grid item xs={8}>
            <h2 className="name">ALEKSANDRA BLINOVA</h2>
          </Grid>
          <Box sx={{ width: "100%", marginTop: "30px" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <img
                  src={require("../images/image-28-04-22-05-33.jpeg")}
                  className="person-photo"
                />
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "50px" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}> Email</h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h3 style={{ color: "#fff" }}>aleksa-blinova@mail.ru</h3>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}>
                      {" "}
                      Phone number
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h3 style={{ color: "#fff" }}>+79106670607</h3>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}>
                      {" "}
                      University
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h3 style={{ color: "#fff" }}>HSE</h3>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}> Role</h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h3 style={{ color: "#fff" }}>Student</h3>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}>
                      {" "}
                      Degree
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h3 style={{ color: "#fff" }}>Master's degree</h3>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}>
                      {" "}
                      Program
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h3 style={{ color: "#fff" }}>
                      System and Software Engineering
                    </h3>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>{" "}
        </div>
      </div>
    </>
  );
}
export default UserAccountComponent;
