import { FunctionComponent, type CSSProperties } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Property } from 'csstype';
import styled from 'styled-components';

type ProductCardType = {
  componentName?: string;
  vendorImportListOptions?: string;
  pageTitle?: string;

  /** Style props */
  propAlignSelf?: CSSProperties['alignSelf'];
};

const Checkbox1 = styled(FormControlLabel)``;

const Product = styled.div`
  position: relative;
  font-weight: 500;
`;

const CheckboxParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;

const FrameParentRoot = styled.div<{ propAlignSelf?: Property.AlignSelf }>`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-black);
  font-family: var(--font-poppins);
  align-self: ${(p) => p.propAlignSelf};
`;

const ProductCard: FunctionComponent<ProductCardType> = ({
  componentName,
  vendorImportListOptions,
  pageTitle,
  propAlignSelf,
}) => (
  <FrameParentRoot propAlignSelf={ propAlignSelf }>
    <CheckboxParent>
      <Checkbox1
        label=''
        control={ <Checkbox id='small' color='primary' size='small' /> }
      />
      <Product>{ componentName }</Product>
    </CheckboxParent>
    <CheckboxParent>
      <Checkbox1
        label=''
        control={ <Checkbox id='small' color='primary' size='small' /> }
      />
      <Product>{ vendorImportListOptions }</Product>
    </CheckboxParent>
    <CheckboxParent>
      <Checkbox1
        label=''
        control={ <Checkbox id='small' color='primary' size='small' /> }
      />
      <Product>{ pageTitle }</Product>
    </CheckboxParent>
  </FrameParentRoot>
);

export default ProductCard;
