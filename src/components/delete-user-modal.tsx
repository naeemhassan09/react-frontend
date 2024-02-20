import { FunctionComponent,  useEffect } from 'react';
import { deleteUser } from 'src/store/thunks';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';

type CreateUserModalType = {
  setIsTableUpdate?: any;
  setClose?: any;
  payload? :any;
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


const CreateWrapper = styled.div`
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

const DeleteUserModal: FunctionComponent<CreateUserModalType> = ({ setIsTableUpdate, setClose, payload }) => {

   
  const dispatch=useDispatch();
  

  const deleteUsers=(()=> {
    const payloadObj={id: payload.id, username: payload.username};
    dispatch(deleteUser(payloadObj));
    setClose(false);
    setIsTableUpdate(true);
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
      <CreateUserModalRoot data-animate-on-scroll>
        <CreateUserNameParent>
          <CreateUserName>Delete User Name</CreateUserName>
          <CloseWrapper onClick={ ()=>setClose(false) }>
            <CreateUserName >Close</CreateUserName>
          </CloseWrapper>
        </CreateUserNameParent>
        <CreateUserName>Are You Sure Want to Delete Specific User?</CreateUserName>
        <CreateUserName>{ payload.username }</CreateUserName>
 
        <FrameParent>
          <CreateWrapper onClick={ deleteUsers }>
            <CreateUserName>Delete</CreateUserName>
          </CreateWrapper>
          <CloseContainer  onClick={ ()=>setClose(false) }>
            <CreateUserName>Close</CreateUserName>
          </CloseContainer>
        </FrameParent>
      </CreateUserModalRoot>
    </>
  );
};

export default DeleteUserModal;
