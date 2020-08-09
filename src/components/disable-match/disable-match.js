import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import Box from "@material-ui/core/Box";
import disable_img from "../../images/disable-icon.PNG";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    div: {
        top: 'auto',
        right: 12,
        bottom: 12,
        left: 'auto',
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
        border: '2px solid #74CCD1',
        backgroundColor: '#74CCD1',
        '&:hover': {
            backgroundColor: '#74CCD1',
            border: '2px solid grey',
        }
    },
    icon: {
        width: 80,
        height: 80
    },
}));

export default function DisableMatch(){
    const classes = useStyles();

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
                        <Button href="#" color="primary" variant="contained" className={classes.button}>
                            <img className={classes.icon} src={disable_img}/>
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}
