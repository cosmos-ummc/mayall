import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message, name}) => {
    let isSentByCurrentUser = message.senderId === localStorage.getItem("auth-token");

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{localStorage.getItem("displayName")}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(message.content)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(message.content)}</p>
                    </div>
                    <p className="sentText pl-10 ">{name}</p>
                </div>
            )
    );
};

export default Message;
