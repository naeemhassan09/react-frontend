import { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

type MiniSideBarType = {
  onClose?: () => void;
};

const animationSlideInLeft = keyframes`
    0% {
        transform: translateX(-200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
  `;

const AlchematicveMiniIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;

const GroupIcon = styled.img`
  position: relative;
  width: 24px;
  height: 20.1px;
`;

const Frame = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  &:hover {
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
`;

const OrderSvgIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Layer = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  &:hover {
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
`;

const SettingsSvgIcon1Wrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  &:hover {
    background-color: var(--color-gray-400);
    transition: 0.1s;
  }
`;

const FrameParent = styled.div`
  border-top: 2px solid #ffefef;
  box-sizing: border-box;
  width: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) 0px;
  gap: var(--gap-xs);
`;

const AlchematicveMiniIconParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
`;

const MiniSideBarRoot = styled.div`
  background-color: var(--color-brown-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16xl) var(--padding-xl);
  box-sizing: border-box;
  opacity: 0;
  height: 100%;
  max-width: 90%;
  overflow: auto;
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInLeft};
  }
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const MiniSideBar: FunctionComponent<MiniSideBarType> = () => {
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
    <MiniSideBarRoot data-animate-on-scroll>
      <AlchematicveMiniIconParent>
        <AlchematicveMiniIcon alt='' src='/alchematicveminiicon.svg' />
        <FrameParent>
          <Frame to='/maindashboardd'>
            <GroupIcon alt='' src='/group.svg' />
          </Frame>
          <Layer to='/orders'>
            <OrderSvgIcon alt='' src='/ordersvgicon-11.svg' />
          </Layer>
          <Frame to='/product-list'>
            <OrderSvgIcon alt='' src='/productlistsvgicon-11.svg' />
          </Frame>
          <SettingsSvgIcon1Wrapper to='/settings'>
            <OrderSvgIcon alt='' src='/settingssvgicon-11.svg' />
          </SettingsSvgIcon1Wrapper>
        </FrameParent>
      </AlchematicveMiniIconParent>
    </MiniSideBarRoot>
  );
};

export default MiniSideBar;
