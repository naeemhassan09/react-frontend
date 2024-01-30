import { FunctionComponent, useState, useCallback } from 'react';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import CreateShopifyStoreCard from 'src/components/create-shopify-store-card';
import Pagination from 'src/components/pagination';
import { logout } from 'src/store/thunks';
import { useDispatch } from 'react-redux';

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
  width: 1.56rem;
  height: 1.56rem;
  object-fit: contain;
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

export const UserManagement: FunctionComponent = () => {
  
  const dispatch=useDispatch();

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages]=useState<number>(0);
  
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
            <CreateShopifyStoreCard
              actionButtonText='Add New'
              propPadding='var(--padding-11xl) var(--padding-6xl)'
            />
            <UserHeadingContainer>
              <UsersWrapper>
                <Users>Users</Users>
              </UsersWrapper>
            </UserHeadingContainer>
            <SettingsSheetContainer>
              <UserSheetContainer>
                <Colum>
                  <RoleWrapper>
                    <Role>Role</Role>
                  </RoleWrapper>
                  <RoleContainer>
                    <Role1>Role</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Role</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Role</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Role</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Role</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Role</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Role</Role1>
                  </RoleContainer>
                </Colum>
                <Colum>
                  <RoleWrapper>
                    <Role>Added on</Role>
                  </RoleWrapper>
                  <RoleContainer>
                    <Role1>Added on</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Added on</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Added on</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Added on</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Added on</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Added on</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Added on</Role1>
                  </RoleContainer>
                </Colum>
                <Colum>
                  <RoleWrapper>
                    <Role>Uploaded on</Role>
                  </RoleWrapper>
                  <RoleContainer>
                    <Role1>Uploaded on</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Uploaded on</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Uploaded on</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Uploaded on</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Uploaded on</Role1>
                  </RoleContainer>
                  <RoleFrame>
                    <Role1>Uploaded on</Role1>
                  </RoleFrame>
                  <RoleContainer>
                    <Role1>Uploaded on</Role1>
                  </RoleContainer>
                </Colum>
                <Colum>
                  <RoleWrapper>
                    <Role>Actions</Role>
                  </RoleWrapper>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Child>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Child>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Child>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Child>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                  <Colum5Child>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Child>
                  <Colum5Inner>
                    <MenuVerticalWrapper>
                      <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
                    </MenuVerticalWrapper>
                  </Colum5Inner>
                </Colum>
              </UserSheetContainer>
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
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <OpenInWindow>Open In Window</OpenInWindow>
              </OpenInWindowWrapper>
            </ModalButton>
          </UserManagementContentContai>
        </UserManagementMainContainer>
      </SettingsUserManagementRoot>
      { isModalPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={ closeModalPopup }
        >
          <Modal onClose={ closeModalPopup } />
        </PortalPopup>
      ) }
    </>
  );
};
