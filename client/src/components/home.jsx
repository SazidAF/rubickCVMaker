import React, {useState} from 'react';
import Footer from './LandingPage/Footer/FooterIndex';
import Sidebar from './LandingPage/Sidebar/SideIndex';
import Navbar from './LandingPage/Navbar/NavIndex';
import MainSection from './LandingPage/MainSection/MainIndex'
import InfoSection from './LandingPage/InfoSection/InfoIndex';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './LandingPage/InfoSection/data';
import Services from './LandingPage/Services/ServiceIndex';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <MainSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjFour}/>
            <Footer></Footer>
        </>
    );
};

export default Home
