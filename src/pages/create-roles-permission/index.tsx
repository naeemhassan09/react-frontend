import { FunctionComponent, useEffect, useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import styled from 'styled-components';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { APP, ROLESPERMISSION_ROUTE } from 'src/constants/navigation-routes';
import { useDispatch, useSelector } from 'react-redux';
import { createRolePermission, fetchSingleRole, updateRolePermission } from 'src/store/thunks';
import { useHistory } from 'react-router-dom';
import { getSingleRolePermission } from 'src/store/selectors/entities/role-permissions';

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

const Date1 = styled(TextField)`
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

const CreateButton = styled.button`
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

const CancelButton = styled(Link)`
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
  flex-direction: column;
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

const SettingsRolesPermisssionsRoot = styled.form`
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
const {
    register,
    handleSubmit,
    setValue,
    getValues,
    } = useForm();

const dispatch= useDispatch();
const history = useHistory();
const singleRole: any= useSelector(getSingleRolePermission);
const [isOrderManagement, setIsOrderManagement]=useState(false);
const [isProductManagement, setIsProductManagement]=useState(false);
const [isSettingManagement, setIsSettingManagement]=useState(false);

const [detail, setDetail]=useState( {
    is_setting: false,
    is_user_management: false,
    is_role_permission:  false,
    is_activity_stream: false,
    is_order_management:  false,
    is_order: false,
    is_product_managment:  false,
    is_product: false,
    is_vendor_import_list:  false,
    is_vendor_imported_list: false,
    is_vendor:false,
    is_shopify_store:  false,
    is_email_template: false
    }
);

const id= localStorage.getItem('id');

const onSubmit=( (values: any)=>{

  let payload = {};
  payload={    'name': values.name,
    'is_setting': values.is_setting ?? false,
    'is_user_management': values.is_user_management ?? false,
    'is_role_permission': values.is_role_permission ?? false,
    'is_activity_stream': values.is_activity_stream ?? false,
    'is_order_management': values.is_order_management ?? false,
    'is_order': values.is_order ?? false,
    'is_product_managment': values.is_product_managment ?? false,
    'is_product': values.is_product ?? false,
    'is_vendor_import_list': values.is_vendor_import_list ?? false,
    'is_vendor_imported_list': values.is_vendor_imported_list ?? false,
    'is_vendor': values.is_vendor ?? false,
    'is_shopify_store': values.is_shopify_store ?? false,
    'is_email_template': values.is_email_template ?? false
  };

  if (id!=='null'){
  payload={id:id, ...payload};
  dispatch(updateRolePermission(payload));
  }

  else   
  dispatch(createRolePermission({payload}));

  history.push(`${APP}${ROLESPERMISSION_ROUTE}`);

   } );

   
useEffect(()=>{
    
    if (id!=='null' && singleRole)
    {
    setValue('name', singleRole.name);

    setDetail({
        is_setting: singleRole.is_setting,
        is_user_management: singleRole.is_user_management,
        is_role_permission: singleRole.is_role_permission,
        is_activity_stream: singleRole.is_activity_stream,
        is_order_management:  singleRole.is_order_management,
        is_order:  singleRole.is_order,
        is_product_managment:  singleRole.is_product_managment,
        is_product:  singleRole.is_product,
        is_vendor_import_list:  singleRole.is_vendor_import_list,
        is_vendor_imported_list:  singleRole.is_vendor_imported_list,
        is_vendor:  singleRole.is_vendor,
        is_shopify_store:  singleRole.is_shopify_store,
        is_email_template: singleRole.is_email_template
      });
    
    setIsOrderManagement(singleRole.is_order_management);
    setIsProductManagement(singleRole.is_product_managment);
    setIsSettingManagement(singleRole.is_setting);
}
},[singleRole, id, setValue]);


useEffect(()=>{
    console.log(id);
if (id!=='null')
    dispatch(fetchSingleRole(id));
},[id]);

  
  return (
    <>
      <SettingsRolesPermisssionsRoot onSubmit={ handleSubmit(onSubmit) }>
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
                  { ...register('name') } 
                  color='primary'
                  label='Role Name'
                  size='small'
                  placeholder='Role Name'
                  autoComplete={ 'true' }
                  required
                  variant='outlined'
                  type='text'
                  sx={ { '& .MuiInputBase-root': { height: '48px' } } }
              />
                </DateWrapper>
              </FilterBarContainerInner>
            </FilterBarContainer>
            <ButtonsContainer>
              <CreateButton type='submit'>
                <Create>{ id!=='null'? 'Update': 'Create' }</Create>
              </CreateButton>
              <CancelButton to={ `${APP}${ROLESPERMISSION_ROUTE}` }>
                <Create>Cancel</Create>
              </CancelButton>
            </ButtonsContainer>
            <OrderManagementContainer>
              <FrameParent>
                <CheckboxParent>
                  <Checkbox1
                  label={ <OrderManagement>Order Management</OrderManagement> }
                    control={ <Checkbox 
                    id='small' color='primary' 
                    { ...register('is_order_management') } 
                    checked={ isOrderManagement }
                    onChange={ ()=>setIsOrderManagement(!isOrderManagement) }
                    /> }
                  />
                </CheckboxParent>
                {
                isOrderManagement ?  
                  <CheckboxParent>
                    <Checkbox1
                      label={ <Create>Orders</Create> }
                      control={ <Checkbox 
                      { ...register('is_order') }
                      checked={ detail.is_order }
                      id='small' color='primary' size='small' 
                      onChange={ (event) => setDetail({ ...detail, is_order: event.target.checked } ) }
    
                      />
                      }
                    />   
                  </CheckboxParent>: null
                }
               
              </FrameParent>
            </OrderManagementContainer>
            <OrderManagementContainer>   
              <FrameParent>
                <CheckboxParent>
                  <Checkbox1
                    label= { <OrderManagement>Product Management</OrderManagement> }
                    control={ <Checkbox 
                    checked={ isProductManagement }
                    id='small' color='primary' { ...register('is_product_managment') }
                    onChange={  ()=>setIsProductManagement(!isProductManagement) }
                    /> }
                  />
                 
                </CheckboxParent>

                {
                isProductManagement?
                  <CheckboxParent>
                    <Checkbox1
                      label={ <Create>Product</Create> }
                      control={ <Checkbox 
                      { ...register('is_product') } 
                      checked={ detail.is_product }
                      onChange={ (event) => setDetail({ ...detail, is_product: event.target.checked } ) }
                      id='small' color='primary' size='small' />
                      }
                    />   
                    <Checkbox1
                      label={ <Create>Vendor Import List</Create> }
                      control={
                        <Checkbox 
                        { ...register('is_vendor_import_list') } 
                        checked={ detail.is_vendor_import_list } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_vendor_import_list: event.target.checked } ) }
                        />
                      }
                    />
                    <Checkbox1
                      label={ <Create>Vendor Imported Products</Create> }
                      control={ 
                        <Checkbox 
                        checked={ detail.is_vendor_imported_list }
                        { ...register('is_vendor_imported_list') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_vendor_imported_list: event.target.checked } ) }
                        
                        />
                    }
                    />
                  </CheckboxParent>: null
                }
              
              </FrameParent>       
            </OrderManagementContainer>

            <OrderManagementContainer>   
              <FrameParent>
                <CheckboxParent>
                  <Checkbox1
                    label= { <OrderManagement>Setting</OrderManagement> }
                    control={ <Checkbox 
                    checked={ isSettingManagement }

                    id='small' color='primary' { ...register('is_setting') }
                    onChange={  ()=>setIsSettingManagement(!isSettingManagement) }
                    /> }
                  />
                 
                </CheckboxParent>

                { isSettingManagement ?  
                  <CheckboxParent>
                    <Checkbox1
                      label={ <Create>User Management</Create> }
                      control={
                        <Checkbox 
                        checked={ detail.is_user_management }
                        { ...register('is_user_management') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_user_management: event.target.checked } ) }
                        
                        />
                      }
                    />   
                    <Checkbox1
                      label={ <Create>Roles & Permissions</Create> }
                      control={ <Checkbox 
                        checked={ detail.is_role_permission }
                        { ...register('is_role_permission') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_role_permission: event.target.checked } ) }
                        
                        />
                      }
                    />
                    <Checkbox1
                      label={ <Create>Activity Stream</Create> }
                      control={ <Checkbox 
                        checked={ detail.is_activity_stream }
                        { ...register('is_activity_stream') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_activity_stream: event.target.checked } ) }
                        
                        />
                      }
                    />
                    <Checkbox1
                      label={ <Create>Vendor</Create> }
                      control={
                        <Checkbox 
                        checked={ detail.is_vendor }
                        { ...register('is_vendor') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_vendor: event.target.checked } ) }
                        
                        />
                      }
                    />
                    <Checkbox1
                      label={ <Create>Shopify Store Setting</Create> }
                      control={
                        <Checkbox 
                        checked={ detail.is_shopify_store }
                        { ...register('is_shopify_store') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_shopify_store: event.target.checked } ) }
                        
                        />
                      }
                    />
                    <Checkbox1
                      label={ <Create>Email Template</Create> }
                      control={
                        <Checkbox
                        checked={ detail.is_email_template }
                        { ...register('is_email_template') } id='small' color='primary' size='small' 
                        onChange={ (event) => setDetail({ ...detail, is_email_template: event.target.checked } ) }
                        
                        />
                      }
                    />
                  </CheckboxParent>: null
                }
              </FrameParent>       
            </OrderManagementContainer>
            
          
          </RpContentContainer>
        </RpMainContainer>
      </SettingsRolesPermisssionsRoot>
   
    </>
  );
};

