import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
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
import {Redirect, useHistory} from "react-router-dom";
import CustomBarChart from "../visualization/custom-bar-chart";
import {getReports} from "../../api/chart";
import {getCompleted} from "../../api/complete";
import {getPatient} from "../../api/patient";


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
        backgroundColor: `${cyan[200]}`,
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
];

export default function Complete() {

    const history = useHistory();
    const [state, setState] = useState({
        chartStressSeries: [],
        chartDepressionSeries: [],
        chartAnxietySeries: [],
        chartPtsdSeries: [],
        chartDailySeries: [],
        chartStressStatuses: [],
        chartDepressionStatuses: [],
        chartAnxietyStatuses: [],
        chartPtsdStatuses: [],
        chartDailyStatuses: [],
        chartDassCategories: [],
        chartIesrCategories: [],
    });

    useEffect(() => {
        getCompleted().then(completed => {
            if(!completed) history.push("/");
        });
        getPatient().then(data => {
            getReports(data.id).then((data) => {
                console.log(data);
                // set categories
                const dassCategories = [];
                const iesrCategories = [];
                data.stressCounts.forEach((data, i) => {
                    dassCategories.push("Test " + (i + 1));
                });
                data.ptsdCounts.forEach((data, i) => {
                    iesrCategories.push("Test " + (i + 1));
                });

                setState({
                    chartStressSeries: data.stressCounts,
                    chartDepressionSeries: data.depressionCounts,
                    chartAnxietySeries: data.anxietyCounts,
                    chartPtsdSeries: data.ptsdCounts,
                    chartDailySeries: data.dailyCounts,
                    chartDassCategories: dassCategories,
                    chartIesrCategories: iesrCategories,
                });

                console.log(state);
            });
        });
    }, []);

    const classes = useStyles();

    // if not logged in, navigate to login page
    const token = localStorage.getItem("auth-token");
    if (!token) {
        return <Redirect to="/login"/>;
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.withfooterdiv}>

                <Navbar/>

                <Container component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom
                                className={classes.header}>
                        Congratulations! You have completed 14-day quarantine!
                    </Typography>
                    <div className={classes.divider}></div>

                    <Grid container>
                        <CustomBarChart title={"DASS Stress Report"} propData={state.chartStressSeries}
                                        propOption={{
                                            chart: {
                                                id: "basic-bar"
                                            },
                                            xaxis: {
                                                categories: state.chartDassCategories,
                                            }
                                        }} description={"Scores"}/>
                        <CustomBarChart title={"DASS Anxiety Report"} propData={state.chartAnxietySeries}
                                        propOption={{
                                            chart: {
                                                id: "basic-bar"
                                            },
                                            xaxis: {
                                                categories: state.chartDassCategories,
                                            }
                                        }} description={"Scores"}/>
                    </Grid>
                    <Grid container>
                        <CustomBarChart title={"DASS Depression Report"} propData={state.chartDepressionSeries}
                                        propOption={{
                                            chart: {
                                                id: "basic-bar"
                                            },
                                            xaxis: {
                                                categories: state.chartDassCategories,
                                            }
                                        }} description={"Scores"}/>
                        <CustomBarChart title={"IES-R Report"} propData={state.chartPtsdSeries}
                                        propOption={{
                                            chart: {
                                                id: "basic-bar"
                                            },
                                            xaxis: {
                                                categories: state.chartIesrCategories,
                                            }
                                        }} description={"Scores"}/>
                    </Grid>
                    <Grid container>
                        <CustomBarChart title={"Daily Care Report"} propData={state.chartDailySeries}
                                        propOption={{
                                            chart: {
                                                id: "basic-bar"
                                            },
                                            xaxis: {
                                                categories: state.chartIesrCategories,
                                            }
                                        }} description={"Scores"}/>
                    </Grid>
                </Container>

                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <div className={classes.icondiv}>
                            <img className={classes.icon} src={contact_img}/>
                        </div>

                        <div style={{textAlign: 'center'}}>
                            <Typography variant="body1">
                                Welcome to contact Quaranteam via 011-1111111 if you are not feeling well after the
                                quarantine period. We are here to help you.
                            </Typography>
                        </div>

                        <br/>
                        {/*<Copyright />*/}
                    </Container>
                </footer>
            </div>

        </React.Fragment>

    );
}
