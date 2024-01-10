import React from 'react';
import styled from 'styled-components';



const PrivacyPolicyWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const FrameParent3 = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl) 0rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--gap-0);
    padding-bottom: 0rem;
    box-sizing: border-box;
  }
`;

const VectorIcon = styled.img`
  position: relative;
  width: 0.8rem;
  height: 1.5rem;
  object-fit: cover;
`;

const VectorWrapper = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-gainsboro);
  width: 2.75rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-whitesmoke);
  }
`;

const VectorIcon1 = styled.img`
  position: relative;
  width: 1.47rem;
  height: 1.5rem;
  object-fit: cover;
`;

const VectorContainer = styled.div`
  border-radius: 60px;
  background-color: var(--color-gainsboro);
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-whitesmoke);
  }
`;

const FrameInner = styled.img`
  position: relative;
  width: 1.52rem;
  height: 1.5rem;
  object-fit: cover;
`;

const FrameChild1 = styled.img`
  position: relative;
  width: 1.58rem;
  height: 1.5rem;
  object-fit: cover;
`;

const IconsChild = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-gainsboro);
  width: 2.75rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-whitesmoke);
  }
`;

const Icons = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.38rem;
`;

const NavLinks1 = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const IconsParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  color: var(--color-black);
  @media screen and (max-width: 1200px) {
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer_1 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(61px);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-11xl) var(--padding-16xl);
  text-align: center;
  color: var(--color-dimgray);
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 2.5rem;
  }
`;


const Home = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;







// Footer component
const Footer: React.FC = () => (
  <Footer_1>
    <FrameParent3>
      <PrivacyPolicyWrapper>
        <Home>Privacy policy</Home>
      </PrivacyPolicyWrapper>
      <PrivacyPolicyWrapper>
        <Home>{ 'Billing Policy ' }</Home>
      </PrivacyPolicyWrapper>
      <PrivacyPolicyWrapper>
        <Home>GDPR Compliance</Home>
      </PrivacyPolicyWrapper>
    </FrameParent3>
    <IconsParent>
      <Icons>
        <VectorWrapper>
          <VectorIcon alt='' src='/facebook.png' />
        </VectorWrapper>
        <VectorContainer>
          <VectorIcon1 alt='' src='/x_twitter.png' />
        </VectorContainer>
        <VectorWrapper>
          <FrameInner alt='' src='/group-3@2x.png' />
        </VectorWrapper>
        <IconsChild>
          <FrameChild1 alt='' src='/instagram.png' />
        </IconsChild>
      </Icons>
      <NavLinks1>
        <Home>© 2023 – Powered by Alchemative – All Rights Reserved</Home>
      </NavLinks1>
    </IconsParent>
  </Footer_1>
);

export default Footer;
