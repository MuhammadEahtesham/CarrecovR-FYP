import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  font-family: "Mona Sans","Mona Sans Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  background: ${({scrollNav}) => (scrollNav ? 'black' : 'black')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justufy-content: space-between;
  height:80px;
  z-index:1;
  width:100%;
  padding: 0 24px;
  max-width: 1150px;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  display: flex;
  justufy-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
    transition: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 400px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: -80px;
`

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid lightblue;
    border-top: 1px solid lightblue;
  }
`

export const NavLinks1 = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid lightblue;
    border-top: 1px solid lightblue;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: lightblue;
  white-space: nowrap;
  padding: 10px 25px;
  color: black;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: lightgray;
    color: black;
  }
`