/* eslint-disable react/jsx-no-bind */
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVendorAllocateInventory, fetchVendorAllocateProduct, 
    fetchVendorData, fetchVendorImportProduct, 
    logout, 
    updateVendorAllocateProductID} from 'src/store/thunks';
import {   getVendorsAllocateProductList, getVendorsData } from 'src/store/selectors/entities';
import moment from 'moment';
import Pagination from './pagination';
import NewCardForm from './new-card-form';
import UpdateStatusVendor from './update-vendor-status-modal';
import PortalDrawer from './portal-drawer';
import UpdateVendorPasswwordModal from './update-vendor-password-modal';
import PortalPopup from './portal-popup';
import { VendorOrderDetail } from './vendor-order-details-Modal';

const FullName = styled.b`
  flex: 1;
  position: relative;
`;

const FullNameWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const FullName1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;

const FullNameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0rem;
`;

const FullNameFrame = styled.div`
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

const ActivityStreamSheet = styled.div`
width: 100%;
display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const ActivityStreamContainerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-poppins);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ActivityStreamHeadingContai = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.81rem var(--padding-6xl);
  text-align: center;
  font-size: 1.13rem;
  color: #393e46;
`;

const Vendor = styled.div`
  height: 1.69rem;
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
`;

const VendorWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuVerticalIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.05rem;
  object-fit: contain;
  cursor: pointer;
`;

const VendorForm: FunctionComponent = () => {

  const dispatch=useDispatch();
  const vendorsList=useSelector(getVendorsData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages]=useState<number>(0);
  const [completeVendorList, setCompleteVendorList]=useState(vendorsList);
  const [selectedVendorArray, setSelectedVendorArray]=useState<any>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchWord, setSearchWord]=useState('');
  const [actionOpen, setActionOpen]= useState(false);
  const [selectedRow, setSelectedRow]=useState<any>({});
  const [isEditModelOpen, setIsEditModelOpen]=useState(false);
  const [isStatusModelOpen, setIsStatusModelOpen]=useState(false);
  const [isUpdatePasswordModelOpen, setIsUpdatePasswordModelOpen]=useState(false);
  const [isOrderDetailModelOpen, setIsOrderDetailModelOpen]=useState(false);


  const closeUpadtePasswordModalPopup = useCallback(() => {
    setIsUpdatePasswordModelOpen(false);
  }, []);


  const closeStatusModalPopup = useCallback(() => {
    setIsStatusModelOpen(false);
  }, []);

  const closeOrderDetailModalPopup = useCallback(() => {
    setIsOrderDetailModelOpen(false);
  }, []);


// this function is tempory as ui ready need to finish it 
  const handleAllocateInventory = (()=>{
    dispatch(fetchVendorAllocateInventory(selectedRow.id));
  });

  // this function is tempory as ui ready need to finish it 
  const handleViewImprotProduct = (()=>{
    dispatch(fetchVendorImportProduct(selectedRow.id));
  });

  // this function is tempory as ui ready need to finish it 
  const handleAllocateProducts = (()=>
  {
    dispatch(fetchVendorAllocateProduct(selectedRow.id));
    //this function use when link save in the ui
    dispatch(updateVendorAllocateProductID({id: selectedRow.id, idArray: {product_list:[45,2]}}));
  });  

  const renderTable = () => (
    selectedVendorArray?.length > 0 ? (
      selectedVendorArray.map((vendor: any, index: any) => (
        index % 2 === 0 ? (
          <ActivityStreamSheet key={ index }>
            <Colum>
              <FullNameContainer>
                <FullName1>{ vendor.vendor_name }</FullName1>
              </FullNameContainer>     
            </Colum>
            <Colum>
              <FullNameContainer>
                <FullName1>{ vendor.vendor_email }</FullName1>
              </FullNameContainer>     
            </Colum>
            <Colum>
              <FullNameContainer>
                <FullName1>{ vendor.vendor_contact_number }</FullName1>
              </FullNameContainer>     
            </Colum>
            <Colum>
              <FullNameContainer>
                <FullName1>{ moment(`${vendor.created_at}`).format('DD/MM/YY - hh:mm A') }</FullName1>
              </FullNameContainer>     
            </Colum>
            <Colum>
              <FullNameContainer>
                <FullName1>{ vendor.vendor_status }</FullName1>
              </FullNameContainer>     
            </Colum>
            <Colum>
              <FullNameContainer>
                <FullName1>{ `${vendor.is_active}` ? 'true': 'false' }</FullName1>
              </FullNameContainer>     
            </Colum>
            <Colum>
              <FullNameContainer onClick={ ()=>{ {setActionOpen(!actionOpen); setSelectedRow(vendor) } } }>
                <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
              </FullNameContainer>     
            </Colum>
            {  vendor.id === selectedRow?.id && actionOpen ? 
              <Colum>  
                <div style={ { display: 'flex', flexDirection: 'column' } } >
                  <div 
                    style={ { cursor: 'pointer', padding: '2px' } } 
                    onClick={ ()=>setIsStatusModelOpen(!isStatusModelOpen) }
                  >
                    Change Status
                  </div>
                  <div 
                    style={ { cursor: 'pointer', padding: '2px' } } 
                    onClick={ ()=>setIsUpdatePasswordModelOpen(!isUpdatePasswordModelOpen) }
                  >
                    Change Password
                  </div>
                  <div 
                  style={ { cursor: 'pointer', padding: '2px' } } 
                  onClick={ ()=>setIsEditModelOpen(!isEditModelOpen) }>Edit</div>
                  <div style={ { cursor: 'pointer', padding: '2px' } } onClick={ handleAllocateProducts }>
                    Allocate Products</div>
                  <div style={ { cursor: 'pointer', padding: '2px' } } onClick={ handleViewImprotProduct }>
                    View Import Products</div>
                  <div style={ { cursor: 'pointer', padding: '2px' } } onClick={ handleAllocateInventory }>
                    Allocate Inventory</div>
                  <div 
                  style={ { cursor: 'pointer', padding: '2px' } } 
                  onClick={ ()=>setIsOrderDetailModelOpen(!isOrderDetailModelOpen) }
                  >
                    Order Details
                  </div>     
                </div>  
              </Colum> : null  }
          </ActivityStreamSheet>
        ) : (
          <ActivityStreamSheet key={ index }>
            <Colum>  
              <FullNameFrame>
                <FullName1>{ vendor.vendor_name }</FullName1>
              </FullNameFrame>         
            </Colum>
            <Colum>  
              <FullNameFrame>
                <FullName1>{ vendor.vendor_email }</FullName1>
              </FullNameFrame>         
            </Colum>
            <Colum>  
              <FullNameFrame>
                <FullName1>{ vendor.vendor_contact_number }</FullName1>
              </FullNameFrame>         
            </Colum>
            <Colum>  
              <FullNameFrame>
                <FullName1>{ moment(`${vendor.created_at}`).format('DD/MM/YY - hh:mm A') }</FullName1>
              </FullNameFrame>         
            </Colum>
            <Colum>  
              <FullNameFrame>
                <FullName1>{ vendor.vendor_status }</FullName1>
              </FullNameFrame>         
            </Colum>
            <Colum>  
              <FullNameFrame>
                <FullName1>{ `${vendor.is_active}` ? 'true': 'false' }</FullName1>
              </FullNameFrame>         
            </Colum>
            <Colum>
              <FullNameFrame onClick={ ()=>{ {setActionOpen(!actionOpen); setSelectedRow(vendor) } } }>
                <MenuVerticalIcon alt='' src='/menu-vertical@2x.png' />
              </FullNameFrame>    
            </Colum>
            {  vendor.id === selectedRow.id && actionOpen ? 
              <Colum>  
                <div style={ { display: 'flex', flexDirection: 'column' } } >
                  <div 
                    style={ { cursor: 'pointer', padding: '2px' } } 
                    onClick={ ()=>setIsStatusModelOpen(!isStatusModelOpen) }
                  >
                    Change Status
                  </div>
                  <div 
                    style={ { cursor: 'pointer', padding: '2px' } } 
                    onClick={ ()=>setIsUpdatePasswordModelOpen(!isUpdatePasswordModelOpen) }
                  >
                    Change Password
                  </div>
                  <div 
                  style={ { cursor: 'pointer', padding: '2px' } } 
                  onClick={ ()=>setIsEditModelOpen( !isEditModelOpen ) }>Edit</div>
                  <div style={ { cursor: 'pointer', padding: '2px' } } onClick={ handleAllocateProducts }>
                    Allocate Products</div>
                  <div style={ { cursor: 'pointer', padding: '2px' } } onClick={ handleViewImprotProduct }>
                    View Import Products</div>
                  <div style={ { cursor: 'pointer', padding: '2px' } } onClick={ handleAllocateInventory }>
                    Allocate Inventory</div>
                  <div 
                  style={ { cursor: 'pointer', padding: '2px' } } 
                  onClick={ ()=>setIsOrderDetailModelOpen(!isOrderDetailModelOpen) }
                  >
                    Order Details
                  </div>    
                </div>  
              </Colum> : null  }
          </ActivityStreamSheet>
        )
      ))
    )  :(
      null
    )

  );

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

  const handlePerItem=((_value: any)=>{
    const value=parseInt(_value);
    if (value===0)
    setItemsPerPage(10);
    else
    setItemsPerPage(_value);
});

const onHandleSearchText=(()=>{
    const searchText= searchWord.toLowerCase();
    let filterObject: any= [];
    
    if (completeVendorList && searchText!=='')    
    {
        filterObject=vendorsList?.filter((item:any)=> item.vendor_email.trim().toLowerCase().includes(searchText));
        setCompleteVendorList(filterObject);
    }  
    
    else 
    if (vendorsList)
    setCompleteVendorList(vendorsList);
});

 useEffect(()=>{
    onHandleSearchText();
 },[searchWord]);

  useEffect(()=>{
    setSelectedVendorArray(vendorsList);
    setCompleteVendorList(vendorsList);
  },[vendorsList]);

  useEffect(()=>{
    if (completeVendorList && completeVendorList.length>0)
    {
        const pages=Math.ceil(completeVendorList.length/itemsPerPage);
        setTotalPages(pages);
        setCurrentPage(1);
    }

    else {
        setTotalPages(1);
        setCurrentPage(1);
    }

   },[completeVendorList, itemsPerPage]);

   useEffect(() => {
    if (completeVendorList && completeVendorList !== null    && completeVendorList.length>itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeVendorList.slice(startIndex, endIndex);
      setSelectedVendorArray(nextItems);
    }
    else  setSelectedVendorArray(completeVendorList);
  }, [completeVendorList, currentPage, itemsPerPage]);



  useEffect(()=>{
    dispatch(fetchVendorData({}));
  },[]);
  return (
    <>
      <NewCardForm 
      setSearchWord={ setSearchWord } 
      selectedRow={ selectedRow } 
      isEdit={ isEditModelOpen } 
      setIsEdit={ setIsEditModelOpen }
      />
      <ActivityStreamHeadingContai>
        <VendorWrapper>
          <Vendor>Vendor</Vendor>
        </VendorWrapper>
      </ActivityStreamHeadingContai>
      <ActivityStreamContainerRoot>
        <ActivityStreamSheet>
          <Colum>
            <FullNameWrapper>
              <FullName>Name</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Email Address</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Phone Number</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Request Datetime</FullName>
            </FullNameWrapper>   
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Status</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Enable</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Action</FullName>
            </FullNameWrapper>
          </Colum>
        </ActivityStreamSheet>
        <>
          { renderTable() }
        </>
        <Pagination
        imageAltText='/double-right@2x.png'
        imageId='/icons8back50-1@2x.png'
        imageCode='/icons8forward50-1@2x.png'
        imageDimensions='/double-right1@2x.png'
        itemsPerPageOptions={ [10, 20, 30] } // Example options for items per page
        itemsPerPage={ itemsPerPage }
        currentPage={ currentPage }
        totalPages={ totalPages }
        onItemsPerPageChange={ (_value) => 
            handlePerItem(_value)
         }
        onNextPage={ handleNextPage }
        onPrevPage={ handlePrevPage }
        />
      </ActivityStreamContainerRoot>
      { isStatusModelOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeStatusModalPopup }
        >
          <UpdateStatusVendor onClose={ closeStatusModalPopup } selectedRow={ selectedRow }/>
        </PortalDrawer>
      ) }

      { isUpdatePasswordModelOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeUpadtePasswordModalPopup }
        >
          <UpdateVendorPasswwordModal onClose={ closeUpadtePasswordModalPopup } formData={ selectedRow }/>
        </PortalDrawer>
      ) }

      { isOrderDetailModelOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          onOutsideClick={ closeOrderDetailModalPopup }
        >
          <VendorOrderDetail onClose={ closeOrderDetailModalPopup } id={ selectedRow.id }/>
        </PortalPopup>
      ) }
    </>
  );
};

export default VendorForm;

