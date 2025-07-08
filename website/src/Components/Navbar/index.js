import React, {useState} from 'react'
import { useEffect } from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavLinks1, NavBtn, NavBtnLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll  } from 'react-scroll';

const Index = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 10){
        setScrollNav(true)
    }
    else {
        setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                Car Recover
            </NavLogo>

            <MobileIcon onClick = {toggle}>
                <FaBars/>
            </MobileIcon>

            <NavMenu>
                <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-10} >About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-10}>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-10} >Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks1 to="/login"smooth={true} duration={500} spy={true} exact='true' offset={-10}>Sign In</NavLinks1>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Form">Sign Up</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Index