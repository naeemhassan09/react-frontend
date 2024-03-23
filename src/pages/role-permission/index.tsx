import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
} from '@mui/material';
import styled from 'styled-components';
import Pagination from 'src/components/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmailData } from 'src/store/thunks';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import { getEmailTemplates } from 'src/store/selectors/entities';
import FormContainer from 'src/components/form-container';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ActivityStreamContainer from 'src/components/activity-stream-container';


const RolesPermission = styled.div`
  position: relative;
  font-weight: 500;
`;

const TrueWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-limegreen-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const Colum3Inner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 0rem;
`;


const ActivityStreamSheet = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;


const Emails = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const EmailsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EmailHeadingContainer = styled.div`
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


const Colum = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MenuVerticalIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.05rem;
  object-fit: contain;
  cursor: pointer;
`;


const EmailSheetContainer = styled.div`
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

const EmailManagementContentContai = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const EmailManagementMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsEmailManagementRoot = styled.div`
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

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

const Add = styled.div`
  position: relative;
  font-weight: 600;
  color: white;
`;

const AddButton = styled.div`
  border-radius: var(--br-8xs);
  margin-top: 1.2rem;
  margin-left: 1rem;
  background-color: red;
  height: 2.5rem;
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


export const RolePermission: FunctionComponent = () => {
  const dispatch=useDispatch();
  const emailTemplateData= useSelector(getEmailTemplates);

  const [totalPages, setTotalPages]=useState<number>(0);
  const [currentPage, setCurrentPage]=useState<number>(0);
  const [selectedEmailTemplate, setSelectedEmailTemplate]=useState<any>([]);
  const [itemsPerPage, setItemsPerPage]=useState(10);
  const [completeEmailTemplate, setCompleteEmailTemplate]=useState(emailTemplateData);






  const renderTable=(()=>(<>
    {
        selectedEmailTemplate && selectedEmailTemplate.length>0 && 
        selectedEmailTemplate.map((item: any, index: number)=>(
          <>
            <ActivityStreamSheet key={ index }>
              <Colum>
                <Colum3Inner>
                  <TrueWrapper>
                    <RolesPermission>{ item.title }</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>
              <Colum>
                <Colum3Inner>
                  <TrueWrapper>
                    <RolesPermission>{ item.trigger }</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>
              <Colum>
                <Colum3Inner>
                  <TrueWrapper>
                    <RolesPermission>{ item.is_active? 'True':'false' }</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>

              <Colum>
                <Colum3Inner>
                  <TrueWrapper 
                  style={ { cursor:'pointer' } } >
                    <RolesPermission>Edit</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>
            </ActivityStreamSheet>
          </>
        
        
        ))
    }
  </>));

 const handleNextPage = () => {
    if (currentPage < totalPages)
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const onHandleSearchText=((event: any)=>{
   const searchText= event.target.value.toLowerCase();
    let filterObject: any= [];
 
    if (completeEmailTemplate && searchText!=='')    
    {
        filterObject=emailTemplateData?.filter((item:any)=> item.title.trim().toLowerCase().includes(searchText));
        console.log(filterObject);
        setCompleteEmailTemplate(filterObject);
    }  

    else 
    if (emailTemplateData)
    setCompleteEmailTemplate(emailTemplateData);
});

const handlePerItem=((_value: any)=>{
    const value=parseInt(_value);
    if (value===0)
    setItemsPerPage(10);
    else
    setItemsPerPage(_value);
});


useEffect(()=>{setCompleteEmailTemplate(emailTemplateData)},[emailTemplateData]);

   useEffect(()=>{
    if (completeEmailTemplate && completeEmailTemplate.length>0)
    {
        const pages=Math.ceil(completeEmailTemplate.length/itemsPerPage);
        setTotalPages(pages);
        setCurrentPage(1);
    }

    else {
        setTotalPages(1);
        setCurrentPage(1);
    }

   },[completeEmailTemplate, itemsPerPage]);

   useEffect(() => {
    if (completeEmailTemplate && completeEmailTemplate !== null    && completeEmailTemplate.length>itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeEmailTemplate.slice(startIndex, endIndex);
      setSelectedEmailTemplate(nextItems);
    }

    else  setSelectedEmailTemplate(completeEmailTemplate);

  }, [completeEmailTemplate, currentPage, itemsPerPage]);

  useEffect(()=>{
    dispatch(fetchEmailData({}));
  },[]);

return (
  <>
    <SettingsEmailManagementRoot>
      <EmailManagementMainContainer>
        <FormContainer
            dimensions='/alchemativelogo-11@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar2@3x.png')"
        />
        <EmailManagementContentContai>
          <ActivityStreamContainer1 />
          <ActivityStreamContainer
                showSubHeader={ false }
                propBorderRadius='50px'
                propBorderRadius1='50px'
                propBorderRadius2='50px'
          />
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
                sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                onChange={ onHandleSearchText }
                />  
            </FrameParent>
            <AddButton>
              <Add>Add New</Add>
            </AddButton>
          </SearchBarContainer>
          <EmailHeadingContainer>
            <EmailsWrapper>
              <Emails>Emails</Emails>
            </EmailsWrapper>
          </EmailHeadingContainer>
          <SettingsSheetContainer>
            <EmailSheetContainer>
              <Colum>
                <RoleWrapper>
                  <Role>Title</Role>
                </RoleWrapper>
              </Colum>     
              <Colum>               
                <RoleWrapper>
                  <Role>Trigger</Role>
                </RoleWrapper>
              </Colum>
              <Colum>
                <RoleWrapper>
                  <Role>Status</Role>
                </RoleWrapper>
              </Colum>
              <Colum>
                <RoleWrapper>
                  <Role>Actions</Role>
                </RoleWrapper>
              </Colum>
            </EmailSheetContainer>
            { renderTable() }
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
          </SettingsSheetContainer>
        
        </EmailManagementContentContai>
      </EmailManagementMainContainer>

        
    </SettingsEmailManagementRoot>
   
  </>    
  );
};
