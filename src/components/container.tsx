/* eslint-disable no-nested-ternary */
import { FunctionComponent, type CSSProperties } from 'react';
import { Property } from 'csstype';
import styled from 'styled-components';

type ContainerType = {
  productDimensions?: string;
  Action?: string;
  customId?: string;
  vendorName?: string;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propHeight?: CSSProperties['height'];
  propHeight1?: string;

  count?: number; 

};

const ProductsPngIcon = styled.img<{
  propWidth?:  CSSProperties['width'];
  propHeight?: CSSProperties['height'];
}>`position: relative;
  width: 1.38rem;
  height: 1.25rem;
  object-fit: cover;
  width: ${(p) => p.propWidth}
  height: ${(p) => p.propHeight}
`;

const Products = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;

const B = styled.b`
  align-self: stretch;
  position: relative;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-300);
`;

const ProductsPngIcon1Parent = styled.div`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl);
  gap: var(--gap-9xs);
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;

const VendorPngIcon = styled.img<{ propHeight1?: Property.Height }>`
  position: relative;
  width: 1.25rem;
  height: 1.34rem;
  object-fit: cover;
  height: ${(p) => p.propHeight1};
`;

const RatingSubBox2Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  text-align: center;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Container: FunctionComponent<ContainerType> = ({
  productDimensions,
  Action,
  propWidth,
  propHeight,
  count,
}) => (
  <RatingSubBox2Root>
    <ProductsPngIcon1Parent>
      <ProductsPngIcon alt='' src={ productDimensions } propWidth={ propWidth } propHeight={ propHeight } />
      <Products>{ Action }</Products>
      <B>{ count }</B>
    </ProductsPngIcon1Parent>
  </RatingSubBox2Root>
);

export default Container;


/*
<Products>Products</Products>
<B>{ dashboardData?.products }</B>
                    
<Products>Vendor</Products>
                    
<B>{ dashboardData?.vendors }</B>

<Products>Approve Vendor</Products>
<B>{ dashboardData?.approved_vendors }</B>

<Products>Pending Vendor</Products>
<B>{ dashboardData?.pending_vendors }</B>

*/