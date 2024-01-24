import { FunctionComponent } from 'react';
import styled from 'styled-components';

const FacebookIcon = styled.img`
  position: relative;
  width: 1.13rem;
  height: 1.13rem;
  object-fit: cover;
`;

const FacebookBox = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--white);
  width: 2.19rem;
  height: 2.19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-whitesmoke-100);
  }
`;

const TwitterIcon = styled.img`
  position: relative;
  width: 1.18rem;
  height: 1.13rem;
  object-fit: cover;
`;

const XSpaceBox = styled.div`
  border-radius: var(--br-41xl);
  background-color: var(--white);
  width: 2.19rem;
  height: 2.19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-whitesmoke-100);
  }
`;

const LinkedinIcon = styled.img`
  position: relative;
  width: 1.13rem;
  height: 1.08rem;
  object-fit: cover;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSoicalMediaRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-31xl) var(--padding-16xl) 0rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: var(--gap-21xl);
  }
`;

const FormSocialMediaContainer: FunctionComponent = () => (
  <FooterSoicalMediaRoot>
    <IconsWrapper>
      <Icons>
        <FacebookBox>
          <FacebookIcon alt='' src='/facebookicon-1@2x.png' />
        </FacebookBox>
        <XSpaceBox>
          <TwitterIcon alt='' src='/twittericon-1@2x.png' />
        </XSpaceBox>
        <FacebookBox>
          <LinkedinIcon alt='' src='/linkedinicon-1@2x.png' />
        </FacebookBox>
        <FacebookBox>
          <FacebookIcon alt='' src='/instagramicon-1@2x.png' />
        </FacebookBox>
      </Icons>
    </IconsWrapper>
  </FooterSoicalMediaRoot>
);

export default FormSocialMediaContainer;
