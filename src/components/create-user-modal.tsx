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
import { createUser } from 'src/store/thunks';
import styled, { keyframes } from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

type CreateUserModalType = {
  onClose?: () => void;
  userCreate?: any;
  setClose?: any;
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

const CreateUserModalRoot = styled.form`
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

const CreateUserModal: FunctionComponent<CreateUserModalType> = ({ onClose, userCreate, setClose }) => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
      } = useForm();

  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false);


  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPasswordClick = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const onSubmit=((data : any)=> {
    let role_permission_id=0;
    if (data.role_permission_id==='Admin')
    role_permission_id=1;
    else if (data.role_permission_id=='Vendor')
    role_permission_id=2;
    else
    role_permission_id=3;

    const payload={first_name: data.first_name, last_name: data.last_name, username: data.userName, 
        is_active: data.is_active, password: data.password, confirm_password: data.confirm_password, 
        role_permission_id:role_permission_id, email:data.email};

    dispatch(createUser(payload));
    userCreate(true);
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
  return (
    <>
      <CreateUserModalRoot data-animate-on-scroll onSubmit={ handleSubmit(onSubmit) }>
        <CreateUserNameParent>
          <CreateUserName>Create User Name</CreateUserName>
          <CloseWrapper onClick={ onClose }>
            <CreateUserName >Close</CreateUserName>
          </CloseWrapper>
        </CreateUserNameParent>
        <CreateUserModalChild
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
        <CreateUserModalChild
            { ...register('last_name') } 
            color='primary'
            label='Last Name'
            size='small'
            placeholder='Last Name'
            fullWidth
            variant='outlined'
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
        />
        <CreateUserModalChild
            { ...register('userName') }
            color='primary'
            label='User Name'
            size='small'
            placeholder='@username'
            required
            variant='outlined'
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
        />
        <CreateUserModalChild
            { ...register('email') }
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
        <FrameAutocomplete
            size='small'
            sx={ { width: '100%' } }
            disablePortal
            options={ ['Admin', 'Vendor','Order Manager'] }
            renderInput={ (params: any) => (
              <TextField
                { ...params }
                color='primary'
                label='User Permission'
                variant='outlined'
                placeholder=''
                helperText=''
                required
                { ...register('role_permission_id') }
              />
        ) }
        />
        <CreateUserModalChild
            { ...register('password') }
            color='primary'
            label='Password'
            size='small'
            placeholder='Password'
            fullWidth
            autoComplete={ 'false' }
            variant='outlined'
            type={ showPassword ? 'text' : 'password' }
            InputProps={ {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                    onClick={ handleShowPasswordClick }
                    aria-label='toggle password visibility'
                >
                  <Icon>{ showPassword ? <VisibilityIcon/> :  <VisibilityOffIcon/> }</Icon>
                </IconButton>
              </InputAdornment>
            ),
            } }
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
        />
        <CreateUserModalChild
            { ...register('confirm_password') } 
            color='primary'
            label='Confirm Password'
            size='small'
            placeholder='Confirm Password'
            autoComplete={ 'false' }
            required
            variant='outlined'
            type={ showConfirmPassword ? 'text' : 'password' }
            InputProps={ {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={ handleShowConfirmPasswordClick }
                  aria-label='toggle password visibility'
                >
                  <Icon>{ showConfirmPassword ? <VisibilityIcon/> :  <VisibilityOffIcon/> }</Icon>
                </IconButton>
              </InputAdornment>
            ),
            } }
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
        />
        <CheckboxParent>
          <Checkbox1 label='' { ...register('is_active') } control={ <Checkbox id='small' color='primary'/> } />
          <Enabled>Enabled</Enabled>
        </CheckboxParent>
        <FrameParent>
          <CreateWrapper type='submit'>
            <CreateUserName>Create</CreateUserName>
          </CreateWrapper>
          <CloseContainer  onClick={ onClose }>
            <CreateUserName>Close</CreateUserName>
          </CloseContainer>
        </FrameParent>
      </CreateUserModalRoot>
    </>
  );
};

export default CreateUserModal;
