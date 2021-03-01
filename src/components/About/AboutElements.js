import styled  from 'styled-components';


export const  ImageContainer = styled.div`
 
 background: black;
 
 overflow: hidden;
    height:500px ;
    
`;

export const  Img = styled.img`
   
   height: 100%;
   width:100%;
  opacity:0.3 ;
   
`;

export const Title = styled.h1`
color:white;
font-size:50px;

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
