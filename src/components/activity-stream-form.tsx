/* eslint-disable react/jsx-no-bind */
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/thunks';
import Pagination from './pagination';

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
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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

type ActiveStremFormType = {
   data: any;
  };

const ActivityStreamForm: FunctionComponent<ActiveStremFormType> = ({ data }) => {

  
  const dispatch=useDispatch();

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages]=useState<number>(0);
  const [selectedActiveArray, setSelectedActiveArray]=useState<any>([]);
  const [itemsPerPage,setItemsPerPage]=useState(50);
  const [completeActiveData,setCompleteActiveData]=useState(data);

  const handleLogout = () => {
    dispatch(logout({}));
  };

  const renderActiveItem = () => (
    <>
      { selectedActiveArray && selectedActiveArray.map((item: any, index: number) => (
        <ActivityStreamSheet key={ index } >
          <Colum>
            <FullNameContainer>
              <FullName1>{ item.full_name }</FullName1>
            </FullNameContainer>
          </Colum>
          <Colum>
            <FullNameContainer>
              <FullName1>{ item.role_name }</FullName1>
            </FullNameContainer>
          </Colum>
          <Colum>
            <FullNameContainer>
              <FullName1>{ item.email }</FullName1>
            </FullNameContainer>
          </Colum>
          <Colum>
            <FullNameContainer>
              <FullName1>{ item.action_performed }</FullName1>
            </FullNameContainer>
          </Colum>
          <Colum>
            <FullNameContainer>
              <FullName1>{ item.ip_address }</FullName1>
            </FullNameContainer>
          </Colum>
          <Colum>
            <FullNameContainer>
              <FullName1>{ item.action_time }</FullName1>
            </FullNameContainer>
          </Colum>
        </ActivityStreamSheet>
      )) }
    </>
  );
  
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


  

   useEffect(()=>{setCompleteActiveData(data)},[data]);

   useEffect(()=>{
    if (completeActiveData && completeActiveData.length>0)
    {
        const pages=Math.ceil(completeActiveData.length/itemsPerPage);
        setTotalPages(pages);
        setCurrentPage(1);
    }

    else {
        setTotalPages(1);
        setCurrentPage(1);
    }

   },[completeActiveData, itemsPerPage]);

   useEffect(() => {
    if (completeActiveData && completeActiveData !== null    && completeActiveData.length>itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeActiveData.slice(startIndex, endIndex);
      setSelectedActiveArray(nextItems);
    }

    else  setSelectedActiveArray(completeActiveData);

  }, [completeActiveData, currentPage, itemsPerPage]);


 
  return (
    <>
      <ActivityStreamContainerRoot>
        <ActivityStreamSheet>
          <Colum>
            <FullNameWrapper>
              <FullName>Full Name</FullName>
            </FullNameWrapper>        
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Role Name</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Email</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>Action Performed</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>IP Address</FullName>
            </FullNameWrapper>
          </Colum>
          <Colum>
            <FullNameWrapper>
              <FullName>DateTime</FullName>
            </FullNameWrapper>  
          </Colum>
        </ActivityStreamSheet>
        { renderActiveItem() }
        <Pagination
            imageAltText='/double-right@2x.png'
            imageId='/icons8back50-1@2x.png'
            imageCode='/icons8forward50-1@2x.png'
            imageDimensions='/double-right1@2x.png'
            itemsPerPageOptions={ [50, 100, 150] } 
            itemsPerPage={ itemsPerPage }
            currentPage={ currentPage }
            totalPages={ totalPages }
            onItemsPerPageChange={ (_value) => {
            handlePerItem(_value);
        } }
            onNextPage={ handleNextPage }
            onPrevPage={ handlePrevPage }
     />
      </ActivityStreamContainerRoot>
    </>
  );
};

export default ActivityStreamForm;

