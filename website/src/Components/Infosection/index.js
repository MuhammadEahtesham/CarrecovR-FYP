import React from 'react'
import { Img, ImgWrap,InfoContainer, InfoWrapper, InfoRow,Column1,Column2,BtnWrap,TextWrapper,TopLine,Heading,Subtitle } from './InfoElements'
import {Button} from '../ButtonElements'

const index = ({lightBg,id,imgStart,topLine,headLine,lightText,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id ={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to="home" 
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>

    </>
  )
}

export default index