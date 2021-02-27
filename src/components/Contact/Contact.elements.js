import styled from 'styled-components';
import { Container } from '../../globalStyles';


export const FormGroup = styled.div`

	color: #0b66a3;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
	
	 width:500px;
	margin: 20px;
    text-align:left;
	@media screen and (max-width: 991px) {
		width:400px;
  }
  @media screen and (max-width: 991px) {
		width:300px;
  }
`;

export const Label = styled.label`
	
    font-size:18px;
	color:#404040;
    font-weight:bold;
	text-align:left;
	padding:10px
`;

export const Input = styled.input`
	padding: 0.5em;
	color: black ;
	background: #ffff;
	border-color:#d1d1d1;
	border-radius: 3px;
	width: 100%;
    height:40px;
    border-style:solid;
	
    font-size:16px;
`;

export const InputLarge = styled.textarea`
	padding: 0.5em;
	color: black ;
	background: #ffffff;
	border-color:#d1d1d1;
	border-radius: 3px;
	width: 100%;
    height:250px;
	
    font-size:16px;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: #101522;
    text-align:left;
`;

export const GroupWrapper = styled.div`
display:block;

`
export const FromWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top:1.5em;
margin-bottom:3em;
flex-wrap: wrap;
`;

export const TitleContainer = styled.div`

display:flex;
flex-direction:column;
`;

export const Title = styled.h1`
margin-top:1.5em;
margin-bottom:0.9em;
color:#232020;
`;

export const Subtitle = styled.h3`

color:#3a3535;
`;

export const InfoContainer = styled.div`
max-width:500px;
display :flex;
margin-top:20px;
margin-top:40px;
color:#ff7315;
`;

export const MapContainer = styled.div`
  width: 600px;
  height:300px;
  
`;
export const FlexDiv = styled.div`
display : flex;
`;


