import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import cyan from "@material-ui/core/colors/cyan";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import search_img from "../../images/searchIcon.PNG";



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
        backgroundColor: `${cyan[900]}`,
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
        width: '40%'
    },
    img: {
        width: 50,
        margin: theme.spacing(0, 0.5),
    },
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
                            <Grid item key={game.name}>
                                <a href={game.link}>
                                    <img border="0" alt={game.name} src={game.logo} width="100" height="100" />
                                </a>
                            </Grid>
                        ))}
                    </Grid>

                    <div className={classes.icon}>
                        <SportsEsportsIcon className={classes.img}/>
                        <Typography gutterBottom>
                            Click the games above to download!
                        </Typography>
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