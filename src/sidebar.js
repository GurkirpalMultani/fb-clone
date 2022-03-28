import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/Storefront";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import Chat from "@material-ui/icons/Chat";
import user from "@material-ui/icons/VerifiedUser";
import PeopleIcon from "@material-ui/icons/EmojiPeople"
function Sidebar()

{

    return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />                
        <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 ki ma ka bhosda" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Covid-19 ki ma ka bhosda" />
        <SidebarRow Icon={PeopleIcon} title="Covid-19 ki ma ka bhosda" />
        <SidebarRow Icon={ChatIcon} title="Covid-19 ki ma ka bhosda" />
        <SidebarRow Icon={StorefrontIcon} title="Covid-19 ki ma ka bhosda" />
        <SidebarRow Icon={ChatIcon} title="Covid-19 ki ma ka bhosda" />
        <SidebarRow Icon={StorefrontIcon} title="Covid-19 ki ma ka bhosda" />

        </div>
    );

}



export default Sidebar;