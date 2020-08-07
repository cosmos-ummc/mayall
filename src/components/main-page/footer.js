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


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    }
}));

export default function Game(props) {
    const classes = useStyles();
    const { footer } = props;

    return (
        <React.Fragment>
            <Paper className={classes.banner} >
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {footer.banner}
                </Typography>
            </Paper>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                <Grid container spacing={4} justify="space-evenly">
                    {footer.info.map((info) => (
                        <Grid item xs={6} sm={3} key={info.site}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {info.site}
                            </Typography>
                            <Link href="#" variant="subtitle1" color="textSecondary">
                                {info.linkText}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    Call {footer.phone}
                </Typography>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}

Game.propTypes = {
    footer: PropTypes.object
};