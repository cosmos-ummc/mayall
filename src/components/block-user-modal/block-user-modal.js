import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";
import user_img from "../../images/user (3).png";
import close_img from "../../images/close-black.png";

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
        margin: theme.spacing(0, 3, 1,5),
        width: '50px'
    },
    icontitlediv: {
        textAlign: 'center'
    },
    icontitle1: {
        margin: theme.spacing(0),
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px",
        margin: theme.spacing(4, 'auto', 3),
        textAlign: 'center',
        width: '90%',
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

export default function BlockUserModal(props) {
    const classes = useStyles();
    const {isOpen, closeModal} = props;

    return (
        <React.Fragment>
            <div style={{display: isOpen ? 'block' : 'none'}}>
                <div className={classes.div}>
                    <div>
                        <Button className={classes.closeBtn} color="primary" onClick={closeModal}>
                            <img className={classes.closeicon} src={close_img}/>
                        </Button>
                    </div>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <Grid item>
                                <img className={classes.icon} src={user_img}/>
                                <Typography className={classes.icontitle1}>Anonymous Friend</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title}>
                                {`Are you sure want to block the selected friend? This action cannot be undone.`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                href="#"
                                className={classes.button}
                                onClick={closeModal}
                            >
                                Block
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}
