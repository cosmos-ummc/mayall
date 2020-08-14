import React, {useEffect, useState} from 'react';
import FirstModal from "./first-modal";
import SecondModal from "./second-modal";
import {setVisibility} from "../../api/visibility";
import {getIsFirstTimeChat, setNotFirstTimeChat} from "../../api/chat";

export default function ChatModals() {
    const [openFirst, setOpenFirst] = useState(true);
    const [openSecond, setOpenSecond] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // check if first time chat
        getIsFirstTimeChat().then(res => {
            setVisible(res);
        });
    }, []);

    const closeFirst = () => {
        setOpenFirst(false);
        setOpenSecond(true);
    };

    const closeSecond = (e, visible) => {
        e.preventDefault();
        setOpenSecond(false);
        setVisibility(visible).then(() => {
            // set not first time
            setNotFirstTimeChat().then(() => {
                window.location.reload(true);
            });
        });
    };

    if (!visible) {
        return <></>;
    }

    return (
        <React.Fragment>
            <FirstModal openFirst={openFirst} closeFirst={closeFirst}/>
            <SecondModal openSecond={openSecond} closeSecond={closeSecond}/>
        </React.Fragment>
    );
}
