import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media screen and (max-width: 460px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#ff7315' : '#ff7315')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  
  border: none;
  cursor: pointer;
  margin:0;
  content : 'test';  text-decoration: none;
    
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#FF7F2E' : '#FF7F2E')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    display: inline-block;
  }
`;

export default GlobalStyle;
