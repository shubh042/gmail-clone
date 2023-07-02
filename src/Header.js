import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
import { auth } from "./firebase.js";
import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { Apps, ArrowDropDown, HelpOutline, Notifications, Search, Menu } from "@mui/icons-material";


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
      </div>
      <div className="header-middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header-inputCaret" />
      </div>
      <div className="header-right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;