import React from "react";
import { Container } from "../../globalStyles";
import Svg1 from "../../images/hygiene.svg";
import Svg2 from "../../images/construction.svg";
import Svg3 from "../../images/qualitative.svg";
import Svg4 from "../../images/environment.svg";
import {
  ImageContainer,
  Img,
  Title,
  TitleContainer,
  Decscription,
  HeadText,
  TextContainer,
  TextWrapper,
  ItemsContainer,ImageItem,Item,
  ItemDesc
} from "./AboutElements";

function About() {
  return (
    <>
      <ImageContainer>
        <TitleContainer>
          <Title>We make Mondays to Fridays exciting </Title>
        </TitleContainer>

       {/*  <Img src="image/work.jpg"></Img> */}

      </ImageContainer>

      <Container>
        <TextWrapper>
          <HeadText>SOCIÉTÉ</HeadText>
          <Decscription>
            MCDOSkills est une filiale du groupe MCDOS, constituée des élites
            experts jeunes dynamiques, talentueux, ambitieux et toujours
            disponibles à satisfaire vos ambitions.<br/> MCDOSkills offre via le
            programme 360 Degree Des services dédiés aux parties (Entreprises,
            jeunes diplômés, étudiants, associations, coopératives,..) qui
            veulent créer ou améliorer leurs activités tout en visant une
            excellence professionnelle, opérationnelle et durable.
          </Decscription>
        </TextWrapper>

        <TextWrapper>
          <HeadText>MISSION</HeadText>
          <Decscription>
          "Ready to change !" résume notre mission à savoir : l’apprentissage pratiques des métiers industriels et support créateurs de richesse, accompagnement sur le terrain des entreprises pour atteindre l’excellence opérationnelle, les doter des moyens humains, des moyens matériels optimaux, des techniques du marketing web, digitalisation, des techniques de communication, d’audit et de contrôle.
          </Decscription>
        </TextWrapper>

        <TextWrapper>
          <HeadText>VISION</HeadText>
          <Decscription>
          Créer des opportunités économiques durables, Word Class, et à Zéro mauvais stress pour chaque partie. 
          </Decscription>
        </TextWrapper>




        <TextWrapper>
          <HeadText>VALEUR</HeadText>
          <Decscription>
            Transmettre avec pragmatisme et humilité une réflexion, des méthodes
            et des savoir-faire, enrichis par une expérience terrain.<br/> Faire
            l’effort de comprendre vos réalités opérationnelles, afin que nos
            actions de formation servent vos priorités. <br/>Faire preuve d’honnêteté
            et de franchise dans toutes les étapes de la relation.
          </Decscription>
        </TextWrapper>
        <ItemsContainer>
                <Item>
                  <ImageItem src={Svg3}></ImageItem>
                  <ItemDesc>Qualité</ItemDesc>
                </Item>
                <Item>
                <ImageItem src={Svg1}></ImageItem>
                <ItemDesc>Hygiene</ItemDesc>
                </Item>
                <Item>
                <ImageItem src={Svg2}></ImageItem>
                <ItemDesc>Sécurité</ItemDesc>
                </Item>
                <Item>
                <ImageItem src={Svg4}></ImageItem>
                <ItemDesc>Onvironnement</ItemDesc>
                </Item>
        </ItemsContainer>
      </Container>
    </>
  );
}

export default About;
