import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../main-page/navbar';
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import cyan from "@material-ui/core/colors/cyan";
import grey from "@material-ui/core/colors/grey";
import DisableMatch from "../disable-match/disable-match";
import {Redirect, useHistory} from "react-router-dom";
import {getCompleted} from "../../api/complete";
import {createMeeting, getHasMeeting, getMeetings} from "../../api/schedule";
import TimeSelect from "../time-select/time-select";
import {getPatient} from "../../api/patient";
import FoundMatchModal from "../found-match-modal/found-match-modal";
import Pusher from "pusher-js";


const useStyles = makeStyles((theme) => ({
    canvas: {
        // backgroundColor: 'grey',
        height: 500
    },
    div: {
        width: '80%',
        margin: theme.spacing(25, 'auto'),
        // backgroundColor: 'white',
        height: 500,
        flexGrow: 1,
        textAlign: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: "38px",
        margin: theme.spacing(5, 'auto'),
    },
    subtitle: {
        width: '60%',
        fontWeight: "bold",
        fontSize: "16px",
        margin: theme.spacing(6, 'auto'),
    },
    button: {
        margin: theme.spacing(2, 1, 0, 28),
        padding: theme.spacing(1, 3.5),
        backgroundColor: `${cyan[500]}`,
        border: `2px solid ${grey[900]}`,
        color: 'black',
        '&:hover': {
            color: `black`,
            border: '2px solid black'
        },
    },
    instruction: {
        marginTop: theme.spacing(3.5),
        marginLeft: theme.spacing(0.5),
        width: 200,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    instructionnull: {
        marginTop: theme.spacing(3.5),
        marginLeft: theme.spacing(0.5),
        width: 200,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: `rgba(255, 255, 255, 1)`
    }
}));


export default function ScheduleNone() {
    const classes = useStyles();
    const history = useHistory();

    /* notify button */
    const [isNotify, setIsNotify] = useState(false);

    /* Selection list */
    const [state, setState] = useState({
        age: '',
        name: 'hai',
        isChoosed: false
    });
    const [isOpenMatch, setIsOpenMatch] = useState(false);

    const closeMatchModal = () => {
        setIsOpenMatch(false);
    };

    const navChatPage = async (event) => {
        event.preventDefault();
        history.push("/chat");
    };

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
            isChoosed: true,
        });
    };

    useEffect(() => {
        getCompleted().then(completed => {
            if (completed) history.push("/complete");
        });
        getHasMeeting().then(hasMeeting => {
            if (hasMeeting) history.push("/schedule");
        });
        // get meetings
        getPatient().then((data) => {
            getMeetings(data.id).then((m => {
                if (m.length > 0) history.push("/meetup");
            }));
        });
        // subscribe to public channel
        const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
            cluster: process.env.REACT_APP_PUSHER_CLUSTER,
            encrypted: true,
        });
        const channel = pusher.subscribe("general");
        channel.bind("chatroom", (data) => {
            const ids = data.split(",");
            // if user is in the chatroom, trigger open match modal
            if (ids.length === 2 && (ids[0] === localStorage.getItem("auth-token") || ids[1] === localStorage.getItem("auth-token"))) {
                setIsOpenMatch(true);
            }
        });
    }, []);

    function handleNotify(event) {
        event.preventDefault();
        getPatient().then(patient => {
            const data = {
                status: 4,
                time: state.age,
            };
            createMeeting(data).then(() => {
                setIsNotify(true);
                history.push("/meetup");
            });
        });
    }

    // if not logged in, navigate to login page
    const token = localStorage.getItem("auth-token");
    if (!token) {
        return <Redirect to="/login"/>;
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            <Navbar/>

            <Container className={classes.canvas}>
                <div className={classes.div}>
                    <Typography className={classes.title}>
                        Sorry, you have no meeting tomorrow.
                    </Typography>

                    <TimeSelect giveInstruct={true} state={state} handleChange={handleChange}/>

                    <Typography className={classes.subtitle}>
                        If you wish to get help, kindly select a slot and press the button below. We will reach you as
                        soon as possible.
                    </Typography>

                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                onClick={handleNotify}
                                className={classes.button}
                            >
                                Notify
                            </Button>
                        </Grid>
                        <Grid item>
                            <div className={isNotify ? classes.instruction : classes.instructionnull}>
                                <p>Consultant has been notified.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <DisableMatch isMatch={true}/>
            <FoundMatchModal nameToMatch={'Anonymous'} isOpen={isOpenMatch} closeModal={closeMatchModal}
                             navChatPage={navChatPage}/>
        </React.Fragment>
    );
}
