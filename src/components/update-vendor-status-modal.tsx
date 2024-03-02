/* eslint-disable no-nested-ternary */
import { FunctionComponent, useEffect, useState } from 'react';
import {
  TextField,
  Autocomplete,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateStatusVendor } from 'src/store/thunks';
type CreateVendorModalType = {
  onClose: any;
  selectedRow?: any;
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


const CreateWrapper = styled.button`
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
  border-color:  var(--color-firebrick);
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

const Frame1 = styled(Autocomplete)`
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const CreateVendorModalRoot = styled.form`
  background-color: white;
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

const UpdateStatusVendor: FunctionComponent<CreateVendorModalType> = ({ onClose, selectedRow }) => {

    const [statusValue, setStatusValue]=useState('');

    const dispatch= useDispatch();

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors }
      } = useForm();
    
    const onSubmit=((data: any)=>{


    const payload={
        id: selectedRow.id,
        vendor_status: data.vendor_status.toLowerCase(),
        remarks:null,
    };

    dispatch(updateStatusVendor({payload}));

    onClose();
        
    });

    const handleUpdateStatus=(()=>{
        setStatusValue(
            selectedRow.vendor_status==='pending' ? 'Pending': 
            selectedRow.vendor_status==='approved'? 'Approved' :'Reject'); 
        setValue('vendor_status',
                selectedRow.vendor_status==='pending' ? 'Pending': 
                selectedRow.vendor_status==='approved'? 'Approved' :'Reject'); 
    });

    useEffect(()=>{
        handleUpdateStatus();
    }, [selectedRow]);


  useEffect(() => {
    handleUpdateStatus();
    
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
    <CreateVendorModalRoot data-animate-on-scroll onSubmit={ handleSubmit(onSubmit) }>
      <CreateVendorParent>
        <CloseWrapper onClick={ onClose } >
          <CreateVendor>Close</CreateVendor>
        </CloseWrapper>
      </CreateVendorParent>

      <Frame1
            size='small'
            sx={ { width: '100%' } }
            disablePortal
            options={ ['Pending', 'Rejected', 'Approved'] }
            value={ statusValue }
            renderInput={ (params: any) => (
              <TextField
            { ...register('vendor_status') }
                { ...params }
                color='primary'
                variant='outlined'
                helperText=''
                required
                value={ getValues().vendor_status }
              />
        ) }
      />
    
  
      <FrameParent>
        <CreateWrapper type='submit'>
          <CreateVendor >Update Status</CreateVendor>
        </CreateWrapper>
        <CloseContainer >
          <CreateVendor onClick={ onClose }>Close</CreateVendor>
        </CloseContainer>
      </FrameParent>
    </CreateVendorModalRoot>
  );
};

export default UpdateStatusVendor;
