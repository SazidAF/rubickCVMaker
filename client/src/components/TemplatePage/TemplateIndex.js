import React from 'react';
import Icon1 from '../../images/CV2.png';
import Icon2 from '../../images/CV3.png';
import Icon3 from '../../images/CV4.png';
import { ServicesCard, ServicesContainer, ServicesIcon, ServicesWrapper, ServicesH2, ServicesP , ServicesH1} from '../LandingPage/Services/ServiceElements';
import { Img } from '../Dashboard/Elements';
import { TemplatesContainer } from './TemplateElements';

const Template = () => {
    return (
        <>
        <TemplatesContainer>
            <ServicesH1> Select a template to start with </ServicesH1>

            <Img src='Icon1'/>
        </TemplatesContainer>
            
        </>
    )
}

export default Template
