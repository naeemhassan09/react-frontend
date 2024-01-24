import { FunctionComponent } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styled from 'styled-components';

type PaginationType = {
  imageAltText?: string;
  imageId?: string;
  imageCode?: string;
  imageDimensions?: string;
  itemsPerPageOptions?: number[]; // Options for items per page
  itemsPerPage?: number; // Current number of items per page
  currentPage?: number; // Current page number
  totalPages?: number; // Total number of pages
  onItemsPerPageChange: (value: number) => void; // Handler for changing items per page
  onNextPage: () => void; // Handler for next page
  onPrevPage: () => void; // Handler for previous page
};

const ItemPerPage = styled.div`
  position: relative;
  font-weight: 500;
`;

const FrameChild = styled(Autocomplete)``;

const ItemPerPageParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-18xl);
`;

const Of0Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;

const DoubleRightIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const Icons8Back = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

const DoubleRightParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;

const PaginationBox = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-xl) var(--padding-3xs);
  gap: var(--gap-27xl);
`;

const PaginationContainerRoot = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-16xl);
  text-align: center;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-poppins);
`;

const Pagination: FunctionComponent<PaginationType> = ({
  itemsPerPageOptions = [10, 20, 30],
  itemsPerPage,
  currentPage,
  totalPages,
  onItemsPerPageChange,
  onNextPage,
  onPrevPage,
}) => (
  <PaginationContainerRoot>
    <PaginationBox>
      <ItemPerPageParent>
        <ItemPerPage>Item per page:</ItemPerPage>
        <FrameChild
          disablePortal
          options={ itemsPerPageOptions.map(String) }
          value={ String(itemsPerPage) }
          onChange={ (_event, newValue) => onItemsPerPageChange(Number(newValue)) }
          renderInput={ (params) => <TextField { ...params } /> }
        />
      </ItemPerPageParent>
      <Of0Wrapper>
        <ItemPerPage>{ `${currentPage} of ${totalPages}` }</ItemPerPage>
      </Of0Wrapper>
      <DoubleRightParent>
        <Icons8Back alt='Previous Page' src='/path/to/prev-icon.png' onClick={ onPrevPage } />
        <Icons8Back alt='Next Page' src='/path/to/next-icon.png' onClick={ onNextPage } />
      </DoubleRightParent>
    </PaginationBox>
  </PaginationContainerRoot>
);

export default Pagination;

