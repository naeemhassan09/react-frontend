import { FunctionComponent, useState, useCallback } from 'react';
import { TextField, Icon } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs  } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import CreateShopifyStoreCard from 'src/components/create-shopify-store-card';
import ActivityStreamForm from 'src/components/activity-stream-form';

const Datepicker1 = styled(DatePicker)``;

const Date1 = styled.div`
  flex: 1;
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;

const DateParent = styled.div`
  width: 26.19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-3xs);
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
    flex-direction: column;
  }
`;

const GenerateTransactions = styled.div`
  position: relative;
  font-weight: 500;
`;

const GTButton = styled.div`
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
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
  }
`;

const DTButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  border: 2px solid var(--color-firebrick);
  box-sizing: border-box;
  height: 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  cursor: pointer;
  color: var(--color-firebrick);
  &:hover {
    background-color: var(--color-firebrick);
    color: white;
  }
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
  }
`;

const GTButtonParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  @media screen and (max-width: 500px) {
    align-self: stretch;
    width: auto;
    flex-direction: column;
  }
`;

const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const ActivityStreamContentContaiInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-11xl) var(--padding-6xl);
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const ActivityStream1 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
`;

const ActivityStreamWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ActivityStreamHeadingContai = styled.div`
  align-self: stretch;
  background-color: var(--white);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-10xl) var(--padding-6xl);
  text-align: center;
  font-size: var(--text-lg-leading-6-font-medium-size);
  color: var(--color-darkslategray-200);
`;

const OpenInWindowWrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-brown-100);
  height: 2.25rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ModalButton = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-30xl) var(--padding-2xl);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ActivityStreamContentContai = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ActivityStreamMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mini);
  max-width: 80rem;
`;

const SettingsActivityStreamRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-mini);
  box-sizing: border-box;
  min-height: 45rem;
  text-align: left;
  font-size: var(--text-sm-leading-5-font-normal-size);
  color: var(--white);
  font-family: var(--font-poppins);
`;

export const ActivityStream: FunctionComponent = () => {
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(null);

  const [dateDateTimePicker1Value, setDateDateTimePicker1Value] =
    useState(null);

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <>
        <SettingsActivityStreamRoot>
          <ActivityStreamMainContainer>
            <FormContainer
              dimensions='/alchemativelogo-11@2x.png'
              alchemativeLogo1IconBackgroundImage="url('/sidemenubar1@3x.png')"
            />
            <ActivityStreamContentContai>
              <ActivityStreamContainer1 />
              <ActivityStreamContainer
                showSubHeader={ false }
                propBorderRadius='50px'
                propBorderRadius1='50px'
                propBorderRadius2='50px'
              />
              <CreateShopifyStoreCard
                actionButtonText='+ New'
                propPadding='var(--padding-11xl) var(--padding-6xl)'
              />
              <ActivityStreamContentContaiInner>
                <FrameParent>
                  <DateParent>
                    <Date1>
                      <Datepicker1
                        label='Start Date'
                        value={ dateDateTimePickerValue }
                        onChange={ (newValue: any) => {
                          setDateDateTimePickerValue(newValue);
                        } }
                        sx={ {} }
                        slotProps={ {
                          textField: {
                            variant: 'outlined',
                            size: 'small',
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: 'primary',
                            placeholder: 'Start Date',
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        } }
                      />
                    </Date1>
                    <Date1>
                      <Datepicker1
                        label='End Date'
                        value={ dateDateTimePicker1Value }
                        onChange={ (newValue: any) => {
                          setDateDateTimePicker1Value(newValue);
                        } }
                        sx={ {} }
                        slotProps={ {
                          textField: {
                            variant: 'outlined',
                            size: 'small',
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: 'primary',
                            placeholder: 'End Date',
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        } }
                      />
                    </Date1>
                  </DateParent>
                  <GTButtonParent>
                    <GTButton>
                      <GenerateTransactions>
                        Generate Transactions
                      </GenerateTransactions>
                    </GTButton>
                    <DTButton>
                      <GenerateTransactions>
                        Download Transactions
                      </GenerateTransactions>
                    </DTButton>
                  </GTButtonParent>
                </FrameParent>
              </ActivityStreamContentContaiInner>
              <ActivityStreamHeadingContai>
                <ActivityStreamWrapper>
                  <ActivityStream1>Activity Stream</ActivityStream1>
                </ActivityStreamWrapper>
              </ActivityStreamHeadingContai>
              <ActivityStreamForm />
              <ModalButton>
                <OpenInWindowWrapper onClick={ openModalPopup }>
                  <GenerateTransactions>Open In Window</GenerateTransactions>
                </OpenInWindowWrapper>
              </ModalButton>
            </ActivityStreamContentContai>
          </ActivityStreamMainContainer>
        </SettingsActivityStreamRoot>
        { isModalPopupOpen && (
          <PortalPopup
            overlayColor='rgba(113, 113, 113, 0.3)'
            placement='Centered'
            onOutsideClick={ closeModalPopup }
          >
            <Modal onClose={ closeModalPopup } />
          </PortalPopup>
        ) }
      </>
    </LocalizationProvider>
  );
};

