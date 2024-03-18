import { FunctionComponent, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  ACTIVITYSTREAM_ROUTE, 
  APP, EMAILTEMPLATE_ROUTE, ROLESPERMISSION_ROUTE, 
  SETTINGSVENDOR_ROUTE, 
  USERMANAGEMENT_ROUTE 
} from 'src/constants/navigation-routes';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { logout } from 'src/store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { getRole } from 'src/store/selectors/features';
import { ROLES } from 'src/constants/roles';
import MiniSideBar from './mini-side-bar';
import PortalDrawer from './portal-drawer';

const RolesPermission = styled.div`
  position: relative;
  font-weight: 500;
`;

const Links = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
`;

const ActivityStream = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const Links1 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-400);
    transform: 0.1s;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const JamesSmith = styled.div`
  position: relative;
  font-weight: 600;
`;

const Developer = styled.div`
  position: relative;
  font-size: var(--font-size-3xs);
  font-weight: 500;
  color: var(--color-darkgray);
  margin-top: -0.25rem;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FrameChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  object-fit: cover;
`;

const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-3xs);
`;

const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const IconsolidmenuAlt = styled.img`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-300);
  @media screen and (max-width: 960px) {
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
`;

const NavLinksParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-6xl);
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-silver);
  font-family: var(--font-poppins);
  @media screen and (max-width: 960px) {
    border-radius: 0px;
    border-bottom-right-radius: var(--br-31xl);
    border-bottom-left-radius: var(--br-31xl);
  }
`;

const ActivityStreamContainer1: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);
  const userRole=useSelector(getRole);

  const openAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(true);
  }, []);

  const closeAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(false);
  }, []);

  const handleLogout = () => {
    dispatch(logout({}));
  };

  

  return (
    <>
      <HeaderRoot>
        <NavLinksParent>
          { userRole===ROLES.ADMIN &&  
            <NavLinks>
              <Links   to={ `${APP}${ROLESPERMISSION_ROUTE}` } >
                <RolesPermission>{ 'Roles & Permission' }</RolesPermission>
              </Links>
              <Links   to={ `${APP}${USERMANAGEMENT_ROUTE}` } >
                <RolesPermission>{ 'User Management ' }</RolesPermission>
              </Links>
              <Links1   to={ `${APP}${ACTIVITYSTREAM_ROUTE}` } >
                <ActivityStream>Activity Stream</ActivityStream>
              </Links1>
              <Links1  to={ `${APP}${SETTINGSVENDOR_ROUTE}` } >
                <ActivityStream>Vendor</ActivityStream>
              </Links1>
              <Links1  to={ `${APP}${EMAILTEMPLATE_ROUTE}` } >
                <ActivityStream>Email Template</ActivityStream>
              </Links1>
            </NavLinks>
}
         
          <FrameParent>
            <FrameWrapper>
              <FrameGroup>
                <Frame>
                  <JamesSmith>James Smith</JamesSmith>
                  <Developer>Developer</Developer>
                </Frame>
                <FrameChild alt='' src='/ellipse-3@2x.png' />
                <Box>
                  <Button onClick={ handleLogout }>
                    { /*  When Button include children, it is treated as plain */ }
                    <Box>
                      <Typography>logout</Typography>
                    </Box>
                  </Button>
                </Box>
              </FrameGroup>
            </FrameWrapper>
            <IconsolidmenuAlt
              alt=''
              src='/iconsolidmenualt3.svg'
              onClick={ openAfterLoginMenu }
            />
          </FrameParent>
        </NavLinksParent>
      </HeaderRoot>
      { isAfterLoginMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Left'
          onOutsideClick={ closeAfterLoginMenu }
        >
          <MiniSideBar onClose={ closeAfterLoginMenu } />
        </PortalDrawer>
      ) }
    </>
  );
};

export default ActivityStreamContainer1;
