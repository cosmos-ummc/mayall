import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";

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
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    }
}));

export default function Navbar(props) {
    const classes = useStyles();
    const { func_sections, info_sections, title } = props;

    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        {title}
                    </Typography>
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
                    {func_sections.map((section) => (
                        <Button
                            color="primary"
                            key={section.title}
                            variant="outlined"
                            href={section.url}
                            className={classes.link}
                        >
                            {section.title}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Navbar.propTypes = {
    func_sections: PropTypes.array,
    info_sections: PropTypes.array,
    title: PropTypes.string,
};