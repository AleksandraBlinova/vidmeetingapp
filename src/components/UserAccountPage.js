import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import AppBarComponent from "./AppBar";
import "../styles/Users.css";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

function UserAccountComponent(props) {
  const [currentUserEmail, setcurrentUserEmail] = React.useState(
    localStorage.getItem("currentUserEmail")
  );
  const [pressedChange, setPressedChange] = React.useState(true);

  const handleChangePressed = () => {
    setPressedChange(!pressedChange);
  };

  const [email, setEmail] = React.useState(
    localStorage.getItem("currentUserEmail")
  );

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [phone, setPhone] = React.useState(
    localStorage.getItem("currentUserPhone")
  );

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const [image, setImage] = React.useState(
    require("../images/image-28-04-22-05-33.jpeg")
  );

  const [imageHadi, setImageHadi] = React.useState(
    require("../images/saleh_h.m..jpg")
  );

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
    console.log(event);
  };

  return (
    <>
      <div className="user-account-container">
        <div className="app-bar">
          {" "}
          <AppBarComponent />
        </div>
        {currentUserEmail == "blinova@gmail.com" && (
          <div className="user-info-container">
            {pressedChange && (
              <div className="user-btns">
                {" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ marginRight: "15px", fontSize: "1rem" }}
                  onClick={handleChangePressed}
                >
                  Change information
                </Button>{" "}
              </div>
            )}
            {!pressedChange && (
              <div className="user-btns">
                {" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ marginRight: "15px", fontSize: "1rem" }}
                  onClick={handleChangePressed}
                >
                  Save information
                </Button>{" "}
              </div>
            )}

            <Grid item xs={8}>
              <h2 className="name">ALEKSANDRA BLINOVA</h2>
            </Grid>
            {!pressedChange && (
              <div class="container-file-user-photo">
                <label for="files" class="label-file-user-photo">
                  Select Image
                </label>
                <input
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                />
              </div>
            )}
            <Box sx={{ width: "100%", marginTop: "30px" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {" "}
                <Grid item xs={6}>
                  <img
                    alt="preview image"
                    src={image}
                    className="person-photo"
                  />
                </Grid>
                <Grid item xs={6} sx={{ marginTop: "0px" }}>
                  {pressedChange && (
                    <>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <h4 style={{ color: "#fff", fontWeight: "400" }}>
                            {" "}
                            Email
                          </h4>
                        </Grid>
                        <Grid item xs={6}>
                          <h3 style={{ color: "#fff" }}>{email}</h3>
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
                          <h3 style={{ color: "#fff" }}>{phone}</h3>
                        </Grid>
                      </Grid>
                    </>
                  )}
                  {!pressedChange && (
                    <>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <h4 style={{ color: "#fff", fontWeight: "400" }}>
                            {" "}
                            Email
                          </h4>
                        </Grid>
                        <Grid item xs={6}>
                          {" "}
                          <CssTextField
                            label="Email"
                            id="custom-css-outlined-input"
                            sx={{ width: "300px" }}
                            onChange={handleChangeEmail}
                          />
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
                          {" "}
                          <CssTextField
                            label="Phone"
                            id="custom-css-outlined-input"
                            sx={{ width: "300px" }}
                            onChange={handleChangePhone}
                          />
                        </Grid>
                      </Grid>
                    </>
                  )}
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
                      <h4 style={{ color: "#fff", fontWeight: "400" }}>
                        {" "}
                        Role
                      </h4>
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
            </Box>
          </div>
        )}
        {currentUserEmail == "hadisaleh@gmail.com" && (
          <div className="user-info-container">
            {pressedChange && (
              <div className="user-btns">
                {" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ marginRight: "15px", fontSize: "1rem" }}
                  onClick={handleChangePressed}
                >
                  Change information
                </Button>{" "}
              </div>
            )}
            {!pressedChange && (
              <div className="user-btns">
                {" "}
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ marginRight: "15px", fontSize: "1rem" }}
                  onClick={handleChangePressed}
                >
                  Save information
                </Button>{" "}
              </div>
            )}

            <Grid item xs={8}>
              <h2 className="name">HADI SALEH</h2>
            </Grid>
            {!pressedChange && (
              <div class="container-file-user-photo">
                <label for="files" class="label-file-user-photo">
                  Select Image
                </label>
                <input
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                />
              </div>
            )}
            <Box sx={{ width: "100%", marginTop: "30px" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {" "}
                <Grid item xs={6}>
                  <img
                    alt="preview image"
                    src={imageHadi}
                    className="person-photo"
                  />
                </Grid>
                <Grid item xs={6} sx={{ marginTop: "0px" }}>
                  {pressedChange && (
                    <>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <h4 style={{ color: "#fff", fontWeight: "400" }}>
                            {" "}
                            Email
                          </h4>
                        </Grid>
                        <Grid item xs={6}>
                          <h3 style={{ color: "#fff" }}>{email}</h3>
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
                          <h3 style={{ color: "#fff" }}>{phone}</h3>
                        </Grid>
                      </Grid>
                    </>
                  )}
                  {!pressedChange && (
                    <>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <h4 style={{ color: "#fff", fontWeight: "400" }}>
                            {" "}
                            Email
                          </h4>
                        </Grid>
                        <Grid item xs={6}>
                          {" "}
                          <CssTextField
                            label="Email"
                            id="custom-css-outlined-input"
                            sx={{ width: "300px" }}
                            onChange={handleChangeEmail}
                          />
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
                          {" "}
                          <CssTextField
                            label="Phone"
                            id="custom-css-outlined-input"
                            sx={{ width: "300px" }}
                            onChange={handleChangePhone}
                          />
                        </Grid>
                      </Grid>
                    </>
                  )}
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
                      <h4 style={{ color: "#fff", fontWeight: "400" }}>
                        {" "}
                        Role
                      </h4>
                    </Grid>
                    <Grid item xs={6}>
                      <h3 style={{ color: "#fff" }}>Professor</h3>
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
                      <h3 style={{ color: "#fff" }}>
                        Candidate of Sciences (PhD)
                      </h3>
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
                        Associate Professor
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
            </Box>
          </div>
        )}
      </div>
    </>
  );
}
export default UserAccountComponent;
