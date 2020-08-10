import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import topview01 from "../../images/topview01.jpg";
import topview02 from "../../images/topview02.jpg";


const useStyles = makeStyles((theme) => ({
    canvas:{
        marginTop: 80,
    },
    image: {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        width: '100%',
    },
}));

const images = {
    topview01: topview01,
    topview02: topview02
}

export default function Topview(props) {
    const classes = useStyles();
    const { topimgs } = props;

    return (
        <React.Fragment>

                <div className={classes.canvas}></div>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image} alt={'image'} src={topview01}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image} alt={'image'} src={topview02}/>
                    </Grid>
                </Grid>

        </React.Fragment>
    );
}

Topview.propTypes = {
    topimgs: PropTypes.array
};
