import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import logo_img from "../../images/logo.PNG";
import cyan from "@material-ui/core/colors/cyan";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    /* Navbar */
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
        display: 'flex',
        flexFlow: 'row',
    },
    logo: {
        margin: theme.spacing(1, 3),
        width: '100px'
    },
    spacer:{
        flex: '1 1 auto'
    },
    link: {
        margin: theme.spacing(1),
        '&:hover': {
            fontWeight: 'bold',
            textDecoration: 'none',
            color: `${cyan[500]}`,
        }
    },
    divider: {
        backgroundColor: 'grey',
        width: '2px',
        height: '50px',
        marginLeft: '10px'
    },
    button: {
        margin: theme.spacing(0.5),
        borderColor: 'rgba(255, 255, 255, 0)',
    },
    icon: {
        fontSize : '35px'
    }
}));

const icons = {
    DateRangeIcon : DateRangeIcon,
    ChatIcon : ChatIcon,
    PersonIcon : PersonIcon
}

export default function Navbar(props) {
    const classes = useStyles();
    const { func_sections, info_sections } = props;

    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>

                    <img className={classes.logo} src={logo_img}/>

                    <div className={classes.spacer}/>
                    <nav>
                        {info_sections.map((section) => (
                            <Link
                                color="textPrimary"
                                noWrap
                                key={section.title}
                                variant="button"
                                href={section.url}
                                className={classes.link}
                            >
                                {section.title}
                            </Link>
                        ))}
                    </nav>

                    <div className={classes.divider}/>

                    {func_sections.map((section) => (
                        <Button
                            color="primary"
                            key={section.title}
                            variant="outlined"
                            href={section.url}
                            className={classes.button}
                        >
                            {React.createElement(icons[section.icon], {className:`${classes.icon}`})}
                        </Button>

                    ))}

                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Navbar.propTypes = {
    func_sections: PropTypes.array,
    info_sections: PropTypes.array
};
