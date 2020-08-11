import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../main-page/navbar';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import cyan from "@material-ui/core/colors/cyan";
import DisableMatch from "../disable-match/disable-match";
import user_img from "../../images/user (3).png";
import close_img from "../../images/close.png";

import TextContainer from './TextContainer/TextContainer';
import Messages from './Messages/Messages';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';

import './Chat.css';


const useStyles = makeStyles((theme) => ({
    canvas: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: 'green',
        height: '100vh'
    },
    slotdiv:{
        height: 90,
        // width: 250,
        left: 0,
        top: 0,
        margin: theme.spacing(0),
        backgroundColor: 'white',
        borderBottom: '2px solid grey',
        // borderRight: '2px solid grey',
        paddingTop: 0,

    },
    icon: {
        margin: theme.spacing(1, 1, 1, 0),
        width: '30px'
    },
    hovereffect: {
        '&:hover': {
            backgroundColor: `${cyan[100]}`,
            // borderRight: '2px solid grey',
        },

    },
    closeBtn: {
        height: 88,
        width: 50,
        marginLeft: 20,
        marginRight: 0,
        backgroundColor: '#5F7D95',
    },
    closeicon: {
      height: 20,
    },


}));

const anonymous = [
    {
        id: "001",
        name: 'Anonymous 1',
        isNew: true,
    },
    {
        id: "002",
        name: 'Anonymous 2',
        isNew: false,
    },
    {
        id: "003",
        name: 'Anonymous 3',
        isNew: false,
    },
]

let socket;

export default function Chat() {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    /* save button */
    const [saveState, setSaveState] = React.useState({
        isSaved: false
    });

    function handleSave(event) {
        setSaveState({
            isSaved: true,
        });
        console.log(saveState.isSaved)
    }

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            {/*<div className={classes.canvas}>*/}


            <div className="outerContainer">
                <Navbar/>
                <div className='listContainer'>
                    {anonymous.map((slot) => (
                        <div className={`${classes.slotdiv} ${classes.hovereffect}` }>
                            <Grid container direction="row" justify="flex-end" alignItems="center">
                                <Grid item>
                                    <img className={classes.icon} src={user_img}/>
                                </Grid>
                                <Grid item>
                                    <p className={classes.timetitle}>{slot.name}</p>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.closeBtn}><img className={classes.closeicon} src={close_img}/></Button>
                                </Grid>
                            </Grid>
                        </div>
                    ))}

                </div>
                <div className="container">
                    <InfoBar room={room} />
                    <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
                <TextContainer users={users}/>
            </div>

            <DisableMatch isMatch={true}/>

        </React.Fragment>
    );

}