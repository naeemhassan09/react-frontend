import { FunctionComponent, useState, useCallback } from 'react';
import {
  Autocomplete,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import ProductCard from 'src/components/product-card';
import { useLocation, useParams } from 'react-router-dom';

const AddNewRole = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const AddNewRoleWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AddNewRoleHeadingContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-6xl);
  text-align: center;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-200);
`;

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

const Create = styled.div`
  position: relative;
  font-weight: 500;
`;

const CreateButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
  height: 2.25rem;
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
  @media screen and (max-width: 420px) {
    align-self: stretch;
    width: auto;
  }
`;

const CancelButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  border: 2px solid var(--color-firebrick);
  box-sizing: border-box;
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  cursor: pointer;
  color: var(--color-firebrick);
  &:hover {
    background-color: var(--color-firebrick);
    color: white;
  }
  @media screen and (max-width: 420px) {
    align-self: stretch;
    width: auto;
  }
`;

const ButtonsContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-2xs) var(--padding-6xl);
  gap: var(--gap-3xs);
  color: var(--white);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const Checkbox1 = styled(FormControlLabel)``;

const OrderManagement = styled.b`
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

const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const OrderManagementContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-5xl) var(--padding-6xl);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-3xs);
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
  color: var(--white);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const RpContentContainer = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const RpMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsRolesPermisssionsRoot = styled.div`
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
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;


export const CreateRolesPermission: FunctionComponent = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  console.log(   localStorage.getItem('id'));


  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);


  
  return (
    <>
      <SettingsRolesPermisssionsRoot>
        <RpMainContainer>
          <FormContainer
            dimensions='/alchemativelogo-11@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar5@3x.png')"
          />
          <RpContentContainer>
            <ActivityStreamContainer1 />
            <ActivityStreamContainer
              showSubHeader={ false }
              propBorderRadius='50px'
              propBorderRadius1='50px'
              propBorderRadius2='50px'
            />
            <AddNewRoleHeadingContainer>
              <AddNewRoleWrapper>
                <AddNewRole>Add New Role</AddNewRole>
              </AddNewRoleWrapper>
            </AddNewRoleHeadingContainer>
            <FilterBarContainer>
              <FilterBarContainerInner>
                <DateWrapper>
                  <Date1
                    size='small'
                    sx={ { width: '100%' } }
                    disablePortal
                    options={ ['Role1', 'Role2', 'Role3'] }
                    renderInput={ (params: any) => (
                      <TextField
                        { ...params }
                        color='primary'
                        label='Role Name'
                        variant='outlined'
                        placeholder='Role Name'
                        helperText=''
                        required
                      />
                    ) }
                  />
                </DateWrapper>
              </FilterBarContainerInner>
            </FilterBarContainer>
            <ButtonsContainer>
              <CreateButton>
                <Create>Create</Create>
              </CreateButton>
              <CancelButton>
                <Create>Cancel</Create>
              </CancelButton>
            </ButtonsContainer>
            <OrderManagementContainer>
              <FrameParent>
                <CheckboxParent>
                  <Checkbox1
                    label=''
                    control={ <Checkbox id='small' color='primary' /> }
                  />
                  <OrderManagement>Order Management</OrderManagement>
                </CheckboxParent>
                <CheckboxParent>
                  <Checkbox1
                    label=''
                    control={
                      <Checkbox id='small' color='primary' size='small' />
                    }
                  />
                  <Create>Orders</Create>
                </CheckboxParent>
              </FrameParent>
            </OrderManagementContainer>
            <OrderManagementContainer>
              <FrameParent>
                <CheckboxParent>
                  <Checkbox1
                    label=''
                    control={ <Checkbox id='small' color='primary' /> }
                  />
                  <OrderManagement>Product Management</OrderManagement>
                </CheckboxParent>
                <ProductCard
                  componentName='Product'
                  vendorImportListOptions='vendor Import List'
                  pageTitle='Vendor Imported Products'
                  propAlignSelf='stretch'
                />
              </FrameParent>
            </OrderManagementContainer>
            <OrderManagementContainer>
              <FrameParent>
                <CheckboxParent>
                  <Checkbox1
                    label=''
                    control={ <Checkbox id='small' color='primary' /> }
                  />
                  <OrderManagement>Selling</OrderManagement>
                </CheckboxParent>
                <FrameParent1>
                  <ProductCard
                    componentName='User Management'
                    vendorImportListOptions={ 'Roles & Permmision' }
                    pageTitle='Activity Stream'
                    propAlignSelf='unset'
                  />
                  <ProductCard
                    componentName='Vendor'
                    vendorImportListOptions='Shopify Store Setting'
                    pageTitle='Email Template'
                    propAlignSelf='unset'
                  />
                </FrameParent1>
              </FrameParent>
            </OrderManagementContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <Create>Open In Window</Create>
              </OpenInWindowWrapper>
            </ModalButton>
          </RpContentContainer>
        </RpMainContainer>
      </SettingsRolesPermisssionsRoot>
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

