/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent, useEffect } from 'react';
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

const GroupIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;

const GroupIcon1 = styled.img`
  position: relative;
  width: 24px;
  height: 20.1px;
`;

const Frame = styled.a`
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-300);
    transition: 0.1s;
  }
`;

const OrderSvgIcon1 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Layer1 = styled.a`
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-300);
    transition: 0.1s;
  }
`;

const SettingsSvgIcon1Wrapper = styled.a`
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-300);
    transition: 0.1s;
  }
`;

const FrameParent = styled.div`
  border-top: 2px solid #ffefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) 0px;
  gap: var(--gap-xs);
`;

const GroupParent = styled.div`
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
      <GroupParent>
        <GroupIcon alt='' src='/group.svg' />
        <FrameParent>
          <Frame>
            <GroupIcon1 alt='' src='/group1.svg' />
          </Frame>
          <Layer1>
            <OrderSvgIcon1 alt='' src='/ordersvgicon-11.svg' />
          </Layer1>
          <Frame>
            <OrderSvgIcon1 alt='' src='/productlistsvgicon-11.svg' />
          </Frame>
          <SettingsSvgIcon1Wrapper>
            <OrderSvgIcon1 alt='' src='/settingssvgicon-11.svg' />
          </SettingsSvgIcon1Wrapper>
        </FrameParent>
      </GroupParent>
    </MiniSideBarRoot>
  );
};

export default MiniSideBar;
