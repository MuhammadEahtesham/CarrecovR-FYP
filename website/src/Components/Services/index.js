import React from 'react'
import { ServicesContainer,ServicesCard,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper } from './ServicesElements'
import Icon1 from '../../images/p1.png'
import Icon2 from '../../images/p2.png'
import Icon3 from '../../images/p3.png'

const index = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Track Down Your Car</ServicesH2>
                <ServicesP>We help get your car back by our advanced detection module.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Eyes On Every Car</ServicesH2>
                <ServicesP>Monitoring all the cities camera. 24 hours monitoring </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Create an account</ServicesH2>
                <ServicesP>Register yourself and ready to go.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default index