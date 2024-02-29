import { FunctionComponent, useEffect, useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Autocomplete,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createVendor, fetchVendorData, updateVendor } from 'src/store/thunks';
import { getValue } from '@mui/system';
type CreateVendorModalType = {
  onClose?: () => void;
  isEdit?: boolean;
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

const CreateVendorModal: FunctionComponent<CreateVendorModalType> = ({ onClose, isEdit, selectedRow }) => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        getValues,
        formState: { errors }
      } = useForm();

    const dispatch= useDispatch();

    const [isCommission, setIsCommission]=useState(false);
    const [isEnable, setIsEnable]=useState(false);

    
    const onSubmit=((data: any)=>{

    const payload={
        address: data.address, 
        commission_type: data.commission_type && isCommission? data.commission_type.toLowerCase() : 'percentage',
        commission_value: data.commission_value && isCommission? Number(data.commission_value) : 0,
        company_name: data.company_name,
        is_active: isEnable,
        is_commission: isCommission,
        social_media_link: data.social_media_link,
        vat_number: data.vat_number,
        vendor_contact_number: data.vendor_contact_number,
        vendor_email: data.vendor_email,
        vendor_name: data.vendor_name,
        website: data.website,
        };

        if (isEdit)
        {
           dispatch(updateVendor({...payload, id: selectedRow.id}));
        }
        else
        dispatch(createVendor({payload}));
        reset();
        setIsCommission(false);
        
    });

    const handleEditData=(()=>{
        setValue('address', selectedRow.address); 
        setValue('commission_type', selectedRow.commission_type);
        setValue('commission_value', selectedRow.commission_value);
        setValue('company_name', selectedRow.company_name);
        setValue('social_media_link', selectedRow.social_media_link);
        setValue('vat_number', selectedRow.vat_number);
        setValue('vendor_contact_number', selectedRow.vendor_contact_number);
        setValue('vendor_email', selectedRow.vendor_email);
        setValue('vendor_name', selectedRow.vendor_name);
        setValue('website', selectedRow.website);
        setValue('is_active', selectedRow.is_active);

        setIsCommission(selectedRow.is_commission);
        setIsEnable(selectedRow.is_active);
    });

  useEffect(() => {
    if (isEdit)
    {
        handleEditData();
    }

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
      <CreateVendorModalChild
        { ...register('vendor_name') } 
        color='primary'
        label='Name'
        size='small'
        placeholder='Name'
        required
        fullWidth
        variant='outlined'
        type='text'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        { ...register('vendor_email') } 

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
        { ...register('vat_number') } 
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
        { ...register('company_name') } 

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
        { ...register('website') } 

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
        { ...register('vendor_contact_number') }
        color='primary'
        label='Contact Number'
        size='small'
        placeholder='Contact Number'
        fullWidth
        variant='outlined'
        sx={ { '& .MuiInputBase-root': { height: '36px' } } }
      />
      <CreateVendorModalChild
        { ...register('address') }
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
        { ...register('social_media_link') }
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
        <Checkbox1 
        label='' 
        control={ <Checkbox 
        id='small' color='primary' 
        checked={ isCommission }
        onClick=
          { ()=>setIsCommission(!isCommission) }
                  /> }
        />
        <Enabled>Commission</Enabled>
      </CheckboxParent>
      {  
        isCommission && 
        <> 
          <CreateVendorModalChild
            { ...register('commission_value') } 
            color='primary'
            label='Commission Value'
            size='small'
            placeholder='Number'
            required
            variant='outlined'
            type='number'
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
          />
          <Frame1
            size='small'
            sx={ { width: '100%' } }
            disablePortal
            options={ ['Percentage', 'Fixed Value'] }
            renderInput={ (params: any) => (
              <TextField
                { ...register('commission_type') }
                { ...params }
                color='primary'
                label='Commission Type'
                variant='outlined'
                placeholder='Commission Type'
                helperText=''
                required
              />
      ) }
          />
        </>
      }
      <CheckboxParent>
        <Checkbox1 
        label='' 
        checked={ isEnable }
        control={ <Checkbox  
        id='small' color='primary' 
        onClick={ ()=>setIsEnable(!isEnable) }
                  /> }
        />
        <Enabled>Enabled</Enabled>
      </CheckboxParent>
      <FrameParent>
        <CreateWrapper type='submit'>
          <CreateVendor >{ isEdit? 'Update Vendor': 'Create Vendor' }</CreateVendor>
        </CreateWrapper>
        <CloseContainer >
          <CreateVendor onClick={ onClose }>Close</CreateVendor>
        </CloseContainer>
      </FrameParent>
    </CreateVendorModalRoot>
  );
};

export default CreateVendorModal;
