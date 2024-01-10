/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
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

const GroupIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  object-fit: cover;
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
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const GroupIcon1 = styled.img`
  position: relative;
  width: 23.5px;
  height: 25.2px;
  object-fit: cover;
`;

const Layer1 = styled(Link)`
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
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const VectorIcon = styled.img`
  position: relative;
  width: 22px;
  height: 22px;
  object-fit: cover;
`;

const TransparentRectangleIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  object-fit: cover;
  z-index: 0;
`;

const VectorIcon1 = styled.img`
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

const VectorIcon2 = styled.img`
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

const VectorIcon3 = styled.img`
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

const VectorIcon4 = styled.img`
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

const IconWrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-300);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xl);
  &:hover {
    background-color: var(--color-gray-200);
    transition: 0.1s;
  }
`;

const FrameParent = styled.div`
  border-top: 2px solid #ffefef;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) 0px;
  gap: var(--gap-xs);
`;

const GroupParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-23xl);
`;

const MiniSideBarRoot = styled.div`
  background-color: var(--color-lightpink);
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
        <GroupIcon alt='' src='/group@2x.png' />
        <FrameParent>
          <Frame to='/maindashboard'>
            <GroupIcon alt='' src='/group-2@2x.png' />
          </Frame>
          <Layer1 to='/mainorders'>
            <GroupIcon1 alt='' src='/group@2x.png' />
          </Layer1>
          <Frame to='/mainpropductlist'>
            <VectorIcon alt='' src='/vector@2x.png' />
          </Frame>
          <IconWrapper to='/mainsettingsrolespermissions'>
            <Icon1>
              <TransparentRectangleIcon
                alt=''
                src='/transparent-rectangle@2x.png'
              />
              <VectorIcon1 alt='' src='/vector@2x.png' />
              <VectorIcon2 alt='' src='/vector@2x.png' />
              <VectorIcon3 alt='' src='/vector@2x.png' />
              <VectorIcon4 alt='' src='/vector@2x.png' />
            </Icon1>
          </IconWrapper>
        </FrameParent>
      </GroupParent>
    </MiniSideBarRoot>
  );
};

export default MiniSideBar;
