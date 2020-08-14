import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';
import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
    time: {
        fontSize: 10
    }
}));

export default function Message(props){
    const classes = useStyles();
    const { message, name } = props;

    let isSentByCurrentUser = message.senderId === localStorage.getItem("auth-token");

    const unixToTime= (unix) => {
        let unix_timestamp = unix
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1); //already in millisecond
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let month = months[date.getMonth()];
        let today = date.getDay();
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();

        let formattedTime = ( today + ' ' + month + ' ' + ((hours<10)? '0':'') + hours+  ':' + minutes.substr(-2) );

        return formattedTime;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">

                    <p className="sentText pr-10">
                        {localStorage.getItem("displayName")}
                        <br/>
                        {unixToTime(message.timestamp)}
                    </p>
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
                    <p className="sentText pl-10">
                        {name}
                        <br/>
                        {unixToTime(message.timestamp)}
                    </p>
                </div>
            )
    );
};
