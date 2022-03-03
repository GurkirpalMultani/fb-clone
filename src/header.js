import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"

import "./header.css";

import { Avatar, IconButton } from "@material-ui/core";
import Forum from "@material-ui/icons/Forum";

function Header() {
    return (
    <div className="header">
        
 <div className="header__left">
     <img 
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" 
     alt=""
     
    /></div>

 <div className="header__input">
     <SearchIcon />
     <input type="text" />

 </div>
<div className="header__centre">
<div className="header__option">
        <HomeIcon fontSize="large"></HomeIcon>
    </div>
    <div className="header__option">
        <FlagIcon fontSize="large"></FlagIcon>
    </div>
    <div className="header__option">
        <SubscriptionOutlinedIcon fontSize="large"></SubscriptionOutlinedIcon>
    </div>
    <div className="header__option">
        <StorefrontOutlinedIcon fontSize="large"></StorefrontOutlinedIcon>
    </div>
    <div className="header__option">
        <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>
    </div>

</div>   

 <div className="header__right"></div>
<div className="header__info">
  <Avatar></Avatar>
  <h4>Gora</h4>
    </div>


    <IconButton>
        <AddIcon></AddIcon>
    </IconButton>
    
    <IconButton>
        <NotificationsActiveIcon></NotificationsActiveIcon>
    </IconButton>
    
    <IconButton>
        <ForumIcon></ForumIcon>
    </IconButton>
    
    <IconButton>
        <ExpandMoreIcon></ExpandMoreIcon>
    </IconButton>

 </div>
 );
}

export default Header;