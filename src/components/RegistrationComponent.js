import React from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import "../styles/Registration.css";

const RegistrationComponent = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up-container">
      <div className="form-sign-up-block">
        <div className="form-sign-up-block-title">
          <h1>Register</h1>
        </div>
        <div className="container-form-fields-sign-up">
          <div className="form-field-first-name">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="First Name"
              />
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Last Name"
              />
            </FormControl>
          </div>
          <div className="form-field-email">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Email"
              />
            </FormControl>
          </div>
          <div className="form-field-password">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="form-field-re-enter-password">
            {" "}
            <FormControl
              sx={{
                m: 1,
                width: "38ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Re-enter password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="already-have-account-container">
          <h3>Already a user? </h3>
          <a href="/" style={{ color: "#fff" }}>
            LOG IN
          </a>
        </div>
        <div className="btn-submit">
          {" "}
          <Button
            variant="contained"
            style={{
              float: "right",
              marginRight: "1em",
              marginTop: "1em",
              fontFamily: "Segoe UI",
              fontSize: "16px",
              font: "bold",
              color: "#ffffff",
              backgroundColor: "#A20BFF",
              width: "15ch",
            }}
            href="/"
          >
            SUBMIT
          </Button>
        </div>
      </div>
      <div className="logo">
        <img src="./logo.png" className="image-logo" />
      </div>
    </div>
  );
};

export default RegistrationComponent;
