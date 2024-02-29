import { FunctionComponent, useState, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  
} from '@mui/material';
import {  fetchVendorOrderDetails, updatePassworVendor, updatePasswordUser } from 'src/store/thunks';
import styled, { keyframes } from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

type UpdatePasswwordModalType = {
  onClose?: any;
  formData? : any;
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

const UpdateUserModalChild = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
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

const UpdateUserModalRoot = styled.form`
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

const UpdateVendorPasswwordModal: FunctionComponent<UpdatePasswwordModalType> = ({ onClose, formData }) => {

    const {
        register,
        handleSubmit,
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

  const onSubmit=((data: any)=> {
   const payload={id: formData.id, ...data};
    dispatch(updatePassworVendor(payload));
    onClose();
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
      <UpdateUserModalRoot data-animate-on-scroll onSubmit={ handleSubmit(onSubmit) }>
        <CreateUserNameParent>
          <CreateUserName>Update Vendor Password</CreateUserName>
          <CloseWrapper onClick={ ()=>onClose(false) }>
            <CreateUserName >Close</CreateUserName>
          </CloseWrapper>
        </CreateUserNameParent>
        
        <UpdateUserModalChild
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
        <UpdateUserModalChild
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

        {
            formData?.vendor_status!=='approved' ? 
              <CreateUserName>Pending Status. Cannot Update Password</CreateUserName> :null
        }

        
        <FrameParent>
          <CreateWrapper type='submit' disabled={ formData?.vendor_status==='approved'? false: true }>
            <CreateUserName>Update Password</CreateUserName>
          </CreateWrapper>
          <CloseContainer  onClick={ onClose }>
            <CreateUserName>Close</CreateUserName>
          </CloseContainer>
        </FrameParent>
      </UpdateUserModalRoot>
    </>
  );
};

export default  UpdateVendorPasswwordModal;