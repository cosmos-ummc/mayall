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
import Link from "@material-ui/core/Link";
import cyan from "@material-ui/core/colors/cyan";


const useStyles = makeStyles((theme) => ({
    link: {
        margin: theme.spacing(1),
        '&:hover': {
            fontWeight: 'bold',
            textDecoration: 'none',
            color: `${cyan[500]}`,
        }
    },
}));

const info_sections = [
    { title: "Home", url: '#' },
    { title: "Health's Feed", url: '#feed02' },
    { title: 'Recommended', url: '#feed03' },
    { title: 'Expecially For You', url: '#feed04' },
    { title: 'Meditation Video', url: '#feed05' }
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

const health_feeds = [
    {
        title: 'Why Do We Need to Drink Water?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    },
    {
        title: 'How to Start Exercisng At Home?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    },
    {
        title: 'Well Balanced Meals?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: '“I feel Belly Happy” Well balanced meals are important for a healthy body and mind. It will make one feel energetic, focused in their... ',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    }
]

const recommended_feeds = [
    {
        title: '(Recommended)Why Do We Need to Drink Water?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    },
    {
        title: '(Recommended)How to Start Exercisng At Home?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    },
    {
        title: '(Recommended)Well Balanced Meals?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: '“I feel Belly Happy” Well balanced meals are important for a healthy body and mind. It will make one feel energetic, focused in their... ',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    }
]

const expecially_feeds = [
    {
        title: '(Special)Why Do We Need to Drink Water?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: 'Exercise can help in physical and mental health. Duration of exercise: at least 30 minutes a day and this can be done separately in three...',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    },
    {
        title: '(Special)How to Start Exercisng At Home?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: 'We need water to survive. You will feel good, energetic and your skin will be supple when you are well hydrated. How much fluid do you need?',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
    },
    {
        title: '(Special)Well Balanced Meals?',
        img: 'url(https://github.com/cosmos-ummc/mayall)',
        description: '“I feel Belly Happy” Well balanced meals are important for a healthy body and mind. It will make one feel energetic, focused in their... ',
        buttonText: 'Read More',
        buttonVariant: 'outlined',
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
    {
        title: 'Medidation Video #3',
        src: 'https://www.youtube.com/embed/itZMM5gCboo'
    }
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

            <section id="#"><Topview topimgs={topimgs}/></section>

            <section id="feed02"><Feed title="Health's Feed" feed={health_feeds} /></section>

            <section id="feed03"><Feed title="Recommended" feed={recommended_feeds} /></section>

            <section id="feed04"><Feed title="Expecially for You" feed={expecially_feeds} /></section>

            <section id="feed05"><Video title="Meditation Video" videos={videos} /></section>

            <Chat title="Find New Friends to Chat With!" buttonText="Let's Explore"/>

            <Game title="Suggested Games for Android Users" games={android_games} id="feed05"/>
            <Game title="Suggested Games for IOS Users" games={ios_games}/>

            <Footer footer={footer}/>


        </React.Fragment>
    );
}