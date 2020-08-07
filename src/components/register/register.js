import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import login_img from '../../images/login01.PNG';
import Copyright from "../copyright/copyright";
import Box from "@material-ui/core/Box";
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '42px'
    },
    image: {
        backgroundImage: `url(${login_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        margin: theme.spacing(0, 'auto')
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    inputfield: {
        backgroundColor: grey[200],
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: `3px solid ${grey[900]}`
            },
            "&.Mui-focused fieldset": {
                border: `3px solid ${blueGrey[500]}`   // focus
            }
        }
    },
    submit: {
        margin: theme.spacing(3, 'auto'),
        backgroundColor: `${cyan[500]}`,
        border: `2px solid ${grey[900]}`,
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography className={classes.title} component="h1" variant="h5">
                        Register
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField className={classes.inputfield}
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField className={classes.inputfield}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="ic"
                                           label="NRIC/Passport"
                                           name="ic"
                                           autoComplete="numeric"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="phone"
                                           label="Phone Number"
                                           name="phone"
                                           autoComplete="tel"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                           variant="outlined"
                                           required
                                           fullWidth
                                           name="password"
                                           label="Confirm Password"
                                           type="password"
                                           id="password"
                                           autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="altercontact"
                                           label="Alternate Contact"
                                           name="altercontact"
                                           autoComplete="tel"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.inputfield}
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="address"
                                           label="Isolation Address"
                                           name="address"
                                           autoComplete="address-level4"
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                        </Grid>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <p>Already have an account?
                                    <Link href="#" variant="body2">
                                        {" Sign in"}
                                    </Link>
                                </p>
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>

            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
    );
}

