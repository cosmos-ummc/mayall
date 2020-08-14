import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Copyright(props) {
    const {color} = props;

    return (
        <div style={{color: color}}>
            <Typography variant="body2" color="inherit" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Quaranteam
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>

    );
}
