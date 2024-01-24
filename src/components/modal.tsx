import { FunctionComponent } from 'react';
import styled from 'styled-components';
import TypeWhiteSizelIconFalse from './type-white-sizel-icon-false';

type ModalType = {
  onClose?: () => void;
};

const Heading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;

const Detail = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-sm-leading-5-font-normal-size);
  line-height: 20px;
  color: var(--gray-500);
`;

const Text1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const LeadingContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ModalRoot = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--gray-900);
  font-family: var(--text-base-leading-6-font-medium);
`;

const Modal: FunctionComponent<ModalType> = () => (
  <ModalRoot>
    <LeadingContent>
      <Text1>
        <Heading>Open In Windows</Heading>
        <Detail>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Detail>
      </Text1>
    </LeadingContent>
    <TypeWhiteSizelIconFalse
      text='ok'
      typeWhiteSizelIconFalseBackgroundColor='#a62632'
      typeWhiteSizelIconFalseBorder='unset'
      typeWhiteSizelIconFalseAlignSelf='stretch'
      textColor='#fff'
    />
  </ModalRoot>
);

export default Modal;
