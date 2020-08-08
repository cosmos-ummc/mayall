import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import cyan from "@material-ui/core/colors/cyan";
import grey from "@material-ui/core/colors/grey";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(6, 10, 8),
    },
    card: {
        height: "100%",
        maxWidth: 360,
        // borderRadius: 0,
        // backgroundColor: theme.palette.primary.light,
        // color: theme.palette.primary.contrastText,
        // boxShadow: "none"
        display: "flex",
        flexDirection: "column",

        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between"
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
    media: {
        height: 180,
    },
    cardHeader: {
        // height: 40,
        display: 'flex',
        alignItems: 'baseline',
        marginBottom: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(0, 1),
        backgroundColor: `${cyan[500]}`,
        border: `1px solid ${grey[900]}`,
        color: 'white',
        '&:hover': {
            color: 'blue',
        }
    },
}));

export default function Feed(props) {
    const classes = useStyles();
    const { title, feed } = props;

    return (
        <React.Fragment>
            <div style={{backgroundColor: `${title}` === 'Expecially for You' ? `${cyan[50]}` : null}}>
                <Container component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.header}>
                        {title}
                    </Typography>
                    <div className={classes.divider}></div>

                    <Grid container spacing={2} alignItems="stretch">
                        {feed.map((feed) => (
                            <Grid item key={feed.title} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={feed.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h8" component="h3" className={classes.cardHeader}>
                                            {feed.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {feed.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            color="primary"
                                            href={feed.link}
                                            className={classes.button}
                                        >
                                            {feed.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
}

Feed.propTypes = {
    feeds: PropTypes.array,
    title: PropTypes.string
};