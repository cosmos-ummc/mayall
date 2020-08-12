import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../main-page/navbar';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import chart1 from "../../images/feeds/feed01.PNG";
import chart2 from "../../images/feeds/feed01.PNG";
import chart3 from "../../images/feeds/feed01.PNG";
import chart4 from "../../images/feeds/feed01.PNG";
import cyan from "@material-ui/core/colors/cyan";
import grey from "@material-ui/core/colors/grey";
import Copyright from "../copyright/copyright";
import contact_img from "../../images/contact.PNG";



const useStyles = makeStyles((theme) => ({
    withfooterdiv: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    heroContent: {
        marginTop: theme.spacing(10),
        padding: theme.spacing(6, 10, 8),
    },
    card: {
        height: "100%",
        maxWidth: 360,
        // borderRadius: 0,
        backgroundColor:  `${cyan[200]}`,
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
    chart: {
        height: 150,
    },
    cardHeader: {
        // height: 40,
        display: 'flex',
        alignItems: 'baseline',
        marginBottom: theme.spacing(1)
    },
    buttondiv: {
        width: '12%',
        margin: theme.spacing(5, 'auto'),
    },
    button: {
        margin: theme.spacing(0, 'auto'),
        backgroundColor: `${cyan[500]}`,
        border: `2px solid ${grey[900]}`,
        color: 'black',
        '&:hover': {
            color: 'black',
            border: '2px solid black'
        }
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#5F7D95',
        color: 'white'
    },
    icondiv: {
        width: '30%',
        margin: theme.spacing(1, 'auto')
    },
    icon: {
        height: 110,
        width: 110,
    },
}));


const reports = [
    {
        title: 'Comparison of depression scale before and after',
        img: chart1,
        imgPath: 'src/img/feed_img_1',
        description: 'Description: 1st result is moderate, 2nd result is severe....etc',
    },
    {
        title: 'Comparison of anxiety scale before and after',
        img: chart2,
        imgPath: 'src/img/feed_img_2',
        description: 'Description: 1st result is moderate, 2nd result is severe....etc',
    },
    {
        title: 'Comparison of stress scale before and after',
        img: chart3,
        imgPath: 'src/img/feed_img_3',
        description: 'Description: 1st result is moderate, 2nd result is severe....etc',
    },
    {
        title: 'Comparison of 7-day vs 14-day (IES-R) ',
        img: chart4,
        imgPath: 'src/img/feed_img_3',
        description: 'Write about the consequence of result',
    }
]


export default function Complete() {

    const classes = useStyles();




    return (
        <React.Fragment>
            <CssBaseline />



            <div className={classes.withfooterdiv}>

                <Navbar />

                <Container component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.header}>
                        Congratulations! You have completed 14-day quarantine!
                    </Typography>
                    <div className={classes.divider}></div>

                    <Grid container spacing={2} alignItems="stretch">
                        {reports.map((report) => (
                            <Grid item key={report.title} xs={12} sm={6} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.chart}
                                        image={report.img}
                                    />
                                    <CardContent>
                                        <Typography variant="h8" component="h3" className={classes.cardHeader}>
                                            {report.title}
                                        </Typography>
                                        <Typography color="textSecondary" component="p">
                                            {report.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <div className={classes.buttondiv}>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                        >
                            Download
                        </Button>
                    </div>

                </Container>

                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <div className={classes.icondiv}>
                            <img className={classes.icon} src={contact_img}/>
                        </div>

                        <Typography variant="body1">
                            Welcome to contact QUARANTEAM via 011-1111111 if you are not feeling well after the quarantine period. We are here to help you.
                        </Typography>
                        <br/>
                        {/*<Copyright />*/}
                    </Container>
                </footer>
            </div>

        </React.Fragment>

    );
}
