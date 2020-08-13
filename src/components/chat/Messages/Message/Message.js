import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';
import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
    // msgdiv: {
    //     // color: theme.palette.common.black,
    //     display: 'flex',
    //     flexFlow: 'column',
    //     flex: '1 1 auto',
    //     // width: '100%',
    // },
    // timestampText: {
    //     color: `${grey[900]}`,
    //     float: 'right',
    // }
}));

export default function Message(props){
    const classes = useStyles();
    const { message, name } = props;

    let isSentByCurrentUser = message.senderId === localStorage.getItem("auth-token");

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{localStorage.getItem("displayName")}</p>
                    <div className="messageBox backgroundBlue">
                        <div>

                        </div>
                        <p className="messageText colorWhite">{ReactEmoji.emojify(message.content)}</p>
                        {/*<p className={classes.timestampText}>{message.timestamp}</p>*/}
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
