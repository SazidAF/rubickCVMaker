import React from 'react';
import Icon1 from '../../../../src/images/images2.jfif';
import Icon2 from '../../../../src/images/man-cv.jpg';
import Icon3 from '../../../../src/images/people-cv.jpg';
import { ServicesCard, ServicesContainer, ServicesIcon, ServicesWrapper, ServicesH2, ServicesP , ServicesH1} from './ServiceElements';

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1> Simple steps to generate and download CV </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Templates</ServicesH2>
                        <ServicesP>choose a template from our wide range of templates</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Information</ServicesH2>
                        <ServicesP>give your information by filling out some forms</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Generate CV</ServicesH2>
                        <ServicesP>finalize your CV and download or print</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            
        </ServicesContainer>
            
        </>
    )
}

export default Services
