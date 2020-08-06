import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    goForChat: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px'
    }
}));

export default function Chat(props) {
    const classes = useStyles();
    const { title, buttonText } = props;

    return (
        <React.Fragment>
            <Paper className={classes.goForChat} >
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }}  />}
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {title}
                            </Typography>
                            <Button href="#" color="primary" variant="contained" className={classes.link}>
                                {buttonText}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

Chat.propTypes = {
    title: PropTypes.string,
    buttonText: PropTypes.string
};