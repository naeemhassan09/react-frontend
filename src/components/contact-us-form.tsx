import { FunctionComponent, useState, useCallback } from "react";
import styled from "styled-components";
import SideMenu from "./side-menu";
import PortalDrawer from "./portal-drawer";

const AlchemativeLogo1Icon = styled.img`
  position: relative;
  width: 10.44rem;
  height: 1.61rem;
  object-fit: cover;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-9xl);
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-smi);
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
const AlchemativeLogo1Parent = styled.div`
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
const HeaderRoot = styled.div`
  align-self: stretch;
  background-color: var(--white);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  height: 5.31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem var(--padding-16xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-gray-200);
  font-family: var(--font-poppins);
`;

const ContactUsForm: FunctionComponent = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const openSideMenu = useCallback(() => {
    setSideMenuOpen(true);
  }, []);

  const closeSideMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, []);

  return (
    <>
      <HeaderRoot>
        <AlchemativeLogo1Parent>
          <AlchemativeLogo1Icon alt="" src="/alchemativelogo-1@2x.png" />
          <Actions>
            <NavLinks>
              <Home>Home</Home>
              <AboutUs>About us</AboutUs>
              <AboutUs>Contact us</AboutUs>
            </NavLinks>
            <IconsolidmenuAlt3 onClick={openSideMenu}>
              <Icon1 alt="" src="/icon.svg" />
            </IconsolidmenuAlt3>
          </Actions>
        </AlchemativeLogo1Parent>
      </HeaderRoot>
      {isSideMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeSideMenu}
        >
          <SideMenu onClose={closeSideMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ContactUsForm;
