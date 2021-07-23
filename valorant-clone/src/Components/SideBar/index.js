import React from 'react'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>PLAY NOW</SidebarLink>
                    <SidebarDropDown>GAME INFO</SidebarDropDown>
                    <SidebarLink>MEDIA</SidebarLink>
                    <SidebarLink>NEWS</SidebarLink>
                    <SidebarLink>LEADERBOARDS</SidebarLink>
                    <SidebarDropDown>SUPPORT</SidebarDropDown>
                    <SidebarDropDown>OUR SOCIALS</SidebarDropDown>
                    <SidebarLink>ESPORTS</SidebarLink>
                    <SidebarLink>PBE SIGNUP</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
