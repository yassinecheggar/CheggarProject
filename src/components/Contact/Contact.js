import React ,{ useState} from "react";
import { Container } from "../../globalStyles";
import { TopLine } from "../InfoSection/InfoSectionElements";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Map from '../Map/Map';
import { makeStyles } from '@material-ui/core/styles';
import emailjs ,{ init } from 'emailjs-com';


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
  FlexDiv,HR,
} from "./Contact.elements";


const useStyles = makeStyles({
  root: {
    marginTop:'10px;',
    '& label.Mui-focused': {
      color: 'green',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
  },
 
});


const ButtonStyle = makeStyles({
  root: {
      marginTop:'20px;',
    background:'black',
    '&:hover': {
      background: '#ff7315',
      color:'wight'
    },
  },
 
});


function Contact() {
  const classes = useStyles();
  const  classesB = ButtonStyle();
  
  const emptyEmail = {
    name: '',
    email: '',
    msg: '',
  };
  const [email, setEmail] = useState(emptyEmail);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  
  const handleChange = (e) => {
    e.persist();
    setEmail((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await emailjs.send('service_zzt8j7r', 'template_q0xwcn6', email, 'user_fWIK1bCqUbyAQG9ZoOoFF');
      setMessage('Thank you!');
      setEmail(emptyEmail);
    } catch (err) {
      setMessage('error!');
    } finally {
      setLoading(false);
    }
  };
 

  return (
    <>
      <Container>
          <TitleContainer>
              <Title>Nous Contacter <HR></HR></Title>  
              
          </TitleContainer>
          <TitleContainer> <Subtitle>POUR EN SAVOIR PLUS SUR NOTRE OFFRE, POSTULER OU TOUT SIMPLEMENT POSER UNE QUESTION, C’EST PAR ICI !.</Subtitle></TitleContainer>
         
        <FromWrapper>
          <FlexDiv onSubmit={handleSubmit}>
             
            
              <TextField  name="name" label="Full Name"  classes={{ root: classes.root }} value={email.name} onChange={handleChange}/>
            
              <TextField name="email" label="Email" type="email" classes={{ root: classes.root }} onChange={handleChange} value={email.email}/>
            

            
              <TextField
             
                name="msg"
                label="Message"
                value={email.msg}
                multiline
                rows={4}
                classes={{ root: classes.root } }
                onChange={handleChange}
              />
            
            
            <Button variant="contained" color="primary"  type="submit" classes={{ root: classesB.root }}>
        Send
      </Button>
      
          </FlexDiv>


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
      <TitleContainer>
        <Title >Visitez notre bureau <HR></HR></Title>
        </TitleContainer>
        <TitleContainer> <Label>Vous n’avez pas besoin de rendez-vous.</Label></TitleContainer>
       
        </Container>
      <Container>
       
        <Map />
        
      </Container>
    </>
  );
}

export default Contact;
