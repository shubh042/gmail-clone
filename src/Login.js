import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
          alt="logo"
        />
        <Button variant="outlined"  color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;