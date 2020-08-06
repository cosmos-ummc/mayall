import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    }
}));


export default function Topview(props) {
    const classes = useStyles();
    const { topview } = props;

    return (
        <React.Fragment>
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: topview.backgroundImage }}>
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }}  />}
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {topview.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {topview.description}
                            </Typography>
                            <Link variant="subtitle1" href="#">
                                {topview.linkText}
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

Topview.propTypes = {
    topview: PropTypes.array
};