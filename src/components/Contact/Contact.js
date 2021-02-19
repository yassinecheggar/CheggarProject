import React from "react";
import { Container } from "../../globalStyles";
import { TopLine } from "../InfoSection/InfoSectionElements";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Map from '../Map/Map';

import {
  FormGroup,
  Label,
  Input,
  Message,
  InputLarge,
  FromWrapper,
  GroupWrapper,
  Title,
  Subtitle,
  TitleContainer,
  InfoContainer,
  MapContainer
} from "./Contact.elements";

function Contact() {
  return (
    <>
      <Container>
          <TitleContainer>
              <Title>Reach out to us</Title>
              <Subtitle>Dont be shy, Just tell us about yourself and we’ll figure out the best option for you and your project.</Subtitle>
          </TitleContainer>
        <FromWrapper>
          <GroupWrapper>
            
            <FormGroup>
              <TextField id="name" label="Full Name" />
            </FormGroup>
            <FormGroup>
              <TextField id="Email" label="Email" type="email" />
            </FormGroup>

            <FormGroup>
              <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                
              />
            </FormGroup>
            <FormGroup>
            <Button variant="contained" color="primary" href="#contained-buttons">
        Send
      </Button>
      </FormGroup>
          </GroupWrapper>


          <GroupWrapper>
            
            <InfoContainer>
            <HiOutlineLocationMarker size={40} />
            <Label>Express Chambers II Spaces Works,<br /> Level 5, Royapettah,<br /> Chennai – 600014</Label> 
            </InfoContainer>
            <InfoContainer>
             <BsPhone size={40}/>
             <Label>   +212-649-776-628</Label>
            </InfoContainer>

            <InfoContainer>
             <FiMail size={40}/>
             <Label>  Cheggar13@gmail.com</Label>
            </InfoContainer>
          </GroupWrapper>
        </FromWrapper>
      </Container>
      <Container>
        
        <Title>Visit our office</Title>
        <Label>You don’t need an appointment, just walk in.</Label>
        </Container>
      <Container>
        <Label></Label>
        <Map />
        
      </Container>
    </>
  );
}

export default Contact;
