import React, {useState} from 'react';
import MainSection from './Dashboard/MainIndex';
import InfoSection from './InfoForm/InfoFormIndex';
import Navbar from './InfoForm/Navbar';
import { homeObjSix } from './LandingPage/InfoSection/data';


const Education = () => {

    return (
        <>
            <Navbar/>
            <InfoSection {...homeObjSix}/>
        </>
    );
};

export default Education
