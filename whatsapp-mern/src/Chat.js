import React from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css"

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Romm Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Kevin</span>
                    This is the message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Kevin</span>
                    This is the message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Kevin</span>
                    This is the message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input placeholder="Type a message"
                    type="text" />
                    <button type="submit">
                        Send a message
                    </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat