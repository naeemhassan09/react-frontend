import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { TextField, InputAdornment} from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import styled from 'styled-components';
import CreateVendorModal from './create-vendor-modal';
import PortalDrawer from './portal-drawer';


type NewCardFormType = {
   setSearchWord: any;
   selectedRow: any;
   isEdit: boolean;
   setIsEdit: any;
  };

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

const NewButton = styled.div`
  height: 2.25rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
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

const ActivityStreamContentContaiInnerRoot = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-11xl) var(--padding-6xl);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const NewCardForm: FunctionComponent<NewCardFormType> = ({ setSearchWord, isEdit, selectedRow, setIsEdit }) => {

  const [isCreateVendorModalOpen, setCreateVendorModalOpen] = useState(false);


  const openCreateVendorModal = useCallback(() => {
    setCreateVendorModalOpen(true);
  }, []);

  const closeCreateVendorModal = useCallback(() => {
    setCreateVendorModalOpen(false);
    setIsEdit(false);
  }, []);

  useEffect(()=>{
    if (isEdit)
    openCreateVendorModal();
  },[isEdit]);

  return (
    <>
      <ActivityStreamContentContaiInnerRoot>
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
                  <SearchSharpIcon/>
                </InputAdornment>
              ),
            } }
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
            onChange={ (event)=>setSearchWord(event?.target.value) }
          />
          <NewButton onClick={ openCreateVendorModal }>
            <New>+ New</New>
          </NewButton>
        </FrameParent>
      </ActivityStreamContentContaiInnerRoot>
      { isCreateVendorModalOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeCreateVendorModal }
        >
          <CreateVendorModal onClose={ closeCreateVendorModal } isEdit={ isEdit } selectedRow={ selectedRow }/>
        </PortalDrawer>
      ) }
    </>
  );
};

export default NewCardForm;
