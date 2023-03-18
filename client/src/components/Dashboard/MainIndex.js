import React, {useState} from 'react';

import { MainContainer, MainBg, VideoBg, MainContent, MainBtnWrapper, MainH1, MainP,ArrowForward, ArrowRight, ImageBg, Img } from './Elements';
import { MyButton3 } from '../LandingPage/ButtonElement';
import img from '../../images/cv1.png';

const MainSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
        {/* <MainContainer>
           
            <MainContent>
               <MainH1>Your CVs</MainH1>
               
            </MainContent>
        </MainContainer> */}
         <MainH1>Your CVs</MainH1>
         <MainBtnWrapper>
         <MyButton3 to='/' onMouseEnter={onHover} onMouseLeave={onHover}  >
             Create new CV
              {/* {(hover ? <ArrowForward /> : ArrowRight />)}; */}
         </MyButton3>
     </MainBtnWrapper>
     <Img src={img}/>

     </>
    )
}

export default MainSection
