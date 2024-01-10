import styled from 'styled-components';
import { TextField } from '@mui/material';
import theme from 'src/styles/theme';



export const CaptureRemovebgPreview1Icon = styled.img`
  position: relative;

  object-fit: cover;
`;

export const Logo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export      const Login_1 = styled.div`
  position: relative;
  font-weight: 600;
`;

export const LoginWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--font-size-xl);
`;

export const Pngwing1Icon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

export const Pngwing1Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: var(--padding-xl);
    box-sizing: border-box;
    border: 2px solid var(--color-gray-100);
    border-radius: var(--br-31xl);
  }
`;

export const Google = styled.div`
  position: relative;
`;

export const FrameContainer = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-100);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    background-color: var(--color-white);
    border: none;
  }
`;

export const FrameDiv = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-100);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  @media screen and (max-width: 768px) {
    gap: var(--gap-0);
  }
`;

export const LoginFormChild = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3.75rem;
  }
`;

export const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
`;

export const FrameParent2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.63rem;
`;

export const ForgotPasswords = styled.div`
  position: relative;
  white-space: pre-wrap;
`;

export const VendorRegistration = styled.div`
  position: relative;
  font-weight: 500;
`;

export const LoginContainer = styled.button`
cursor: pointer;
text-decoration: none;
align-self: stretch;
border-radius: 10px; // Example of using a custom value from theme
background-color: ${theme.palette.error.main};
height: 2.25rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 0.63rem;
box-sizing: border-box;
color: ${theme.palette.common.white};
`;

export const VendorRegistrationWrapper = styled.button`
align-self: stretch;
border-radius: var(--br-3xs);
background-color: ${theme.palette.error.main}; 
height: 2.25rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: var(--padding-3xs);
box-sizing: border-box;
color: ${theme.palette.common.white};
`;


export const FrameParent3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94rem;
  color: var(--color-white);
`;

export const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const LoginForm1 = styled.div`
  width: 100%;
  border-radius: 65px;
  background-color: var(--color-white);
  border: 20px solid rgba(97, 75, 195, 0.44);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.75rem var(--padding-31xl);
  gap: 2.31rem;
  max-width: 35.06rem;
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
`;

export const LogoParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.13rem;
`;

export const LoginFormInner = styled.form`
  align-self: stretch;
  height: 53.88rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-31xl) var(--padding-51xl);
  box-sizing: border-box;
  color: var(--color-slateblue-100);
  @media screen and (max-width: 500px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
`;

export const Googleplay1Icon = styled.img`
  position: relative;
  width: 6.75rem;
  height: 2rem;
  object-fit: cover;
`;

export const Appstore1Icon = styled.img`
  position: relative;
  width: 6.33rem;
  height: 2rem;
  object-fit: cover;
`;

export const Googleplay1Parent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const DownloadOurAppParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) 5rem; // Increased bottom padding
  gap: var(--gap-3xs);
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginFormRoot = styled.div`
position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-image: url("/login-form@3x.png");
background-size: cover;
background-repeat: no-repeat;
background-position: top;
text-align: left;
font-size: 0.88rem; // Example of using a custom value from theme
color: ${theme.palette.text.primary};
font-family: ${theme.typography.fontFamily};
`;

