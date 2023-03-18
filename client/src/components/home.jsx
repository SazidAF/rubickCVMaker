import React, {useState} from 'react';
import Footer from './LandingPage/Footer/FooterIndex';

import Navbar from './LandingPage/Navbar/NavIndex'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
           
            <Navbar toggle={toggle}/>
            <Footer></Footer>
        </>
    );
};

export default Home
