/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
//import { useDispatch } from 'react-redux';
//import { Typography, Button, Box } from '@mui/material';
import { FunctionComponent, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import { logout } from '../../store/thunks/auth';

import PortalDrawer from 'src/components/portal-drawer';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import MiniSideBar from 'src/components/mini-side-bar';

import AlchemtiveWhiteLogo from 'src/assets/images/Alchemative-white-SVG-logo.svg';

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

const Dashboard_1 = styled.div`
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

const Frame = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  cursor: pointer;
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

const ProductIcon = styled.img`
  position: relative;
  width: 2rem;
  height: 2rem;
  object-fit: cover;
`;

const Product = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
`;

const B = styled.b`
  align-self: stretch;
  position: relative;
  font-size: var(--text-lg-leading-6-font-medium-size);
`;

const ProductParent = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  background-color: var(--color-lightpink);
  height: 9.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;

const FrameDiv = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-14xl);
  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const FrameParent1 = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-14xl);
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-14xl);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RatingBox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-31xl) 9.38rem;
  text-align: center;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-51xl);
    padding-right: var(--padding-51xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    padding-top: 0rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-21xl);
    padding-right: var(--padding-21xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
`;

const VendorWisePayment = styled.div`
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

const VendorName = styled.b`
  flex: 1;
  position: relative;
`;

const VendorNameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const NoOfOrder = styled.div`
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

const ItemPerPage = styled.div`
  position: relative;
  font-weight: 500;
`;

const ItemPerPage50Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
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

const FrameParent2 = styled.div`
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

const DashboardSheetContainerInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-16xl);
`;

const DashboardSheetContainer = styled.div`
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

const DashboardContentContainer = styled.div`
  align-self: stretch;
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const DashboardMainContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const MainDashboardRoot = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("/maindashboard@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--white);
  font-family: var(--font-poppins);
`;

import DashboardIcon from 'src/assets/images/Dashboard-SVG-icon.svg';
import AlchemativeBrownishRedIcon from 'src/assets/images/Alchemative-brownish-red-SVG-icon.svg';
import AlchemativeLogo from 'src/assets/images/alchemative-logo.svg';
import AlchemativeSVGLogo from 'src/assets/images/Alchemative-SVG-Logo.svg';
import AlchemativeWhiteIcon from 'src/assets/images/Alchemative-white-SVG-icon.svg';
import ApproveVendorIcon from 'src/assets/images/Approve-vendor-SVG-icon.svg';
import HamburgerIcon from 'src/assets/images/Humberger-SVG-icon.svg';
import OrderIcon from 'src/assets/images/Order-SVG-icon.svg';
import PendingVendorIcon from 'src/assets/images/Pending-vendor-SVG-icon.svg';
import ProductListIcon from 'src/assets/images/Product-list-SVG-icon.svg';
import ProductIcon_1 from 'src/assets/images/Product-SVG-icon.svg';
import ProfileIcon from 'src/assets/images/Profile-SVG-icon.svg';
import SettingIcon from 'src/assets/images/Setting-SVG-icon.svg';
import VendorIcon from 'src/assets/images/vendor-SVG-icon.svg';

export const Dashboard: FunctionComponent = () => {
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
      <MainDashboardRoot>
        <DashboardMainContainer>
          <SideMenuBar>
            <WebLogoParent>
              <WebLogo>
                <ClipPathGroup alt='' src= { AlchemtiveWhiteLogo } />
              </WebLogo>
              <FrameParent>
                <Frame>
                  <VectorParent>
                    <VectorIcon alt='' src= { DashboardIcon } />
                    <Dashboard_1>Dashboard</Dashboard_1>
                  </VectorParent>
                </Frame>
                <Layer1 to='/mainorders'>
                  <GroupIcon alt='' src= { OrderIcon } />
                  <Orders>Orders</Orders>
                </Layer1>
                <Frame1 to='/mainpropductlist'>
                  <VectorIcon1 alt='' src={ ProductListIcon }/>
                  <Orders>Product List</Orders>
                </Frame1>
                <IconParent to='/mainsettingsrolespermissions'>
                  <Icon1>
                    <TransparentRectangleIcon
                      alt=''
                      src= { SettingIcon }
                    />
                    <VectorIcon2 alt='' src={ SettingIcon } />
                    <VectorIcon3 alt='' src={ SettingIcon } />
                    <VectorIcon4 alt='' src={ SettingIcon } />
                    <VectorIcon5 alt='' src={ SettingIcon } />
                  </Icon1>
                  <Orders>Setiings</Orders>
                </IconParent>
              </FrameParent>
            </WebLogoParent>
          </SideMenuBar>
          <DashboardContentContainer>
            <Header>
              <FrameGroup>
                <FrameWrapper>
                  <NavLinksWrapper>
                    <NavLinks>
                      <Orders>Dashboard</Orders>
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
              <Orders>Dashboard</Orders>
            </SubHeader>
            <RatingBox>
              <FrameContainer>
                <FrameDiv>
                  <ProductParent>
                    <ProductIcon alt='' src= { ProductIcon } />
                    <Product>Product</Product>
                    <B>9</B>
                  </ProductParent>
                  <ProductParent>
                    <ProductIcon alt='' src= { VendorIcon } />
                    <Product>Vendor</Product>
                    <B>5</B>
                  </ProductParent>
                </FrameDiv>
                <FrameParent1>
                  <ProductParent>
                    <ProductIcon alt='' src= { ApproveVendorIcon } />
                    <Product>Approve Vendor</Product>
                    <B>5</B>
                  </ProductParent>
                  <ProductParent>
                    <ProductIcon alt='' src={ PendingVendorIcon } />
                    <Product>Pending Vendor</Product>
                    <B>5</B>
                  </ProductParent>
                </FrameParent1>
              </FrameContainer>
            </RatingBox>
            <VendorSheetHeading>
              <FrameGroup>
                <VendorWisePayment>
                  Vendor Wise Payment Information
                </VendorWisePayment>
              </FrameGroup>
            </VendorSheetHeading>
            <DashboardSheetContainer>
              <VendorSheetContainer>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Vendor Name</VendorName>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Vendor Name</NoOfOrder>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>No od Order</VendorName>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>No of Order</NoOfOrder>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Total Amount</VendorName>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Amount</NoOfOrder>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Total Pay Bill</VendorName>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Total Pay Bill</NoOfOrder>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Pending Amount</VendorName>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Pending Amount</NoOfOrder>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Paid Amount</VendorName>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                  <VendorNameWrapper>
                    <NoOfOrder>Paid Amount</NoOfOrder>
                  </VendorNameWrapper>
                </Colum1>
              </VendorSheetContainer>
              <DashboardSheetContainerInner>
                <FrameParent2>
                  <ItemPerPage50Parent>
                    <ItemPerPage>Item per page: 50</ItemPerPage>
                    <ItemPerPage>0 of 0</ItemPerPage>
                  </ItemPerPage50Parent>
                  <DoubleRightParent>
                    <DoubleRightIcon alt='' src='/double-right@2x.png' />
                    <Icons8Back501 alt='' src='/icons8back50-1@2x.png' />
                    <Icons8Back501 alt='' src='/icons8forward50-1@2x.png' />
                    <Icons8Back501 alt='' src='/double-right@2x.png' />
                  </DoubleRightParent>
                </FrameParent2>
              </DashboardSheetContainerInner>
            </DashboardSheetContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <ItemPerPage>Open In Window</ItemPerPage>
              </OpenInWindowWrapper>
            </ModalButton>
          </DashboardContentContainer>
        </DashboardMainContainer>
      </MainDashboardRoot>
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

