/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  Icon,
  InputAdornment,
  Autocomplete,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import MiniSideBar from 'src/components/mini-side-bar';
import PortalDrawer from 'src/components/portal-drawer';
import SubMenuBar from 'src/components/sub-menu-bar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityData } from 'src/store/thunks';
import { getAuthToken } from 'src/store/selectors/features';

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

const RolesPermission = styled.div`
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

const Datepicker1 = styled(DatePicker)``;

const Date1 = styled.div`
  flex: 1;
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;

const DateParent = styled.div`
  width: 25.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-3xs);
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
    flex-direction: column;
  }
`;

const GenerateTransactions = styled.div`
  position: relative;
  font-weight: 500;
`;

const GenerateTransactionsWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: black;
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
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
  }
`;

const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
    flex-direction: column;
  }
`;

const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const FrameWrapper = styled.div`
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

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
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

const FrameParent1 = styled.div`
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

const ActivityStreamSheet = styled.div`
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

const FullName = styled.b`
  flex: 1;
  position: relative;
`;

const FullNameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const FullName1 = styled.div`
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

const ActivityStreamSheet1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FullNameWrapper6 = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-3xs);
`;

const FrameParent2 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const FrameParent3 = styled.div`
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

const ActivityStreamContainerInner = styled.div`
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

const HeaderParent = styled.div`
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

const SettingActivityStreamRoot = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("/settingactivitystream@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--white);
  font-family: var(--font-poppins);
`;

export const ActivityStream: FunctionComponent = () => {
 
  const dispatch=useDispatch();
  const token=useSelector(getAuthToken);

  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState<
    string | null
  >(null);

  const [dateDateTimePicker1Value, setDateDateTimePicker1Value] = useState<
    string | null
  >(null);

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);
  const [isSubMenuBarOpen, setSubMenuBarOpen] = useState(false);

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

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  useEffect(()=>{
console.log('working', token);
    dispatch(fetchActivityData({}));

  },[]);

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <>
        <SettingActivityStreamRoot>
          <SideMenuBarParent>
            <SideMenuBar>
              <WebLogoParent>
                <WebLogo>
                  <ClipPathGroup alt='' src='/clip-path-group@2x.png' />
                </WebLogo>
                <FrameParent>
                  <Frame to='/app/dashboard'>
                    <VectorParent>
                      <VectorIcon alt='' src='/group-2@2x.png' />
                      <Dashboard>Dashboard</Dashboard>
                    </VectorParent>
                  </Frame>
                  <Layer1 to='/app/orders'>
                    <GroupIcon alt='' src='/group@2x.png' />
                    <Orders>Orders</Orders>
                  </Layer1>
                  <Frame1 to='/app/propductlist'>
                    <VectorIcon1 alt='' src='/vector@2x.png' />
                    <Orders>Product List</Orders>
                  </Frame1>
                  <IconParent to='/app/usermanagement'>
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
            <HeaderParent>
              <Header>
                <NavLinksParent>
                  <NavLinks>
                    <Link1 to='/app/usermanagement'>
                      <RolesPermission>{ 'Roles & Permission' }</RolesPermission>
                    </Link1>
                    <Link1 to='/app/usermanagement'>
                      <RolesPermission>{ 'User Management ' }</RolesPermission>
                    </Link1>
                    <Links3 to='/app/activitystream'>
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
                  <ProductListWrapper to='/app/susermanagement'>
                    <Orders>{ 'Roles & Permission' }</Orders>
                  </ProductListWrapper>
                  <ProductListContainer to='/app/susermanagement'>
                    <ProductList2>User Management</ProductList2>
                  </ProductListContainer>
                  <ProductListContainer to='/app/activitystream'>
                    <ProductList2>Activity Stream</ProductList2>
                  </ProductListContainer>
                </FrameGroup>
                <Layer3Icon
                  alt=''
                  src='/layer-3@2x.png'
                  onClick={ openSubMenuBar }
                />
              </SubHeader>
              <FrameWrapper>
                <FrameContainer>
                  <DateParent>
                    <Date1>
                      <Datepicker1
                        label='Start Date'
                        value={ dateDateTimePickerValue }
                        onChange={ (newValue: any) => {
                          setDateDateTimePickerValue(newValue);
                        } }
                        slotProps={ {
                          textField: {
                            variant: 'outlined',
                            size: 'small',
                            fullWidth: true,
                            color: 'primary',
                          },
                        } }
                      />
                    </Date1>
                    <Date1>
                      <Datepicker1
                        label='End Date'
                        value={ dateDateTimePicker1Value }
                        onChange={ (newValue: any) => {
                          setDateDateTimePicker1Value(newValue);
                        } }
                        slotProps={ {
                          textField: {
                            variant: 'outlined',
                            size: 'small',
                            fullWidth: true,
                            color: 'primary',
                          },
                        } }
                      />
                    </Date1>
                  </DateParent>
                  <FrameDiv>
                    <GenerateTransactionsWrapper>
                      <GenerateTransactions>
                        Generate Transactions
                      </GenerateTransactions>
                    </GenerateTransactionsWrapper>
                    <GenerateTransactionsWrapper>
                      <GenerateTransactions>
                        Download Transactions
                      </GenerateTransactions>
                    </GenerateTransactionsWrapper>
                  </FrameDiv>
                </FrameContainer>
              </FrameWrapper>
              <FrameWrapper>
                <FrameParent1>
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
                    <GenerateTransactions>+ New</GenerateTransactions>
                  </NewWrapper>
                  <NewWrapper>
                    <GenerateTransactions>+ New</GenerateTransactions>
                  </NewWrapper>
                </FrameParent1>
              </FrameWrapper>
              <VendorSheetHeading>
                <NavLinksParent>
                  <ActivityStreamSheet>
                    Activity Stream Sheet
                  </ActivityStreamSheet>
                </NavLinksParent>
              </VendorSheetHeading>
              <ActivityStreamContainer>
                <ActivityStreamSheet1>
                  <Colum1>
                    <FullNameWrapper>
                      <FullName>Full Name</FullName>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Full Name</FullName1>
                    </FullNameWrapper>
                  </Colum1>
                  <Colum1>
                    <FullNameWrapper>
                      <FullName>Role Name</FullName>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Role Name</FullName1>
                    </FullNameWrapper>
                  </Colum1>
                  <Colum1>
                    <FullNameWrapper>
                      <FullName>Email</FullName>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Email</FullName1>
                    </FullNameWrapper>
                  </Colum1>
                  <Colum1>
                    <FullNameWrapper>
                      <FullName>Action Performed</FullName>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>Action Performed</FullName1>
                    </FullNameWrapper>
                  </Colum1>
                  <Colum1>
                    <FullNameWrapper>
                      <FullName>IP Address</FullName>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>IP Address</FullName1>
                    </FullNameWrapper>
                  </Colum1>
                  <Colum1>
                    <FullNameWrapper>
                      <FullName>DateTime</FullName>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                    <FullNameWrapper>
                      <FullName1>DateTime</FullName1>
                    </FullNameWrapper>
                  </Colum1>
                </ActivityStreamSheet1>
                <FrameParent2>
                  <FullNameWrapper6>
                    <FullName1>Full Name</FullName1>
                  </FullNameWrapper6>
                  <FullNameWrapper6>
                    <FullName1>Role Name</FullName1>
                  </FullNameWrapper6>
                  <FullNameWrapper6>
                    <FullName1>Email</FullName1>
                  </FullNameWrapper6>
                  <FullNameWrapper6>
                    <FullName1>Action Performed</FullName1>
                  </FullNameWrapper6>
                  <FullNameWrapper6>
                    <FullName1>IP Address</FullName1>
                  </FullNameWrapper6>
                  <FullNameWrapper6>
                    <FullName1>DateTime</FullName1>
                  </FullNameWrapper6>
                </FrameParent2>
                <ActivityStreamContainerInner>
                  <FrameParent3>
                    <ItemPerPageParent>
                      <GenerateTransactions>
                        Item per page:
                      </GenerateTransactions>
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
                      <GenerateTransactions>0 of 0</GenerateTransactions>
                    </Of0Wrapper>
                    <DoubleRightParent>
                      <DoubleRightIcon alt='' src='/double-right@2x.png' />
                      <Icons8Back501 alt='' src='/icons8back50-1@2x.png' />
                      <Icons8Back501 alt='' src='/icons8forward50-1@2x.png' />
                      <Icons8Back501 alt='' src='/double-right@2x.png' />
                    </DoubleRightParent>
                  </FrameParent3>
                </ActivityStreamContainerInner>
              </ActivityStreamContainer>
              <ModalButton>
                <OpenInWindowWrapper onClick={ openModalPopup }>
                  <GenerateTransactions>Open In Window</GenerateTransactions>
                </OpenInWindowWrapper>
              </ModalButton>
            </HeaderParent>
          </SideMenuBarParent>
        </SettingActivityStreamRoot>
        { isAfterLoginMenuOpen && (
          <PortalDrawer
            overlayColor='rgba(113, 113, 113, 0.3)'
            placement='Left'
            onOutsideClick={ closeAfterLoginMenu }
          >
            <MiniSideBar onClose={ closeAfterLoginMenu } />
          </PortalDrawer>
        ) }
        { isSubMenuBarOpen && (
          <PortalDrawer
            overlayColor='rgba(113, 113, 113, 0.3)'
            placement='Right'
            onOutsideClick={ closeSubMenuBar }
          >
            <SubMenuBar onClose={ closeSubMenuBar } />
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
    </LocalizationProvider>
  );
};

