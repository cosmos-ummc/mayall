import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import logo_img from "../../images/logo.PNG";
import cyan from "@material-ui/core/colors/cyan";
import Scrollspy from 'react-scrollspy';
import {useHistory} from "react-router-dom";
import {login, logout} from "../../api/auth";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

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
    spacer: {
        flex: '1 1 auto'
    },
    link: {
        margin: theme.spacing(1),
        '&:hover, &:focus': {
            fontWeight: 'bold',
            textDecoration: 'none',
            color: `${cyan[600]}`,
        },
        '&:hover': {
            fontWeight: 'bold',
            textDecoration: 'none',
            color: `${cyan[200]}`,
        },
    },
    active: {
        margin: theme.spacing(1),
        fontWeight: 'bold',
        textDecoration: 'none',
        color: `${cyan[600]}`,
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
        fontSize: '35px'
    },
    menu: {
        marginTop: theme.spacing(4),
    },
    typography: {
        padding: theme.spacing(2),
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export const info_sections = [
    { title: "Home", url: '/' },
    { title: "Health's Feed", url: '#feeds' },
    { title: 'Meditation', url: '#meditation' },
    { title: 'Games', url: '#games' },
];
export const func_sections = [
    { title: 'SCHEDULE', url: 'schedule', icon: 'DateRangeIcon' },
    { title: 'SCHEDULE-NONE', url: 'schedule-none', icon: 'DateRangeIcon' },
    { title: 'CHAT', url: 'chat', icon: 'ChatIcon' },
    { title: 'PROFILE', url: '#', icon: 'PersonIcon' }
];

const icons = {
    DateRangeIcon: DateRangeIcon,
    ChatIcon: ChatIcon,
    PersonIcon: PersonIcon
}

export default function Navbar(props) {
    const classes = useStyles();


    {/* Handle Profile Menu */}
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    /* Popover */
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl2(null);
    };

    const open = Boolean(anchorEl2);


    const history = useHistory();

    const handleLogout = async (event) => {
        event.preventDefault();
        await logout();
        history.push("/login");
    };

    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>

                    <img className={classes.logo} src={logo_img}/>

                    <div className={classes.spacer}/>

                    <nav className="nav">
                        <Scrollspy items={['home', 'feeds', 'meditation', 'games']}
                                   currentClassName={classes.active}
                                   style={{
                                       fontWeight: 300
                                   }}
                                   offset={-150}
                                   onUpdate={
                                       (el) => {
                                           console.log(el)
                                       }
                                   }>
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
                        </Scrollspy>
                    </nav>

                    <div className={classes.divider}/>

                    <div>

                        {/* Schedule */}

                        <Button
                            color="primary"
                            key={func_sections[0].title}
                            variant="outlined"
                            href={func_sections[0].url}
                            className={classes.button}
                        >
                            <Badge color="secondary" overlap="circle" badgeContent=" " variant='dot'>
                                {React.createElement(icons[func_sections[0].icon], {className: `${classes.icon}`})}
                            </Badge>

                        </Button>

                        {/* Schedule None */}
                        <Button
                            color="primary"
                            key={func_sections[1].title}
                            variant="outlined"
                            href={func_sections[1].url}
                            className={classes.button}
                        >
                            <Badge color="secondary" overlap="circle" badgeContent=" " variant='dot'>
                                {React.createElement(icons[func_sections[1].icon], {className: `${classes.icon}`})}
                            </Badge>
                        </Button>

                        {/* Chat */}
                        <Button
                            color="primary"
                            key={func_sections[2].title}
                            variant="outlined"
                            href={func_sections[2].url}
                            className={classes.button}

                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <Badge color="secondary" overlap="circle" badgeContent=" " variant='dot'>
                                {React.createElement(icons[func_sections[2].icon], {className: `${classes.icon}`})}
                            </Badge>
                        </Button>
                        <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl2}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography>You hava new message.</Typography>
                        </Popover>


                        {/* Profile */}
                        <Button
                            color="primary"
                            key={func_sections[3].title}
                            variant="outlined"
                            href={func_sections[3].url}
                            className={classes.button}
                            aria-controls={"simple-menu"}
                            aria-haspopup={true}
                            onClick={handleClick}
                        >
                            {React.createElement(icons[func_sections[3].icon], {className: `${classes.icon}`})}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.menu}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>

                    {/*<div>*/}
                    {/*    {func_sections.map((section) => (*/}
                    {/*        <Button*/}
                    {/*            color="primary"*/}
                    {/*            key={section.title}*/}
                    {/*            variant="outlined"*/}
                    {/*            href={section.url}*/}
                    {/*            className={classes.button}*/}
                    {/*            aria-controls={`${section.title}` === 'PROFILE' ? "simple-menu" : null}*/}
                    {/*            aria-haspopup={`${section.title}` === 'PROFILE' ? true : false}*/}
                    {/*            onClick={`${section.title}` === 'PROFILE' ? handleClick : null}*/}
                    {/*        >*/}
                    {/*            {React.createElement(icons[section.icon], {className: `${classes.icon}`})}*/}
                    {/*        </Button>*/}

                    {/*    ))}*/}
                    {/*    <Menu*/}
                    {/*        id="simple-menu"*/}
                    {/*        anchorEl={anchorEl}*/}
                    {/*        keepMounted*/}
                    {/*        open={Boolean(anchorEl)}*/}
                    {/*        onClose={handleClose}*/}
                    {/*        className={classes.menu}*/}
                    {/*    >*/}
                    {/*        <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    {/*        <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
                    {/*    </Menu>*/}
                    {/*</div>*/}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Navbar.propTypes = {
    func_sections: PropTypes.array,
    info_sections: PropTypes.array
};
