import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../main-page/navbar';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import cyan from "@material-ui/core/colors/cyan";
import DisableMatch from "../disable-match/disable-match";
import user_img from "../../images/user (3).png";
import close_img from "../../images/close.png";
import Messages from './Messages/Messages';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import './Chat.css';
import {block, createMessage, findMatch, getChatRooms, getMessages} from "../../api/chat";
import BlockUserModal from "../block-user-modal/block-user-modal";
import Pusher from "pusher-js";
import FoundMatchModal from "../found-match-modal/found-match-modal";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    outerContainer: {
        display: 'flex',
        flexFlow: 'row',
        flex: '1 1 auto',
        height: '100vh'
    },
    canvas: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: 'green',
        height: '100vh'
    },
    slotdiv: {
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
        height: 80,
        width: 50,
        marginTop: 3,
        marginLeft: 30,
        marginRight: 0,
        backgroundColor: '#5F7D95',
    },
    closeicon: {
        height: 20,
    },
}));

export default function Chat() {
    const classes = useStyles();

    const [chatRooms, setChatRooms] = useState([]);
    const [name, setName] = useState('');
    const [nameToBlock, setNameToBlock] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [idsToBlock, setIdsToBlock] = useState([]);
    const [isOpenMatch, setIsOpenMatch] = useState(false);

    const navChatPage = async (event) => {
        event.preventDefault();
        window.location.reload(true);
    };

    const getEverything = () => {
        // get all chatrooms
        getChatRooms().then((c) => {
            c.forEach((item, index) => {
                if (localStorage.getItem("activeChatRoomId") === "" && index === 0) {
                    // if no active chatroom, set the first as active and get everything needed
                    setName(item.name);
                    localStorage.setItem("activeChatRoomId", item.id);
                    // get messages by chatroom
                    getMessages(item.id).then((m) => {
                        setMessages(m);
                    });
                }
                // if the current room is active, get all its messages
                if (localStorage.getItem("activeChatRoomId") === item.id) {
                    setName(item.name);
                    // get messages by chatroom
                    getMessages(item.id).then((m) => {
                        setMessages(m);
                    });
                }
            });
            setChatRooms(c);
        });
    };

    const closeBlockModal = () => {
        setIsOpen(false);
    };

    const blockUsers = () => {
        block(idsToBlock).then(() => {
            setIsOpen(false);
        });
    };

    const blockChatRoomModal = (event, participantIds, name) => {
        event.preventDefault();
        // show block modal;
        setNameToBlock(name);
        setIsOpen(true);
        setIdsToBlock(participantIds);
    };

    useEffect(() => {
        // set active room id "" first
        localStorage.setItem("activeChatRoomId", "");
        // subscribe to public channel
        const pusher = new Pusher("ec07749c8ce28d32448a", {
            cluster: "ap1",
            encrypted: true,
        });
        const channel = pusher.subscribe("general");
        channel.bind("message", () => {
            // when received, trigger update chatroom and messages event
            getEverything();
        });
        channel.bind("block", () => {
            // when received, trigger update chatroom and messages event
            getEverything();
        });
        channel.bind("chatroom", (data) => {
            const ids = data.split(",");
            // if user is in the chatroom, trigger open match modal
            if(ids.length === 2 && (ids[0] === localStorage.getItem("auth-token") || ids[1] === localStorage.getItem("auth-token"))) {
                setIsOpenMatch(true);
            }
        });

        getEverything();

        // scheduler to find match
        const interval = setInterval(() => {
            findMatch();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            // create new message
            const newMessage = {
                roomId: localStorage.getItem("activeChatRoomId"),
                senderId: localStorage.getItem("auth-token"),
                content: message,
                timestamp: +new Date(),
            };
            createMessage(newMessage).then(() => {
                // get messages by chatroom
                getMessages(localStorage.getItem("activeChatRoomId")).then((m) => {
                    setMessages(m);
                    setMessage("");
                });
            });
        }
    };

    const onSelectChatRoom = (e, name, roomId) => {
        e.preventDefault();
        // set chatroom info
        setName(name);
        localStorage.setItem("activeChatRoomId", roomId);
        // get messages by chatroom
        getMessages(roomId).then((m) => {
            setMessages(m);
        });
    };

    const closeMatchModal = () => {
        setIsOpenMatch(false);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <div className={classes.outerContainer}>

                <div className='listContainer'>
                    {chatRooms.map((chatRoom) => (
                        <div
                            key={chatRoom.id}
                            className={`${classes.slotdiv} ${classes.hovereffect}`}>
                            <Grid container direction="row" justify="center" alignItems="center" onClick={(e) => {
                                onSelectChatRoom(e, chatRoom.name, chatRoom.id);
                            }}>
                                <Grid item>
                                    <img className={classes.icon} src={user_img} alt={"user"}/>
                                </Grid>
                                <Grid item>
                                    <p className={classes.timetitle}>{chatRoom.name}</p>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.closeBtn}
                                            onClick={(e) => blockChatRoomModal(e, chatRoom.participantIds, chatRoom.name)}>
                                        <img className={classes.closeicon} src={close_img} alt={"user"}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
                <div className="container">
                    <InfoBar name={name}/>
                    <Messages messages={messages} name={name}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                </div>
            </div>
            <DisableMatch/>
            <BlockUserModal nameToBlock={nameToBlock} isOpen={isOpen} closeModal={closeBlockModal} block={blockUsers}/>
            <FoundMatchModal nameToMatch={'Anonymous'} isOpen={isOpenMatch} closeModal={closeMatchModal} navChatPage={navChatPage}/>
        </React.Fragment>
    );
}
