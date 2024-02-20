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
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getValue } from '@mui/system';
import { updateUser } from 'src/store/thunks';

type EditUserModalType = {
  
  setIsTableUpdate?: any;
  setClose?: any;
  formData: any;
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

const EditUserName = styled.div`
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

const EditUserNameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
`;

const EditUserModalChild = styled(TextField)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
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

const EditUserModalRoot = styled.form`
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

const EditUserModal: FunctionComponent<EditUserModalType> = ({ setIsTableUpdate, setClose, formData }) => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
      } = useForm();

  const dispatch=useDispatch();
 

  const onSubmit=((data : any)=> {
    let role_permission_id=0;
    if (data.role_permission_id==='Admin')
    role_permission_id=1;
    else if (data.role_permission_id=='Vendor')
    role_permission_id=2;
    else
    role_permission_id=3;

    const payload={first_name: data.first_name, last_name: data.last_name, username: formData.username, 
        is_active: data.is_active, 
        role_permission_id:role_permission_id, id: formData.id};

    dispatch(updateUser({payload}));
    setIsTableUpdate(true);
    setClose(false);
   });

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

  useEffect(()=>{
    setValue('first_name', formData.first_name);
    setValue('last_name', formData.last_name);
    setValue('is_active', formData.is_active);
    if (formData.role_permission_id===1)
    setValue('role_permission_id', 'Admin');
    else  if (formData.role_permission_id===2)
    setValue('role_permission_id', 'Vendor');
    else
    setValue('role_permission_id', 'Order Manager');
},[]);


  return (
    <>
      <EditUserModalRoot data-animate-on-scroll onSubmit={ handleSubmit(onSubmit) }>
        <EditUserNameParent>
          <EditUserName>Create User Name</EditUserName>
          <CloseWrapper onClick={ ()=>setClose(false) }>
            <EditUserName >Close</EditUserName>
          </CloseWrapper>
        </EditUserNameParent>
        <EditUserModalChild
            { ...register('first_name') } 
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
        <EditUserModalChild
            { ...register('last_name') } 
            color='primary'
            label='Last Name'
            size='small'
            placeholder='Last Name'
            fullWidth
            variant='outlined'
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
        />
   
        <FrameAutocomplete
            size='small'
            sx={ { width: '100%' } }
            disablePortal
            options={ ['Admin', 'Vendor','Order Manager'] }
            value={ getValues().role_permission_id }
            renderInput={ (params: any) => (
              <TextField
                { ...params }
                color='primary'
                label='User Permission'
                variant='outlined'
                placeholder=''
                helperText=''
                value={ getValues().role_permission_id }
                required
                { ...register('role_permission_id') }
                />
        ) }
      />

        <CheckboxParent>
          <Checkbox1 
          label='' { ...register('is_active') } 
          control={ <Checkbox 
          id='small' color='primary'  
          defaultChecked={ formData.is_active } /> } 
         />
          <Enabled>Enabled</Enabled>
        </CheckboxParent>
        <FrameParent>
          <CreateWrapper disabled={ formData.role_permission_id===3?true:false } type='submit'>
            <EditUserName >Update User</EditUserName>
          </CreateWrapper>
          <CloseContainer  onClick={  ()=>setClose(false) }>
            <EditUserName>Close</EditUserName>
          </CloseContainer>
        </FrameParent>
      </EditUserModalRoot>
    </>
  );
};

export default EditUserModal;
