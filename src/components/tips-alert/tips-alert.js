import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import bulb_img from "../../images/idea (2).png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import close_img from "../../images/close-black.png";


const useStyles = makeStyles((theme) => ({
    canvas: {
        width: '100%',
        position: 'fixed',
        // margin: theme.spacing(0, 'auto', 0),
        backgroundColor: '#00649D',
    },
    div: {
        color: theme.palette.common.white,
        width: '100%',
        margin: theme.spacing(2, 'auto'),
    },
    contentdiv: {
        margin: theme.spacing(2, 'auto'),
        padding: theme.spacing(2, 'auto'),
        width: '80%',
        display: 'flex',
        flexFlow: 'row',
        flex: '1 1 auto',
        textAlign: 'center'
    },
    icon: {
        height: 110,
        width: 110,
        margin: (0, 'auto'),
    },
    textdiv: {
        width: '100%',
        marginLeft: 20,
        textAlign: 'center'
    },
    closeBtn: {
        float: 'right',
        backgroundColor: '#00649D',
        margin: theme.spacing(0, 0, 0, 2),
        padding: theme.spacing(2, 'auto'),
        '&:hover': {
            backgroundColor: 'white',
        }
    },
    closeicon: {
        height: 20,
        width: 20
    },
}));

export default function TipsAlert(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false);
    }
    return (
        <React.Fragment>
            <div style={{display: open ? 'block' : 'none'}}>
                <div className={classes.canvas}>

                    <div className={classes.div}>
                        <div>
                            <Button className={classes.closeBtn} color="primary" onClick={handleClose}>
                                <img className={classes.closeicon} src={close_img} alt={"close"}/>
                            </Button>
                        </div>
                        <div className={classes.contentdiv}>
                            <img className={classes.icon} src={bulb_img}/>
                            <div className={classes.textdiv}>
                                <Typography component="h4" variant="h4">{props.title}</Typography>
                                <p>{props.description}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </React.Fragment>
    );
}
