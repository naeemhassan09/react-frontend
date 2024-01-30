/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useEffect  } from 'react';
//import {  useDispatch  } from 'react-redux';
//import {  Typography, Button, Box  } from '@mui/material';
import {  FunctionComponent, useState, useCallback  } from 'react';
import {  Link  } from 'react-router-dom';
import styled from 'styled-components';

//import {  logout  } from '../../store/thunks/auth';
import {  fetchDashboardData  } from 'src/store/thunks';
import {  useDispatch  } from 'react-redux';
//import { logout } from '../../store/thunks/auth';

import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';

import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import OrderHeaderContainer from 'src/components/order-header-container';
import Container from 'src/components/container';
import FormWithAutocompleteAndPieChar from 'src/components/form-with-autocomplete-and-pie-char';
import Pagination from 'src/components/pagination';
import { getDashboardData } from 'src/store/selectors/entities';
import { useSelector } from 'react-redux';
import { APP, DASHBORD_ROUTE, ORDERS_ROUTE, PRODUCTLIST_ROUTE, 
  SETTINGS_ROUTE, 
  USERMANAGEMENT_ROUTE } from 'src/constants/navigation-routes';

import { logout } from '../../store/thunks/auth';


const AlchemativeLogo1Icon = styled.img`
  position: relative;
  width: 10.44rem;
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
  position: relative;
  width: 1.5rem;
  height: 1.26rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const Dashboard1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-weight: 500;
  cursor: pointer;
`;

const DashboardWrapper = styled.div`
  position: relative;
  width: 4.94rem;
  height: 1.31rem;
`;

const Frame = styled(Link)`
  align-self: stretch;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
`;

const OrderSvgIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const Orders1 = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const Layer = styled(Link)`
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
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
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
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
`;

const SettingsSvgIcon1Parent = styled(Link)`
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
    background-color: var(--color-gray-400);
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
  background-image: url("/sidemenubar7@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Dashboard2 = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
`;

const SubHeader = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-16xl) var(--padding-26xl);
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const RatingSubBox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RatingBox = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-16xl) 0rem;
  @media screen and (max-width: 1200px) {
    padding-left: 0rem;
    padding-right: 0rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding-top: 0rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0rem;
    padding-right: 0rem;
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

const VendorWisePaymentInformatioWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-200);
`;

const VendorName = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
`;

const VendorNameWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
  font-size: var(--text-sm-leading-5-font-normal-size);
`;

const NoOfOrder = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const VendorNameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const VendorNameFrame = styled.div`
  align-self: stretch;
  background-color: var(--color-lavenderblush-100);
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

const VendorSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const DashboardSheetContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const OpenInWindow = styled.div`
  position: relative;
  font-weight: 500;
`;

const OpenInWindowWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-brown-100);
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
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-30xl) var(--padding-2xl);
  color: var(--white);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const DashboardContentContainer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  color: var(--color-gray-200);
`;

const DashboardMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const DashboardRoot = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--white);
  width: 100%;
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



export const Dashboard: FunctionComponent = () => { 
  const dispatch = useDispatch();
  const dashboardData = useSelector(getDashboardData);


  const ordersArrays=  dashboardData?.orders;

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);

  const [selectedOrderArray, setSelectedOrderArray] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages]=useState<number>(0);
  
  const itemsPerPage = 10;

  const handleLogout = () => {
    dispatch(logout({}));
  };

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

   const renderTable = () => (
    selectedOrderArray!==undefined && selectedOrderArray?.length > 0 ? (
      <>
        { selectedOrderArray.map((item: any, index: number) => (
          <VendorSheetContainer key={ index }>
            <Colum>
              <VendorNameContainer>
                <NoOfOrder>{ item?.vendor_name }</NoOfOrder>
              </VendorNameContainer>
            </Colum>
  
            <Colum>
              <VendorNameContainer>
                <NoOfOrder>{ item?.no_of_orders }</NoOfOrder>
              </VendorNameContainer>
            </Colum>
  
            <Colum>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_amount }</NoOfOrder>
              </VendorNameContainer>
            </Colum>
  
            <Colum>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_commission }</NoOfOrder>
              </VendorNameContainer>
            </Colum>
  
            <Colum>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_pending_commission }</NoOfOrder>
              </VendorNameContainer>
            </Colum>
  
            <Colum>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_paid_commission }</NoOfOrder>
              </VendorNameContainer>
            </Colum>
          </VendorSheetContainer>
        )) }
      </>
    ) : (
      <></>
    )
  );
  

  const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => { 
    dispatch(fetchDashboardData({}));
   }, []);

   useEffect(()=>{    
    if (ordersArrays && ordersArrays.length>0)
    {
        const pages=Math.ceil(ordersArrays.length/10);
        setTotalPages(pages);
        setCurrentPage(1);
    }
   },[ordersArrays]);

   useEffect(() => {
    if (ordersArrays !== null  && ordersArrays && ordersArrays.length>10) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = ordersArrays.slice(startIndex, endIndex);
      setSelectedOrderArray(nextItems);
    }

    else  setSelectedOrderArray(ordersArrays);

  }, [ordersArrays, currentPage]);


  return (
    <>
      <DashboardRoot>
        <DashboardMainContainer>
          <SideMenuBar>
            <Logo>
              <AlchemativeLogo1Icon alt='' src='/alchemativelogo-12@2x.png'  />
            </Logo>
            <SideMenuBarInner>
              <FrameParent>
                <Frame to={ `${APP}${DASHBORD_ROUTE}` }>
                  <DashboardSvgIcon alt='' src='/dashboardsvgicon-1.svg' />
                  <DashboardWrapper>
                    <Dashboard1>Dashboard</Dashboard1>
                  </DashboardWrapper>
                </Frame>
                <Layer to={ `${APP}${ORDERS_ROUTE}` }>
                  <OrderSvgIcon alt='' src='/ordersvgicon-1.svg' />
                  <Orders1>Orders</Orders1>
                </Layer>
                <Frame1 to={ `${APP}${PRODUCTLIST_ROUTE}` }>
                  <OrderSvgIcon alt='' src='/productlistsvgicon-1.svg' />
                  <Orders1>Product List</Orders1>
                </Frame1>
                <SettingsSvgIcon1Parent to={ `${APP}${SETTINGS_ROUTE}` }>
                  <OrderSvgIcon alt='' src='/settingssvgicon-1.svg' />
                  <Orders1>Setiings</Orders1>
                </SettingsSvgIcon1Parent>
              </FrameParent>
            </SideMenuBarInner>
          </SideMenuBar>
          <DashboardContentContainer>
            <OrderHeaderContainer pageTitle='Dashboard' />
            <SubHeader>
              <Dashboard2>Dashboard</Dashboard2>
            </SubHeader>
            <RatingBox>
              <RatingSubBox>
                <Container
                  productDimensions='/productspngicon-1@2x.png'
                  Action='Products'
            
                  vendorName='Vendor'
                  propWidth='1.38rem'
                  propHeight='1.25rem'
                  propHeight1='1.34rem'
                  count={ dashboardData?.products }
                
                />
                <Container
                  productDimensions='/vendorpngicon-1@2x.png'
                  Action='Vendors'
                  propWidth='1.38rem'
                  propHeight='1.25rem'
                  propHeight1='1.34rem'
                  count={ dashboardData?.vendors }
                />
                <Container
                  productDimensions='/approvedvendorpngicon-1@2x.png'
                  Action='Approve Vendor'
                  propWidth='1.38rem'
                  propHeight='1.25rem'
                  propHeight1='1.34rem'
                  count={ dashboardData?.approved_vendors }
                />
                <Container
                  productDimensions='/pendingvendorpngicon-1@2x.png'
                  Action='Pending Vendor'
                  propWidth='1.38rem'
                  propHeight='1.25rem'
                  propHeight1='1.34rem'
                  count={ dashboardData?.pending_vendors }
                />
              </RatingSubBox>
            </RatingBox>
            <FormWithAutocompleteAndPieChar />
            <VendorSheetHeading>
              <VendorWisePaymentInformatioWrapper>
                <VendorWisePayment>
                  Vendor Wise Payment Information
                </VendorWisePayment>
              </VendorWisePaymentInformatioWrapper>
            </VendorSheetHeading>
            <DashboardSheetContainer>
              <VendorSheetContainer>
                <Colum>
                  <VendorNameWrapper>
                    <VendorName>Vendor Name</VendorName>
                  </VendorNameWrapper>
                </Colum>
                <Colum>
                  <VendorNameWrapper>
                    <VendorName>No od Order</VendorName>
                  </VendorNameWrapper>
                </Colum>
                <Colum>
                  <VendorNameWrapper>
                    <VendorName>Total Amount</VendorName>
                  </VendorNameWrapper>
                </Colum>
                <Colum>
                  <VendorNameWrapper>
                    <VendorName>Total Pay Bill</VendorName>
                  </VendorNameWrapper>
                </Colum>
                <Colum>
                  <VendorNameWrapper>
                    <VendorName>Pending Amount</VendorName>
                  </VendorNameWrapper>
                </Colum>
                <Colum>
                  <VendorNameWrapper>
                    <VendorName>Paid Amount</VendorName>
                  </VendorNameWrapper>
                </Colum>
              </VendorSheetContainer>
              <> { renderTable() } </>
              <Pagination
                imageAltText='/double-right2@2x.png'
                imageId='/icons8back50-11@2x.png'
                imageCode='/icons8forward50-11@2x.png'
                imageDimensions='/double-right3@2x.png'
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
            </DashboardSheetContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <OpenInWindow>Open In Window</OpenInWindow>
              </OpenInWindowWrapper>
            </ModalButton>
          </DashboardContentContainer>
        </DashboardMainContainer>
      </DashboardRoot>
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
