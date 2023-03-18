import React, {useState} from 'react';
import MainSection from './Dashboard/MainIndex';
import InfoSection from './InfoForm/InfoFormIndex';
import Navbar from './InfoForm/Navbar';
import { homeObjFive } from './LandingPage/InfoSection/data';


const Experience = () => {

    return (
        <>
            <Navbar/>
            <InfoSection {...homeObjFive}/>
        </>
    );
};

export default Experience
