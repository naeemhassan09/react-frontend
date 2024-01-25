import { FunctionComponent, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { logout } from '../store/thunks/auth';
import PortalDrawer from './portal-drawer';
import MiniSideBar from './mini-side-bar';
type OrderHeaderContainerType = {
  pageTitle?: string;
};

const NewOrder = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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

const EllipseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-6xs);
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

const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-6xs);
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-300);
  @media screen and (max-width: 960px) {
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
`;

const FrameParent = styled.div`
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

const OrderHeaderContainer: FunctionComponent<OrderHeaderContainerType> = ({
  pageTitle,
}) => {
  const dispatch = useDispatch();
  const [isMiniSideBarOpen, setMiniSideBarOpen] = useState(false);

  const openMiniSideBar = useCallback(() => {
    setMiniSideBarOpen(true);
  }, []);

  const closeMiniSideBar = useCallback(() => {
    setMiniSideBarOpen(false);
  }, []);

  const handleLogout = () => {
    dispatch(logout({}));
  };

  return (
    <>
      <HeaderRoot>
        <FrameParent>
          <FrameWrapper>
            <NavLinksWrapper>
              <NavLinks>
                <NewOrder>{ pageTitle }</NewOrder>
              </NavLinks>
            </NavLinksWrapper>
          </FrameWrapper>
          <FrameGroup>
            <FrameContainer>
              <EllipseWrapper>
                <FrameChild alt='' src='/ellipse-3@2x.png' />
                <Box>
                  <Button onClick={ handleLogout }>
                    { /*  When Button include children, it is treated as plain */ }
                    <Box>
                      <Typography>logout</Typography>
                    </Box>
                  </Button>
                </Box>
              </EllipseWrapper>
             

            </FrameContainer>
            <IconsolidmenuAlt
              alt=''
              src='/iconsolidmenualt31.svg'
              onClick={ openMiniSideBar }
            />
          </FrameGroup>
        </FrameParent>
      </HeaderRoot>
      { isMiniSideBarOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Left'
          onOutsideClick={ closeMiniSideBar }
        >
          <MiniSideBar onClose={ closeMiniSideBar } />
        </PortalDrawer>
      ) }
    </>
  );
};

export default OrderHeaderContainer;
