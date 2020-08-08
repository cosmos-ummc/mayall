import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import topview01 from "../../images/topview01.PNG";
import topview02 from "../../images/topview02.PNG";


const useStyles = makeStyles((theme) => ({
    canvas:{
        flexGrow: 1,
        marginTop: 50,
        marginBottom: 20,
        height: '500px',
        width: '100vw',
    },
    view: {
        position: 'relative',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center center",
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        margin: theme.spacing('auto')
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

            <Grid container alignItems="center" direction="row" className={classes.canvas}>
                {topimgs.map((img) => (
                    <Grid item key={img.name} xs={12} sm={6}
                          className={classes.view}
                          style={{backgroundImage: `url(${images[img.name]})`}}/>
                ))}
            </Grid>

        </React.Fragment>
    );
}

Topview.propTypes = {
    topimgs: PropTypes.array
};
