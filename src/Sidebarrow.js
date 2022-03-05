import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarRow.css";


function SidebarRow({ src, Icon, title}) {

  return (
    <div className="SidebarRow">
  {src && <Avatar src={src}></Avatar>}
  {Icon && <Icon></Icon>}
  
      <h4>{title}</h4>
      {/* <SidebarRow></SidebarRow>
      <SidebarRow></SidebarRow>
      <SidebarRow></SidebarRow>
      <SidebarRow></SidebarRow>
      <SidebarRow></SidebarRow>
       */}
      </div>
  )
}
export default SidebarRow;