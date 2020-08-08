import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import login_img from "../../images/login01.PNG";
import Copyright from "../copyright/copyright";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import {login} from "../../api/auth";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100vw",
    },
    title: {
        fontWeight: "bold",
        fontSize: "40px",
    },
    image: {
        backgroundImage: `url(${login_img})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 1)",
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: "100%",
        width: "100%",
        margin: theme.spacing(0, "auto"),
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    inputfield: {
        backgroundColor: grey[200],
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: `3px solid ${grey[900]}`,
            },
            "&.Mui-focused fieldset": {
                border: `3px solid ${blueGrey[500]}`, // focus
            },
        },
        "&:hover": {
            backgroundColor: grey[50],
        },
    },
    submit: {
        margin: theme.spacing(3, "auto"),
        backgroundColor: "black",
    },
}));

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(email, password);
        history.push("/");
    };

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography className={classes.title} component="h1" variant="h5">
                        MHPSS Login
                    </Typography>

                    <form className={classes.form} noValidate>
                        <TextField
                            className={classes.inputfield}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={event => {
                                setEmail(event.target.value)
                            }}
                        />
                        <TextField
                            className={classes.inputfield}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={event => {
                                setPassword(event.target.value)
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember Password"
                        />
                        <Grid container>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                        </Grid>

                        <Grid container>
                            <Grid item xs>
                                <p>
                                    <Link href="#" variant="body2">
                                        {"Forgot Password"}
                                    </Link>
                                </p>
                            </Grid>
                            <Grid item>
                                <p>
                                    Don't have an account yet?
                                    <Link href="#" variant="body2">
                                        {" Register now"}
                                    </Link>
                                </p>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright color='grey'/>
                        </Box>
                    </form>
                </div>
            </Grid>

            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        </Grid>
    );
}
