import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import enable_img from "../../images/enable-icon.PNG";
import disable_img from "../../images/disable-icon.PNG";

import Button from "@material-ui/core/Button";
import user_img from "../../images/user (3).png";
import close_img from "../../images/close.png";
import {Link} from "react-router-dom";
import cyan from "@material-ui/core/colors/cyan";


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
        margin: theme.spacing(5, 'auto', 2),
        width: '50px'
    },
    icontitle1: {
        margin: theme.spacing(0, 'auto', 0, 1.5),
        width: '50px'
    },
    icontitle2: {
        margin: theme.spacing(0, 'auto', 0),
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
}));

export default function FoundMatch(){
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.div}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <Grid container spacing={8} direction="row" justify="flex-end" alignItems="center">
                            <Grid item>
                                <img className={classes.icon} src={user_img}/>
                                <p className={classes.icontitle1}>You</p>
                            </Grid>
                            <Grid item>
                                <img className={classes.icon} src={user_img}/>
                                <p className={classes.icontitle2}>Username</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.title} >
                            Found you a friend!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link to={'/chat'} style={{ textDecoration: 'none'}}>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button}
                            >
                                Let's start chatting
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}