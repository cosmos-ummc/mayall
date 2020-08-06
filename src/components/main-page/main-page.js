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

const useStyles = makeStyles((theme) => ({

}));

const info_sections = [
    { title: "Health's Feed", url: '#' },
    { title: 'Recommended', url: '#' },
    { title: 'Expecially For You', url: '#' },
    { title: 'Meditation Video', url: '#' }
];

const func_sections = [
    { title: 'SCHEDULE', url: '#' },
    { title: 'CHAT', url: '#' },
    { title: 'LOGIN', url: '#' }
];

const topview = {
    title: 'title here',
    description: 'description here',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    linkText: "Read more..."
}

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

            <Navbar title="MHPSS" info_sections={info_sections} func_sections={func_sections} />

            <Topview topview={topview}/>

            <Feed title="Health's Feed" feed={health_feeds}/>
            <Feed title="Recommended" feed={recommended_feeds}/>
            <Feed title="Expecially for You" feed={expecially_feeds}/>

            <Video title="Meditation Video" videos={videos}/>

            <Chat title="Find New Friends to Chat With!" buttonText="Let's Explore"/>

            <Game title="Suggested Games for Android Users" games={android_games}/>
            <Game title="Suggested Games for IOS Users" games={ios_games}/>

            <Footer footer={footer}/>


        </React.Fragment>
    );
}