import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import cyan from "@material-ui/core/colors/cyan";
import notification_img from "../../images/notification.png";


const useStyles = makeStyles((theme) => ({
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
    slotdiv: {
        height: 100,
        width: 250,
        left: 0,
        top: 0,
        margin: theme.spacing(0),
        // backgroundColor: 'blue',
        borderBottom: '2px solid grey',
        borderRight: '2px solid grey',
        paddingTop: 20
    },
    newslotdiv: {
        height: 120,
        width: 250,
        left: 0,
        top: 0,
        margin: theme.spacing(0),
        // backgroundColor: 'grey',
        borderBottom: '2px solid grey',
        borderRight: '2px solid grey',
        paddingTop: 10
    },
    hovereffect: {
        '&:hover': {
            backgroundColor: `${cyan[100]}`,
            borderRight: '2px solid grey',
        },
        // '&:active :focus': {
        //     backgroundColor: `${cyan[50]}`,
        // }
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
}));

export default function ScheduledList(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.leftdiv}>
                {props.meetings.map((slot) => (
                    <div className={`${slot.isNew ? classes.newslotdiv : classes.slotdiv} ${classes.hovereffect}`}>
                        {slot.isNew ?
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
        </React.Fragment>
    );

}
