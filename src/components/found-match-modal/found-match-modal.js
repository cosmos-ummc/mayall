import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";
import user_img from "../../images/user (3).png";
import close_img from "../../images/close-black.png";
import {Link} from "react-router-dom";

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
    icon: {
        margin: theme.spacing(3, 3, 2, 3),
        width: '50px'
    },
    icontitle1: {
        margin: theme.spacing(0, 4, 0, 4),
        width: '50px'
    },
    icontitle2: {
        margin: theme.spacing(0),
        width: '50px'
    },
    title: {
        fontWeight: "bold",
        fontSize: "32px",
        margin: theme.spacing(4, 'auto', 3),
    },
    button: {
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
    closeBtn: {
        float: 'right',
        backgroundColor: '#5F7D95',
        marginTop: theme.spacing(1.5),
        padding: theme.spacing(1, 'auto'),
        '&:hover': {
            backgroundColor: 'white',
        }
    },
    closeicon: {
        height: 20,
        width: 20
    },
}));

export default function FoundMatchModal(props) {
    const classes = useStyles();
    const {nameToMatch, isOpen, closeModal, navChatPage} = props;

    return (
        <React.Fragment>
            <div style={{display: isOpen ? 'block' : 'none'}}>
                <div className={classes.div}>
                    <div>
                        <Button className={classes.closeBtn} color="primary" onClick={closeModal}>
                            <img className={classes.closeicon} src={close_img} alt={"close"}/>
                        </Button>
                    </div>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <Grid container spacing={5} direction="row" justify="flex-end" alignItems="center">
                                <Grid item>
                                    <img className={classes.icon} src={user_img} alt={"user"}/>
                                    <p className={classes.icontitle1}>You</p>
                                </Grid>
                                <Grid item>
                                    <img className={classes.icon} src={user_img} alt={"user"}/>
                                    <p className={classes.icontitle2}>{nameToMatch}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title}>
                                Found you a friend!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button}
                                onClick={navChatPage}
                            >
                                Let's start chatting
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}
