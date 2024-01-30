import {
  FunctionComponent,
  useState,
  useCallback,
  type CSSProperties,
} from 'react';
import { TextField, InputAdornment, Icon, IconButton } from '@mui/material';
import { Property } from 'csstype';
import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CreateShopifyModal from './create-shopify-modal';
import PortalDrawer from './portal-drawer';

type CreateShopifyStoreCardType = {
  actionButtonText?: string;

  /** Style props */
  propPadding?: string;
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

const CreateShopifyStore = styled.div`
  position: relative;
  font-weight: 500;
`;

const CreateShopifyStoreButton = styled.div`
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

const SearchBarContainerRoot = styled.div<{ propPadding?: Property.Padding }>`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-6xl);
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
  padding: ${(p) => p.propPadding};
`;

const CreateShopifyStoreCard: FunctionComponent<CreateShopifyStoreCardType> = ({
  actionButtonText,
  propPadding,
}) => {
  const [isCreateShopifyModalOpen, setCreateShopifyModalOpen] = useState(false);

  const openCreateShopifyModal = useCallback(() => {
    setCreateShopifyModalOpen(true);
  }, []);

  const closeCreateShopifyModal = useCallback(() => {
    setCreateShopifyModalOpen(false);
  }, []);

  return (
    <>
      <SearchBarContainerRoot propPadding={ propPadding }>
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
          />
          <CreateShopifyStoreButton onClick={ openCreateShopifyModal }>
            <CreateShopifyStore>{ actionButtonText }</CreateShopifyStore>
          </CreateShopifyStoreButton>
        </FrameParent>
      </SearchBarContainerRoot>
      { isCreateShopifyModalOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Right'
          onOutsideClick={ closeCreateShopifyModal }
        >
          <CreateShopifyModal onClose={ closeCreateShopifyModal } />
        </PortalDrawer>
      ) }
    </>
  );
};

export default CreateShopifyStoreCard;
