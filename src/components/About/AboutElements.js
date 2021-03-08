import styled  from 'styled-components';
import Font, { Text } from 'react-font';


export const  ImageContainer = styled.div`
 
 
 
 overflow: hidden;
  height:600px ;
  background-image:linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("image/work.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export const  Img = styled.img`
   
   height: auto;
   width:1400px;
  opacity:0.3 ;
   
`;

export const Title = styled.h1`
color:white;
font-size:50px;
opacity: 0.8;
`;

export const  TitleContainer = styled.div`

  position: absolute;
  top:250px;
  
  left:10%;
  right:10%;
  
`;
export const TextContainer = styled.div`
display:flex;
`;

export const HeadText = styled.h1`
   text-align:center;
   color:#ff7315;
   font-family: 'Cormorant Garamond', serif;
   letter-spacing: 3px;
`;

export const Decscription = styled.p`
     text-align: justify;
  text-justify: inter-word;
   margin-top:10px;
   line-height: 2;
   color:#232020;
   font-family: 'Khula', sans-serif;
   font-weight: 600;
   padding-top:20px;
   
`;
export const TextWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:50px;
margin-bottom:50px;
padding-right:15%;
padding-left:15%;

@media screen and (max-width: 768px) {
  padding-right:0%;
padding-left:0%;
  }
`;
export  const ItemsContainer= styled.div`
  display:flex;
  justify-content:center;
  flex-flow:  wrap;

  
`;
export const Item =styled.div`
  height: 200px;
  width:200px;
`;
export const ImageItem =styled.img`
  height: auto;
  width:100px;
`;
export const ItemDesc =styled.h3`
  margin:10px;
  color:#3a3535;
  font-family:Monoton;
`;

