import { FunctionComponent } from 'react';
import styled from 'styled-components';
import TypeWhiteSizelIconFalse from './type-white-sizel-icon-false';

type CSVModalType = {
  onClose?: () => void;
};

const Heading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;

const DownloadASimple = styled.span`
  text-decoration: underline;
`;

const ToSeeAn = styled.span`
  color: var(--gray-500);
`;

const Detail = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-sm-leading-5-font-normal-size);
  line-height: 20px;
  color: var(--indigo-600);
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

const CsvModalRoot = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: var(--shadow-xl);
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

const CSVModal: FunctionComponent<CSVModalType> = () => (
  <CsvModalRoot>
    <LeadingContent>
      <Text1>
        <Heading>Import Product by CSV</Heading>
        <Detail>
          <DownloadASimple>Download a simple CSV template</DownloadASimple>
          <ToSeeAn> to see an example of the format required</ToSeeAn>
        </Detail>
      </Text1>
    </LeadingContent>
    <TypeWhiteSizelIconFalse
      text='Select file'
      typeWhiteSizelIconFalseBackgroundColor='#b81226'
      typeWhiteSizelIconFalseBorder='unset'
      typeWhiteSizelIconFalseAlignSelf='stretch'
      textColor='#fff'
    />
    <TypeWhiteSizelIconFalse
      text='Cancel'
      typeWhiteSizelIconFalseBackgroundColor='#fff'
      typeWhiteSizelIconFalseBorder='2px solid var(--color-firebrick)'
      typeWhiteSizelIconFalseAlignSelf='stretch'
      textColor='#b81226'
    />
  </CsvModalRoot>
);

export default CSVModal;
