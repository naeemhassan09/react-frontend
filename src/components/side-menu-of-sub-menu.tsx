import { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

type SideMenuOfSubMenuType = {
  onClose?: () => void;
};

const animationSlideInRight = keyframes`
    0% {
        transform: translateX(200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const RolesPermission = styled.div`
  position: relative;
  font-weight: 500;
`;

const RolesPermissionWrapper = styled(Link)`
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
    transition: 0.3s;
  }
`;

const ActivityStreamWrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  color: inherit;
  &:hover {
    background-color: var(--color-lightpink);
    transition: 0.3s;
  }
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mini);
`;

const SideMenuOfSubMenuRoot = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xl) var(--padding-19xl);
  box-sizing: border-box;
  opacity: 0;
  height: 100%;
  max-width: 90%;
  overflow: auto;
  text-align: center;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-gray-200);
  font-family: var(--text-base-leading-6-font-medium);
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInRight};
  }
`;

const SideMenuOfSubMenu: FunctionComponent<SideMenuOfSubMenuType> = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      '[data-animate-on-scroll]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add('animate');
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <SideMenuOfSubMenuRoot data-animate-on-scroll>
      <FrameParent>
        <RolesPermissionWrapper to='/rolespermisssion'>
          <RolesPermission>{ 'Roles & Permission' }</RolesPermission>
        </RolesPermissionWrapper>
        <RolesPermissionWrapper to='/usermanagement'>
          <RolesPermission>User Management</RolesPermission>
        </RolesPermissionWrapper>
        <ActivityStreamWrapper to='/activitystream'>
          <RolesPermission>Activity Stream</RolesPermission>
        </ActivityStreamWrapper>
      </FrameParent>
    </SideMenuOfSubMenuRoot>
  );
};

export default SideMenuOfSubMenu;
