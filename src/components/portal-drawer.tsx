/* eslint-disable react/react-in-jsx-scope */
import {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

import { createPortal } from 'react-dom';
import styled from 'styled-components';

const PortalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
`;

type DrawerProps = {
  overlayColor?: string;
  placement?: 'Left' | 'Right' | 'Top' | 'Bottom';
  onOutsideClick?: () => void;
  zIndex?: number;
  children: ReactNode;
};

const PortalDrawer: FunctionComponent<DrawerProps> = ({
  children,
  overlayColor,
  placement = 'Left',
  onOutsideClick,
  zIndex = 100,
}) => {
  const drawerStyle = useMemo(() => {
    const style: CSSProperties = {};
    style.zIndex = zIndex;

    if (overlayColor) {
      style.backgroundColor = overlayColor;
    }

    switch (placement) {
      case 'Left':
        style.alignItems = 'flex-start';
        break;
      case 'Right':
        style.alignItems = 'flex-end';
        break;
      case 'Top':
        style.alignItems = 'center';
        break;
      case 'Bottom':
        style.alignItems = 'center';
        style.justifyContent = 'flex-end';
        break;
    }

    return style;
  }, [placement, overlayColor, zIndex]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        onOutsideClick &&
        (e.target as HTMLElement).classList.contains('portalPopupOverlay')
      ) {
        onOutsideClick();
      }

      e.stopPropagation();
    },
    [onOutsideClick]
  );

  return (
    <DrawerContainer>
      <PortalOverlay
        className='portalPopupOverlay'
        style={ drawerStyle }
        onClick={ onOverlayClick }
      >
        { children }
      </PortalOverlay>
    </DrawerContainer>
  );
};

type DrawerContainerProps = {
  children: ReactNode;
  containerId?: string;
};

export const DrawerContainer: FunctionComponent<DrawerContainerProps> = ({
  children,
  containerId = 'portals',
}) => {
  let portalsDiv = document.getElementById(containerId);

  if (!portalsDiv) {
    portalsDiv = document.createElement('div');
    portalsDiv.setAttribute('id', containerId);
    document.body.appendChild(portalsDiv);
  }

  return createPortal(children, portalsDiv);
};

export default PortalDrawer;
