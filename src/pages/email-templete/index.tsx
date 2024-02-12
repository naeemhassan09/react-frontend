import { FunctionComponent, useState, useCallback } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import MiniSideBar from 'src/components/mini-side-bar';
import PortalDrawer from 'src/components/portal-drawer';
import SideMenuOfSubMenu from 'src/components/side-menu-of-sub-menu';
import EmailTemplateModal from 'src/components/email-template-modal';
import Pagination from 'src/components/pagination';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/thunks';
import { APP, DASHBORD_ROUTE, ORDERS_ROUTE, PRODUCTLIST_ROUTE, SETTINGS_ROUTE } from 'src/constants/navigation-routes';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';

const AlchemativeLogo1Icon = styled.img`
  width: 10.44rem;
  position: relative;
  height: 1.61rem;
  object-fit: cover;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0rem;
`;

const DashboardSvgIcon = styled.img`
  width: 1.5rem;
  position: relative;
  height: 1.26rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const Dashboard = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-weight: 500;
  cursor: pointer;
`;

const DashboardWrapper = styled.div`
  width: 4.94rem;
  position: relative;
  height: 1.31rem;
`;

const Frame = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-300);
    transition: 0.1s;
  }
`;

const OrderSvgIcon = styled.img`
  width: 1.5rem;
  position: relative;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const Orders = styled.div`
  height: 1.31rem;
  position: relative;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
`;

const Layer = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-300);
    transition: 0.1s;
  }
`;

const SettingsSvgIcon1Parent = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-gray-300);
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

const SideMenuBarInner = styled.div`
  border-top: 1px solid var(--color-darkgray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SideMenuBar = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-xl);
  gap: var(--gap-xl);
  background-image: url("/sidemenubar8@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

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
    background-color: var(--color-gray-300);
    transition: 0.1s;
  }
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
    background-color: var(--color-gray-300);
    transform: 0.1s;
  }
`;

const Links2 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
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

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FrameChild = styled.img`
  width: 2rem;
  position: relative;
  border-radius: 50%;
  height: 2rem;
  object-fit: cover;
`;

const FrameContainer = styled.div`
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
  width: 2.5rem;
  position: relative;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-200);
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
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-6xl);
  color: var(--color-silver);
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

const ProductList = styled.div`
  height: 1.31rem;
  position: relative;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ProductListWrapper1 = styled(Link)`
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
    background-color: var(--color-lightpink);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ProductListWrapper2 = styled.div`
  border-radius: var(--br-31xl);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Layer3Icon = styled.img`
  border-radius: var(--br-31xl);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
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
  width: 65rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6xl);
  box-sizing: border-box;
  color: var(--color-gray-200);
  @media screen and (max-width: 960px) {
    display: flex;
    align-self: stretch;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    align-self: stretch;
    width: auto;
  }
`;

const FrameItem = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const NewButton = styled.div`
  height: 2.25rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
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

const FrameParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const ActivityStreamContentContaiInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-11xl) var(--padding-6xl);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const Vendor = styled.div`
  height: 1.69rem;
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
`;

const ActivityStreamHeadingContai = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10xl) var(--padding-6xl);
  text-align: center;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-300);
`;

const Title = styled.b`
  flex: 1;
  position: relative;
`;

const TitleWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const WelcomeAbroad = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const WelcomeAbroadWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const Colum = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TrueWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-limegreen-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const Colum3Inner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 0rem;
`;

const MenuVerticalIcon = styled.img`
  width: 1.56rem;
  position: relative;
  height: 1.56rem;
  object-fit: contain;
`;

const MenuVerticalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-3xs);
`;

const Colum5Inner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) 0rem;
`;

const ActivityStreamSheet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameInner = styled(Autocomplete)``;

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
  width: 1.5rem;
  position: relative;
  height: 1.5rem;
  object-fit: contain;
`;

const Icons8Back = styled.img`
  width: 1.5rem;
  position: relative;
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

const PaginationBox = styled.div`
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

const PaginationConatiner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-16xl);
`;

const ActivityStreamContainer = styled.div`
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
  height: 2.25rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-brown-100);
  display: flex;
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
  width: 65rem;
  background-color: var(--white);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-30xl) var(--padding-2xl);
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    display: flex;
    align-self: stretch;
    width: auto;
  }
`;

const ActivityStreamContentContai = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--white);
  @media screen and (max-width: 960px) {
    flex: 1;
  }
`;

const ActivityStreamMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsEmailTemplateRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-mini);
  box-sizing: border-box;
  min-height: 45rem;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
`;

export const EmailTemplate: FunctionComponent = () => {
  const dispatch=useDispatch();
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);
  const [isSideMenuOfSubMenuOpen, setSideMenuOfSubMenuOpen] = useState(false);
  const [isEmailTemplateModalOpen, setEmailTemplateModalOpen] = useState(false);

  const openAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(true);
  }, []);

  const closeAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(false);
  }, []);

  const openSideMenuOfSubMenu = useCallback(() => {
    setSideMenuOfSubMenuOpen(true);
  }, []);

  const closeSideMenuOfSubMenu = useCallback(() => {
    setSideMenuOfSubMenuOpen(false);
  }, []);

  const openEmailTemplateModal = useCallback(() => {
    setEmailTemplateModalOpen(true);
  }, []);

  const closeEmailTemplateModal = useCallback(() => {
    setEmailTemplateModalOpen(false);
  }, []);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);


  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages]=useState<number>(0);
  
  const itemsPerPage = 10;

  const handleLogout = () => {
    dispatch(logout({}));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SettingsEmailTemplateRoot>
        <ActivityStreamMainContainer>
          <SideMenuBar>
            <Logo>
              <AlchemativeLogo1Icon alt='' src='/alchemativelogo-12@2x.png' />
            </Logo>
            <SideMenuBarInner>
              <FrameParent>
                <Frame to={ `${APP}${DASHBORD_ROUTE}` }>
                  <DashboardSvgIcon alt='' src='/dashboardsvgicon-1.svg' />
                  <DashboardWrapper>
                    <Dashboard>Dashboard</Dashboard>
                  </DashboardWrapper>
                </Frame>
                <Layer to={ `${APP}${ORDERS_ROUTE}` }>
                  <OrderSvgIcon alt='' src='/ordersvgicon-1.svg' />
                  <Orders>Orders</Orders>
                </Layer>
                <Frame to={ `${APP}${PRODUCTLIST_ROUTE}` }>
                  <OrderSvgIcon alt='' src='/productlistsvgicon-1.svg' />
                  <Orders>Product List</Orders>
                </Frame>
                <SettingsSvgIcon1Parent to={ `${APP}${SETTINGS_ROUTE}` }>
                  <OrderSvgIcon alt='' src='/settingssvgicon-1.svg' />
                  <Orders>Setiings</Orders>
                </SettingsSvgIcon1Parent>
              </FrameParent>
            </SideMenuBarInner>
          </SideMenuBar>
          <ActivityStreamContentContai>
            <ActivityStreamContainer1 />
            <ActivityStreamContentContaiInner>
              <FrameParent1>
                <FrameItem
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
                  sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                />
                <NewButton onClick={ openEmailTemplateModal }>
                  <RolesPermission>+ New</RolesPermission>
                </NewButton>
              </FrameParent1>
            </ActivityStreamContentContaiInner>
            <ActivityStreamHeadingContai>
              <NavLinksParent>
                <Vendor>Vendor</Vendor>
              </NavLinksParent>
            </ActivityStreamHeadingContai>
            <ActivityStreamContainer>
              <ActivityStreamSheet>
                <Colum>
                  <TitleWrapper>
                    <Title>Title</Title>
                  </TitleWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                  <WelcomeAbroadWrapper>
                    <WelcomeAbroad>Welcome Abroad !</WelcomeAbroad>
                  </WelcomeAbroadWrapper>
                </Colum>
                <Colum>
                  <TitleWrapper>
                    <Title>Status</Title>
                  </TitleWrapper>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                  <Colum3Inner>
                    <TrueWrapper>
                      <RolesPermission>True</RolesPermission>
                    </TrueWrapper>
                  </Colum3Inner>
                </Colum>
                <Colum>
                  <TitleWrapper>
                    <Title>Actions</Title>
                  </TitleWrapper>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical2@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                </Colum>
              </ActivityStreamSheet>
              <Pagination
                imageAltText='/double-right@2x.png'
                imageId='/icons8back50-1@2x.png'
                imageCode='/icons8forward50-1@2x.png'
                imageDimensions='/double-right1@2x.png'
                itemsPerPageOptions={ [10, 20, 30] } // Example options for items per page
                itemsPerPage={ itemsPerPage }
                currentPage={ currentPage }
                totalPages={ totalPages }
                onItemsPerPageChange={ (_value) => {
                    // handle items per page change
                } }
                onNextPage={ handleNextPage }
                onPrevPage={ handlePrevPage }
              />
            </ActivityStreamContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <RolesPermission>Open In Window</RolesPermission>
              </OpenInWindowWrapper>
            </ModalButton>
          </ActivityStreamContentContai>
        </ActivityStreamMainContainer>
      </SettingsEmailTemplateRoot>
      { isAfterLoginMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Left'
          onOutsideClick={ closeAfterLoginMenu }
        >
          <MiniSideBar onClose={ closeAfterLoginMenu } />
        </PortalDrawer>
      ) }
      { isSideMenuOfSubMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeSideMenuOfSubMenu }
        >
          <SideMenuOfSubMenu onClose={ closeSideMenuOfSubMenu } />
        </PortalDrawer>
      ) }
      { isEmailTemplateModalOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeEmailTemplateModal }
        >
          <EmailTemplateModal onClose={ closeEmailTemplateModal } />
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
