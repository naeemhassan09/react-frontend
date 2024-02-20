import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

import Pagination from 'src/components/pagination';
import { fetchUserData, logout, createUser, deleteUser } from 'src/store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'src/store/selectors/entities/userManagement';
import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Autocomplete,
  } from '@mui/material';
import CreateUserModal from 'src/components/create-user-modal';
import PortalDrawer from 'src/components/portal-drawer';
import DeleteUserModal from 'src/components/delete-user-modal';
import EditUserModal from 'src/components/edit-user-modal';

const Users = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const UsersWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserHeadingContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10xl) var(--padding-6xl);
  font-size: var(--text-lg-leading-6-font-medium-size);
`;

const Role = styled.b`
  flex: 1;
  position: relative;
`;

const RoleWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const Role1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const RoleContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const RoleFrame = styled.div`
  align-self: stretch;
  background-color: var(--color-lavenderblush-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const Colum = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MenuVerticalIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.05rem;
  object-fit: contain;
  cursor: pointer;
`;

const MenuVerticalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-3xs);
`;

const Colum5Inner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) 0rem;
`;

const Colum5Child = styled.div`
  align-self: stretch;
  background-color: var(--color-lavenderblush-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) 0rem;
`;

const UserSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SettingsSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const OpenInWindow = styled.div`
  position: relative;
  font-weight: 500;
`;

const OpenInWindowWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-brown-100);
  height: 2.25rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ModalButton = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-30xl) var(--padding-2xl);
  text-align: left;
  color: var(--white);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const UserManagementContentContai = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const UserManagementMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsUserManagementRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-mini);
  box-sizing: border-box;
  min-height: 45rem;
  text-align: center;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkslategray-200);
  font-family: var(--font-poppins);
`;

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const Add = styled.div`
  position: relative;
  font-weight: 600;
  color: white;
`;

const AddButton = styled.div`
  border-radius: var(--br-8xs);
  margin-top: 1.2rem;
  margin-left: 1rem;
  background-color: red;
  height: 2.5rem;
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

const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const SearchBarContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-11xl) var(--padding-6xl);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

export const UserManagement: FunctionComponent = () => {
  
  const dispatch=useDispatch();
  const usersData=useSelector(getUserData);
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const [isTableUpdated, setIsTableUpdated]=useState(false);
  const [selectRow, setSelectRow]=useState({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages]=useState<number>(0);
  const [completeUserList, setCompleteUserList]=useState(usersData);
  const [selectedUserArray, setSelectedUserArray]=useState<any>([]);
  const [actionOpen, setActionOpen]= useState(false);
  const [selectedRow, setSelectedRow]=useState('');

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const itemsPerPage = 10;

  const handleLogout = () => {
    dispatch(logout({}));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onHandleChangePassword= ()=> {  console.log('password') };


  const onHandleEdit= (user: any)=> {  
    setModalEditOpen(true);
    setSelectRow(user);
  }; 

  const onHandleDelete= (user: any)=> {  
    setModalDeleteOpen(true);
    setSelectRow(user);
  };
  
  const renderTable = () => (
    selectedUserArray?.length > 0 ? (
      selectedUserArray.map((user: any, index: any) => (
        index % 2 === 0 ? (
          <UserSheetContainer key={ index }>
            <Colum>  
              <RoleContainer>
                <Role1>{ user.full_name }</Role1>
              </RoleContainer>   
            </Colum>  
            <Colum>  
              <RoleContainer>
                <Role1>{ user.username }</Role1>
              </RoleContainer>   
            </Colum>  
            <Colum>  
              <RoleContainer>
                <Role1>{ user.date_joined }</Role1>
              </RoleContainer>   
            </Colum>  
            <Colum>  
              <RoleContainer onClick={ ()=>{ {setActionOpen(!actionOpen); setSelectedRow(user.id) } } }>
                <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
              </RoleContainer>   
            </Colum> 
            {  user.id === selectedRow && actionOpen ? 
              <Colum>  
                <div style={ { display: 'flex', flexDirection: 'column' } } >
                  <div style={ { cursor: 'pointer'} } onClick={ ()=>onHandleDelete(user) }>Delete</div>
                  <div style={ { cursor: 'pointer'} } onClick={ onHandleChangePassword }>Change Password</div>
                  <div style={ { cursor: 'pointer'} } onClick={ ()=>onHandleEdit(user) }>Edit</div>
                </div>  
              </Colum> : null  }
          </UserSheetContainer>
        ) : (
          <UserSheetContainer key={ index }>
            <Colum>              
              <RoleFrame>
                <Role1>{ user.full_name }</Role1>
              </RoleFrame>
            </Colum>
            <Colum>              
              <RoleFrame>
                <Role1>{ user.username }</Role1>
              </RoleFrame>
            </Colum>
            <Colum>              
              <RoleFrame>
                <Role1>{ user.date_joined }</Role1>
              </RoleFrame>
            </Colum>
            <Colum>              
              <RoleFrame onClick={ ()=>{ {setActionOpen(!actionOpen); setSelectedRow(user.id) } } }>
                <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
              </RoleFrame>
            </Colum> 
            {  user.id === selectedRow && actionOpen ? 
              <Colum> 
                <RoleFrame> 
                  <div style={ { display: 'flex', flexDirection: 'column' } } >
                    <div style={ { cursor: 'pointer'} } onClick={ ()=>onHandleDelete(user) }>Delete</div>
                    <div style={ { cursor: 'pointer'} } onClick={ onHandleChangePassword }>Change Password</div>
                    <div style={ { cursor: 'pointer'} } onClick={ ()=>onHandleEdit(user) }>Edit</div>
                  </div>  
                </RoleFrame> 
              </Colum>  
              : null }
          </UserSheetContainer>
        )
      ))
    )  :(
      null
    )

  );
  

useEffect(()=>{
    console.log(usersData);
    setCompleteUserList(usersData);
    setSelectedUserArray(usersData);
},[usersData]);

useEffect(()=>{ 


    if (isTableUpdated)
     {
    console.log('is table updated',isTableUpdated);

        dispatch(fetchUserData({}));
        setIsTableUpdated(false);
     }
},[isTableUpdated]);

  useEffect(()=>{
    dispatch(fetchUserData({}));
  },[]);



  return (
    <>
      <SettingsUserManagementRoot>
        <UserManagementMainContainer>
          <FormContainer
            dimensions='/alchemativelogo-11@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar2@3x.png')"
          />
          <UserManagementContentContai>
            <ActivityStreamContainer1 />
            <ActivityStreamContainer
              showSubHeader={ false }
              propBorderRadius='50px'
              propBorderRadius1='50px'
              propBorderRadius2='50px'
            />
            <SearchBarContainer>
              <FrameParent>
                <FrameChild
                  color='primary'
                  label='Search'
                  size='small'
                  fullWidth
                  variant='standard'
                  InputProps={ {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <SearchSharpIcon />
                      </InputAdornment>
                    ),
                  } }
                  sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                />
               
              </FrameParent>
              <AddButton onClick={ openModalPopup }>
                <Add>Add New</Add>
              </AddButton>
            </SearchBarContainer>

            <UserHeadingContainer>
              <UsersWrapper>
                <Users>Users</Users>
              </UsersWrapper>
            </UserHeadingContainer>
            <SettingsSheetContainer>
              <UserSheetContainer>
                <Colum>
                  <RoleWrapper>
                    <Role>Full Name</Role>
                  </RoleWrapper>
                </Colum>     
                <Colum>               
                  <RoleWrapper>
                    <Role>Email Address</Role>
                  </RoleWrapper>
                </Colum>
                <Colum>
                  <RoleWrapper>
                    <Role>Added on</Role>
                  </RoleWrapper>
                </Colum>
                <Colum>
                  <RoleWrapper>
                    <Role>Actions</Role>
                  </RoleWrapper>
                </Colum>
              </UserSheetContainer>
              { renderTable() }
              <Pagination
                imageAltText='/double-right@2x.png'
                imageId='/icons8back50-1@2x.png'
                imageCode='/icons8forward50-1@2x.png'
                imageDimensions='/double-right1@2x.png'
                itemsPerPageOptions={ [10, 20, 30] } // Example options for items per page
                itemsPerPage={ itemsPerPage }
                currentPage={ currentPage }
                totalPages={ totalPages }
                onItemsPerPageChange={ (_value) => {
                    // handle items per page change
                } }
                onNextPage={ handleNextPage }
                onPrevPage={ handlePrevPage }
              />
            </SettingsSheetContainer>
            <ModalButton style={ { backgroundColor: 'red' } }>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <OpenInWindow>Open In Window</OpenInWindow>
              </OpenInWindowWrapper>
            </ModalButton>
          </UserManagementContentContai>
        </UserManagementMainContainer>
      </SettingsUserManagementRoot>
      { isModalPopupOpen && (
        <PortalDrawer
        overlayColor='rgba(113, 113, 113, 0.3)'
        placement='Right'
        onOutsideClick={ closeModalPopup }
        >
          <CreateUserModal onClose={ closeModalPopup } userCreate={ setIsTableUpdated } setClose={ setModalPopupOpen }/>
        </PortalDrawer>
       
      ) }

      { isModalDeleteOpen && (
        <PortalDrawer
        overlayColor='rgba(113, 113, 113, 0.3)'
        placement='Right'
        onOutsideClick={ ()=>{ setModalDeleteOpen(false) } }
        >
          <DeleteUserModal 
          setIsTableUpdate={ setIsTableUpdated } 
          setClose={ setModalDeleteOpen } payload={ selectRow }/>
        </PortalDrawer>
       
      ) }

      { isModalEditOpen && (
        <PortalDrawer
        overlayColor='rgba(113, 113, 113, 0.3)'
        placement='Right'
        onOutsideClick={ ()=>{ setModalEditOpen(false) } }
        >
          <EditUserModal 
                      setIsTableUpdate={ setIsTableUpdated }
                      setClose={ setModalEditOpen } formData={ selectRow }/>
        </PortalDrawer>
       
      ) }
    
    </>
  );
};
