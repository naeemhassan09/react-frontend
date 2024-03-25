import React,  { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { TextField, InputAdornment, Icon, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactUsForm from 'src/components/contact-us-form';
import FormSocialMediaContainer from 'src/components/form-social-media-container';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/store/thunks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getData } from 'src/store/selectors/features';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const WelcomeToAlchemative = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  font-weight: 500;
  font-family: var(--font-poppins);
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

const WelcomeToAlchemativeParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-3xs);
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const GetStarted = styled.div`
  position: relative;
  font-weight: 500;
`;

const GetStartedButton = styled.a`
  text-decoration: none;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-mini);
  box-sizing: border-box;
  cursor: pointer;
  color: inherit;
  &:hover {
    background-color: var(--color-firebrick);
    color: white;
  }
`;

const LearnAboutUs = styled.div`
  position: relative;
  font-weight: 500;
  white-space: pre-wrap;
`;

const LearnAboutUsButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-lavenderblush-100);
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-mini);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #f2dee0;
  }
`;

const GetStartedButtonParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-brown-200);
  font-family: var(--font-poppins);
`;

const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 2.5rem 0rem 0rem;
  gap: 1.19rem;
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: flex-start;
    padding-right: 0rem;
    box-sizing: border-box;
  }
`;

const HeroSectionInner = styled.div`
  flex: 1;
  height: 25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 0rem;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    width: auto;
    align-self: stretch;
    gap: var(--gap-16xl);
    flex: unset;
  }
`;

const Login1 = styled.div`
  position: relative;
  font-weight: 600;
`;

const LoginWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const Pngwing1Icon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

const GoogleIconBox = styled.div`
  border-radius: var(--br-31xl);
  border: 2px solid var(--color-whitesmoke-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
`;

const GoogleIconBoxParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl);
`;

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
`;

const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.63rem;
`;

const LoginButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--color-firebrick);
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  color: inherit;
  &:hover {
    background-color: var(--color-crimson);
  }
`;

const VendorRegistrationButton = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  border: 2px solid var(--color-firebrick);
  box-sizing: border-box;
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  cursor: pointer;
  color: var(--color-firebrick);
  &:hover {
    background-color: var(--color-firebrick);
    color: white;
  }
`;

const LoginButtonParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  color: var(--white);
`;

const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  font-size: var(--text-sm-leading-5-font-normal-size);
`;

const LoginForm = styled.form`
  border-radius: var(--br-5xs);
  width: 25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xl) var(--padding-16xl);
  box-sizing: border-box;
  gap: 0.88rem;
  max-width: 25rem;
  @media screen and (max-width: 768px) {
    padding-left: var(--padding-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const LoginFormMainContainer = styled.div`
  border-radius: 33px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem var(--padding-3xs);
  font-size: 1.25rem;
  color: var(--color-black);
  font-family: var(--font-poppins);
  @media screen and (max-width: 960px) {
    width: auto;
    align-self: unset;
    flex-direction: row;
    gap: var(--gap-3xs);
    padding-right: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
  }
`;

const HeroSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-16xl);
  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding-top: 0rem;
    box-sizing: border-box;
  }
`;

const PrivacyPolicy = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const PrivacyPolicyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--gap-0);
    padding-bottom: 0rem;
    box-sizing: border-box;
  }
`;

const NavLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--text-sm-leading-5-font-normal-size);
  @media screen and (max-width: 960px) {
    gap: var(--gap-9xl);
    align-items: center;
    justify-content: center;
    flex: unset;
    align-self: stretch;
  }
`;

const FooterLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-16xl);
  gap: var(--gap-16xl);
  text-align: center;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const LoginFormScreen = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("/login-form-screen@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 80rem;
  min-height: 45rem;
`;

const LoginFormScreenMainRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 2.25rem;
  color: var(--white);
  font-family: var(--font-lato);
`;


type AuthFormData = {
  email: string;
  password: string;
};


const Login: FunctionComponent = () => {

  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  //const onSubmit = handleSubmit((data) => dispatch(login(data)));
  const onSubmit: SubmitHandler<AuthFormData> = (data) => {
    dispatch(login(data));
  };
  
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };



  return (
    <LoginFormScreenMainRoot>
      <LoginFormScreen>
        <ContactUsForm />
        <HeroSection>
          <HeroSectionInner>
            <FrameParent>
              <FrameWrapper>
                <WelcomeToAlchemativeParent>
                  <WelcomeToAlchemative>
                    Welcome to Shopify Management Application
                  </WelcomeToAlchemative>
                  <LoremIpsumDolor>
                    <WelcomeToAlchemative> 🌟 Empower Your B2B Commerce with Efficiency and Ease!</WelcomeToAlchemative>

                    Dive into the world of seamless B2B product exchange with the Shopify Management Application. 
                    Specifically tailored for the dynamic needs of B2B transactions, our application revolutionizes 
                    how you manage your product inventory, orders, and customer relationships. 
                    We bring to your fingertips an intuitive platform that streamlines the complexities of 
                    B2B exchanges, ensuring a robust and efficient trading experience. 
                    Embrace a smarter way to do business and elevate your B2B exchange to new heights!
                  </LoremIpsumDolor>
                </WelcomeToAlchemativeParent>
              </FrameWrapper>
              <GetStartedButtonParent>
                <GetStartedButton>
                  <GetStarted>Get Started</GetStarted>
                </GetStartedButton>
                <LearnAboutUsButton>
                  <LearnAboutUs>Learn About us</LearnAboutUs>
                </LearnAboutUsButton>
              </GetStartedButtonParent>
            </FrameParent>
          </HeroSectionInner>
          <LoginFormMainContainer>
            <LoginForm onSubmit={ handleSubmit(onSubmit) }>
              <LoginWrapper>
                <Login1>LOGIN</Login1>
              </LoginWrapper>
              <GoogleIconBoxParent>
                <GoogleIconBox>
                  <Pngwing1Icon alt='' src='/pngwing-1@2x.png' />
                </GoogleIconBox>
                <GoogleIconBox>
                  <Pngwing1Icon alt='' src='/facebook-f@2x.png' />
                </GoogleIconBox>
              </GoogleIconBoxParent>
              <FrameGroup>
                <FrameContainer>
                  <FrameChild
                color='primary'
                label='Email'
                required
                type='email'
                placeholder='@email'
                variant='standard'
                sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                { ...register('email', { required: true }) }
                  />
                  <FrameChild
                    color='primary'
                    placeholder='Password'
                    required
                    variant='standard'
                    type={ showPassword ? 'text' : 'password' }
                    { ...register('password', { required: true }) }
                    InputProps={ {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={ handleShowPasswordClick }
                            aria-label='toggle password visibility'
                          >
                            <Icon>
                              { showPassword ?  <VisibilityIcon/> :  <VisibilityOffIcon/> }
                            </Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    } }
                    sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                  />
                </FrameContainer>
                <LearnAboutUs>{ 'Forgot passwords ?  ' }</LearnAboutUs>
                <LoginButtonParent>
                  <LoginButton type='submit' >
                    <GetStarted>Login</GetStarted>
                  </LoginButton>
                  <VendorRegistrationButton>
                    <GetStarted>Vendor Registration</GetStarted>
                  </VendorRegistrationButton>
                </LoginButtonParent>
              </FrameGroup>
            </LoginForm>
          </LoginFormMainContainer>
        </HeroSection>
        <FormSocialMediaContainer />
        <FooterLinks>
          <FrameDiv>
            <PrivacyPolicyWrapper>
              <PrivacyPolicy>Privacy policy</PrivacyPolicy>
            </PrivacyPolicyWrapper>
            <PrivacyPolicyWrapper>
              <PrivacyPolicy>{ 'Billing Policy ' }</PrivacyPolicy>
            </PrivacyPolicyWrapper>
            <PrivacyPolicyWrapper>
              <PrivacyPolicy>GDPR Compliance</PrivacyPolicy>
            </PrivacyPolicyWrapper>
          </FrameDiv>
          <NavLinks>
            <PrivacyPolicy>
              © 2024 – Powered by Alchemative – All Rights Reserved
            </PrivacyPolicy>
          </NavLinks>
        </FooterLinks>
      </LoginFormScreen>
    </LoginFormScreenMainRoot>
  );
};

export default Login;
