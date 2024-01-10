import React, { useCallback, useState } from 'react';
import logo from 'src/assets/images/logo@2x.png'; 
import styled from 'styled-components';
import PortalDrawer from '../portal-drawer';
import SideMenu from '../side-menu';
//import { HeaderContainer, FrameParent, CaptureRemovebgPreview1Wrapper, Actions, 
  //  NavLinksWrapper, NavLinks, Home, AboutUs, Menu } from './styled'; 

  const GroupIcon = styled.img`
  position: relative;
  width: 9.38rem;
  height: 1.5rem;
  object-fit: cover;
`;

const WebLogo = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Home = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const AboutUs = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 500;
  color: inherit;
  cursor: pointer;
`;

const NavLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1.75rem;
  @media screen and (max-width: 960px) {
    display: none;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Icon1 = styled.img`
  position: absolute;
  height: 60%;
  width: 70%;
  top: 20%;
  right: 15%;
  bottom: 20%;
  left: 15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;

const IconsolidmenuAlt3 = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const Actions = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.81rem;
  @media screen and (max-width: 960px) {
    flex: 1;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;

const WebLogoParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
`;

const Header_1 = styled.div`
  align-self: stretch;
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(50px);
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-16xl);
  box-sizing: border-box;
`;


export const Header: React.FC = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const openSideMenu = useCallback(() => {
    setSideMenuOpen(true);
  }, []);

  const closeSideMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, []);

  return (
    <>
      <Header_1>
        <WebLogoParent>
          <WebLogo>
            <GroupIcon alt='' src= { logo } />
          </WebLogo>
          <Actions>
            <NavLinks>
              <Home>Home</Home>
              <AboutUs>About us</AboutUs>
              <AboutUs>Contact us</AboutUs>
            </NavLinks>
            <IconsolidmenuAlt3 onClick={ openSideMenu }>
              <Icon1 alt='' src='/icon@2x.png' />
            </IconsolidmenuAlt3>
          </Actions>
        </WebLogoParent>
      </Header_1>

      { isSideMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Top'
          onOutsideClick={ closeSideMenu }
        >
          <SideMenu onClose={ closeSideMenu } />
        </PortalDrawer>
      ) }
    </>
  );
};

export default Header;
