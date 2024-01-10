/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React,  { FunctionComponent, useState, useCallback } from 'react';
import { TextField, InputAdornment, Icon, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { useDispatch } from 'react-redux';
import { login } from 'src/store/thunks';
import { SubmitHandler, useForm } from 'react-hook-form';

import { testId } from 'src/utils/e2e';
import SideMenu from 'src/components/side-menu';
import PortalDrawer from 'src/components/portal-drawer';

import { Login_1,Pngwing1Icon, Appstore1Icon, CaptureRemovebgPreview1Icon, DownloadOurAppParent, ForgotPasswords, FrameChild, FrameContainer, FrameDiv, FrameGroup, FrameParent1, FrameParent2, FrameParent3, Google, Googleplay1Icon, Googleplay1Parent, LoginContainer, LoginForm1, LoginFormChild, LoginFormInner, LoginFormRoot, LoginWrapper, Logo, LogoParent, Pngwing1Wrapper, VendorRegistration, VendorRegistrationWrapper } from './styled';


type AuthFormData = {
  email: string;
  password: string;
};

import logo from 'src/assets/images/logo@2x.png';
import pngwing from 'src/assets/images/pngwing-1@2x.png';
import facebookIcon from 'src/assets/images/facebook-f@2x.png';
import googleplay from 'src/assets/images/googleplay-1@2x.png';
import appstore from 'src/assets/images/appstore-1@2x.png';

import Footer from 'src/components/footer';
import Header from 'src/components/header';


const Login: React.FC = () => {
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
    <>
      <LoginFormRoot>
        <Header/>
        <LoginFormInner onSubmit={ handleSubmit(onSubmit) }>
          <LogoParent>
            <Logo>
              <CaptureRemovebgPreview1Icon
                src={ logo } alt=''
              />
            </Logo>
            <LoginForm1>
              <LoginWrapper>
                <Login_1>LOGIN</Login_1>
              </LoginWrapper>
              <LoginFormChild>
                <FrameGroup>
                  <FrameContainer>
                    <Pngwing1Wrapper>
                      <Pngwing1Icon 
                        src={ pngwing } 
                      />
                    </Pngwing1Wrapper>
                    <Google>Google</Google>
                  </FrameContainer>
                  <FrameDiv>
                    <Pngwing1Wrapper>
                      <Pngwing1Icon src={ facebookIcon } />
                    </Pngwing1Wrapper>
                    <Google>Facebook</Google>
                  </FrameDiv>
                </FrameGroup>
              </LoginFormChild>
              <FrameParent1>
                <FrameParent2>
                  <FrameChild
                color='primary'
                label='Email'
                size='small'
                required
                fullWidth
                variant='outlined'
                type='email'
                { ...register('email', { required: true }) }
                  />
                  <FrameChild
                color='primary'
                label='Password'
                size='small'
                required
                fullWidth
                variant='outlined'
                type={ showPassword ? 'text' : 'password' }
                { ...register('password', { required: true }) }
                InputProps={ {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={ handleShowPasswordClick }
                        aria-label='toggle password visibility'
                      >
                    
                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                   
                      </IconButton>
                    </InputAdornment>
                  ),
                } }
                  />
                </FrameParent2>
                <ForgotPasswords>{ 'Forgot passwords ?  ' }</ForgotPasswords>
                <FrameParent3>
                  <LoginContainer type='submit' >
                    <VendorRegistration>Login</VendorRegistration>
                  </LoginContainer>
                  <VendorRegistrationWrapper>
                    <VendorRegistration>Vendor Registration</VendorRegistration>
                  </VendorRegistrationWrapper>
                </FrameParent3>
              </FrameParent1>
            </LoginForm1>
          </LogoParent>
        </LoginFormInner>
        <DownloadOurAppParent>
          <Login_1>Download Our App</Login_1>
          <Googleplay1Parent>
            <Googleplay1Icon src= { googleplay } />
            <Appstore1Icon src= { appstore } />
          </Googleplay1Parent>
        </DownloadOurAppParent>
        <Footer/>
      </LoginFormRoot>
    </>
  );
};

export default Login;
