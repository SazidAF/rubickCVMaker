import React, {useState} from 'react';
import Footer from './LandingPage/Footer/FooterIndex';
import Sidebar from './LandingPage/Sidebar/SideIndex';
import Navbar from './LandingPage/Navbar/NavIndex'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Footer></Footer>
        </>
    );
};

export default Home
