/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent, useState, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';

type CreateUserModalType = {
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

const CreateUserName = styled.div`
  position: relative;
  font-weight: 500;
`;

const CloseWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  color: var(--white);
`;

const CreateUserNameParent = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
`;

const CreateUserModalChild = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
`;

const FrameAutocomplete = styled(Autocomplete)`
  align-self: stretch;
`;

const Checkbox1 = styled(FormControlLabel)``;

const Enabled = styled.div`
  position: relative;
`;

const CheckboxParent = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;

const CreateWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-lightpink);
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
  }
`;

const CloseContainer = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
`;

const FrameParent = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
  color: var(--white);
`;

const CreateUserModalRoot = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
  opacity: 0;
  height: 100%;
  max-width: 90%;
  overflow: auto;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-black);
  font-family: var(--font-poppins);
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInRight};
  }
`;


const CreateUserModal: FunctionComponent<CreateUserModalType> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

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
    <CreateUserModalRoot data-animate-on-scroll>
      <CreateUserNameParent>
        <CreateUserName>Create User Name</CreateUserName>
        <CloseWrapper>
          <CreateUserName>Close</CreateUserName>
        </CloseWrapper>
      </CreateUserNameParent>
      <CreateUserModalChild
        color='primary'
        label='First Name'
        size='small'
        placeholder='First Name'
        required
        fullWidth
        variant='outlined'
        type='text'
      />
      <CreateUserModalChild
        color='primary'
        label='Last Name'
        size='small'
        placeholder='Last Name'
        fullWidth
        variant='outlined'
      />
      <CreateUserModalChild
        color='primary'
        label='User Name'
        size='small'
        placeholder='@username'
        required
        variant='outlined'
      />
      <CreateUserModalChild
        color='primary'
        label='Email'
        size='small'
        placeholder='Email Address'
        required
        fullWidth
        variant='outlined'
        type='email'
      />
      <FrameAutocomplete
        size='small'
        sx={ { width: '100%' } }
        disablePortal
        options={ ['Permission1', 'Permission2', 'Permission3'] }
        renderInput={ (params: any) => (
          <TextField
            { ...params }
            color='primary'
            label='User Permission'
            variant='outlined'
            placeholder=''
            helperText=''
            required
          />
        ) }
      />
      <CreateUserModalChild
        color='primary'
        label='Password'
        size='small'
        placeholder='Password'
        fullWidth
        variant='outlined'
        type={ showPassword ? 'text' : 'password' }
        InputProps={ {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                onClick={ handleShowPasswordClick }
                aria-label='toggle password visibility'
              >
                <Icon>{ showPassword ? 'visibility_off' : 'visibility' }</Icon>
              </IconButton>
            </InputAdornment>
          ),
        } }
      />
      <CreateUserModalChild
        color='primary'
        label='Confirm Password'
        size='small'
        placeholder='Confirm Password'
        required
        variant='outlined'
        type={ showPassword ? 'text' : 'password' }
        InputProps={ {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                onClick={ handleShowPasswordClick }
                aria-label='toggle password visibility'
              >
                <Icon>{ showPassword ? 'visibility_off' : 'visibility' }</Icon>
              </IconButton>
            </InputAdornment>
          ),
        } }
      />
      <CheckboxParent>
        <Checkbox1 label='' control={ <Checkbox id='small' color='primary' /> } />
        <Enabled>Enabled</Enabled>
      </CheckboxParent>
      <FrameParent>
        <CreateWrapper>
          <CreateUserName>Create</CreateUserName>
        </CreateWrapper>
        <CloseContainer>
          <CreateUserName>Close</CreateUserName>
        </CloseContainer>
      </FrameParent>
    </CreateUserModalRoot>
  );
};

export default CreateUserModal;
