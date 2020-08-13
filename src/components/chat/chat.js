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
import {ChatModals} from "../chat-modals";
import {getChatRooms} from "../../api/chat";
import BlockUserModal from "../block-user-modal/block-user-modal";
import Pusher from "pusher-js";

// mock rooms
const mockRooms = [
    {
        id: "001",
        name: 'Anonymous 1',
        unwanted: false,
    },
    {
        id: "002",
        name: 'Anonymous 2',
        unwanted: false,
    },
    {
        id: "003",
        name: 'Anonymous 3',
        unwanted: false,
    },
];

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
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [idsToBlock, setIdsToBlock] = useState([]);
    const [activeChatRoomId, setActiveChatRoomId] = useState("");

    // mock messages
    const [mockMessages, setMockMessages] = useState([
        {
            id: "001",
            roomId: "0001",
            senderId: localStorage.getItem("auth-token"),
            content: 'Hi boss',
            timestamp: 1597252129534,
        },
        {
            id: "002",
            roomId: "0001",
            senderId: "xxx",
            content: 'Heyyy',
            timestamp: 1597252129535,
        },
        {
            id: "003",
            roomId: "0001",
            senderId: localStorage.getItem("auth-token"),
            content: "gud night",
            timestamp: 1597252129564,
        },
    ]);

    const closeModal = () => {
        setIsOpen(false);
    };

    const blockChatRoomModal = (event, participantIds) => {
        event.preventDefault();
        // show block modal
        setIsOpen(true);
        setIdsToBlock(participantIds);
    };

    useEffect(() => {

        // temporary for testing
        setName("Anonymous 1");

        // subscribe to public channel
        const pusher = new Pusher("ec07749c8ce28d32448a", {
            cluster: "ap1",
            encrypted: true,
        });
        const channel = pusher.subscribe("general");
        channel.bind("message", () => {
            // when received, trigger update chatroom and messages event
        });

        // get all chat rooms
        getChatRooms().then((c) => {
            c.forEach((item, index) => {
                item.name = `Anonymous ${index + 1}`;
                if (index === 0) {
                    setName(item.name);
                }
            });
            setChatRooms(c);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            // push the mock messages for testing
            setMockMessages([...mockMessages, {
                id: "005",
                roomId: "0001",
                senderId: localStorage.getItem("auth-token"),
                content: message,
                timestamp: 1597252129534,
            }]);
            setMessage("");
        }
    };

    const onSelectChatRoom = (e, name) => {
        e.preventDefault();
        setName(name);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <div className={classes.outerContainer}>

                <div className='listContainer'>
                    {mockRooms.map((chatRoom) => (
                        <div
                            className={`${classes.slotdiv} ${classes.hovereffect}`}>
                            <Grid container direction="row" justify="center" alignItems="center" onClick={(e) => {
                                onSelectChatRoom(e, chatRoom.name);
                            }}>
                                <Grid item>
                                    <img className={classes.icon} src={user_img}/>
                                </Grid>
                                <Grid item>
                                    <p className={classes.timetitle}>{chatRoom.name}</p>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.closeBtn}
                                            onClick={(e) => blockChatRoomModal(e, chatRoom.participantIds)}>
                                        <img className={classes.closeicon} src={close_img}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
                <div className="container">
                    <InfoBar name={name}/>
                    <Messages messages={mockMessages} name={name}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                </div>
            </div>

            <DisableMatch/>
            <BlockUserModal nameToBlock={'AnonymousXYZ'} isOpen={isOpen} closeModal={closeModal}/>
            <ChatModals />

        </React.Fragment>
    );
}
