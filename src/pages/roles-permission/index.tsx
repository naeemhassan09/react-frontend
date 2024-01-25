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

const Orders = styled.div`
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

const RolesPermission_1 = styled.div`
  position: relative;
  font-weight: 600;
`;

const Link1 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const Links3 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-200);
    transform: 0.1s;
  }
`;

const NavLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    display: none;
  }
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

const NavLinksParent = styled.div`
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

const ProductListWrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-lightpink);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ProductList2 = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ProductListContainer = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-lightpink);
    cursor: pointer;
  }
`;

const FrameGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mini);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Layer3Icon = styled.img`
  border-radius: var(--br-31xl);
  width: 2.13rem;
  height: 2.13rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  display: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
    cursor: pointer;
    transition: 0.3s;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const SubHeader = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6xl) var(--padding-26xl);
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

const CreateShopifyStore = styled.div`
  position: relative;
  font-weight: 500;
`;

const CreateShopifyStoreWrapper = styled.div`
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

const SettingsContentInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-11xl) var(--padding-16xl);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const Stores = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
  display: inline-block;
  height: 2.25rem;
  flex-shrink: 0;
  cursor: pointer;
`;

const StoresSheetHeading = styled.div`
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

const StoreName = styled.b`
  flex: 1;
  position: relative;
`;

const StoreNameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const StoreName1 = styled.div`
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

const StoresSheetContainer = styled.div`
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

const StoresSheetMainContainerInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-16xl);
`;

const StoresSheetMainContainer = styled.div`
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

const SettingsContent = styled.div`
  align-self: stretch;
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MainSettingsContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const MainSettingsRolesPermissionRoot = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("/mainsettingsrolespermissions@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--white);
  font-family: var(--font-poppins);
`;

export const RolesPermission: FunctionComponent = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);
  const [isSubMenuBarOpen, setSubMenuBarOpen] = useState(false);
  const [isCreateShopifyModalOpen, setCreateShopifyModalOpen] = useState(false);

  const openAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(true);
  }, []);

  const closeAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(false);
  }, []);

  const openSubMenuBar = useCallback(() => {
    setSubMenuBarOpen(true);
  }, []);

  const closeSubMenuBar = useCallback(() => {
    setSubMenuBarOpen(false);
  }, []);

  const openCreateShopifyModal = useCallback(() => {
    setCreateShopifyModalOpen(true);
  }, []);

  const closeCreateShopifyModal = useCallback(() => {
    setCreateShopifyModalOpen(false);
  }, []);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  return (
    <>
      <MainSettingsRolesPermissionRoot>
        <MainSettingsContainer>
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
                  <Orders>Orders</Orders>
                </Layer1>
                <Frame1 to='/mainpropductlist'>
                  <VectorIcon1 alt='' src='/vector@2x.png' />
                  <Orders>Product List</Orders>
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
                  <Orders>Setiings</Orders>
                </IconParent>
              </FrameParent>
            </WebLogoParent>
          </SideMenuBar>
          <SettingsContent>
            <Header>
              <NavLinksParent>
                <NavLinks>
                  <Link1 to='/settingsrolespermissioncreaterole'>
                    <RolesPermission_1>{ 'Roles & Permission' }</RolesPermission_1>
                  </Link1>
                  <Link1 to='/settingsusermanagement'>
                    <RolesPermission_1>{ 'User Management ' }</RolesPermission_1>
                  </Link1>
                  <Links3 to='/settingactivitystream'>
                    <Orders>Activity Stream</Orders>
                  </Links3>
                </NavLinks>
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
              </NavLinksParent>
            </Header>
            <SubHeader>
              <FrameGroup>
                <ProductListWrapper to='/settingsrolespermissioncreaterole'>
                  <Orders>{ 'Roles & Permission' }</Orders>
                </ProductListWrapper>
                <ProductListContainer to='/settingsusermanagement'>
                  <ProductList2>User Management</ProductList2>
                </ProductListContainer>
                <ProductListContainer to='/settingactivitystream'>
                  <ProductList2>Activity Stream</ProductList2>
                </ProductListContainer>
              </FrameGroup>
              <Layer3Icon
                alt=''
                src='/layer-3@2x.png'
                onClick={ openSubMenuBar }
              />
            </SubHeader>
            <SettingsContentInner>
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
                <CreateShopifyStoreWrapper onClick={ openCreateShopifyModal }>
                  <CreateShopifyStore>Create Shopify Store</CreateShopifyStore>
                </CreateShopifyStoreWrapper>
              </FrameContainer>
            </SettingsContentInner>
            <StoresSheetHeading>
              <Stores>Stores</Stores>
            </StoresSheetHeading>
            <StoresSheetMainContainer>
              <StoresSheetContainer>
                <Colum1>
                  <StoreNameWrapper>
                    <StoreName>Store Name</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameWrapper>
                </Colum1>
                <Colum1>
                  <StoreNameWrapper>
                    <StoreName>Vendor/Supplier</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameWrapper>
                </Colum1>
                <Colum1>
                  <StoreNameWrapper>
                    <StoreName>Admin Domain</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameWrapper>
                </Colum1>
                <Colum1>
                  <StoreNameWrapper>
                    <StoreName>{ 'Request Date&Time' }</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameWrapper>
                </Colum1>
                <Colum1>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                </Colum1>
              </StoresSheetContainer>
              <StoresSheetMainContainerInner>
                <FrameParent1>
                  <ItemPerPageParent>
                    <CreateShopifyStore>Item per page:</CreateShopifyStore>
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
                    <CreateShopifyStore>0 of 0</CreateShopifyStore>
                  </Of0Wrapper>
                  <DoubleRightParent>
                    <DoubleRightIcon alt='' src='/double-right@2x.png' />
                    <Icons8Back501 alt='' src='/icons8back50-1@2x.png' />
                    <Icons8Back501 alt='' src='/icons8forward50-1@2x.png' />
                    <Icons8Back501 alt='' src='/double-right@2x.png' />
                  </DoubleRightParent>
                </FrameParent1>
              </StoresSheetMainContainerInner>
            </StoresSheetMainContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <CreateShopifyStore>Open In Window</CreateShopifyStore>
              </OpenInWindowWrapper>
            </ModalButton>
          </SettingsContent>
        </MainSettingsContainer>
      </MainSettingsRolesPermissionRoot>
      { isAfterLoginMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Left'
          onOutsideClick={ closeAfterLoginMenu }
        >
          <MiniSideBar onClose={ closeAfterLoginMenu } />
        </PortalDrawer>
      ) }
      { isSubMenuBarOpen  }
      { isCreateShopifyModalOpen  }
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
