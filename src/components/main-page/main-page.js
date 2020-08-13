import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './navbar';
import Topview from './topview';
import Feed from './feed';
import Video from './video';
import Chat from './chat';
import Game from './game';
import Footer from './footer';
import {Redirect, useHistory} from "react-router-dom";
import DisableMatch from "../disable-match/disable-match"
import FoundMatchModal from "../found-match-modal/found-match-modal"
import TipsAlert from "../tips-alert/tips-alert";
import {getGames, getMeditations, getRecommendedFeeds, getSpecialFeeds, getTips} from "../../api/main";
import {mapImage} from "../../utils/image-mapper";
import {findMatch} from "../../api/chat";
import Pusher from "pusher-js";


const topimgs = [
    {
        name: 'topview01',
        linkText: '../../images/topview01.jpg'
    },
    {
        name: 'topview02',
        linkText: '../../images/topview02.jpg'
    }
];

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

    const [recommendedFeeds, setRecommendedFeeds] = useState([]);
    const [specialFeeds, setSpecialFeeds] = useState([]);
    const [meditations, setMeditations] = useState([]);
    const [adrGames, setAdrGames] = useState([]);
    const [iosGames, setIosGames] = useState([]);
    const [tips, setTips] = useState({});
    const [isOpenMatch, setIsOpenMatch] = useState(false);
    const history = useHistory();

    const closeMatchModal = () => {
        setIsOpenMatch(false);
    };

    const navChatPage = async (event) => {
        event.preventDefault();
        history.push("/chat");
    };

    useEffect(() => {
        // subscribe to public channel
        const pusher = new Pusher("ec07749c8ce28d32448a", {
            cluster: "ap1",
            encrypted: true,
        });
        const channel = pusher.subscribe("general");
        channel.bind("chatroom", (data) => {
            console.log("event received");
            console.log(data);
            const ids = data.split(",");
            // if user is in the chatroom, trigger open match modal
            if(ids.length === 2 && (ids[0] === localStorage.getItem("auth-token") || ids[1] === localStorage.getItem("auth-token"))) {
                setIsOpenMatch(true);
            }
        });
        getRecommendedFeeds().then((data) => {
            data.forEach((item) => {
                item.img = mapImage(data.imgPath);
                item.buttonText = 'Read More';
            });
            setRecommendedFeeds(data);
        });
        getSpecialFeeds().then((data) => {
            data.forEach((item) => {
                item.img = mapImage(data.imgPath);
                item.buttonText = 'Read More';
            });
            setSpecialFeeds(data);
        });
        getMeditations().then((data) => {
            data.forEach((item) => {
                item.title = item.id;
                item.src = item.link;
            });
            setMeditations(data);
        });
        getTips().then((data) => {
            if (data.length === 1) {
                setTips({title: data[0].title, description: data[0].description});
            }
        });
        const tmpAdr = [];
        const tmpIos = [];
        getGames().then((data) => {
            data.forEach((item) => {
                tmpAdr.push({
                    name: item.id + "adr",
                    logo: mapImage(item.imgPathAdr),
                    link: item.linkAdr,
                });
                tmpIos.push({
                    name: item.id + "ios",
                    logo: mapImage(item.imgPathIos),
                    link: item.linkIos,
                });
            });
            setAdrGames(tmpAdr);
            setIosGames(tmpIos);
        });
        // scheduler to find match
        const interval = setInterval(() => {
            findMatch();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    // if not logged in, navigate to login page
    const token = localStorage.getItem("auth-token");
    if (!token) {
        return <Redirect to="/login"/>;
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            <Navbar/>

            <TipsAlert title={tips.title} description={tips.description}/>

            <section id="home">
                <Topview topimgs={topimgs}/>
            </section>

            <section id="feeds">
                <Feed title="Recommended" feed={recommendedFeeds}/>
                <Feed title="Expecially for You" feed={specialFeeds}/>
            </section>

            <section id="meditation">
                <Video title="Meditation Video" videos={meditations}/>
            </section>

            <Chat title="Find New Friends to Chat With!" buttonText="Let's Explore"/>

            <section id="games">
                <Game title="Suggested Games for Android Users" games={adrGames}/>
                <Game title="Suggested Games for IOS Users" games={iosGames}/>
            </section>

            <Footer footer={footer}/>

            <DisableMatch/>
            <FoundMatchModal nameToMatch={'Anonymous'} isOpen={isOpenMatch} closeModal={closeMatchModal} navChatPage={navChatPage}/>

        </React.Fragment>

    );
}
