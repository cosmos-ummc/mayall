import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Alert, AlertTitle} from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";
import bulb_img from "../../images/idea (2).png";
import Grid from "@material-ui/core/Grid";
import user_img from "../../images/user (3).png";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    alertdiv: {
        width: '100%',
        position: 'fixed',
    },
    alert: {
        margin: theme.spacing(0, 'auto', 0),
        backgroundColor: '#00649D',
    },
    div: {
        color: theme.palette.common.white,
        display: 'flex',
        flexFlow: 'row',
        flex: '1 1 auto',
        width: '80%',
        margin: (2, 'auto'),
    },
    icon: {
        height: 110,
        width: 110,
    },
    textdiv: {
        width: '100%',
        margin: (2, 'auto'),
        marginLeft: 20,
        textAlign: 'center'
    }
}));

export default function TipsAlert(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <React.Fragment>
            <div className={classes.alertdiv}>
                <Collapse in={open}>
                    <Alert
                        onClose={() => { setOpen(false)}}
                        variant="filled"
                        severity="info"
                        className={classes.alert}>

                        <div className={classes.div}>
                            <img className={classes.icon} src={bulb_img}/>
                            <div className={classes.textdiv}>
                                <Typography component="h4" variant="h4">Avoid too much exposure to news.</Typography>
                                <p>Reading, watching or listening to too much news on pandemic may be counter-productive or even upsetting and distressing. Take a break from the news sometimes.</p>
                            </div>
                        </div>


                    </Alert>
                </Collapse>
            </div>

        </React.Fragment>
    );
}