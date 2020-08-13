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
import {Redirect} from "react-router-dom";


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

    /* notify button */
    const [state, setState] = React.useState({
        isNotify: false
    });

    function handleNotify(event) {
        event.preventDefault();
        setState({
            isNotify: true,
        });
        console.log(state.isNotify)
    }

    // if not logged in, navigate to login page
    const token = localStorage.getItem("auth-token");
    if (!token) {
        return <Redirect to="/login"/>;
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <Navbar />

            <Container className={classes.canvas}>
                <div className={classes.div}>
                    <Typography className={classes.title} >
                        Sorry, you have no meeting tomorrow.
                    </Typography>

                    <Typography className={classes.subtitle} >
                        If you wish to get help, kindly press the button below. We will reach you as soon as possible.
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
                            <div className={state.isNotify? classes.instruction: classes.instructionnull}>
                                <p>Consultant has been notified.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <DisableMatch isMatch={true}/>

        </React.Fragment>
    );
}
