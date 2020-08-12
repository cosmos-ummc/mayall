import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import Topview from './topview';
import Feed from './feed';
import Video from './video';
import Chat from './chat';
import Game from './game';
import Footer from './footer';
import feedimg01 from "../../images/feeds/feed01.PNG";
import feedimg02 from "../../images/feeds/feed02.PNG";
import feedimg03 from "../../images/feeds/feed03.PNG";
import gameimg01 from "../../images/games/AntiStress_Anxiety_Relief_Game.png";
import gameimg02 from "../../images/games/bubblewrap_android.png";
import gameimg03 from "../../images/games/flow_free.png";
import gameimg04 from "../../images/games/Pigment_Adult_Coloring_Book.png";

import {Redirect} from "react-router-dom";
import {Schedule} from "../schedule";
import DisableMatch from "../disable-match/disable-match"
import FoundMatch from "../found-match/found-match"
import TipsAlert from "../tips-alert/tips-alert";




const useStyles = makeStyles((theme) => ({

}));


const topimgs = [
    {
        name: 'topview01',
        linkText: '../../images/topview01.jpg'
    },
    {
        name: 'topview02',
        linkText: '../../images/topview02.jpg'
    }
]

const recommended_feeds = [
    {
        title: 'Why Do We Need to Drink Water?',
        img: feedimg01,
        imgPath: 'src/img/feed_img_1',
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: 'How to Start Exercisng At Home?',
        img: feedimg02,
        imgPath: 'src/img/feed_img_2',
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: 'Well Balanced Meals?',
        img: feedimg03,
        imgPath: 'src/img/feed_img_3',
        description: '“I feel Belly Happy” Well balanced meals are important for a healthy body and mind. It will make one feel energetic, focused in their... ',
        buttonText: 'Read More',
        link: "#"
    }
]

const expecially_feeds = [
    {
        title: '(Special)Why Do We Need to Drink Water?',
        img: feedimg01,
        imgPath: 'src/img/feed_img_1',
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: '(Special)How to Start Exercisng At Home?',
        img: feedimg02,
        imgPath: 'src/img/feed_img_2',
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: '(Special)Well Balanced Meals?',
        img: feedimg03,
        imgPath: 'src/img/feed_img_3',
        description: '“I feel Belly Happy” Well balanced meals are important for a healthy body and mind. It will make one feel energetic, focused in their... ',
        buttonText: 'Read More',
        link: "#"
    }
]

const videos = [
    {
        title: 'Medidation Video #1',
        src: 'https://www.youtube.com/embed/W19PdslW7iw'
    },
    {
        title: 'Medidation Video #2',
        src: 'https://www.youtube.com/embed/inpok4MKVLM'
    },
    // {
    //     title: 'Medidation Video #3',
    //     src: 'https://www.youtube.com/embed/itZMM5gCboo'
    // }
]

const android_games =[
    {
        name: "game #1",
        logo: gameimg01,
        link: 'https://play.google.com/store/apps/details?id=com.relextro.anti.stress.games'
    },
    {
        name: "game #1",
        logo: gameimg02,
        link: 'https://play.google.com/store/apps/details?id=com.jakub.barabasgmail.com.bubblewrap'
    },
    {
        name: "game #1",
        logo: gameimg03,
        link: 'https://play.google.com/store/apps/details?id=com.bigduckgames.flow&hl=en_US'
    },
    {
        name: "game #1",
        logo: gameimg04,
        link: 'https://play.google.com/store/apps/details?id=com.pixite.pigment&hl=en_US'
    }
]

const ios_games =[
    {
        name: "game #1",
        logo: gameimg01,
        link: 'https://apps.apple.com/us/app/antistress-anxiety-relief-game/id1438709018'
    },
    {
        name: "game #1",
        logo: gameimg02,
        link: 'https://play.google.com/store/apps/details?id=com.jakub.barabasgmail.com.bubblewrap'
    },
    {
        name: "game #1",
        logo: gameimg03,
        link: 'https://apps.apple.com/us/app/flow-free/id526641427'
    },
    {
        name: "game #1",
        logo: gameimg04,
        link: 'https://apps.apple.com/us/app/pigment-adult-coloring-book/id1062006344'
    }
]

const footer = {
    banner: 'Enjoy Your Day!',
    title: 'Help Resources',
    info01: [
        {
            site: 'Ministry of Health Malaysia official website for information related to COVID-19',
            linkText: 'http://covid-19.moh.gov.my/',
        },
        {
            site: 'Mental Illness Awareness and Support Association (MIASA)',
            linkText: 'https://miasa.org.my/index.html',
        },
        {
            site: 'Malaysian Mental Health Association (MMHA)',
            linkText: 'www.mmha.org.my',
        },
    ],
    info02: [
        {
            site: 'Befrienders',
            linkText: 'https://www.befrienders.org.my/',
        },
        {
            site: 'Talian Kasih',
            linkText: 'https://www.kpwkm.gov.my/kpwkm/index.php?r=portal/full&id=NGtVYXZIMjRqM3diW',
        }
    ],
    phone: '15999',
};


export default function Landing() {

    const classes = useStyles();

    // // if not logged in, navigate to login page
    // const token = localStorage.getItem("auth-token");
    // console.log(token);
    // if (!token) {
    //     return <Redirect to="/login" />;
    // }

    return (
        <React.Fragment>
            <CssBaseline />

            <Navbar />

            <TipsAlert />

            <section id="home">
                <Topview topimgs={topimgs}/>
            </section>

            <section id="feeds">
                <Feed title="Recommended" feed={recommended_feeds} />
                <Feed title="Expecially for You" feed={expecially_feeds} />
            </section>

            <section id="meditation">
                <Video title="Meditation Video" videos={videos} />
            </section>

            <Chat title="Find New Friends to Chat With!" buttonText="Let's Explore"/>

            <section id="games">
                <Game title="Suggested Games for Android Users" games={android_games} />
                <Game title="Suggested Games for IOS Users" games={ios_games}/>
            </section>

            <Footer footer={footer}/>

            <DisableMatch isMatch={true}/>
            <FoundMatch />

        </React.Fragment>

    );
}
