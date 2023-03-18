import React, {useState} from 'react';
import Footer from './LandingPage/Footer/FooterIndex';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
           <h1>home</h1>
           <Footer></Footer>
        </>
    );
};

export default Home
