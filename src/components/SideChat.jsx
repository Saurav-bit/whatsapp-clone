import React from 'react'
import "../styles/SideChat.css"

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Avatar from '@mui/material/Avatar';
export default function SideChat() {
    return (
        <div className='chat-color'>
        <div className='chat'>
            {/* <AccountCircleOutlinedIcon classname="dp"/> */}
            <Avatar />
            <div className='info'>
                <h2>
                    Person Name
                </h2>
                <p>
                    hlo people
                </p>
            </div>
        </div>
        </div>
    )
}
