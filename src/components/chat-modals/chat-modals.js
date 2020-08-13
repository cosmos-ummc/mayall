import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FirstModal from "./first-modal";
import SecondModal from "./second-modal";
import {FoundMatchModal} from "../found-match-modal";

const useStyles = makeStyles((theme) => ({

}));

export default function ChatModals(){
    const classes = useStyles();

    return (
        <React.Fragment>
            <FoundMatchModal />
            <SecondModal />
            <FirstModal />
        </React.Fragment>
    );
}