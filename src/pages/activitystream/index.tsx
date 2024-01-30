/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import {
  TextField,
  Icon,
  InputAdornment,
  Autocomplete,
} from '@mui/material';
import { FunctionComponent, useState, useCallback, useEffect } from 'react';
// import { TextField, Icon } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs  } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import Modal from 'src/components/modal';
import PortalPopup from 'src/components/portal-popup';
import MiniSideBar from 'src/components/mini-side-bar';
import PortalDrawer from 'src/components/portal-drawer';
// import SubMenuBar from 'src/components/sub-menu-bar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityData } from 'src/store/thunks';
import { getAuthToken } from 'src/store/selectors/features';

const ClipPathGroup = styled.img`
  position: relative;
  width: 9.38rem;
  height: 1.5rem;
  object-fit: cover;
`;

const WebLogo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const VectorIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

const Dashboard = styled.div`
  position: absolute;
  top: 0.09rem;
  left: 2.13rem;
  font-weight: 600;
  cursor: pointer;
`;

const VectorParent = styled.div`
  position: relative;
  width: 7.13rem;
  height: 1.5rem;
`;

// const Frame = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   align-self: stretch;
//   background-color: var(--color-gray-300);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-3xs) var(--padding-7xl);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-gray-200);
//     transition: 0.1s;
//   }
// `;

const GroupIcon = styled.img`
  position: relative;
  width: 1.47rem;
  height: 1.58rem;
  object-fit: cover;
`;

const Orders = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
`;

// const Layer1 = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   align-self: stretch;
//   background-color: var(--color-gray-300);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-3xs) var(--padding-7xl);
//   gap: var(--gap-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-gray-200);
//     transition: 0.1s;
//   }
// `;

const VectorIcon1 = styled.img`
  position: relative;
  width: 1.38rem;
  height: 1.38rem;
  object-fit: cover;
`;

// const Frame1 = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   align-self: stretch;
//   background-color: var(--color-gray-300);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-3xs) var(--padding-7xl);
//   gap: var(--gap-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-gray-200);
//     transition: 0.1s;
//   }
// `;

const TransparentRectangleIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  z-index: 0;
`;

const VectorIcon2 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 12.5%;
  width: 12.5%;
  top: 68.75%;
  right: 21.67%;
  bottom: 18.75%;
  left: 65.83%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const VectorIcon3 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 37.5%;
  width: 50%;
  top: 56.25%;
  right: 2.92%;
  bottom: 6.25%;
  left: 47.08%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const VectorIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 33.75%;
  width: 37.5%;
  top: 31.25%;
  right: 31.25%;
  bottom: 35%;
  left: 31.25%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 3;
`;

const VectorIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 87.5%;
  width: 85%;
  top: 6.25%;
  right: 7.5%;
  bottom: 6.25%;
  left: 7.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 4;
`;

const Icon1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-3xs);
`;

// const IconParent = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   align-self: stretch;
//   background-color: var(--color-gray-300);
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-3xs) var(--padding-7xl);
//   gap: var(--gap-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-gray-200);
//     transition: 0.1s;
//   }
// `;

const FrameParent = styled.div`
  width: 11.56rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-8xl) 0rem;
  box-sizing: border-box;
  gap: var(--gap-xs);
`;

const WebLogoParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-23xl);
`;

const SideMenuBar = styled.div`
  align-self: stretch;
  background: linear-gradient(180deg, #fe3d50, #860266);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-16xl) 0rem;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const RolesPermission = styled.div`
  position: relative;
  font-weight: 600;
`;

// const Link1 = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   border-radius: var(--br-31xl);
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: var(--padding-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-gray-200);
//     transition: 0.1s;
//   }
// `;

// const Links3 = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   border-radius: var(--br-31xl);
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: var(--padding-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-gray-200);
//     transform: 0.1s;
//   }
// `;

const NavLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const IconsoliduserCircle = styled.img`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

const IconsolidmenuAlt3 = styled.img`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const IconsoliduserCircleParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 960px) {
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
  }
`;

const NavLinksParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-31xl) var(--br-31xl);
  background: linear-gradient(269.96deg, #ff3d50 0.55%, #fb3b51 0.56%, #d22758);
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-16xl);
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    border-radius: 0px;
    border-bottom-right-radius: var(--br-31xl);
    border-bottom-left-radius: var(--br-31xl);
  }
`;

// const ProductListWrapper = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   border-radius: var(--br-31xl);
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: var(--padding-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-lightpink);
//     cursor: pointer;
//   }
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

const ProductList2 = styled.div`
  position: relative;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const ProductListContainer = styled(Link)`
//   cursor: pointer;
//   text-decoration: none;
//   border-radius: var(--br-31xl);
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: var(--padding-3xs);
//   color: inherit;
//   &:hover {
//     background-color: var(--color-lightpink);
//     cursor: pointer;
//   }
// `;

const FrameGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mini);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Layer3Icon = styled.img`
  border-radius: var(--br-31xl);
  width: 2.13rem;
  height: 2.13rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  display: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-crimson);
    cursor: pointer;
    transition: 0.3s;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const SubHeader = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-6xl) var(--padding-26xl);
  color: var(--color-gray-100);
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

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

// const FrameParent = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: var(--gap-xl);
//   @media screen and (max-width: 420px) {
//     flex-direction: column;
//   }
// `;

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
 
  const dispatch=useDispatch();
  const token=useSelector(getAuthToken);

  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState<
    string | null
  >('');

  const [dateDateTimePicker1Value, setDateDateTimePicker1Value] =
    useState<string | null>('');

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

  useEffect(()=>{
    const s='01/10/20024', e='01/15/20024';
    const startDate=formatDate(s);
    const endDate=formatDate(e);
    dispatch(fetchActivityData({startDate, endDate}));

  },[]);

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

