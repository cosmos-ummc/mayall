import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import enable_img from "../../images/enable-icon.PNG";
import disable_img from "../../images/disable-icon.PNG";

import Button from "@material-ui/core/Button";
import {getVisibility, setVisibility} from "../../api/visibility";

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
        textAlign: "center",
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

export default function DisableMatch() {
    const classes = useStyles();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getVisibility().then((v) => setVisible(v));
    }, []);

    function handleToggle(event) {
        event.preventDefault();
        setVisibility(!visible).then(() => {
            setVisible(!visible);
        });
    }

    return (
        <React.Fragment>
            <div className={classes.div}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <Typography className={classes.instruction}>
                            Click to {visible? "disable" : "enable"} system to match friends to you.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button href="#" color="primary" variant="contained"
                                className={visible ? classes.button : classes.disable}
                                onClick={handleToggle}>
                            <img className={classes.icon} src={visible ? enable_img : disable_img} alt={"visibility"}/>
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}
