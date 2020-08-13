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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import DisableMatch from "../disable-match/disable-match";
import {Link, Redirect, useHistory} from 'react-router-dom';
import TimeSelect from "../time-select/time-select";
import {getCompleted} from "../../api/complete";
import {getReports} from "../../api/chart";
import {createMeeting, getCannotDeny, getHasMeeting, getMeetings} from "../../api/schedule";
import {getPatient} from "../../api/patient";
import Pusher from "pusher-js";
import FoundMatchModal from "../found-match-modal/found-match-modal";


const useStyles = makeStyles((theme) => ({
    canvas: {
        // backgroundColor: 'grey',
        height: 500
    },
    div: {
        width: '80%',
        margin: theme.spacing(15, 'auto'),
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
    button1: {
        margin: theme.spacing(0, 1),
        padding: theme.spacing(1, 3.5),
        backgroundColor: `${cyan[500]}`,
        border: `2px solid ${grey[900]}`,
        color: 'white',
        '&:hover': {
            color: 'black',
            border: '2px solid black'
        }
    },
    button2: {
        margin: theme.spacing(0, 1),
        padding: theme.spacing(1, 3.5),
        backgroundColor: 'black',
        border: `2px solid ${grey[900]}`,
        color: 'white',
        '&:hover': {
            color: 'black',
            border: '2px solid black'
        }
    },
    subtitle: {
        width: '50%',
        fontWeight: "bold",
        fontSize: "20px",
        margin: theme.spacing(8, 'auto', 0),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    button3: {
        margin: theme.spacing(2, 1, 0, 28),
        padding: theme.spacing(1, 3.5),
        backgroundColor: `${cyan[500]}`,
        border: `2px solid ${grey[900]}`,
        color: 'white',
        '&:hover': {
            color: 'black',
            border: '2px solid black'
        },
    },
    instruction2: {
        marginTop: theme.spacing(3.5),
        marginLeft: theme.spacing(0.5),
        width: 200,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    instruction2null: {
        marginTop: theme.spacing(3.5),
        marginLeft: theme.spacing(0.5),
        width: 200,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: `rgba(255, 255, 255, 1)`
    }
}));


export default function Schedule() {
    const classes = useStyles();
    const history = useHistory();

    const [agree, setAgree] = useState(false);
    const [canDeny, setCanDeny] = useState(false);

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
        getCannotDeny().then(cannotDeny => {
            console.log(cannotDeny);
            setCanDeny(!cannotDeny);
            setAgree(true);
        });
        getHasMeeting().then(hasMeeting => {
            if (!hasMeeting) history.push("/schedule-none");
        });
        // get meetings
        getPatient().then((data) => {
            getMeetings(data.id).then((m => {
                if (m.length > 0) history.push("/meetup");
            }));
        });
        // subscribe to public channel
        const pusher = new Pusher("ec07749c8ce28d32448a", {
            cluster: "ap1",
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

    function handleAgree(event) {
        setAgree(true);
    }

    const [save, setSave] = useState(false);

    function handleSave(event) {
        getPatient().then(patient => {
            const data = {
                status: 1,
                time: state.age,
            };
            createMeeting(data).then(() => {
                setSave(true);
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
                        You are invited to a Google Meet session tomorrow. {canDeny ? "Going?" : ""}
                    </Typography>

                    {canDeny ? <>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                        href="#"
                                        className={classes.button1}
                                        onClick={handleAgree}
                                    >
                                        Yes
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Link to={'/schedule-none'} style={{textDecoration: 'none'}}>
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            color="primary"
                                            href="#"
                                            className={classes.button2}
                                        >
                                            No
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </>
                        : ""}
                    {agree ? <>
                            <Typography className={classes.subtitle}>
                                Please choose the time you are available.
                            </Typography>
                            <TimeSelect giveInstruct={true} state={state} handleChange={handleChange}/>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                        href="#"
                                        onClick={handleSave}
                                        className={classes.button3}
                                    >
                                        Save
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <div className={save ? classes.instruction2 : classes.instruction2null}>
                                        <p>Your answer has been saved and sent to your consultant</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </>
                        : ""}
                </div>
            </Container>
            <DisableMatch isMatch={true}/>
            <FoundMatchModal nameToMatch={'Anonymous'} isOpen={isOpenMatch} closeModal={closeMatchModal}
                             navChatPage={navChatPage}/>
        </React.Fragment>
    );
}


