import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
} from '@mui/material';
import styled from 'styled-components';
import CSVModal from 'src/components/c-s-v-modal';
import PortalPopup from 'src/components/portal-popup';
import Modal from 'src/components/modal';
import FormContainer from 'src/components/form-container';
import OrderHeaderContainer from 'src/components/order-header-container';
import Pagination from 'src/components/pagination';
import { useDispatch } from 'react-redux';
import { downloadProductData, fetchProductData } from 'src/store/thunks';
import {  getProductList } from 'src/store/selectors/entities';
import { useSelector } from 'react-redux';

import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const ProductList1 = styled.div`
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

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const Import = styled.div`
  position: relative;
  font-weight: 500;
`;

const ImportButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: black;
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

const ExportButton = styled.div`
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

const ProductSheet = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const ProductSheetWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductSheetHeadingContaine = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10xl) var(--padding-6xl);
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

const FilterContainerInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 18.75rem;
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

const FilterContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-16xl);
  @media screen and (max-width: 420px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 350px) {
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
`;

const TitleWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
  font-size: var(--text-sm-leading-5-font-normal-size);
`;

const Bag = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const BagWrapper = styled.div`
  align-self: stretch;
  height: 3.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mid) 0rem;
  box-sizing: border-box;
`;

const WheelChairWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-lavenderblush-100);
  height: 3.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
  box-sizing: border-box;
`;

const LockWrapper = styled.div`
  align-self: stretch;
  height: 3.63rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
  box-sizing: border-box;
`;

const Colum = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProductTypeContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const ProductTypeFrame = styled.div`
  align-self: stretch;
  background-color: var(--color-lavenderblush-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
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

const ActiveWrapper = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-lime);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-5xs);
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

const ProductSheetContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProductSheetMainContainer = styled.div`
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

const ProductListContentContainer = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProductListMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const ProductListRoot = styled.div`
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

export const ProductList: FunctionComponent = () => {

  const dispatch=useDispatch();
  const productList = useSelector(getProductList);

  const [completeProductList, setCompleteProductList]=useState(productList);
  const [isCSVModalPopupOpen, setCSVModalPopupOpen] = useState(false);
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [isAfterLoginMenuOpen, setAfterLoginMenuOpen] = useState(false);
  const [totalPages, setTotalPages]=useState<number>(0);
  const [currentPage, setCurrentPage]=useState<number>(0);
  const [selectedProductArray, setSelectedProductArray]=useState<any>([]);
  const [itemsPerPage, setItemsPerPage]=useState(10);

  const options = [
    { value: 'canceled', label: 'Canceled' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'pending', label: 'Pending' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'active', label: 'Active' },
  ];

  const renderTable = () => (
    selectedProductArray?.length > 0 ? (
      <>
        { selectedProductArray.map((item: any, index: number) => (
          <ProductSheetContainer key={ index }>
            <Colum1>
              <TitleWrapper>
                <Bag>{ item.title }</Bag>
              </TitleWrapper>
            </Colum1>
            <Colum1>
              <TitleWrapper>
                <Bag>{ item.product_type }</Bag>
              </TitleWrapper>
            </Colum1>
            <Colum1>
              <TitleWrapper>
                <Bag>{ item.vendor }</Bag>
              </TitleWrapper>
            </Colum1>
            <Colum1>
              <TitleWrapper>
                <Bag>{ item.published_at }</Bag>
              </TitleWrapper>
            </Colum1>
            <Colum1>
              <TitleWrapper>
                <Bag>{ item.status }</Bag>
              </TitleWrapper>
            </Colum1>
            <Colum1>
              <TitleWrapper>
                <Bag>{ item.no_of_variants }</Bag>
              </TitleWrapper>
            </Colum1>
          </ProductSheetContainer>
        )) }
      </>
    ) : <></>
  );

  const openAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(true);
  }, []);

  const closeAfterLoginMenu = useCallback(() => {
    setAfterLoginMenuOpen(false);
  }, []);

  const openCSVModalPopup = useCallback(() => {
    setCSVModalPopupOpen(true);
  }, []);

  const closeCSVModalPopup = useCallback(() => {
    setCSVModalPopupOpen(false);
  }, []);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const openExportCSV=(()=>{ 
    dispatch(downloadProductData({}));
  });

  const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleChangeOrderStatus = (selectedValue: any ) => {

    if (selectedValue !== null) {
        let filterObject: any= [];

        if (completeProductList && selectedValue!=='')    
        {
            filterObject=productList?.filter((item:any)=> item.status.trim().toLowerCase()
            .includes(selectedValue.value));
            setCompleteProductList(filterObject);
        }  
    } else
    {
      setCompleteProductList(productList);
    }


};


  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const onHandleSearchText=((event: any)=>{
   const searchText= event.target.value.toLowerCase();
    let filterObject: any= [];

    if (completeProductList && searchText!=='')    
    {
        filterObject=productList?.filter((item:any)=> item.title.trim().toLowerCase().includes(searchText));
        setCompleteProductList(filterObject);
    }  

    else 
    if (productList)
    setCompleteProductList(productList);
});

const handlePerItem=((_value: any)=>{
    const value=parseInt(_value);
    if (value===0)
    setItemsPerPage(10);
    else
    setItemsPerPage(_value);
});


  useEffect(() => { 
    dispatch(fetchProductData({}));
   }, []);

   useEffect(()=>{setCompleteProductList(productList)},[productList]);

   useEffect(()=>{
    if (completeProductList && completeProductList.length>0)
    {
        const pages=Math.ceil(completeProductList.length/itemsPerPage);
        setTotalPages(pages);
        setCurrentPage(1);
    }

    else {
        setTotalPages(1);
        setCurrentPage(1);
    }

   },[completeProductList, itemsPerPage]);

   useEffect(() => {
    if (completeProductList && completeProductList !== null    && completeProductList.length>itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeProductList.slice(startIndex, endIndex);
      setSelectedProductArray(nextItems);
    }

    else  setSelectedProductArray(completeProductList);

  }, [completeProductList, currentPage, itemsPerPage]);


  return (
    <>
      <ProductListRoot>
        <ProductListMainContainer>
          <FormContainer
            dimensions='/alchemativelogo-12@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar4@3x.png')"
          />
          <ProductListContentContainer>
            <OrderHeaderContainer pageTitle='New Order' />
            <SubHeader>
              <ProductList1>Product List</ProductList1>
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
                        <SearchSharpIcon />
                      </InputAdornment>
                    ),
                  } }
                  onChange={ onHandleSearchText }
                  sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                />
                <ImportButton onClick={ openCSVModalPopup }>
                  <Import>Import</Import>
                </ImportButton>
                <ExportButton onClick={ openExportCSV }>
                  <Import>Export</Import>
                </ExportButton>
              </FrameParent>
            </SearchBarContainer>
            <ProductSheetHeadingContaine>
              <ProductSheetWrapper>
                <ProductSheet>Product Sheet</ProductSheet>
              </ProductSheetWrapper>
            </ProductSheetHeadingContaine>
            <FilterContainer>
              <FilterContainerInner>
                <FrameItem
                  size='small'
                  sx={ { width: '100%' } }
                  disablePortal
                  options={ options } 
                  onChange={ (_event, value) => handleChangeOrderStatus(value) }
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
              </FilterContainerInner>
            </FilterContainer>
            <ProductSheetMainContainer>
              <ProductSheetContainer>
                <Colum>
                  <TitleWrapper>
                    <Title>Title</Title>
                  </TitleWrapper>
                </Colum>
                <Colum>
                  <TitleWrapper>
                    <Title>Product Type</Title>
                  </TitleWrapper>
                </Colum>
                <Colum>
                  <TitleWrapper>
                    <Title>Shopify Vendor</Title>
                  </TitleWrapper>
                </Colum>
                <Colum>
                  <TitleWrapper>
                    <Title>Published At</Title>
                  </TitleWrapper>
                </Colum>
                <Colum1>
                  <OrderStatusWrapper>
                    <Title>Order Status</Title>
                  </OrderStatusWrapper>
                </Colum1>
                <Colum>
                  <TitleWrapper>
                    <Title>Total Variants</Title>
                  </TitleWrapper>
                </Colum>
              </ProductSheetContainer>
              <>{ renderTable() }</>  
              <Pagination
                imageAltText='/double-right@2x.png'
                imageId='/icons8back50-1@2x.png'
                imageCode='/icons8forward50-1@2x.png'
                imageDimensions='/double-right1@2x.png'
                itemsPerPageOptions={ [10, 15, 20] }
                itemsPerPage={ itemsPerPage }
                currentPage={ currentPage }
                totalPages={ totalPages }
                onItemsPerPageChange={ (_value) => 
                    handlePerItem(_value)
                 }
                onNextPage={ handleNextPage }
                onPrevPage={ handlePrevPage }
              />
            </ProductSheetMainContainer>
            <ModalButton>
              <OpenInWindowWrapper onClick={ openModalPopup }>
                <Import>Open In Window</Import>
              </OpenInWindowWrapper>
            </ModalButton>
          </ProductListContentContainer>
        </ProductListMainContainer>
      </ProductListRoot>
      { isCSVModalPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={ closeCSVModalPopup }
        >
          <CSVModal onClose={ closeCSVModalPopup } />
        </PortalPopup>
      ) }
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

