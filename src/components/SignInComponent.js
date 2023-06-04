import React from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "../styles/SignIn.css";

const SignInComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in-container">
      <div className="form-sign-in-block">
        <div className="form-sign-in-block-title">
          <h1>Log In</h1>
        </div>
        <div className="container-form-fields-sign-in">
          <div className="form-field-password-sign-in">
            {" "}
            <FormControl
              sx={{
                m: 5,
                width: "32ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
            >
              <TextField id="filled-basic" label="Email" variant="filled" />
            </FormControl>
          </div>
          <div className="form-field-password-sign-in">
            {" "}
            <FormControl
              sx={{
                m: 2,
                width: "32ch",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              variant="outlined"
            >
              <TextField id="filled-basic" label="Password" variant="filled" />
            </FormControl>
          </div>
        </div>
        <div className="already-have-account-container-sign-in">
          <h3>Don’t have an account? </h3>
          <a href="/register" style={{ color: "#fff" }}>
            REGISTRATE
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
            href="/calendar"
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

export default SignInComponent;
