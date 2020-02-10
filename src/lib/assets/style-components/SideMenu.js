import styled from 'styled-components';


export const NavMenu = styled.nav`
    
    a{
      padding: 30px 15px;
      color: black;
      font: 400 1.125em;
      text:{
        align: center;
        transform: lowercase;
      }
      
      &:hover{
        color: blue;
      }
    }
`;

export const OtherPages = styled.ul`
  list-style: none; 
  margin: 0;
  a{ 
    text-decoration: none; 
  }
  li{
    position: relative;
    overflow: hidden;
  }
  
  a{
    font-size: 25px;
    display: block;
    position: relative;
    z-index: 1;
    transition: .35s ease color;
        
    &:before{
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    left: -100%; 
    top: 0;
    width: 100%; 
    height: 100%;
    opacity:0.5;
    background: #77e4ff;
    }
        
    &.is-current,
    &:hover{
      &:before{
        left: 0;
      }
    }
  }
  svg {
    margin-right: 25px;
  }
`;
export const  SideMenu = styled.aside`
  height: 100%;
  top: 60px;
  position: fixed;
  left: 0;
  width: 344px;
  background: white;

  @media (max-width: 1000px) {
    display: none;
  }
`;