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
import feedimg01 from "../../images/feed01.PNG";
import feedimg02 from "../../images/feed02.PNG";
import feedimg03 from "../../images/feed03.PNG";


const useStyles = makeStyles((theme) => ({

}));

const info_sections = [
    { title: "Home", url: 'home' },
    { title: "Health's Feed", url: '#feeds' },
    { title: 'Meditation', url: '#meditation' },
    { title: 'Games', url: '#games' },
];

const func_sections = [
    { title: 'SCHEDULE', url: '#', icon: 'DateRangeIcon' },
    { title: 'CHAT', url: '#', icon: 'ChatIcon' },
    { title: 'LOGIN', url: '#', icon: 'PersonIcon' }
];

const topimgs = [
    {
        name: 'topview01',
        linkText: '../../images/topview01.PNG'
    },
    {
        name: 'topview02',
        linkText: '../../images/topview02.PNG'
    }
]

const recommended_feeds = [
    {
        title: 'Why Do We Need to Drink Water?',
        img: feedimg01,
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: 'How to Start Exercisng At Home?',
        img: feedimg02,
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: 'Well Balanced Meals?',
        img: feedimg03,
        description: '“I feel Belly Happy” Well balanced meals are important for a healthy body and mind. It will make one feel energetic, focused in their... ',
        buttonText: 'Read More',
        link: "#"
    }
]

const expecially_feeds = [
    {
        title: '(Special)Why Do We Need to Drink Water?',
        img: feedimg01,
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: '(Special)How to Start Exercisng At Home?',
        img: feedimg02,
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        link: "#"
    },
    {
        title: '(Special)Well Balanced Meals?',
        img: feedimg03,
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
        logo: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    }
]

const ios_games =[
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        name: "game #1",
        logo: 'https://source.unsplash.com/random',
        link: '#'
    }
]

const footer = {
    banner: 'Enjoy Your Day!',
    title: 'Help Resources',
    info: [
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
        {
            site: 'Befrienders',
            linkText: 'https://www.befrienders.org.my/',
        },
        {
            site: 'Talian Kasih',
            linkText: 'https://www.kpwkm.gov.my/kpwkm/index.php?r=portal/full&id=NGtVYXZIMjRqM3diW',
        }
    ],
    phone: '15999'

};

export default function Landing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Navbar info_sections={info_sections} func_sections={func_sections} />

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

        </React.Fragment>
    );
}