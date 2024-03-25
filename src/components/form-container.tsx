import { FunctionComponent, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Property } from 'csstype';
import styled from 'styled-components';

type FormContainerType = {
  dimensions?: string;

  /** Style props */
  alchemativeLogo1IconBackgroundImage?: CSSProperties['backgroundImage'];
};

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

const SideMenuBarRoot = styled.div<{
  alchemativeLogo1IconBackgroundImage?: Property.BackgroundImage;
}>`
  align-self: stretch;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-xl);
  gap: var(--gap-xl);
  background-image: url("/sidemenubar@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 960px) {
    display: none;
  }
  background-image: ${(p) => p.alchemativeLogo1IconBackgroundImage};
`;

const FormContainer: FunctionComponent<FormContainerType> = ({
  dimensions,
  alchemativeLogo1IconBackgroundImage,
}) => (
  <SideMenuBarRoot
    alchemativeLogo1IconBackgroundImage={ alchemativeLogo1IconBackgroundImage }
  >
    <Logo>
      <AlchemativeLogo1Icon alt='' src={ dimensions } />
    </Logo>
    <SideMenuBarInner>
      <FrameParent>
        <Frame to='/maindashboardd'>
          <DashboardSvgIcon alt='' src='/dashboardsvgicon-1.svg' />
          <DashboardWrapper>
            <Dashboard1>Dashboard</Dashboard1>
          </DashboardWrapper>
        </Frame>
        <Layer to='/orders'>
          <OrderSvgIcon alt='' src='/ordersvgicon-1.svg' />
          <Orders1>Orders</Orders1>
        </Layer>
        <Frame to='/product-list'>
          <OrderSvgIcon alt='' src='/productlistsvgicon-1.svg' />
          <Orders1>Product List</Orders1>
        </Frame>
        <SettingsSvgIcon1Parent to='/settings'>
          <OrderSvgIcon alt='' src='/settingssvgicon-1.svg' />
          <Orders1>Settings</Orders1>
        </SettingsSvgIcon1Parent>
      </FrameParent>
    </SideMenuBarInner>
  </SideMenuBarRoot>
);

export default FormContainer;
