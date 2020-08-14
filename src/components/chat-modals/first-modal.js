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
        margin: (2, 'auto', 4),
        marginLeft: 20,
        // textAlign: 'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: "19px",
        margin: theme.spacing(4, 'auto', 3),
    },
    button: {
        left: '70%',
        margin: theme.spacing(4, 0),
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

export default function FirstModal(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div style={{display: props.openFirst ? 'block' : 'none'}}>
                <div className={classes.div}>
                    <div className={classes.innerdiv}>
                        <img className={classes.icon} src={bee_img} alt={"chat"}/>
                        <div className={classes.textdiv}>
                            <Typography className={classes.text}>
                                Let's talk to someone else from the quarantine centre. Your identity
                                will be hidden from the others. Feel free to choose anyone to chat from
                                the list on the left and remove them once you wish to stop chatting with them.
                            </Typography>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        href="#"
                        className={classes.button}
                        onClick={props.closeFirst}
                    >
                        Agree
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}
