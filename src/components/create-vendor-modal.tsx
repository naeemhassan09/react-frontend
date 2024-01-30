import { FunctionComponent, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';

type CreateVendorModalType = {
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

const CreateVendor = styled.div`
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
  color: var(--color-white);
`;

const CreateVendorParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
`;

const CreateVendorModalChild = styled(TextField)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;

const CreateVendorWrapper = styled.div`
  height: 36px;
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
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
  background-color: var(--color-white);
  border: 2px solid var(--color-firebrick);
  box-sizing: border-box;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  color: var(--color-firebrick);
  &:hover {
    background-color: var(--color-firebrick);
    color: white;
  }
`;

const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
  color: var(--color-white);
`;

const CreateVendorModalRoot = styled.div`
  background-color: var(--color-white);
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
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-family: var(--font-poppins);
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInRight};
  }
`;

const CreateVendorModal: FunctionComponent<CreateVendorModalType> = () => {
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
    <CreateVendorModalRoot data-animate-on-scroll>
      <CreateVendorParent>
        <CreateVendor>Create Vendor</CreateVendor>
        <CloseWrapper>
          <CreateVendor>Close</CreateVendor>
        </CloseWrapper>
      </CreateVendorParent>
      <CreateVendorModalChild
        color='primary'
        label='First Name'
        size='small'
        placeholder='First Name'
        required
        fullWidth
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='Email'
        size='small'
        placeholder='Email Address'
        required
        fullWidth
        variant='outlined'
        type='email'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='VAT/TaxNumber'
        size='small'
        placeholder='Number'
        required
        variant='outlined'
        type='number'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='Company Name'
        size='small'
        placeholder='Company ame'
        required
        fullWidth
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='Website'
        size='small'
        placeholder='Webste'
        required
        fullWidth
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='Contact Number'
        size='small'
        placeholder='Contact Number'
        fullWidth
        variant='outlined'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='Address'
        size='small'
        placeholder='Address'
        fullWidth
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        color='primary'
        label='Social Media Link'
        size='small'
        placeholder='http/'
        required
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CheckboxParent>
        <Checkbox1 label='' control={ <Checkbox id='small' color='primary' /> } />
        <Enabled>Enabled</Enabled>
      </CheckboxParent>
      <FrameParent>
        <CreateVendorWrapper>
          <CreateVendor>Create Vendor</CreateVendor>
        </CreateVendorWrapper>
        <CloseContainer>
          <CreateVendor>Close</CreateVendor>
        </CloseContainer>
      </FrameParent>
    </CreateVendorModalRoot>
  );
};

export default CreateVendorModal;
