import { FunctionComponent, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
  Autocomplete,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';

type EmailTemplateModalType = {
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

const CreateEmailTemplate = styled.div`
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

const CreateEmailTemplateParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) 0px;
`;

const EmailTemplateModalChild = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
`;

const Checkbox1 = styled(FormControlLabel)``;

const Bcc = styled.div`
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

const EmailTemplateModalInner = styled(Autocomplete)`
  align-self: stretch;
`;

const CreateEmailTemplateWrapper = styled.div`
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
  background-color: var(--white);
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
  color: var(--white);
`;

const EmailTemplateModalRoot = styled.div`
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

const EmailTemplateModal: FunctionComponent<EmailTemplateModalType> = () => {
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
    <EmailTemplateModalRoot data-animate-on-scroll>
      <CreateEmailTemplateParent>
        <CreateEmailTemplate>Create Email Template</CreateEmailTemplate>
        <CloseWrapper>
          <CreateEmailTemplate>Close</CreateEmailTemplate>
        </CloseWrapper>
      </CreateEmailTemplateParent>
      <EmailTemplateModalChild
        color='primary'
        label='Title'
        size='small'
        placeholder='Title'
        fullWidth
        variant='outlined'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <EmailTemplateModalChild
        color='primary'
        label='Subject'
        size='small'
        placeholder='Subject'
        required
        fullWidth
        variant='outlined'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CheckboxParent>
        <Checkbox1 label='' control={ <Checkbox id='small' color='primary' /> } />
        <Bcc>BCC</Bcc>
      </CheckboxParent>
      <EmailTemplateModalInner
        size='small'
        sx={ { width: '100%' } }
        disablePortal
        options={ ['Triger 1', '2', '3'] }
        renderInput={ (params: any) => (
          <TextField
            { ...params }
            color='primary'
            label='Triger'
            variant='outlined'
            placeholder='Triger'
            helperText=''
          />
        ) }
      />
      <CheckboxParent>
        <Checkbox1 label='' control={ <Checkbox id='small' color='primary' /> } />
        <Bcc>Active/In-Active</Bcc>
      </CheckboxParent>
      <EmailTemplateModalChild
        color='primary'
        label='Icons'
        size='small'
        placeholder='Icons'
        helperText='This is for icons'
        required
        fullWidth
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <FrameParent>
        <CreateEmailTemplateWrapper>
          <CreateEmailTemplate>Create Email Template</CreateEmailTemplate>
        </CreateEmailTemplateWrapper>
        <CloseContainer>
          <CreateEmailTemplate>Close</CreateEmailTemplate>
        </CloseContainer>
      </FrameParent>
    </EmailTemplateModalRoot>
  );
};

export default EmailTemplateModal;
