import { FunctionComponent, useState, useCallback } from 'react';
import styled from 'styled-components';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1'; 
import SideMenuOfSubMenu from 'src/components/side-menu-of-sub-menu';
import PortalDrawer from 'src/components/portal-drawer';
import NewCardForm from 'src/components/new-card-form';
import ActivityStreamForm from 'src/components/activity-stream-form';
import { APP, DASHBORD_ROUTE, ORDERS_ROUTE, PRODUCTLIST_ROUTE, SETTINGS_ROUTE } from 'src/constants/navigation-routes';
import { Link } from 'react-router-dom';

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
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem var(--padding-xl);
  gap: 1.25rem;
  background-image: url("/sidemenubar@3x.png");
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

const ProductListWrapper = styled.a`
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

const ProductListFrame = styled.a`
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

const FrameDiv = styled.div`
  border-radius: var(--br-31xl);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const FrameGroup = styled.div`
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

const Vendor = styled.div`
  height: 1.69rem;
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
`;

const VendorWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ActivityStreamHeadingContai = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.81rem var(--padding-6xl);
  text-align: center;
  font-size: 1.13rem;
  color: #393e46;
`;

const ActivityStreamContentContai = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-gray-200);
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

const SettingsVendorRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.88rem var(--padding-mini);
  box-sizing: border-box;
  min-height: 45rem;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
`;

const SettingsVendor: FunctionComponent = () => {
  const [isSideMenuOfSubMenuOpen, setSideMenuOfSubMenuOpen] = useState(false);

  const openSideMenuOfSubMenu = useCallback(() => {
    setSideMenuOfSubMenuOpen(true);
  }, []);

  const closeSideMenuOfSubMenu = useCallback(() => {
    setSideMenuOfSubMenuOpen(false);
  }, []);

  return (
    <>
      <SettingsVendorRoot>
        <ActivityStreamMainContainer>
          <SideMenuBar>
            <Logo>
              <AlchemativeLogo1Icon alt='' src='/alchemativelogo-1@2x.png' />
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
            <SubHeader>
              <FrameGroup>
                <ProductListWrapper>
                  <Orders>{ 'Roles & Permission' }</Orders>
                </ProductListWrapper>
                <ProductListWrapper>
                  <ProductList>User Management</ProductList>
                </ProductListWrapper>
                <ProductListFrame>
                  <ProductList>Activity Stream</ProductList>
                </ProductListFrame>
                <FrameDiv>
                  <ProductList>Vendossssr</ProductList>
                </FrameDiv>
                <FrameDiv>
                  <ProductList>Email Template</ProductList>
                </FrameDiv>
              </FrameGroup>
              <Layer3Icon
                alt=''
                src='/layer-3@2x.png'
                onClick={ openSideMenuOfSubMenu }
              />
            </SubHeader>
            <NewCardForm />
            <ActivityStreamHeadingContai>
              <VendorWrapper>
                <Vendor>Vendor</Vendor>
              </VendorWrapper>
            </ActivityStreamHeadingContai>
            <ActivityStreamForm />
          </ActivityStreamContentContai>
        </ActivityStreamMainContainer>
      </SettingsVendorRoot>
      { isSideMenuOfSubMenuOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeSideMenuOfSubMenu }
        >
          <SideMenuOfSubMenu onClose={ closeSideMenuOfSubMenu } />
        </PortalDrawer>
      ) }
    </>
  );
};

export default SettingsVendor;
