import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../main-page/navbar';
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import cyan from "@material-ui/core/colors/cyan";
import grey from "@material-ui/core/colors/grey";
import DisableMatch from "../disable-match/disable-match";
import { Link } from 'react-router-dom';
import notification_img from "../../images/notification.png";



const useStyles = makeStyles((theme) => ({
    canvas: {
        // backgroundColor: 'green',
        height: 500
    },
    leftdiv: {
        height: 2000,
        width: 250,
        left: 0,
        top: 0,
        marginTop: theme.spacing(9),
        margin: theme.spacing(0),
        position: 'fixed',
        // backgroundColor: 'grey',
        borderRight: '2px solid grey'
    },
    slotdiv:{
        height: 100,
        width: 250,
        left: 0,
        top: 0,
        margin: theme.spacing(0),
        // backgroundColor: 'blue',
        borderBottom: '2px solid grey',
        paddingTop: 20
    },
    newslotdiv:{
        height: 120,
        width: 250,
        left: 0,
        top: 0,
        margin: theme.spacing(0),
        // backgroundColor: 'grey',
        borderBottom: '2px solid grey',
        paddingTop: 10
    },
    hovereffect: {
        '&:hover': {
            backgroundColor: `${cyan[100]}`,
        },
        '&:active :focus': {
            backgroundColor: `${cyan[50]}`,
        }
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

const scheduled_slots = [
    {
        time: '10 August 2020 2.00PM',
        isNew: true,
    },
    {
        time: '11 August 2020 2.00PM',
        isNew: false,
    },
    {
        time: '12 August 2020 2.00PM',
        isNew: false,
    },
]

export default function Schedule() {
    const classes = useStyles();

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

    return (
        <React.Fragment>
            <CssBaseline/>

            <Navbar/>

            <Container className={classes.canvas}>

                <div className={classes.leftdiv}>
                    {scheduled_slots.map((slot) => (
                        <div className={`${slot.isNew? classes.newslotdiv : classes.slotdiv} ${classes.hovereffect}` }>
                            {slot.isNew?
                                <div>
                                    <Grid container direction="row" justify="center" alignItems="center">
                                        <Grid item>
                                            <img className={classes.icon} src={notification_img}/>
                                        </Grid>
                                        <Grid item>
                                            <p className={classes.timetitle}>{slot.time}</p>
                                        </Grid>
                                    </Grid>
                                    <Typography align="center" gutterBottom className={classes.instruct}>
                                        NEW UPCOMING MEETING!
                                    </Typography>
                                </div>

                             :
                                <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <img className={classes.icon} src={notification_img}/>
                                </Grid>
                                <Grid item>
                                    <p className={classes.timetitle}>{slot.time}</p>
                                </Grid>
                                </Grid>
                            }


                        </div>
                    ))}

                </div>

                <div className={classes.div}>

                    <div className={classes.videoArea}>

                    </div>

                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button1}
                                // onClick={handleAgree}
                            >
                                Join the Meeting
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link to={'/reschedule'} style={{textDecoration: 'none'}}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    href="#"
                                    className={classes.button2}
                                >
                                    Reschedule the Meeting
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                </div>

            </Container>

            <DisableMatch isMatch={true}/>

        </React.Fragment>
    );

}