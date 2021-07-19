import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo1, MobileIcon, NavMenu, NavLogo2, NavItem, NavLink, NavDropdown, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo1 to="/">RIOT</NavLogo1>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavLogo2 to="/">VALORANT</NavLogo2>
                        <NavItem>
                            <NavDropdown>GAME INFO</NavDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink>MEDIA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>NEWS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>LEADERBOARDS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavDropdown>SUPPORT</NavDropdown>
                        </NavItem>
                        <NavItem>
                            <NavDropdown>OUR SOCIALS</NavDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink>ESPORTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>PBE SIGNUP</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink>PLAY NOW</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

