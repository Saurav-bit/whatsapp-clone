import React from "react";
import "../styles/Main-chat.css";
// UI COMPONENTS
import Avatar from '@mui/material/Avatar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';

function App(){
    return(
        <div className="Main-Chat">
            <div className="main-head">
                <Avatar>
                </Avatar>
                <div className="chat-info">
                    <h3>Person Name</h3>
                    <p>Last seen</p>
                </div>
                
                <div className="MHead">
                    <SearchOutlinedIcon />
                    <MoreVertIcon />
                    <AttachFileIcon />


                    
                    
                </div>
            </div>

            <div className="chat-body">
                <p className="chat-msg">
                    <span className="name">
                        message
                    </span>
                    <span>
                        {new Date().toLocaleString()}
                    </span>
                </p>

                <p className="chat-msg chat-recive">
                    <span className="name">
                        message
                    </span>
                    <span>
                        {new Date().toLocaleString()}
                    </span>
                </p>
                <p className="chat-msg">
                    <span className="name">
                        message
                    </span>
                    <span>
                        {new Date().toLocaleString()}
                    </span>
                </p>
                <p className="chat-msg chat-recive">
                    <span className="name">
                        message
                    </span>
                    <span>
                        {new Date().toLocaleString()}
                    </span>
                </p>

                
                




            </div>


            <div className="chat-footer">
            <InsertEmoticonIcon className="icon" style={{paddingRight:"5px" , paddingLeft:"15px"}}/>
            <AttachFileIcon className="icon rotate"/>
            <form>
                <input placeholder="Type a message" type="text" >
                </input>
                <button type="submit"><SendIcon className="icon"/></button>
            </form>

            <MicIcon className="icon"/>
            </div>



            
        </div>
    );

}
export default App;