import React from "react";
import "../styles/sidebar.css"

import SideChat from "./SideChat";

import Avatar from '@mui/material/Avatar';

import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function App(){
    return(
        <div className="sidebar">
            <div className="side-head">
                <Avatar sx={{ bgcolor: "white"  }} style={{color:"black"}}>SH
                </Avatar>
                <div className="RHead">
                    <DonutLargeIcon style={{color:"white"}} />
                    <ChatIcon style={{color:"white"}} />
                    <MoreVertIcon style={{color:"white"}}/>
                </div>
            </div>

            <div className="sideSearch" >
                <div className="search">
                    <SearchOutlinedIcon style={{color: "#4e6e60"}}/>
                    <input placeholder="Search a chat" />

                </div>
            </div>
            <div className="SideChat">
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
               
                

            </div>


                   
        </div>
    );

}
export default App;