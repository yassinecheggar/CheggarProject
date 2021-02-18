import React from "react";
import { Container } from "../../globalStyles";
import { TopLine } from "../InfoSection/InfoSectionElements";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
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
          </GroupWrapper>
        </FromWrapper>
      </Container>
    </>
  );
}

export default Contact;
