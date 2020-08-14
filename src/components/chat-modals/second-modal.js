import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";
import bee_img from "../../images/bee.png";

const useStyles = makeStyles((theme) => ({
    div: {
        top: '30%',
        left: '33%',
        padding: theme.spacing(25, 'auto'),
        position: 'fixed',
        width: 500,
        height: 350,
        backgroundColor: '#5F7D95',
        border: '3px solid black',
        borderRadius: 16
    },
    innerdiv: {
        color: theme.palette.common.black,
        display: 'flex',
        flexFlow: 'row',
        flex: '1 1 auto',
        width: '90%',
        margin: (4, 'auto'),
    },
    icon: {
        height: 80,
        width: 80,
        marginTop: theme.spacing(4),
    },
    textdiv: {
        width: '100%',
        margin: (2, 'auto'),
        marginLeft: 20,
    },
    text: {
        fontWeight: "bold",
        fontSize: "19px",
        margin: theme.spacing(4, 'auto', 2),
    },
    button: {
        left: '0%',
        margin: theme.spacing(3, 0),
        padding: theme.spacing(1, 3.5),
        backgroundColor: 'white',
        border: `2px solid ${grey[900]}`,
        color: 'black',
        '&:hover': {
            color: 'black',
            border: '2px solid black'
        }
    },
    button2: {
        left: '10%',
        margin: theme.spacing(3, 0, 3, 3),
        padding: theme.spacing(1, 4),
        backgroundColor: 'black',
        border: `2px solid ${grey[900]}`,
        color: 'white',
        '&:hover': {
            color: 'black',
            border: '2px solid black'
        }
    },
}));

export default function SecondModal(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div style={{display: props.openSecond ? 'block' : 'none'}}>
                <div className={classes.div}>
                    <div className={classes.innerdiv}>
                        <img className={classes.icon} src={bee_img}/>
                        <div className={classes.textdiv}>
                            <Typography className={classes.text}>
                                Make yourself visible so we can match you with someone with similar interest
                                as you. You can always change your status to invisible using the toggle button
                                at the bottom left part of screen.
                            </Typography>

                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button}
                                onClick={(e) => props.closeSecond(e, true)}
                            >
                                Yes
                            </Button>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button2}
                                onClick={(e) => props.closeSecond(e, false)}
                            >
                                No
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
