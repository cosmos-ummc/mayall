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
import cyan from "@material-ui/core/colors/cyan";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 8),
        marginBottom: theme.spacing(5),
        // backgroundColor: 'pink'
    },
    card: {
        maxWidth: 450,
        // height: 200,
        // width: 450,
        // display: "flex",
        borderRadius: 0,
        // backgroundColor: `rgba(255, 255, 255, 0)`,
        backgroundColor: `${cyan[100]}`,
        boxShadow: "none",
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
    content: {
        width: '100%',
        height: '100%',
        margin: theme.spacing(0),
    },
    media: {
        height: 250,
    }
}));

export default function Video(props) {
    const classes = useStyles();
    const { title, videos } = props;

    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.header}>
                    {title}
                </Typography>
                <div className={classes.divider}></div>

                <Grid container spacing={2} direction="row"
                      justify="center"
                      alignItems="center"
                >
                    {videos.map((video) => (
                        <Grid item key={video.title} xs={6} >
                            <Card className={classes.card}>
                                {/*<CardActions>*/}
                                    {/*<CardContent>*/}
                                        <CardMedia
                                            component="iframe"
                                            className={classes.media}
                                            src={video.src}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        {/*<iframe*/}
                                        {/*    className={classes.content}*/}
                                        {/*    src={video.src}*/}
                                        {/*    frameBorder="0"*/}
                                        {/*    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                                        {/*    allowFullScreen></iframe>*/}
                                    {/*</CardContent>*/}
                                {/*</CardActions>*/}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <h3 style={{textAlign: "center"}}>Please do the exercise in a peaceful environment to gain the best experience !</h3>
                <h3 style={{textAlign: "center"}}>Stay tuned for different meditation exercise tomorrow !</h3>
            </Container>
        </React.Fragment>
    );
}

Video.propTypes = {
    videos: PropTypes.array,
    title: PropTypes.string
};
