import React,{useState} from 'react'
import Video from '../../videos/video5.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'
const Index = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src= {Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Need Your Car Back</HeroH1>
            <HeroP>Sign Up to recover lost or stolen cars</HeroP>
            <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
       
    </HeroContainer>
  )
}

export default Index