import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../main-page/navbar';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import cyan from "@material-ui/core/colors/cyan";
import grey from "@material-ui/core/colors/grey";
import DisableMatch from "../disable-match/disable-match";
import {Redirect, useHistory} from 'react-router-dom';
import {ScheduledList} from "../scheduled-list";
import {getCompleted} from "../../api/complete";
import {getPatient} from "../../api/patient";
import {getMeetings} from "../../api/schedule";
import Webcam from "react-webcam";

const useStyles = makeStyles((theme) => ({
    canvas: {
        // backgroundColor: 'green',
        height: 500
    },
    div: {
        marginLeft: 250,
        width: '80%',
        margin: theme.spacing(15, 'auto'),
        // backgroundColor: 'pink',
        height: 500,
        flexGrow: 1,
        textAlign: 'center',
    },
    icon: {
        margin: theme.spacing(1, 1, 1, 0),
        width: '30px'
    },
    timetitle: {
        fontWeight: "bold",
        fontSize: "15px",
        margin: theme.spacing(2, 'auto'),
        position: 'relative',
    },
    instruct: {
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5
    },
    videoArea: {
        height: 300,
        width: 450,
        margin: theme.spacing(5, 'auto'),
        backgroundColor: 'grey',
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
        border: `1px solid ${grey[900]}`,
        color: 'white',
        '&:hover': {
            color: 'black',
            border: '1px solid black'
        }
    },
    button2: {
        margin: theme.spacing(0, 1),
        padding: theme.spacing(1, 3.5),
        backgroundColor: 'black',
        border: `1px solid ${grey[900]}`,
        color: 'white',
        '&:active': {
            color: 'black',
            border: '1px solid black'
        }
    },

}));

export default function Schedule() {
    const classes = useStyles();
    const history = useHistory();

    const [meetings, setMeetings] = useState([]);
    const [state, setState] = useState({
        age: '',
        name: 'hai',
        isChoosed: false
    });

    useEffect(() => {
        getCompleted().then(completed => {
            if (completed) history.push("/complete");
        });
        // get meetings
        getPatient().then((data) => {
            getMeetings(data.id).then((m => {

                m.forEach((x, i) => {
                    x.isNew = i === 0;
                });

                setMeetings(m);
            }));
        });
    }, []);

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
                <ScheduledList meetings={meetings}/>
                <div className={classes.div}>
                    <Webcam height="300" width="450"/>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="https://chat.quaranteams.tk/"
                                className={classes.button1}
                            >
                                Join the Meeting
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <DisableMatch isMatch={true}/>
        </React.Fragment>
    );
}
