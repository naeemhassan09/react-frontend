import styled from 'styled-components';

export const Home = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

export const AboutUs = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 500;
  color: inherit;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xl);
`;

export const NavLinksWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;


export const Menu = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url("src/assets/images/menu@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const CaptureRemovebgPreview1Icon = styled.img`
  position: relative;
  width: 13.5rem;
  height: 3.44rem;
  object-fit: cover;
`;

export const CaptureRemovebgPreview1Wrapper = styled.div`
  flex: 1;
  height: 3.44rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;


export const Actions = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-smi);
  @media screen and (max-width: 960px) {
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;


export const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xl) var(--padding-16xl);
`;

export const HeaderContainer = styled.div`
  align-self: stretch;
  background: linear-gradient(90deg, #fff 0.13%);
  backdrop-filter: blur(61px);
  height: 5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;