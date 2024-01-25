import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import FormContainer from 'src/components/form-container';
import OrderHeaderContainer from 'src/components/order-header-container';
import Pagination from 'src/components/pagination';

import { useDispatch, useSelector } from 'react-redux';
import { getOrderData } from 'src/store/selectors/entities';
import { fetchOrderData } from 'src/store/thunks';
import { APP, NEWORDER_ROUTE } from 'src/constants/navigation-routes';

const Orders1 = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
`;

const SubHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-6xl);
  color: var(--color-gray-200);
  @media screen and (max-width: 960px) {
    display: flex;
  }
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

const New = styled.div`
  position: relative;
  font-weight: 500;
`;

const NewButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  color: inherit;
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
  padding: var(--padding-5xl) var(--padding-6xl);
  @media screen and (max-width: 960px) {
    padding-top: 0rem;
    box-sizing: border-box;
  }
`;

const OrderSheet = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const OrderSheetWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const OrderSheetHeadingContainer = styled.div`
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

const FrameItem = styled(Autocomplete)`
  flex: 1;
  @media screen and (max-width: 350px) {
    flex: unset;
    align-self: stretch;
  }
`;

const FrameGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.44rem;
  max-width: 18.75rem;
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

const FilterBarContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-6xl);
  @media screen and (max-width: 420px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 350px) {
    align-items: center;
    justify-content: center;
  }
`;

const OrderNumber = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
`;

const OrderNumberWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
  font-size: var(--text-sm-leading-5-font-normal-size);
`;

const Div = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const Container1 = styled.div`
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

const OrderStatusWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-poppins);
`;

const ShippedWrapper = styled.div`
  border-radius: var(--br-3xs);
  background-color: #00b3ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-3xs);
`;

const Colum3Inner = styled.div`
  align-self: stretch;
  height: 3.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xl) 0rem;
  box-sizing: border-box;
`;

const CanceldWrapper = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-red);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-3xs);
`;

const Colum3Child = styled.div`
  align-self: stretch;
  background-color: var(--color-lavenderblush-100);
  height: 3.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xl) 0rem;
  box-sizing: border-box;
`;

const PendingWrapper = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-gold);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-3xs);
`;

const DeliveredWrapper = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-lime);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-5xs);
`;

const Colum1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-3xs);
  color: var(--color-black);
  font-family: var(--text-base-leading-6-font-medium);
`;

const OrderSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const DashboardSheet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DashboardSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-100);
  @media screen and (max-width: 768px) {
    display: none;
  }
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

const OrdersContentContainer = styled.div`
  align-self: stretch;
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.56rem;
`;

const OrdersMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const OrdersRoot = styled.div`
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

export const Orders: FunctionComponent = () => {

  const orderData=useSelector(getOrderData);
  const dispatch=useDispatch();
 
  const [totalPages, setTotalPages]=useState<number>(0);
  const [currentPage, setCurrentPage]=useState<number>(0);
  const [selectedOrderArray, setSelectedOrderArray]=useState<any>([]);
  const itemsPerPage=10;

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);
  const [completeOrderData,setCompleteOrderData]=useState(orderData);
  
//   const renderTable = () => (
//     selectedOrderArray?.length > 0 ? (
//       <>
//         { selectedOrderArray.map((item: any) => (
//           <VendorSheetContainer key={ item.id }>
//             <Colum1>
//               <OrderNumberWrapper>
//                 <Fanatical>{ item.order_number }</Fanatical>
//               </OrderNumberWrapper>
//             </Colum1>
//             <Colum1>
//               <OrderNumberWrapper>
//                 <Fanatical>{ item.email }</Fanatical>
//               </OrderNumberWrapper>
//             </Colum1>
//             <Colum1>
//               <OrderNumberWrapper>
//                 <Fanatical>{ item.financial_status }</Fanatical>
//               </OrderNumberWrapper>
//             </Colum1>
//             <Colum1>
//               <OrderNumberWrapper>
//                 <Fanatical>{ item.order_number }</Fanatical>
//               </OrderNumberWrapper>
//             </Colum1>
//             <Colum1>
//               <OrderNumberWrapper>
//                 <Fanatical>{ item.fulfillment_status }</Fanatical>
//               </OrderNumberWrapper>
//             </Colum1>
//             <Colum1>
//               <OrderNumberWrapper>
//                 <Fanatical>{ item.total_price }</Fanatical>
//               </OrderNumberWrapper>
//             </Colum1>
//           </VendorSheetContainer>
//         )) }
//       </>
//     ) : <></>
//   );



  const openAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(true);
  }, []);

  const closeAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(false);
  }, []);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);



  const onHandleSearchText=((event: any)=>{
    const searchText= event.target.value.toLowerCase();
     let filterObject: any= [];
     console.log(completeOrderData);
 
     if (completeOrderData && searchText!=='')    
     {
         filterObject=orderData?.filter((item:any)=> item.order_number.trim().toLowerCase().includes(searchText)||
         item.email.trim().toLowerCase().includes(searchText));
         setCompleteOrderData(filterObject);
     }  
 
     else
     setCompleteOrderData(orderData);
 });

  useEffect(()=>{
    dispatch(fetchOrderData({}));
  },[]);


  const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


   useEffect(()=>{

    if (completeOrderData && completeOrderData.length>0)
    {
        const pages=Math.ceil(completeOrderData.length/10);
        setTotalPages(pages);
        setCurrentPage(1);
    }

   },[completeOrderData]);

   useEffect(() => {
    if (completeOrderData !== null  && completeOrderData && completeOrderData.length>10) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeOrderData.slice(startIndex, endIndex);
      setSelectedOrderArray(nextItems);
    }

    else  setSelectedOrderArray(completeOrderData);

  }, [completeOrderData, currentPage]);

  useEffect(()=>{
    dispatch(fetchOrderData({}));
  },[]); 

  const renderTable = () => (
    selectedOrderArray?.length > 0 ? (
      <>
        { selectedOrderArray.map((item: any) => (
          <OrderSheetContainer key={ item.id }>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.order_number }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.email }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.financial_status }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.order_number }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.fulfillment_status }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.total_price }</Div>
              </OrderNumberWrapper>
            </Colum1>
          </OrderSheetContainer>
        )) }
      </>
    ) : <></>
  );

  return (
    <>
      <OrdersRoot>
        <OrdersMainContainer>
          <FormContainer
            dimensions='/alchemativelogo-12@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar6@3x.png')"
          />
          <OrdersContentContainer>
            <OrderHeaderContainer pageTitle='Orders' />
            <SubHeader>
              <Orders1>Orders</Orders1>
            </SubHeader>
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
                        <Icon>search_sharp</Icon>
                      </InputAdornment>
                    ),
                  } }
                  onChange={ onHandleSearchText }
                  sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                />
                <NewButton to={ `${APP}${NEWORDER_ROUTE}` }>
                  <New>+ New</New>
                </NewButton>
              </FrameParent>
            </SearchBarContainer>
            <OrderSheetHeadingContainer>
              <OrderSheetWrapper>
                <OrderSheet>Order Sheet</OrderSheet>
              </OrderSheetWrapper>
            </OrderSheetHeadingContainer>
            <FilterBarContainer>
              <FrameGroup>
                <FrameItem
                  size='small'
                  sx={ { width: '100%' } }
                  disablePortal
                  options={ [] as any }
                  renderInput={ (params: any) => (
                    <TextField
                      { ...params }
                      color='primary'
                      label='Order No'
                      variant='outlined'
                      placeholder='Order No'
                      helperText=''
                    />
                  ) }
                />
                <FrameItem
                  size='small'
                  sx={ { width: '100%' } }
                  disablePortal
                  options={ ['Canceled', 'Shipped', 'Pending', 'Delivered'] }
                  renderInput={ (params: any) => (
                    <TextField
                      { ...params }
                      color='primary'
                      label='Order Status'
                      variant='outlined'
                      placeholder='Order Status'
                      helperText=''
                    />
                  ) }
                />
              </FrameGroup>
            </FilterBarContainer>
            <DashboardSheetContainer>
              <DashboardSheet>
                <OrderSheetContainer>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>order Number</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>Email</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum1>
                    <OrderStatusWrapper>
                      <OrderNumber>Order Status</OrderNumber>
                    </OrderStatusWrapper>
                   
                  </Colum1>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>Finalical</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>Fulfilment</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>Amount</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                </OrderSheetContainer>
                <>{ renderTable() }</>
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
              </DashboardSheet>
            </DashboardSheetContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <New>Open In Window</New>
              </OpenInWindowWrapper>
            </ModalButton>
          </OrdersContentContainer>
        </OrdersMainContainer>
      </OrdersRoot>
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

