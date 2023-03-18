import React, {useState} from 'react';
import MainSection from './Dashboard/MainIndex';
import Navbar from './Dashboard/NavbarIndex';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
           <MainSection/>
            <Navbar toggle={toggle}/>
        
        </>
    );
};

export default Dashboard
