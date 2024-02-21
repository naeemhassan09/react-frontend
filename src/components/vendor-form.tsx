/* eslint-disable react/jsx-no-bind */
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVendorData, logout } from 'src/store/thunks';
import { getVendorsData } from 'src/store/selectors/entities';
import moment from 'moment';
import Pagination from './pagination';
import NewCardForm from './new-card-form';

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

const FullNameWrapper1 = styled.div`
  flex: 1;
  background-color: var(--color-lavenderblush-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-3xs);
`;

const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const VendorForm: FunctionComponent = () => {

  const dispatch=useDispatch();
  const vendorsList=useSelector(getVendorsData);
  const [isModalPopupOpen, setModalPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages]=useState<number>(0);
  const [completeVendorList, setCompleteVendorList]=useState(vendorsList);
  const [selectedVendorArray, setSelectedVendorArray]=useState<any>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchWord, setSearchWord]=useState('');

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

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
      <NewCardForm setSearchWord={ setSearchWord }/>
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
            { /* <FullNameContainer>
              <FullName1>Full Name</FullName1>
            </FullNameContainer>
            <FullNameFrame>
              <FullName1>Full Name</FullName1>
            </FullNameFrame>
           */ }
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
    </>
  );
};

export default VendorForm;

