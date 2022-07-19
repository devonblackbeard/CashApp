import React, {useState} from 'react'
import { HeroContainer, HeroContent, HeroBg, VideoBg, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Vid from '../../videos/video.mp4';
import { Button } from '../ButtonElement';


const HeroSection = () => {
const [hover, setHover] = useState(false);

const onHover = () => {
  setHover(!hover);
}

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Vid} type='video/mp4' />
      </HeroBg>

      <HeroContent>
        <HeroH1>Virtual Banking Just Got Faster</HeroH1>
        <HeroP>
          Sign up for a new account and receive $300 in credit
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup'
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}>
              Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
