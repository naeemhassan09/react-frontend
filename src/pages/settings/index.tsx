import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import CreateShopifyStoreCard from 'src/components/create-shopify-store-card';
import Pagination from 'src/components/pagination';
import { fetchShopifyData, logout } from 'src/store/thunks';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { getShopifyData } from 'src/store/selectors/entities';

const Date1 = styled(Autocomplete)`
  flex: 1;
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;

const DateWrapper = styled.div`
  width: 12.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
    flex-direction: column;
  }
`;

const FilterBarContainerInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const FilterBarContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-6xl);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const Stores = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const StoresWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StoreSheetHeadingContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-6xl);
  font-size: var(--text-lg-leading-6-font-medium-size);
`;

const StoreName = styled.b`
  flex: 1;
  position: relative;
`;

const StoreNameWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const StoreName1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const StoreNameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const StoreNameFrame = styled.div`
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

const StoresSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StoresSheetMainContainer = styled.div`
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

const SettingsContentContainer = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SettingsMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsRoot = styled.div`
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

export const Settings: FunctionComponent = () => {
  const dispatch=useDispatch();
  const storedata= useSelector(getShopifyData);
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

  useEffect(()=>{

    dispatch(fetchShopifyData({}));

  },[]);

  useEffect(()=>{
    console.log({storedata});
    
  },[storedata]);


  return (
    <>
      <SettingsRoot>
        <SettingsMainContainer>
          <FormContainer
            dimensions='/alchemativelogo-11@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar@3x.png')"
          />
          <SettingsContentContainer>
            <ActivityStreamContainer1 />
            <ActivityStreamContainer
              showSubHeader
              propBorderRadius='10px'
              propBorderRadius1='10px'
              propBorderRadius2='10px'
            />
            <CreateShopifyStoreCard
              actionButtonText='Create Shopify Store'
              propPadding='var(--padding-mini) 25px'
            />
            <StoreSheetHeadingContainer>
              <StoresWrapper>
                <Stores>Stores</Stores>
              </StoresWrapper>
            </StoreSheetHeadingContainer>
            <StoresSheetMainContainer>
              <StoresSheetContainer>
                <Colum>
                  <StoreNameWrapper>
                    <StoreName>Store Name</StoreName>
                  </StoreNameWrapper>
                  <StoreNameContainer>
                    <StoreName1>Store Name</StoreName1>
                  </StoreNameContainer>
                </Colum>
                <Colum>
                  <StoreNameWrapper>
                    <StoreName>Vendor/Supplier</StoreName>
                  </StoreNameWrapper>
                  <StoreNameContainer>
                    <StoreName1>Vendor/Supplier</StoreName1>
                  </StoreNameContainer>
                  
                </Colum>
                <Colum>
                  <StoreNameWrapper>
                    <StoreName>Admin Domain</StoreName>
                  </StoreNameWrapper>
                  <StoreNameContainer>
                    <StoreName1>Admin Domain</StoreName1>
                  </StoreNameContainer>
                  
                </Colum>
                <Colum>
                  <StoreNameWrapper>
                    <StoreName>{ 'Request Date&Time' }</StoreName>
                  </StoreNameWrapper>
                  <StoreNameContainer>
                    <StoreName1>{ 'Request Date&Time' }</StoreName1>
                  </StoreNameContainer>
                
                </Colum>
                <Colum>
                  <StoreNameWrapper>
                    <StoreName>Enabled</StoreName>
                  </StoreNameWrapper>
                  <StoreNameContainer>
                    <StoreName>Enabled</StoreName>
                  </StoreNameContainer>
                 
                </Colum>
              </StoresSheetContainer>
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
            </StoresSheetMainContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <OpenInWindow>Open In Window</OpenInWindow>
              </OpenInWindowWrapper>
            </ModalButton>
          </SettingsContentContainer>
        </SettingsMainContainer>
      </SettingsRoot>
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
