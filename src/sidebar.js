import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/Storefront";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
function Sidebar()

{

    return (
    <div className="sidebar">
        <SidebarRow title="loda lelo"/>                
        <SidebarRow title="hello mother fucker"></SidebarRow>
        <SidebarRow></SidebarRow>
        <SidebarRow></SidebarRow>
        <SidebarRow></SidebarRow>
        <SidebarRow></SidebarRow>

        </div>
    );

}



export default Sidebar;