import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    }
}));

export default function Game(props) {
    const classes = useStyles();
    const { title, games } = props;

    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <Grid container spacing={2} alignItems="flex-end">
                    {games.map((game) => (
                        <Grid item key={game.name}>
                            <a href={game.link}>
                                <img border="0" alt={game.name} src={game.logo} width="100" height="100" />
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

Game.propTypes = {
    games: PropTypes.array,
    title: PropTypes.string
};