
import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs  } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import { useDispatch, useSelector } from 'react-redux';
import { downloadActiveData, fetchActivityData } from 'src/store/thunks';
import { getAuthToken } from 'src/store/selectors/features';
import FormContainer from 'src/components/form-container';
import ActivityStreamContainer1 from 'src/components/activity-stream-container1';
import ActivityStreamContainer from 'src/components/activity-stream-container';
import ActivityStreamForm from 'src/components/activity-stream-form';
import { getActivityStream } from 'src/store/selectors/entities';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {
    InputAdornment,TextField
  } from '@mui/material';
const Datepicker1 = styled(DatePicker)``;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) 1rem;
  box-sizing: border-box;
  gap: var(--gap-xs);
`;

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

const GenerateTransactions = styled.button`
  position: relative;
  font-weight: 500;
`;

const GTButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: black;
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


const ActivityStreamContentContaiInner = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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


const SearchBarContainer = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media screen and (max-width: 420px) {
    flex-direction: row;
  }
`;

const FrameChild = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;

export const ActivityStream: FunctionComponent = () => {
 
  const dispatch=useDispatch();
  const token=useSelector(getAuthToken);
  const activeData=useSelector(getActivityStream);

  const [activeDataArray, setActiveDataArray]= useState([]);
  const [isButtonDisable, setIsButtonDisable]=useState(true);

  const [startDateValue, setStartDateValue] = useState<
    any
  >('');

  const [endDateValue, setEndDateValue] =
    useState<any>('');

  const [isModalPopupOpen, setModalPopupOpen] = useState(false);

  const openModalPopup = useCallback(() => {
    setModalPopupOpen(true);
  }, []);

  const closeModalPopup = useCallback(() => {
    setModalPopupOpen(false);
  }, []);

  const formatDate = (date: string) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
  
    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;
  
    return [year, month, day].join('-');
  };

  const handleGenerateTransactions=(()=>{

    const startDate=formatDate(startDateValue.toISOString().slice(0, 10));
    const endDate=formatDate(endDateValue.toISOString().slice(0, 10));
    dispatch(fetchActivityData({startDate, endDate}));
    
  });

  const handleDownloadTransactions=(()=>{

    const startDate=formatDate(startDateValue.toISOString().slice(0, 10));
    const endDate=formatDate(endDateValue.toISOString().slice(0, 10));
    dispatch(downloadActiveData({startDate, endDate}));
  });

  const onHandleSearchText=((event: any)=>{
    const searchText= event.target.value.toLowerCase();
    let filterObject: any= [];

    if (activeDataArray && searchText!=='')    
    {
        filterObject=activeDataArray?.filter((item:any)=> item.email.trim().toLowerCase().includes(searchText));
        setActiveDataArray(filterObject);
    }  

    else 
    if (activeData)
    setActiveDataArray(activeData);
 });

 useEffect(()=>{
    if (activeData)
    setActiveDataArray(activeData); 
 },[activeData]);

 useEffect(()=>{ 

    if (startDateValue && endDateValue)
    setIsButtonDisable(false);

    else
    setIsButtonDisable(true);

 }, [startDateValue, endDateValue]);

 
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
           
              <ActivityStreamContentContaiInner>
                <FrameParent>
                  <DateParent>
                    <Date1>
                      <Datepicker1
                        label='Start Date'
                        value={ startDateValue }
                        onChange={ (newValue: any) => {
                          setStartDateValue(newValue);
                        } }
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
                        value={ endDateValue }
                        onChange={ (newValue: any) => {
                          setEndDateValue(newValue);
                        } }
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
                      <GenerateTransactions disabled={ isButtonDisable } onClick={ handleGenerateTransactions }>
                        Generate Transactions
                      </GenerateTransactions>
                    </GTButton>
                    <DTButton>
                      <GenerateTransactions disabled={ isButtonDisable } onClick={ handleDownloadTransactions } >
                        Download Transactions
                      </GenerateTransactions>
                    </DTButton>
                  </GTButtonParent>
                </FrameParent>
              </ActivityStreamContentContaiInner>
              <SearchBarContainer>
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
                    onChange={ onHandleSearchText }
                    sx={ { '& .MuiInputBase-root': { height: '36px' } } }
                  />            
                </FrameParent>
              </SearchBarContainer>
              <ActivityStreamHeadingContai>
                <ActivityStreamWrapper>
                  <ActivityStream1>Activity Stream</ActivityStream1>
                </ActivityStreamWrapper>
              </ActivityStreamHeadingContai>
             
              <ActivityStreamForm data={ activeDataArray }/>

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

