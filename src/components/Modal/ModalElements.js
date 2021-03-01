import styled  from 'styled-components';
import Modal from '@material-ui/core/Modal';


export const  ModalContainer = styled.div`
   background-color: #fff;
    border-Radius:5px;
    box-Shadow: 6;
    padding: 10px 16px 20px ;
    height: 90%; 
    width:auto ;
    overflow:auto;
   
    outline: none;
   
`;

export const  MyModal = styled(Modal)`
    display: flex ;
    align-Items: left ;
    justify-Content: center;
    margin-top:40px;
    border-style:none;
    
`;

export const  Horiz = styled.hr`
    margin-top:5px;
    margin-bottom:10px;
  
`;

export const  Text = styled.p`
   
   padding:15px;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   line-height: 2;
   text-indent: -10px;
  
`;


