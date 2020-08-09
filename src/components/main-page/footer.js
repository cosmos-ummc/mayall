import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Copyright from "../copyright/copyright";
import grey from '@material-ui/core/colors/grey';


const useStyles = makeStyles((theme) => ({
    canvas: {
        backgroundColor: '#5F7D95',
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: theme.spacing(10),
    },
    div: {
        margin: theme.spacing(3, 'auto'),
        color: 'white',
        fontWeight: 'bold'
    },
    footerdiv: {
        backgroundColor: `${grey[900]}`,
        color: 'white'
    },
    footer: {
        width: '80%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        margin: theme.spacing(0, 'auto'),
    },
    res: {
        color: 'white'
    },
    col: {
        width: '50%'
    }
}));


export default function Game(props) {
    const classes = useStyles();
    const { footer } = props;

    return (
        <React.Fragment>
            <Paper className={classes.canvas} >
                <div className={classes.div}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {footer.banner}
                    </Typography>
                </div>
            </Paper>
            <div className={classes.footerdiv}>
                <Container maxWidth="md" component="footer" className={classes.footer}>
                    <Typography variant="h5" color="inherit" gutterBottom style={{marginBottom: 20, fontWeight: 'bold'}}>
                        {footer.title}
                    </Typography>

                    <Grid container direction="row" >
                        <Grid item className={classes.col}>
                            <Grid container direction="column" justify="space-between" className={classes.res}>
                                {footer.info01.map((info) => (
                                    <Grid item xs={6} key={info.site} style={{marginBottom: 20}}>
                                        <Typography variant="body2" gutterBottom>
                                            {info.site}
                                        </Typography>
                                        <Link href="#" color="inherit" variant="body2">
                                            {info.linkText}
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item className={classes.col}>
                            <Grid container direction="column" justify="space-between" className={classes.res}>
                                {footer.info02.map((info) => (
                                    <Grid item xs={6} key={info.site} style={{marginBottom: 20}}>
                                        <Typography variant="body2" gutterBottom>
                                            {info.site}
                                        </Typography>
                                        <Link href="#" color="inherit" variant="body2">
                                            {info.linkText}
                                        </Link>
                                    </Grid>
                                ))}
                                <Grid item xs={6} style={{marginTop: 10}}>
                                    <Typography variant="h6" color="inherit" gutterBottom>
                                        Call {footer.phone}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box mt={5}>
                        <Copyright color='white'/>
                    </Box>
                </Container>
            </div>
        </React.Fragment>
    );
}

Game.propTypes = {
    footer: PropTypes.object
};