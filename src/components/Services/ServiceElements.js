import styled  from 'styled-components';
import img from '../../images/serviceBack.jpg';

export const Wrapper = styled.div`

height: 600px ;
`;
export const  HeadContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:60px;
    margin-bottom:60px;
`;

export const  HeadMessage = styled.h1`
text-align:left;
margin:50px;
font-size:50px;
color:#636363;
`;
export const Itemcontainer = styled.div`

padding:20px;
display: flex;

flex-wrap: wrap;
justify-content:space-around;
`;

export const Img = styled.img`
  padding-right: 10;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;
`;
export const ServiceSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #ededed;
`;