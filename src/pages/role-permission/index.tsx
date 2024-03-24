import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
} from '@mui/material';
import styled from 'styled-components';
import Pagination from 'src/components/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from 'src/store/thunks';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import FormContainer from 'src/components/form-container';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import { getAllRolePermission } from 'src/store/selectors/entities/role-permissions';
import { Link } from 'react-router-dom';
import { NEW_ROLESPERMISSION_ROUTE, APP, EDIT_ROLESPERMISSION_ROUTE } from 'src/constants/navigation-routes';

const RolesPermission = styled.div`
  position: relative;
  font-weight: 500;
`;

const EditRolesPermission = styled(Link)`
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


const Roles = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const RolesWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RoleHeadingContainer = styled.div`
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


const RoleSheetContainer = styled.div`
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

const RoleManagementContentContai = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const RoleManagementMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsRoleManagementRoot = styled.div`
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

const AddButton = styled(Link)`
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
  const rolePermissionData= useSelector(getAllRolePermission);

  const [totalPages, setTotalPages]=useState<number>(0);
  const [currentPage, setCurrentPage]=useState<number>(0);
  const [selectedRolePermission, setSelectedRolePermission]=useState<any>([]);
  const [itemsPerPage, setItemsPerPage]=useState(10);
  const [completeRolePermission, setCompleteRolePermission]=useState(rolePermissionData);

  const formatDate=((dateTimeString:string) =>{
    const options: any = { 
      year: '2-digit', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    };
  
    const formattedDate = new Date(dateTimeString).toLocaleString('en-US', options);
    
    return formattedDate;
  });

  const renderTable=(()=>(<>
    {

        selectedRolePermission && selectedRolePermission.length>0 && 
        selectedRolePermission.map((item: any, index: number)=>(
          <>
            <ActivityStreamSheet key={ index }>
              <Colum>
                <Colum3Inner>
                  <TrueWrapper>
                    <RolesPermission>{ item.name }</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>
              <Colum>
                <Colum3Inner>
                  <TrueWrapper>
                    <RolesPermission>{ formatDate(item.created_at) }</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>
              <Colum>
                <Colum3Inner>
                  <TrueWrapper>
                    <RolesPermission>{ formatDate(item.updated_at) }</RolesPermission>
                  </TrueWrapper>
                </Colum3Inner>
              </Colum>

              <Colum>
                <Colum3Inner>
                  <TrueWrapper 
                  style={ { cursor:'pointer' } }
                  >
                    <EditRolesPermission 
                    to={  `${APP}${EDIT_ROLESPERMISSION_ROUTE}${item.id}`  } 
                    onClick={  ()=>{ localStorage.setItem('id', item.id) } }>
                      Edit
                    </EditRolesPermission>
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
 
    if (completeRolePermission && searchText!=='')    
    {
        filterObject=rolePermissionData?.filter((item:any)=> item.name.trim().toLowerCase().includes(searchText));
        setCompleteRolePermission(filterObject);
    }  

    else 
    if (rolePermissionData)
    setCompleteRolePermission(rolePermissionData);
});

const handlePerItem=((_value: any)=>{
    const value=parseInt(_value);
    if (value===0)
    setItemsPerPage(10);
    else
    setItemsPerPage(_value);
});




useEffect(()=>{setCompleteRolePermission(rolePermissionData)},[rolePermissionData]);

   useEffect(()=>{
    if (completeRolePermission && completeRolePermission.length>0)
    {
        const pages=Math.ceil(completeRolePermission.length/itemsPerPage);
        setTotalPages(pages);
        setCurrentPage(1);
    }

    else {
        setTotalPages(1);
        setCurrentPage(1);
    }

   },[completeRolePermission, itemsPerPage]);

   useEffect(() => {
    
    if (completeRolePermission && completeRolePermission !== null    && completeRolePermission.length>itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextItems = completeRolePermission.slice(startIndex, endIndex);
      setSelectedRolePermission(nextItems);
    }

    else  setSelectedRolePermission(completeRolePermission);

  }, [completeRolePermission, currentPage, itemsPerPage]);

  useEffect(()=>{
    dispatch(fetchRoles({}));
  },[]);

return (
  <>
    <SettingsRoleManagementRoot>
      <RoleManagementMainContainer>
        <FormContainer
            dimensions='/alchemativelogo-11@2x.png'
            alchemativeLogo1IconBackgroundImage="url('/sidemenubar2@3x.png')"
        />
        <RoleManagementContentContai>
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
            <AddButton 
            to={ `${APP}${NEW_ROLESPERMISSION_ROUTE}` } 
            onClick={ ()=>{ localStorage.setItem('id', 'null') } }>
              <Add>Add New</Add>
            </AddButton>
          </SearchBarContainer>
          <RoleHeadingContainer>
            <RolesWrapper>
              <Roles>Role Permission</Roles>
            </RolesWrapper>
          </RoleHeadingContainer>
          <SettingsSheetContainer>
            <RoleSheetContainer>
              <Colum>
                <RoleWrapper>
                  <Role>Role</Role>
                </RoleWrapper>
              </Colum>     
              <Colum>               
                <RoleWrapper>
                  <Role>Added on</Role>
                </RoleWrapper>
              </Colum>
              <Colum>
                <RoleWrapper>
                  <Role>Updated on</Role>
                </RoleWrapper>
              </Colum>
              <Colum>
                <RoleWrapper>
                  <Role>Actions</Role>
                </RoleWrapper>
              </Colum>
            </RoleSheetContainer>
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
        
        </RoleManagementContentContai>
      </RoleManagementMainContainer>

        
    </SettingsRoleManagementRoot>
   
  </>    
  );
};
