import React, { FunctionComponent, useState } from 'react';
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
  cursor: pointer;
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

const CSVModal: FunctionComponent<CSVModalType> = ({ onClose }) => {
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    
    if (files && files.length > 0) {
      const [selectedFile] = files;
      setCsvFile(selectedFile);
  
      const reader = new FileReader();

      reader.onload = (eventD) => {
        if (eventD.target) {
          const result = eventD.target.result as string;

         // const data = result.split('\n').map(row => row.split(','));
        //   setCsvData(result);
        }
      };

      if (onClose) onClose();
      reader.readAsText(selectedFile);
    }
  };
  

  return (
    <CsvModalRoot>
      <LeadingContent>
        <Text1>
          <Heading>Import Product by CSV</Heading>
          <Detail>
            <DownloadASimple>
              <a 
                href='https://cdn.shopify.com/s/files/1/0769/7003/3471/files/product_template.csv.csv?v=1692170829'>
                Download a simple CSV template
              </a>
            </DownloadASimple>
            <ToSeeAn> to see an example of the format required</ToSeeAn>
          </Detail>
        </Text1>
      </LeadingContent>
      <input
        id='fileInput'
        type='file'
        accept='.csv'
        onChange={ handleFileChange }
        style={ { display: 'none' } }
      />
      <TypeWhiteSizelIconFalse
        text='Select file'
        typeWhiteSizelIconFalseBackgroundColor='#b81226'
        typeWhiteSizelIconFalseBorder='unset'
        typeWhiteSizelIconFalseAlignSelf='stretch'
        textColor='black'
        onClick={ () => {
          const fileInput = document.getElementById('fileInput') as HTMLInputElement;
          fileInput.click();
        } }
      />
      <TypeWhiteSizelIconFalse
        text='Cancel'
        typeWhiteSizelIconFalseBackgroundColor='#fff'
        typeWhiteSizelIconFalseBorder='2px solid var(--color-firebrick)'
        typeWhiteSizelIconFalseAlignSelf='stretch'
        textColor='#b81226'
        onClick={ onClose }
      />
    </CsvModalRoot>
  );
};

export default CSVModal;
