import { FunctionComponent, useState, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';

type CreateShopifyModalType = {
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

const CreateShopifyStore = styled.div`
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
  cursor: pointer;
  color: var(--white);
  &:hover {
    background-color: var(--color-crimson);
  }
  @media screen and (max-width: 420px) {
    flex: 1;
  }
`;

const CreateShopifyStoreSettngParent = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
`;

const CreateShopifyModalChild = styled(TextField)`
  border: none;
  background-color: transparent;
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

const CreateShopifyCenterWrapper = styled.div`
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
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
  }
  @media screen and (max-width: 420px) {
    flex: 1;
  }
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

const CreateShopifyModalRoot = styled.div`
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

const CreateShopifyModal: FunctionComponent<CreateShopifyModalType> = ({}) => {
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
    <CreateShopifyModalRoot data-animate-on-scroll>
      <CreateShopifyStoreSettngParent>
        <CreateShopifyStore>Create Shopify Store Settng</CreateShopifyStore>
        <CloseWrapper>
          <CreateShopifyStore>Close</CreateShopifyStore>
        </CloseWrapper>
      </CreateShopifyStoreSettngParent>
      <CreateShopifyModalChild
        color='primary'
        label='Store Name'
        size='small'
        placeholder='Store Name'
        required
        fullWidth
        variant='outlined'
        type='text'
      />
      <CreateShopifyModalChild
        color='primary'
        label='Shopify Admin Domain'
        size='small'
        placeholder='Shopify Admin Domain'
        required
        fullWidth
        variant='outlined'
      />
      <CreateShopifyModalChild
        color='primary'
        label='API key'
        size='small'
        placeholder='API Key'
        required
        fullWidth
        variant='outlined'
        type='number'
      />
      <CreateShopifyModalChild
        color='primary'
        label='API Password'
        size='small'
        placeholder='API Password'
        required
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
      <CreateShopifyModalChild
        color='primary'
        label='Access Token'
        size='small'
        placeholder='Access Token'
        required
        variant='outlined'
        type={ showPassword ? 'text' : 'text' }
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
        <CreateShopifyCenterWrapper>
          <CreateShopifyStore>Create Shopify Center</CreateShopifyStore>
        </CreateShopifyCenterWrapper>
        <CloseContainer>
          <CreateShopifyStore>Close</CreateShopifyStore>
        </CloseContainer>
      </FrameParent>
    </CreateShopifyModalRoot>
  );
};

export default CreateShopifyModal;
