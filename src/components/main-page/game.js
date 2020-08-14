import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import cyan from "@material-ui/core/colors/cyan";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import game_img from "../../images/games.png";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(6, 10),
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 0
    },
    divider: {
        backgroundColor: `${cyan[300]}`,
        margin: theme.spacing(3, 'auto'),
        marginBottom: 40,
        height: 4,
        width: 110,
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    icon: {
        margin: theme.spacing(3, 'auto'),
        display: 'flex',
        flexFlow: 'row',
        width: '40%',
    },
    gamediv: {
        margin: 0,
        padding: 0,
        borderRadius: '16%',
        border: '0px solid white',
    },
    gameimg: {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        border: '0px solid white',
        borderRadius: '16%',
        style: { width: '5rem', height: '5rem' },
    },
    img: {
        width: 48,
        margin: theme.spacing(0, 1),
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold'
    }
}));

export default function Game(props) {
    const classes = useStyles();
    const { title, games } = props;

    return (
        <React.Fragment>
            <div style={{backgroundColor: `${title}` === 'Suggested Games for IOS Users' ? `${cyan[50]}` : null}}>
                <Container component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.header}>
                        {title}
                    </Typography>
                    <div className={classes.divider}></div>

                    <Grid container spacing={2} justify="space-evenly" alignItems="center">
                        {games.map((game) => (
                            <Grid item key={game.name} >
                                <Button href={game.link} color="primary" variant="contained" className={classes.gamediv}>
                                    <img className={classes.gameimg}
                                         alt={game.name} src={game.logo}
                                         width="100" height="100" />
                                </Button>
                            </Grid>
                        ))}
                    </Grid>

                    <div className={classes.icon}>
                        <img src={game_img} className={classes.img}/>
                        <p gutterBottom className={classes.text}>
                            Click the games above to download!
                        </p>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

Game.propTypes = {
    games: PropTypes.array,
    title: PropTypes.string
};