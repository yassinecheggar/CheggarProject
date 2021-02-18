import React from "react";
import { Link } from 'react-router-dom';
import { Container  ,Button } from '../../globalStyles';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from "./InfoSectionElements";

function InfoSection(homeObjOne) {
  return (
    <>
      <InfoSec lightBg={homeObjOne.lightBg}>
        <Container>
          <InfoRow imgStart={homeObjOne.imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={homeObjOne.lightTopLine}>
                  {homeObjOne.topLine}
                </TopLine>
                <Heading lightText={homeObjOne.lightText}>
                  {homeObjOne.headline}
                </Heading>
                <Subtitle lightTextDesc={homeObjOne.lightTextDesc}>
                  {homeObjOne.description}
                </Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={homeObjOne.primary}>
                    {homeObjOne.buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={homeObjOne.start}>
                <Img src={homeObjOne.img} alt={homeObjOne.alt} />
              </ImgWrapper>
            </InfoColumn>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
