import React, {useState} from 'react';

import { MainContainer, MainBg, VideoBg, MainContent, MainBtnWrapper, MainH1, MainP,ArrowForward, ArrowRight, ImageBg } from './MainElements';
import { MyButton } from '../ButtonElement';
import img from '../../../../src/images/illustration-woman-desk-cvs.jpg';

const MainSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <MainContainer>
            <MainBg>
                <ImageBg src={img} alt="loading..."/>    
            </MainBg>
            <MainContent>
                <MainH1>
                   Create a professional CV for any job
                </MainH1>
                <MainP>
                Online CV maker 
                </MainP>
                <MainBtnWrapper>
                    <MyButton to='/' onMouseEnter={onHover} onMouseLeave={onHover}  >
                        Build My CV
                         {/* {(hover ? <ArrowForward /> : ArrowRight />)}; */}
                    </MyButton>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
