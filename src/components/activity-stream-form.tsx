/* eslint-disable react/jsx-no-bind */
import { FunctionComponent } from 'react';
import styled from 'styled-components';
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

const ActivityStreamForm: FunctionComponent = () => (
  <ActivityStreamContainerRoot>
    <ActivityStreamSheet>
      <Colum>
        <FullNameWrapper>
          <FullName>Full Name</FullName>
        </FullNameWrapper>
        <FullNameContainer>
          <FullName1>Full Name</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Full Name</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Full Name</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Full Name</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Full Name</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Full Name</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Full Name</FullName1>
        </FullNameContainer>
      </Colum>
      <Colum>
        <FullNameWrapper>
          <FullName>Role Name</FullName>
        </FullNameWrapper>
        <FullNameContainer>
          <FullName1>Role Name</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Role Name</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Role Name</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Role Name</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Role Name</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Role Name</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Role Name</FullName1>
        </FullNameContainer>
      </Colum>
      <Colum>
        <FullNameWrapper>
          <FullName>Email</FullName>
        </FullNameWrapper>
        <FullNameContainer>
          <FullName1>Email</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Email</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Email</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Email</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Email</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Email</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Email</FullName1>
        </FullNameContainer>
      </Colum>
      <Colum>
        <FullNameWrapper>
          <FullName>Action Performed</FullName>
        </FullNameWrapper>
        <FullNameContainer>
          <FullName1>Action Performed</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Action Performed</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Action Performed</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Action Performed</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Action Performed</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>Action Performed</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>Action Performed</FullName1>
        </FullNameContainer>
      </Colum>
      <Colum>
        <FullNameWrapper>
          <FullName>IP Address</FullName>
        </FullNameWrapper>
        <FullNameContainer>
          <FullName1>IP Address</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>IP Address</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>IP Address</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>IP Address</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>IP Address</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>IP Address</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>IP Address</FullName1>
        </FullNameContainer>
      </Colum>
      <Colum>
        <FullNameWrapper>
          <FullName>DateTime</FullName>
        </FullNameWrapper>
        <FullNameContainer>
          <FullName1>DateTime</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>DateTime</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>DateTime</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>DateTime</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>DateTime</FullName1>
        </FullNameContainer>
        <FullNameFrame>
          <FullName1>DateTime</FullName1>
        </FullNameFrame>
        <FullNameContainer>
          <FullName1>DateTime</FullName1>
        </FullNameContainer>
      </Colum>
    </ActivityStreamSheet>
    <FrameParent>
      <FullNameWrapper1>
        <FullName1>Full Name</FullName1>
      </FullNameWrapper1>
      <FullNameWrapper1>
        <FullName1>Role Name</FullName1>
      </FullNameWrapper1>
      <FullNameWrapper1>
        <FullName1>Email</FullName1>
      </FullNameWrapper1>
      <FullNameWrapper1>
        <FullName1>Action Performed</FullName1>
      </FullNameWrapper1>
      <FullNameWrapper1>
        <FullName1>IP Address</FullName1>
      </FullNameWrapper1>
      <FullNameWrapper1>
        <FullName1>DateTime</FullName1>
      </FullNameWrapper1>
    </FrameParent>
    <Pagination
      imageAltText='/double-right@2x.png'
      imageId='/icons8back50-1@2x.png'
      imageCode='/icons8forward50-1@2x.png'
      imageDimensions='/double-right1@2x.png'
      itemsPerPageOptions={ [10, 20, 30] } // Example options for items per page
      onItemsPerPageChange={ function (_value: number): void {
        throw new Error('Function not implemented.');
      } } onNextPage={ function (): void {
        throw new Error('Function not implemented.');
      } } onPrevPage={ function (): void {
        throw new Error('Function not implemented.');
      } }
    />
  </ActivityStreamContainerRoot>
);

export default ActivityStreamForm;
