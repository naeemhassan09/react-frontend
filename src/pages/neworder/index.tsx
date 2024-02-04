import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from '@mui/material';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import FormContainer from 'src/components/form-container';
import OrderHeaderContainer from 'src/components/order-header-container';
import CreateShopifyStoreCard from 'src/components/create-shopify-store-card';
import { useDispatch } from 'react-redux';
import { fetchProductVarient } from 'src/store/thunks';

const Orders1 = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
`;

const SubHeader = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-16xl) var(--padding-26xl);
  color: var(--color-gray-200);
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const NewOrder_1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const NewOrderWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NewrOrderHeadingContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-6xl);
  text-align: center;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-200);
`;

const Frame = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 768px) {
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const Frame1 = styled(Autocomplete)`
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddItem = styled.div`
  position: relative;
  font-weight: 500;
`;

const AddItemButton = styled.div`
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
`;

const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const NewOrderForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;

const NewOrderFormConatiner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-6xl) var(--padding-31xl);
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-16xl);
    padding-right: var(--padding-16xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 350px) {
    padding-left: var(--padding-11xl);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
  }
`;

const CancelButton = styled.div`
  border-radius: var(--br-8xs);
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
  @media screen and (max-width: 768px) {
    &:hover {
      background-color: var(--color-firebrick);
    }
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
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NewOrdersContentContainer = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 45rem;
`;

const NewOrdersMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const OrderNewOrderRoot = styled.div`
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
  color: var(--white);
  font-family: var(--font-poppins);
`;

export const NewOrder: FunctionComponent = () => {
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

 const dispatch=useDispatch();

 useEffect(()=>{
    console.log('working');
    dispatch(fetchProductVarient({}));
 },[]);

  return (
    <>
      <OrderNewOrderRoot>
        <NewOrdersMainContainer>
          <FormContainer
            dimensions='/alchemativelogo-12@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar3@3x.png')"
          />
          <NewOrdersContentContainer>
            <OrderHeaderContainer pageTitle='New Order' />
            <SubHeader>
              <Orders1>Orders</Orders1>
            </SubHeader>
            <CreateShopifyStoreCard
              actionButtonText='+ New'
              propPadding='var(--padding-11xl) var(--padding-6xl)'
            />
            <NewrOrderHeadingContainer>
              <NewOrderWrapper>
                <NewOrder_1>New Order</NewOrder_1>
              </NewOrderWrapper>
            </NewrOrderHeadingContainer>
            <NewOrderFormConatiner>
              <NewOrderForm>
                <FrameParent>
                  <FrameGroup>
                    <Frame
                      color='primary'
                      label='Order Number'
                      size='small'
                      placeholder='000001'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                    <Frame
                      color='primary'
                      label='Email'
                      size='small'
                      placeholder='@gmail.cm'
                      required
                      fullWidth
                      variant='outlined'
                      type='email'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                  </FrameGroup>
                  <FrameGroup>
                    <Frame1
                      size='small'
                      sx={ { width: '100%' } }
                      disablePortal
                      options={ ['Clear', 'Pending', 'Delinquent', 'Bankrupt'] }
                      renderInput={ (params: any) => (
                        <TextField
                          { ...params }
                          color='primary'
                          label='Status'
                          variant='outlined'
                          placeholder='Financial Status'
                          helperText=''
                          required
                        />
                      ) }
                    />
                    <Frame
                      color='primary'
                      label='Total Weight'
                      size='small'
                      placeholder='kilogram'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                  </FrameGroup>
                </FrameParent>
                <FrameParent>
                  <FrameGroup>
                    <Frame
                      color='primary'
                      label='First Name'
                      size='small'
                      placeholder='Name'
                      required
                      fullWidth
                      variant='outlined'
                      type='text'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                    <Frame
                      color='primary'
                      label='Las Name'
                      size='small'
                      placeholder='Name'
                      required
                      fullWidth
                      variant='outlined'
                      type='text'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                  </FrameGroup>
                  <FrameGroup>
                    <Frame
                      color='primary'
                      label='Address'
                      size='small'
                      placeholder='Address'
                      required
                      fullWidth
                      variant='outlined'
                      type='text'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                    <Frame1
                      size='small'
                      sx={ { width: '100%' } }
                      disablePortal
                      options={ ['USA', 'Uk', 'Hongkong', 'China'] }
                      renderInput={ (params: any) => (
                        <TextField
                          { ...params }
                          color='primary'
                          label='Select Coutry'
                          variant='outlined'
                          placeholder='Country'
                          helperText=''
                          required
                        />
                      ) }
                    />
                  </FrameGroup>
                </FrameParent>
                <FrameParent>
                  <FrameGroup>
                    <Frame1
                      size='small'
                      sx={ { width: '100%' } }
                      disablePortal
                      options={ [
                        'Province/State1',
                        'Province/State2',
                        'Province/State3',
                      ] }
                      renderInput={ (params: any) => (
                        <TextField
                          { ...params }
                          color='primary'
                          label='Province/State'
                          variant='outlined'
                          placeholder='Province/State'
                          helperText=''
                          required
                        />
                      ) }
                    />
                    <Frame1
                      size='small'
                      sx={ { width: '100%' } }
                      disablePortal
                      options={ ['City1', 'City2', 'City3'] }
                      renderInput={ (params: any) => (
                        <TextField
                          { ...params }
                          color='primary'
                          label='Select City'
                          variant='outlined'
                          placeholder='City'
                          helperText=''
                          required
                        />
                      ) }
                    />
                  </FrameGroup>
                  <FrameGroup>
                    <Frame
                      color='primary'
                      label='Zip/Postal Code'
                      size='small'
                      placeholder='Zip/Postal Code'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                    <Frame
                      color='primary'
                      label='Phone Number'
                      size='small'
                      placeholder='00-000...'
                      required
                      fullWidth
                      variant='outlined'
                      type='tel'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                  </FrameGroup>
                </FrameParent>
                <FrameParent>
                  <FrameGroup>
                    <Frame
                      color='primary'
                      label='Sub Total Price'
                      size='small'
                      placeholder='0'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                    <Frame
                      color='primary'
                      label='Total Discount'
                      size='small'
                      placeholder='0'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                  </FrameGroup>
                  <FrameGroup>
                    <Frame
                      color='primary'
                      label='Shipping Charges'
                      size='small'
                      placeholder='0'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                    <Frame
                      color='primary'
                      label='Total Price'
                      size='small'
                      placeholder='0'
                      required
                      fullWidth
                      variant='outlined'
                      type='number'
                      sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                    />
                  </FrameGroup>
                </FrameParent>
                <FrameParent1>
                  <Frame1
                    size='small'
                    sx={ { width: '100%' } }
                    disablePortal
                    options={ [
                      'Product/variant1',
                      'Product/variant2',
                      'Product/variant3',
                    ] }
                    renderInput={ (params: any) => (
                      <TextField
                        { ...params }
                        color='primary'
                        label='Product/variant'
                        variant='outlined'
                        placeholder='Product/Variant'
                        helperText=''
                        required
                      />
                    ) }
                  />
                  <AddItemButton>
                    <AddItem>Add Item</AddItem>
                  </AddItemButton>
                </FrameParent1>
              </NewOrderForm>
            </NewOrderFormConatiner>
            <ButtonsContainer>
              <AddItemButton>
                <AddItem>Create</AddItem>
              </AddItemButton>
              <CancelButton>
                <AddItem>Cancel</AddItem>
              </CancelButton>
            </ButtonsContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <AddItem>Open In Window</AddItem>
              </OpenInWindowWrapper>
            </ModalButton>
          </NewOrdersContentContainer>
        </NewOrdersMainContainer>
      </OrderNewOrderRoot>
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

