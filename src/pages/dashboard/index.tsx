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


import AlchemtiveWhiteLogo from 'src/assets/images/Alchemative-white-SVG-logo.svg';

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

const DashboardSvgIcon1 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.26rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const Dashboard_1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-weight: 600;
  cursor: pointer;
`;

const DashboardWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 1.31rem;
`;

const Frame = styled(Link)`
  align-self: stretch;
  background-color: var(--color-gray-400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  cursor: pointer;
  &:hover { 
    background-color: var(--color-gray-300);
    transition: 0.1s;
   }
`;

const OrderSvgIcon1 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const Orders = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
`;

const Layer1 = styled(Link)`
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
  cursor: pointer;
  color: inherit;
  &:hover { 
    background-color: var(--color-gray-300);
    transition: 0.1s;
   }
`;

const Frame1 = styled(Link)`
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
  cursor: pointer;
  color: inherit;
  &:hover { 
    background-color: var(--color-gray-300);
    transition: 0.1s;
   }
`;

const SettingsSvgIcon1Parent = styled(Link)`
  text-decoration: none;
  align-self: stretch;
  background-color: var(--color-gray-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-7xl);
  gap: var(--gap-3xs);
  cursor: pointer;
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
  border-radius: var(--br-6xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl) 1.56rem;
  gap: var(--gap-xl);
  background-image: url('/sidemenubar@3x.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  @media screen and (max-width: 960px) { 
    display: none;
   }
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

const IconsolidmenuAlt3 = styled.img`
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

const FrameContainer = styled.div`
  align-self: stretch;
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
  border-radius: var(--br-6xl);
  background-color: var(--color-gray-100);
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-16xl);
  box-sizing: border-box;
  text-align: left;
  color: #b3b5b5;
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
  padding: var(--padding-16xl) 2.81rem;
  text-align: left;
  color: var(--color-gray-200);
  @media screen and (max-width: 960px) { 
    display: flex;
   }
`;

const ProductsPngIcon1 = styled.img`
  position: relative;
  width: 1.38rem;
  height: 1.25rem;
  object-fit: cover;
`;

const Products = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;

const B = styled.b`
  align-self: stretch;
  position: relative;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-200);
`;

const ProductsPngIcon1Parent = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  height: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-11xl);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  @media screen and (max-width: 500px) { 
    flex: unset;
    align-self: stretch;
   }
`;

const VendorPngIcon1 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.34rem;
  object-fit: cover;
`;

const VendorPngIcon1Parent = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  height: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  @media screen and (max-width: 500px) { 
    flex: unset;
    align-self: stretch;
   }
`;

const RatingSubBox2 = styled.div`
  flex: 1;
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

const ApprovedVendorPngIcon1 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.19rem;
  object-fit: cover;
`;

const PendingVendorPngIcon1 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  object-fit: cover;
`;

const PendingVendorPngIcon1Parent = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  height: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  @media screen and (max-width: 500px) { 
    flex: unset;
    align-self: stretch;
   }
`;

const RatingSubBox21 = styled.div`
  flex: 1;
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

const RatingSubBox = styled.div`
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
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-31xl) 0rem;
  @media screen and (max-width: 1200px) { 
    padding-left: 0rem;
    padding-right: 0rem;
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

const SelectThroughFilter = styled.div`
  position: relative;
  font-weight: 500;
`;

const FrameAutocomplete = styled(Autocomplete)``;

const MonthsWrapper = styled.div`
  border-radius: 19.43px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.09rem 0.37rem;
`;

const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.28rem;
`;

const SalesReportParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.28rem 0rem;
`;

const FrameItem = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const GroupWrapper = styled.div`
  align-self: stretch;
  height: 8.36rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const JanParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
`;

const FrameDiv = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 8.22px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.56rem;
  @media screen and (max-width: 1200px) { 
    flex: unset;
    align-self: stretch;
   }
`;

const PieChart = styled.b`
  align-self: stretch;
  position: relative;
`;

const APieChart = styled.p`
  margin: 0;
`;

const APieChartContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xs-9);
  color: var(--color-black);
  opacity: 0.5;
`;

const PieChartParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const A = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.09rem;
  font-weight: 600;
  opacity: 0.5;
`;

const GroupChild = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: #86ff68;
  width: 0.91rem;
  height: 0.53rem;
`;

const AParent = styled.div`
  position: relative;
  width: 1.59rem;
  height: 0.75rem;
`;

const GroupItem = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: #518cff;
  width: 0.91rem;
  height: 0.53rem;
`;

const BParent = styled.div`
  position: relative;
  width: 1.53rem;
  height: 0.75rem;
`;

const GroupInner = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: #47bdff;
  width: 0.91rem;
  height: 0.53rem;
`;

const RectangleDiv = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: var(--color-brown-100);
  width: 0.91rem;
  height: 0.53rem;
`;

const GroupParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.28rem;
`;

const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-5xs-9);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
`;

const FrameParent3 = styled.div`
  align-self: stretch;
  flex: 1;
  border-bottom: 1px solid var(--color-darkgray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.1rem;
`;

const FrameWrapper1 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameInner = styled.img`
  position: relative;
  width: 5.33rem;
  height: 5.33rem;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
`;

const FrameParent2 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 3.97px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.49rem;
  gap: 0.74rem;
`;

const MainChartsAndGraphDivInner = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 7.94px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.05rem;
  text-align: left;
  font-size: 1.43rem;
  color: #0057ff;
  font-family: var(--font-arial);
  @media screen and (max-width: 1200px) { 
    flex: unset;
    align-self: stretch;
   }
`;

const TrafficReport = styled.div`
  position: relative;
  font-weight: 600;
`;

const Wrapper = styled.div`
  border-radius: 19.43px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameWrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const GroupChild1 = styled.div`
  position: absolute;
  width: 100%;
  top: 0.03rem;
  right: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  height: 0.31rem;
`;

const GroupChild2 = styled.div`
  position: absolute;
  width: 67.11%;
  top: 0rem;
  right: 32.79%;
  left: 0.1%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const RectangleParent = styled.div`
  position: absolute;
  width: 100%;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  height: 0.34rem;
`;

const GroupFrame = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.34rem;
`;

const FrameParent5 = styled.div`
  align-self: stretch;
  height: 2.54rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xs) 0rem;
  box-sizing: border-box;
  gap: 0.48rem;
`;

const GroupChild3 = styled.div`
  position: absolute;
  width: 100%;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  height: 0.31rem;
`;

const GroupChild4 = styled.div`
  position: absolute;
  width: 53.68%;
  top: 0rem;
  right: 46.32%;
  left: 0%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const RectangleGroup = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.31rem;
`;

const GroupChild6 = styled.div`
  position: absolute;
  width: 46.52%;
  top: 0.01rem;
  right: 53.38%;
  left: 0.1%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const RectangleContainer = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.32rem;
`;

const GroupChild8 = styled.div`
  position: absolute;
  width: 38.32%;
  top: 0.02rem;
  right: 61.58%;
  left: 0.1%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const GroupDiv = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.33rem;
`;

const FrameParent4 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 8.22px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.62rem;
  gap: 0.06rem;
  @media screen and (max-width: 1200px) { 
    flex: unset;
    align-self: stretch;
   }
`;

const MainChartsAndGraphDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: var(--font-size-4xs);
  @media screen and (max-width: 1200px) { 
    flex-direction: column;
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
  padding: 1.81rem var(--padding-16xl);
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: #393e46;
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
  justify-content: center;
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
  gap: 1.31rem;
`;

const FrameParent9 = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-xl) 4.38rem;
  gap: 2.88rem;
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
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) { 
    display: none;
   }
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
  padding: 3.06rem 1.31rem;
  text-align: left;
  color: var(--white);
  @media screen and (max-width: 768px) { 
    display: flex;
   }
`;

const DashboardContentContainer = styled.div`
  align-self: stretch;
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.56rem;
  text-align: center;
`;

const DashboardMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const MainDashboardDRoot = styled.div`
  position: relative;
  background-color: var(--white);
  box-shadow: 4px 8px 36px rgba(98, 0, 8, 0.14);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.88rem var(--padding-mini);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkgray);
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
import PortalDrawer from 'src/components/portal-drawer';
import MiniSideBar from 'src/components/mini-side-bar';
import PortalPopup from 'src/components/portal-popup';
import Modal from 'src/components/modal';
import { getDashboardData } from 'src/store/selectors/entities';
import { useSelector } from 'react-redux';
import { APP, DASHBORD_ROUTE, ORDERS_ROUTE, PRODUCTLIST_ROUTE, 
  USERMANAGEMENT_ROUTE } from 'src/constants/navigation-routes';
import { logout } from '../../store/thunks/auth';


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
            <Colum1>
              <VendorNameContainer>
                <NoOfOrder>{ item?.vendor_name }</NoOfOrder>
              </VendorNameContainer>
            </Colum1>
  
            <Colum1>
              <VendorNameContainer>
                <NoOfOrder>{ item?.no_of_orders }</NoOfOrder>
              </VendorNameContainer>
            </Colum1>
  
            <Colum1>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_amount }</NoOfOrder>
              </VendorNameContainer>
            </Colum1>
  
            <Colum1>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_commission }</NoOfOrder>
              </VendorNameContainer>
            </Colum1>
  
            <Colum1>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_pending_commission }</NoOfOrder>
              </VendorNameContainer>
            </Colum1>
  
            <Colum1>
              <VendorNameContainer>
                <NoOfOrder>{ item?.total_paid_commission }</NoOfOrder>
              </VendorNameContainer>
            </Colum1>
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
      <MainDashboardDRoot>
        <DashboardMainContainer>
          <SideMenuBar>
            <Logo>
              <AlchemativeLogo1Icon alt='' src={ AlchemativeLogo } />
            </Logo>
            <SideMenuBarInner>
              <FrameParent>
                <Frame to={ `${APP}${DASHBORD_ROUTE}` }>
                  <DashboardSvgIcon1 alt='' src='/dashboardsvgicon-1.svg' />
                  <DashboardWrapper>
                    <Dashboard_1>Dashboard</Dashboard_1>
                  </DashboardWrapper>
                </Frame>
                <Layer1 to={ `${APP}${ORDERS_ROUTE}` }>
                  <OrderSvgIcon1 alt='' src='/ordersvgicon-1.svg' />
                  <Orders>Orders</Orders>
                </Layer1>
                <Frame1 to={ `${APP}${PRODUCTLIST_ROUTE}` }>
                  <OrderSvgIcon1 alt='' src='/productlistsvgicon-1.svg' />
                  <Orders>Product List</Orders>
                </Frame1>
                <SettingsSvgIcon1Parent to={ `${APP}${USERMANAGEMENT_ROUTE}` }>
                  <OrderSvgIcon1 alt='' src='/settingssvgicon-1.svg' />
                  <Orders>Setiings</Orders>
                </SettingsSvgIcon1Parent>
              </FrameParent>
            </SideMenuBarInner>
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
                  <IconsolidmenuAlt3
                    alt=''
                    src='/iconsolidmenualt3.svg'
                    onClick={ openAfterLoginMenu }
                  />
                </FrameContainer>
              </FrameGroup>
            </Header>
            <SubHeader>
              <Orders>Dashboard</Orders>
            </SubHeader>
            <RatingBox>
              <RatingSubBox>
                <RatingSubBox2>
                  <ProductsPngIcon1Parent>
                    <ProductsPngIcon1 alt='' src='/productspngicon-1@2x.png' />
                    <Products>Products</Products>
                    <B>{ dashboardData?.products }</B>
                  </ProductsPngIcon1Parent>
                  <VendorPngIcon1Parent>
                    <VendorPngIcon1 alt='' src='/vendorpngicon-1@2x.png' />
                    <Products>Vendor</Products>
                    <B>{ dashboardData?.vendors }</B>
                  </VendorPngIcon1Parent>
                </RatingSubBox2>
                <RatingSubBox21>
                  <VendorPngIcon1Parent>
                    <ApprovedVendorPngIcon1
                      alt=''
                      src='/approvedvendorpngicon-1@2x.png'
                    />
                    <Products>Approve Vendor</Products>
                    <B>{ dashboardData?.approved_vendors }</B>
                  </VendorPngIcon1Parent>
                  <PendingVendorPngIcon1Parent>
                    <PendingVendorPngIcon1
                      alt=''
                      src='/pendingvendorpngicon-1@2x.png'
                    />
                    <Products>Pending Vendor</Products>
                    <B>{ dashboardData?.pending_vendors }</B>
                  </PendingVendorPngIcon1Parent>
                </RatingSubBox21>
              </RatingSubBox>
            </RatingBox>
            <MainChartsAndGraphDiv>
              <FrameDiv>
                <FrameGroup>
                  <SelectThroughFilter>
                    Select through filter
                  </SelectThroughFilter>
                  <FrameAutocomplete
                    size='small'
                    sx={ {  width: 79  } }
                    disablePortal
                    options={ ['option1', 'option2', 'option3', ''] }
                    renderInput={ (params: any) => (
                      <TextField
                        { ...params }
                        color='primary'
                        label=''
                        variant='standard'
                        placeholder='Select'
                        helperText=''
                      />
                    ) }
                  />
                </FrameGroup>
                <SalesReportParent>
                  <SelectThroughFilter>Sales Report</SelectThroughFilter>
                  <FrameParent1>
                    <MonthsWrapper>
                      <SelectThroughFilter>{ '20 months ' }</SelectThroughFilter>
                    </MonthsWrapper>
                    <MonthsWrapper>
                      <SelectThroughFilter>12 months</SelectThroughFilter>
                    </MonthsWrapper>
                    <MonthsWrapper>
                      <SelectThroughFilter>20 days</SelectThroughFilter>
                    </MonthsWrapper>
                  </FrameParent1>
                </SalesReportParent>
                <GroupWrapper>
                  <FrameItem alt='' src='/group-12.svg' />
                </GroupWrapper>
                <JanParent>
                  <SelectThroughFilter>jan</SelectThroughFilter>
                  <SelectThroughFilter>feb</SelectThroughFilter>
                  <SelectThroughFilter>mar</SelectThroughFilter>
                  <SelectThroughFilter>Apr</SelectThroughFilter>
                  <SelectThroughFilter>may</SelectThroughFilter>
                  <SelectThroughFilter>jun</SelectThroughFilter>
                  <SelectThroughFilter>jul</SelectThroughFilter>
                  <SelectThroughFilter>aug</SelectThroughFilter>
                  <SelectThroughFilter>sep</SelectThroughFilter>
                  <SelectThroughFilter>oct</SelectThroughFilter>
                  <SelectThroughFilter>nov</SelectThroughFilter>
                  <SelectThroughFilter>dec</SelectThroughFilter>
                </JanParent>
              </FrameDiv>
              <MainChartsAndGraphDivInner>
                <FrameParent2>
                  <FrameWrapper1>
                    <FrameParent3>
                      <PieChartParent>
                        <PieChart>{ 'Pie Chart ' }</PieChart>
                        <APieChartContainer>
                          <APieChart>
                            { 'A pie chart is great for visualization ' }
                          </APieChart>
                          <APieChart>{ 'of percentage ' }</APieChart>
                        </APieChartContainer>
                      </PieChartParent>
                      <FrameWrapper2>
                        <GroupParent>
                          <AParent>
                            <A> A</A>
                            <GroupChild />
                          </AParent>
                          <BParent>
                            <A> B</A>
                            <GroupItem />
                          </BParent>
                          <BParent>
                            <A> B</A>
                            <GroupInner />
                          </BParent>
                          <BParent>
                            <A> B</A>
                            <RectangleDiv />
                          </BParent>
                        </GroupParent>orders
                      </FrameWrapper2>
                    </FrameParent3>
                  </FrameWrapper1>
                  <GroupContainer>
                    <FrameInner alt='' src='/group-5.svg' />
                    <FrameInner alt='' src='/group-6.svg' />
                  </GroupContainer>
                </FrameParent2>
              </MainChartsAndGraphDivInner>
              <FrameParent4>
                <FrameGroup>
                  <TrafficReport>Traffic report</TrafficReport>
                  <FrameAutocomplete
                    size='small'
                    sx={ {  width: 79  } }
                    disablePortal
                    options={ ['option1', 'option2', 'option3', ''] }
                    renderInput={ (params: any) => (
                      <TextField
                        { ...params }
                        color='primary'
                        label=''
                        variant='standard'
                        placeholder='Select'
                        helperText=''
                      />
                    ) }
                  />
                </FrameGroup>
                <FrameParent5>
                  <FrameGroup>
                    <SelectThroughFilter>Direct</SelectThroughFilter>
                    <FrameWrapper3>
                      <Wrapper>
                        <SelectThroughFilter>14,678</SelectThroughFilter>
                      </Wrapper>
                    </FrameWrapper3>
                  </FrameGroup>
                  <GroupFrame>
                    <RectangleParent>
                      <GroupChild1 />
                      <GroupChild2 />
                    </RectangleParent>
                  </GroupFrame>
                </FrameParent5>
                <FrameParent5>
                  <FrameGroup>
                    <SelectThroughFilter>Referal</SelectThroughFilter>
                    <FrameWrapper3>
                      <Wrapper>
                        <SelectThroughFilter>647</SelectThroughFilter>
                      </Wrapper>
                    </FrameWrapper3>
                  </FrameGroup>
                  <RectangleGroup>
                    <GroupChild3 />
                    <GroupChild4 />
                  </RectangleGroup>
                </FrameParent5>
                <FrameParent5>
                  <FrameGroup>
                    <SelectThroughFilter>Social Media</SelectThroughFilter>
                    <FrameWrapper3>
                      <Wrapper>
                        <SelectThroughFilter>7000</SelectThroughFilter>
                      </Wrapper>
                    </FrameWrapper3>
                  </FrameGroup>
                  <RectangleContainer>
                    <GroupChild3 />
                    <GroupChild6 />
                  </RectangleContainer>
                </FrameParent5>
                <FrameParent5>
                  <FrameGroup>
                    <SelectThroughFilter>Facebook</SelectThroughFilter>
                    <FrameWrapper3>
                      <Wrapper>
                        <SelectThroughFilter>654</SelectThroughFilter>
                      </Wrapper>
                    </FrameWrapper3>
                  </FrameGroup>
                  <GroupDiv>
                    <GroupChild3 />
                    <GroupChild8 />
                  </GroupDiv>
                </FrameParent5>
              </FrameParent4>
            </MainChartsAndGraphDiv>
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
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>No of Order</VendorName>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Total Amount</VendorName>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Total Pay Bill</VendorName>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Pending Amount</VendorName>
                  </VendorNameWrapper>
                </Colum1>
                <Colum1>
                  <VendorNameWrapper>
                    <VendorName>Paid Amount</VendorName>
                  </VendorNameWrapper>
                </Colum1>
              </VendorSheetContainer>
              <> { renderTable() } </>
              <DashboardSheetContainerInner>
                <FrameParent9>
                  <ItemPerPage50Parent>
                    <SelectThroughFilter>Item per page: 10</SelectThroughFilter>
                    <SelectThroughFilter>{ `${currentPage} of ${totalPages}` }</SelectThroughFilter>
                  </ItemPerPage50Parent>
                  <DoubleRightParent>
                    <Icons8Back501 alt='' src='/icons8back50-1@2x.png' onClick={ handlePrevPage }/>
                    <Icons8Back501 alt='' src='/icons8forward50-1@2x.png' onClick={ handleNextPage }/>
                  </DoubleRightParent>
                </FrameParent9>
              </DashboardSheetContainerInner>
            </DashboardSheetContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <SelectThroughFilter>Open In Window</SelectThroughFilter>
              </OpenInWindowWrapper>
            </ModalButton>
          </DashboardContentContainer>
        </DashboardMainContainer>
      </MainDashboardDRoot>
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
