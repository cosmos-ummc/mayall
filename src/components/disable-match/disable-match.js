import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import enable_img from "../../images/enable-icon.PNG";
import disable_img from "../../images/disable-icon.PNG";

import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    div: {
        top: 'auto',
        left: 10,
        bottom: 12,
        right: 'auto',
        margin: theme.spacing(5, 3),
        position: 'fixed',
        width: 100
    },
    instruction: {
        color: `${grey[500]}`,
        fontSize: 12,
    },
    button: {
        marginTop: 10,
        padding: theme.spacing(0),
        border: '3px solid #74CCD1',
        '&:hover': {
            border: '3px solid #5F7D95',
        }
    },
    disable: {
        marginTop: 10,
        padding: theme.spacing(0),
        border: '3px solid #5F7D95',
        '&:hover': {
            border: '3px solid #74CCD1',
        }
    },
    icon: {
        width: 80,
        height: 80,
    },
}));

export default function DisableMatch(){
    const classes = useStyles();

    const [state, setState] = React.useState({
        isDisable : false,
    })
    function handleDisable(event) {
        event.preventDefault();
        setState({
            isDisable: !state.isDisable,
        });
    }

    return (
        <React.Fragment>
            <div className={classes.div}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <Typography className={classes.instruction} >
                            Click to disable system to match friends to you.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button href="#" color="primary" variant="contained"
                                className={state.isDisable? classes.disable : classes.button}
                                onClick={handleDisable}>
                            <img className={classes.icon} src={state.isDisable? disable_img : enable_img}/>
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}
