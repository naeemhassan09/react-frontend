/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent, useState, useCallback } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  Autocomplete,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import MiniSideBar from 'src/components/mini-side-bar';
import PortalDrawer from 'src/components/portal-drawer';

const ClipPathGroup = styled.img`
  position: relative;
  width: 9.38rem;
  height: 1.5rem;
  object-fit: cover;
`;

const WebLogo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const VectorIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

const Dashboard = styled.div`
  position: absolute;
  top: 0.09rem;
  left: 2.13rem;
  font-weight: 600;
  cursor: pointer;
`;

const VectorParent = styled.div`
  position: relative;
  width: 7.13rem;
  height: 1.5rem;
`;

const Frame = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const GroupIcon = styled.img`
  position: relative;
  width: 1.47rem;
  height: 1.58rem;
  object-fit: cover;
`;

const Orders_1 = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
`;

const Layer1 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const VectorIcon1 = styled.img`
  position: relative;
  width: 1.38rem;
  height: 1.38rem;
  object-fit: cover;
`;

const Frame1 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const TransparentRectangleIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  z-index: 0;
`;

const VectorIcon2 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 12.5%;
  width: 12.5%;
  top: 68.75%;
  right: 21.67%;
  bottom: 18.75%;
  left: 65.83%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const VectorIcon3 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 37.5%;
  width: 50%;
  top: 56.25%;
  right: 2.92%;
  bottom: 6.25%;
  left: 47.08%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const VectorIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 33.75%;
  width: 37.5%;
  top: 31.25%;
  right: 31.25%;
  bottom: 35%;
  left: 31.25%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 3;
`;

const VectorIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 87.5%;
  width: 85%;
  top: 6.25%;
  right: 7.5%;
  bottom: 6.25%;
  left: 7.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 4;
`;

const Icon1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-3xs);
`;

const IconParent = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const FrameParent = styled.div`
  width: 11.56rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) 0rem;
  box-sizing: border-box;
  gap: var(--gap-xs);
`;

const WebLogoParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-23xl);
`;

const SideMenuBar = styled.div`
  align-self: stretch;
  background: linear-gradient(180deg, #fe3d50, #860266);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16xl) 0rem;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavLinksWrapper = styled.div`
  flex-shrink: 0;
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
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const IconsoliduserCircle = styled.img`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

const IconsolidmenuAlt3 = styled.img`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const IconsoliduserCircleParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 960px) {
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
`;

const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-31xl) var(--br-31xl);
  background: linear-gradient(269.96deg, #ff3d50 0.55%, #fb3b51 0.56%, #d22758);
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-16xl);
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    border-radius: 0px;
    border-bottom-right-radius: var(--br-31xl);
    border-bottom-left-radius: var(--br-31xl);
  }
`;

const SubHeader = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-16xl) var(--padding-26xl);
  color: var(--color-gray-100);
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const New = styled.div`
  position: relative;
  font-weight: 500;
`;

const NewWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
  }
`;

const FrameContainer = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const OrderContentContainerInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-11xl) var(--padding-16xl);
  @media screen and (max-width: 960px) {
    padding-top: 0rem;
    box-sizing: border-box;
  }
`;

const OrdersSheet = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const VendorSheetHeading = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10xl) var(--padding-16xl);
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-200);
`;

const OrderNumber = styled.b`
  flex: 1;
  position: relative;
`;

const OrderNumberWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const Fanatical = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const Colum1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const VendorSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameItem = styled(Autocomplete)``;

const ItemPerPageParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-18xl);
`;

const Of0Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const DoubleRightIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const Icons8Back501 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

const DoubleRightParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;

const FrameParent1 = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-xl) var(--padding-3xs);
  gap: var(--gap-27xl);
`;

const DashboardSheetInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-16xl);
`;

const DashboardSheet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const OpenInWindowWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-brown);
  height: 2.25rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ModalButton = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-30xl) var(--padding-2xl);
`;

const OrderContentContainer = styled.div`
  align-self: stretch;
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SideMenuBarParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const MainOrdersRoot = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("/settingsusermanagement@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--white);
  font-family: var(--font-poppins);
`;

export const Orders: FunctionComponent = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);

  const openAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(true);
  }, []);

  const closeAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(false);
  }, []);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  return (
    <>
      <MainOrdersRoot>
        <SideMenuBarParent>
          <SideMenuBar>
            <WebLogoParent>
              <WebLogo>
                <ClipPathGroup alt='' src='/clip-path-group@2x.png' />
              </WebLogo>
              <FrameParent>
                <Frame to='/maindashboard'>
                  <VectorParent>
                    <VectorIcon alt='' src='/group-2@2x.png' />
                    <Dashboard>Dashboard</Dashboard>
                  </VectorParent>
                </Frame>
                <Layer1 to='/mainorders'>
                  <GroupIcon alt='' src='/group@2x.png' />
                  <Orders_1>Orders</Orders_1>
                </Layer1>
                <Frame1 to='/mainpropductlist'>
                  <VectorIcon1 alt='' src='/vector@2x.png' />
                  <Orders_1>Product List</Orders_1>
                </Frame1>
                <IconParent to='/mainsettingsrolespermissions'>
                  <Icon1>
                    <TransparentRectangleIcon
                      alt=''
                      src='/transparent-rectangle@2x.png'
                    />
                    <VectorIcon2 alt='' src='/vector@2x.png' />
                    <VectorIcon3 alt='' src='/vector@2x.png' />
                    <VectorIcon4 alt='' src='/vector@2x.png' />
                    <VectorIcon5 alt='' src='/vector@2x.png' />
                  </Icon1>
                  <Orders_1>Setiings</Orders_1>
                </IconParent>
              </FrameParent>
            </WebLogoParent>
          </SideMenuBar>
          <OrderContentContainer>
            <Header>
              <FrameGroup>
                <FrameWrapper>
                  <NavLinksWrapper>
                    <NavLinks>
                      <Orders_1>Orders</Orders_1>
                    </NavLinks>
                  </NavLinksWrapper>
                </FrameWrapper>
                <IconsoliduserCircleParent>
                  <IconsoliduserCircle
                    alt=''
                    src='/iconsolidusercircle@2x.png'
                  />
                  <IconsolidmenuAlt3
                    alt=''
                    src='/iconsolidmenualt3@2x.png'
                    onClick={ openAfterLoginMenu }
                  />
                </IconsoliduserCircleParent>
              </FrameGroup>
            </Header>
            <SubHeader>
              <Orders_1>Dashboard</Orders_1>
            </SubHeader>
            <OrderContentContainerInner>
              <FrameContainer>
                <FrameChild
                  color='primary'
                  label='Search'
                  size='small'
                  fullWidth
                  variant='standard'
                  InputProps={ {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon>search_sharp</Icon>
                      </InputAdornment>
                    ),
                  } }
                />
                <NewWrapper>
                  <New>+ New</New>
                </NewWrapper>
              </FrameContainer>
            </OrderContentContainerInner>
            <VendorSheetHeading>
              <FrameGroup>
                <OrdersSheet>Orders Sheet</OrdersSheet>
              </FrameGroup>
            </VendorSheetHeading>
            <DashboardSheet>
              <VendorSheetContainer>
                <Colum1>
                  <OrderNumberWrapper>
                    <OrderNumber>order Number</OrderNumber>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Number</Fanatical>
                  </OrderNumberWrapper>
                </Colum1>
                <Colum1>
                  <OrderNumberWrapper>
                    <OrderNumber>Email</OrderNumber>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Email</Fanatical>
                  </OrderNumberWrapper>
                </Colum1>
                <Colum1>
                  <OrderNumberWrapper>
                    <OrderNumber>Order Status</OrderNumber>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Order Status</Fanatical>
                  </OrderNumberWrapper>
                </Colum1>
                <Colum1>
                  <OrderNumberWrapper>
                    <OrderNumber>Finalical</OrderNumber>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fanatical</Fanatical>
                  </OrderNumberWrapper>
                </Colum1>
                <Colum1>
                  <OrderNumberWrapper>
                    <OrderNumber>Fulfilment</OrderNumber>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Fulfilment</Fanatical>
                  </OrderNumberWrapper>
                </Colum1>
                <Colum1>
                  <OrderNumberWrapper>
                    <OrderNumber>Amount</OrderNumber>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                  <OrderNumberWrapper>
                    <Fanatical>Amount</Fanatical>
                  </OrderNumberWrapper>
                </Colum1>
              </VendorSheetContainer>
              <DashboardSheetInner>
                <FrameParent1>
                  <ItemPerPageParent>
                    <New>Item per page:</New>
                    <FrameItem
                      disablePortal
                      options={ ['1', '2', '3'] }
                      renderInput={ (params: any) => (
                        <TextField
                          { ...params }
                          color='primary'
                          label=''
                          variant='standard'
                          placeholder=''
                          helperText=''
                        />
                      ) }
                    />
                  </ItemPerPageParent>
                  <Of0Wrapper>
                    <New>0 of 0</New>
                  </Of0Wrapper>
                  <DoubleRightParent>
                    <DoubleRightIcon alt='' src='/double-right@2x.png' />
                    <Icons8Back501 alt='' src='/icons8back50-1@2x.png' />
                    <Icons8Back501 alt='' src='/icons8forward50-1@2x.png' />
                    <Icons8Back501 alt='' src='/double-right@2x.png' />
                  </DoubleRightParent>
                </FrameParent1>
              </DashboardSheetInner>
            </DashboardSheet>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <New>Open In Window</New>
              </OpenInWindowWrapper>
            </ModalButton>
          </OrderContentContainer>
        </SideMenuBarParent>
      </MainOrdersRoot>
      { isAfterLoginMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Left'
          onOutsideClick={ closeAfterLoginMenu }
        >
          <MiniSideBar onClose={ closeAfterLoginMenu } />
        </PortalDrawer>
      ) }
      { isModalPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={ closeModalPopup }
        >
          <Modal onClose={ closeModalPopup } />
        </PortalPopup>
      ) }
    </>
  );
};
