import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import Pagination from 'src/components/pagination';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch, useSelector } from 'react-redux';
import {  getVendorsOrderDetails } from 'src/store/selectors/entities';
import {  fetchVendorOrderDetails } from 'src/store/thunks';
import { APP, NEWORDER_ROUTE } from 'src/constants/navigation-routes';



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

type UpdateOrderModalType = {
    onClose?: any;
    id? : string;
  };

export const VendorOrderDetail: FunctionComponent<UpdateOrderModalType> = ({id}) => {

  const orderData=useSelector(getVendorsOrderDetails);
  const dispatch=useDispatch();
 
  const [totalPages, setTotalPages]=useState<number>(0);
  const [currentPage, setCurrentPage]=useState<number>(0);
  const [selectedOrderArray, setSelectedOrderArray]=useState<any>([]);
  const [itemsPerPage,setItemsPerPage]=useState(10);

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [completeOrderData,setCompleteOrderData]=useState(orderData);


  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);


  const onHandleSearchText=((event: any)=>{
    const searchText= event.target.value.toLowerCase();
     let filterObject: any= []; 
     if (completeOrderData && searchText!=='')    
     {
         filterObject=orderData?.filter((item:any)=> 
         item.vendor_commission_type.trim().toLowerCase().includes(searchText)
         ||
         item.order_number.trim().toLowerCase().includes(searchText));
         setCompleteOrderData(filterObject);
     }  
 
     else
     setCompleteOrderData(orderData);
 });


  const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  const handlePerItem=((_value: any)=>{
    const value=parseInt(_value);
    if (value===0)
    setItemsPerPage(10);
    else
    setItemsPerPage(_value);
});

   useEffect(()=>{

    if (completeOrderData && completeOrderData.length>0)
    {
        const pages=Math.ceil(completeOrderData.length/itemsPerPage);
        setTotalPages(pages);
        setCurrentPage(1);
    }
    else {
        setTotalPages(1);
        setCurrentPage(1);
    }
   },[completeOrderData, itemsPerPage]);

   useEffect(() => {
    if (completeOrderData !== null  && completeOrderData && completeOrderData.length>itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeOrderData.slice(startIndex, endIndex);
      setSelectedOrderArray(nextItems);
    }
    else  setSelectedOrderArray(completeOrderData);
  }, [completeOrderData, currentPage, itemsPerPage]);

  useEffect(()=>{  
    setCompleteOrderData(orderData);
},[orderData]);

  useEffect(()=>{
    dispatch(fetchVendorOrderDetails(id));
  },[id]); 

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
                <Div>{ item.total_amount }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.vendor_commission_type }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.vendor_commission_value }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.vendor_payment_status }</Div>
              </OrderNumberWrapper>
            </Colum1>
            <Colum1>
              <OrderNumberWrapper>
                <Div>{ item.total_commission }</Div>
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
        <OrderSheetHeadingContainer>
          <OrderSheetWrapper>
            <OrderSheet>Order Sheet</OrderSheet>
          </OrderSheetWrapper>
        </OrderSheetHeadingContainer>
        <OrdersMainContainer>
         
          <OrdersContentContainer>
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
                  onChange={ onHandleSearchText }
                  sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                />
                <NewButton to={ `${APP}${NEWORDER_ROUTE}` }>
                  <New>+ New</New>
                </NewButton>
              </FrameParent>
            </SearchBarContainer>
           
           
            <DashboardSheetContainer>
              <DashboardSheet>
                <OrderSheetContainer>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>Order Number</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>Total Amount</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum1>
                    <OrderStatusWrapper>
                      <OrderNumber>Commission Type</OrderNumber>
                    </OrderStatusWrapper>
                   
                  </Colum1>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>	Comission Value</OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>	Payment Status </OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                  <Colum>
                    <OrderNumberWrapper>
                      <OrderNumber>	Total Payabale Amount </OrderNumber>
                    </OrderNumberWrapper>
                   
                  </Colum>
                </OrderSheetContainer>
                <>{ renderTable() }</>
                <Pagination
                  imageAltText='/double-right@2x.png'
                  imageId='/icons8back50-1@2x.png'
                  imageCode='/icons8forward50-1@2x.png'
                  imageDimensions='/double-right1@2x.png'
                  itemsPerPageOptions={ [10, 15, 20] } // Example options for items per page
                  itemsPerPage={ itemsPerPage }
                  currentPage={ currentPage }
                  totalPages={ totalPages }
                  onItemsPerPageChange={ (_value) => {
                    handlePerItem(_value);
                } }
                  onNextPage={ handleNextPage }
                  onPrevPage={ handlePrevPage }
                />
              </DashboardSheet>
            </DashboardSheetContainer>
            
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

