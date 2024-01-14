/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FunctionComponent } from 'react';
import styled from 'styled-components';

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
  text-align: center;
  font-size: var(--text-lg-leading-6-font-medium-size);
`;

const Text11 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;

const Button = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--indigo-600);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-mid);
  cursor: pointer;
  color: var(--white);
`;

const Button1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-mid);
  cursor: pointer;
  color: var(--gray-700);
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
  text-align: left;
  font-size: var(--text-base-leading-6-font-medium-size);
  color: var(--gray-900);
  font-family: var(--text-sm-leading-5-font-normal);
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
    <Button>
      <Text11>Select file</Text11>
    </Button>
    <Button1>
      <Text11>Cancel</Text11>
    </Button1>
  </CsvModalRoot>
  );

export default CSVModal;
