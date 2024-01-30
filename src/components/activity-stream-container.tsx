import {
  FunctionComponent,
  useState,
  useCallback,
  type CSSProperties,
} from 'react';
import { Link } from 'react-router-dom';
import { Property } from 'csstype';
import styled from 'styled-components';
import { 
  ACTIVITYSTREAM_ROUTE, APP, 
  ROLESPERMISSION_ROUTE, 
  USERMANAGEMENT_ROUTE 
} from 'src/constants/navigation-routes';
import SideMenuOfSubMenu from './side-menu-of-sub-menu';
import PortalDrawer from './portal-drawer';

type ActivityStreamContainerType = {
  showSubHeader?: boolean;

  /** Style props */
  propBorderRadius?: CSSProperties['borderRadius'];
  propBorderRadius1?: CSSProperties['borderRadius'];
  propBorderRadius2?: CSSProperties['borderRadius'];
};

const ProductList1 = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const ProductListWrapper = styled(Link)<{
  propBorderRadius?: CSSProperties['borderRadius'];
}>`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-3xs);
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
  border-radius: ${(p) => p.propBorderRadius};
`;

const ProductList2 = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ProductListWrapper1 = styled(Link)<{
  propBorderRadius1?: CSSProperties['borderRadius'];
}>`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-3xs);
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
  border-radius: ${(p) => p.propBorderRadius1};
`;

const ProductListWrapper2 = styled(Link)<{
  propBorderRadius2?:  CSSProperties['borderRadius'];
}>`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-3xs);
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
  border-radius: ${(p) => p.propBorderRadius2};
`;

const FrameParent = styled.div`
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

const SubHeaderRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6xl);
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-gray-200);
  font-family: var(--font-poppins);
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const ActivityStreamContainer: FunctionComponent<
ActivityStreamContainerType
> = ({
  showSubHeader,
  propBorderRadius,
  propBorderRadius1,
  propBorderRadius2,
}) => {
  const [isSideMenuOfSubMenuOpen, setSideMenuOfSubMenuOpen] = useState(false);

  const openSideMenuOfSubMenu = useCallback(() => {
    setSideMenuOfSubMenuOpen(true);
  }, []);

  const closeSideMenuOfSubMenu = useCallback(() => {
    setSideMenuOfSubMenuOpen(false);
  }, []);

  return (
    <>
      { showSubHeader && (
        <SubHeaderRoot>
          <FrameParent>
            <ProductListWrapper
              to={ `${APP}${ROLESPERMISSION_ROUTE}` } 
              propBorderRadius={ propBorderRadius }
            >
              <ProductList1>{ 'Roles & Permission' }</ProductList1>
            </ProductListWrapper>
            <ProductListWrapper1
              to={ `${APP}${USERMANAGEMENT_ROUTE}` } 
              propBorderRadius1={ propBorderRadius1 }
            >
              <ProductList2>User Management</ProductList2>
            </ProductListWrapper1>
            <ProductListWrapper2
              to={ `${APP}${ACTIVITYSTREAM_ROUTE}` }
              propBorderRadius2={ propBorderRadius2 }
            >
              <ProductList2>Activity Stream</ProductList2>
            </ProductListWrapper2>
          </FrameParent>
          <Layer3Icon
            alt=''
            src='/layer-3@2x.png'
            onClick={ openSideMenuOfSubMenu }
          />
        </SubHeaderRoot>
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
    </>
  );
};

export default ActivityStreamContainer;
