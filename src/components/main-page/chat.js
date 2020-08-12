import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import search_img from "../../images/searchIcon.PNG";
import post_font from '../../fonts/Post-No-Bills-Jaffna-Regular-400.ttf';

const postfont = {
    fontFamily: 'Post-No-Bills-Jaffna-Regular',
    fontStyle: 'normal',
    fontWeight: 100,
    src: `url(${post_font})`
};

const useStyles = makeStyles((theme) => ({
    canvas: {
        backgroundColor: '#212121',
        color: theme.palette.common.white,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    div: {
        color: theme.palette.common.white,
        // flexWrap: 'wrap',
        display: 'flex',
        flexFlow: 'row',
        flex: '1 1 auto'

    },
    spacer: {
        flex: '1 1 auto'
    },
    icon: {
        marginLeft: theme.spacing(5),
        display: 'flex',
        flexFlow: 'row',
    },
    img: {
        width: 50,
        margin: theme.spacing(0, 2),
    },
    title: {
        fontFamily: postfont,
    },
    button: {
        marginRight: theme.spacing(10),
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        padding: theme.spacing(1, 3),
        '&:hover': {
            backgroundColor: 'grey',
            color: 'white',
        }
    }
}));

export default function Chat(props) {
    const classes = useStyles();
    const {title, buttonText} = props;

    return (
        <React.Fragment>
            <Paper className={classes.canvas}>

                <div className={classes.div}>
                    <div className={classes.icon}>
                        <img className={classes.img} src={search_img}/>
                        <Typography component="h3" variant="h4" color="inherit" gutterBottom className={classes.title}>
                            {title}
                        </Typography>
                    </div>

                    <div className={classes.spacer}/>
                    <Button href="#" color="primary" variant="contained" className={classes.button}>
                        {buttonText}
                    </Button>

                </div>

            </Paper>
        </React.Fragment>
    );
}

Chat.propTypes = {
    title: PropTypes.string,
    buttonText: PropTypes.string
};
