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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import DisableMatch from "../disable-match/disable-match";
import {Link, Redirect} from 'react-router-dom';
import TimeSelect from "../time-select/time-select";



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

    /* yes button */
    const [agreeState, setAgreeState] = React.useState({
        isAgree: false
    });

    function handleAgree(event) {
        setAgreeState({
            isAgree: true,
        });
    }

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
                        You are invited to a Google Meet session tomorrow. Going?
                    </Typography>

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
                            <Link to={'/schedule-none'} style={{ textDecoration: 'none'}}>
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

                    <Typography className={classes.subtitle} >
                        If your answer is 'Yes', please choose the time you are available.
                    </Typography>

                    <TimeSelect giveInstruct={true}/>

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
                            <div className={saveState.isSaved? classes.instruction2: classes.instruction2null}>
                                <p>Your answer has been saved and sent to your consultant</p>
                            </div>
                        </Grid>
                    </Grid>


                </div>
            </Container>

            <DisableMatch isMatch={true}/>

        </React.Fragment>
    );
}


