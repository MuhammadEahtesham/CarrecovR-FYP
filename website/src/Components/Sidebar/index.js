import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink,SideBtnWrap, SidebarMenu, SidebarRoute } from './SidebarElements'

const index = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon oneClick={toggle}>
             <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>
                    SignUp
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default index