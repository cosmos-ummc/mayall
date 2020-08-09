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
    formControl: {
        margin: theme.spacing(2, 'auto', 0),
        minWidth: 120,
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: `2px solid ${grey[900]}`,
            },
            "&.Mui-focused fieldset": {
                border: `2px solid ${grey[900]}`, // focus
            },
        },
        "&:hover": {
            backgroundColor: grey[50],
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    instruction1: {
        margin: theme.spacing(0, 'auto'),
        width: 450,
        fontStyle: 'italic',
    },
    instruction1null: {
        margin: theme.spacing(0, 'auto'),
        width: 450,
        fontStyle: 'italic',
        color: `rgba(255, 255, 255, 1)`
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

const info_sections = [
    { title: "Home", url: '/' },
    { title: "Health's Feed", url: '/#feeds' },
    { title: 'Meditation', url: '/#meditation' },
    { title: 'Games', url: '/#games' },
];

const func_sections = [
    { title: 'SCHEDULE', url: 'schedule', icon: 'DateRangeIcon' },
    { title: 'CHAT', url: 'chat', icon: 'ChatIcon' },
    { title: 'PROFILE', url: '#', icon: 'PersonIcon' }
];

const timeslots = [
    {
        time: '2 August 2020 2.00 P.M.',
        value: 10
    },
    {
        time: '3 August 2020 2.00 P.M.',
        value: 20
    },
    {
        time: '4 August 2020 2.00 P.M.',
        value: 30
    },
]

export default function Schedule() {
    const classes = useStyles();

    /* Selection list */
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        isChoosed: false
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
            isChoosed: true,
        });
    };


    /* save button */
    const [saveState, setSaveState] = React.useState({
        isSaved: false
    });

    function handleSave(event) {
        event.preventDefault();
        setSaveState({
            isSaved: true,
        });
        console.log(saveState.isSaved)
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <Navbar info_sections={info_sections} func_sections={func_sections} />

            <Container className={classes.canvas}>
                <div className={classes.div}>
                    <Typography className={classes.title} >
                        You are invited to a Google Meet session tommorrow. Going?
                    </Typography>

                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button1}
                            >
                                Yes
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button2}
                            >
                                No
                            </Button>
                        </Grid>
                    </Grid>

                    <Typography className={classes.subtitle} >
                        If your answer is 'Yes', please choose the time you are available.
                    </Typography>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Time Slot</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="time slot"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            {timeslots.map((slot) => (
                                <option value={slot.value}>{slot.time}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <br/>
                    <div className={state.isChoosed? classes.instruction1: classes.instruction1null}>
                        <p>*You can only change the session time a day before the meeting. Choose your preferred time and save.</p>
                    </div>

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


        </React.Fragment>
    );
}