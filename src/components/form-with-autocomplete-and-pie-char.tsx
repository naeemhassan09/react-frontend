import { FunctionComponent } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styled from 'styled-components';

const SelectThroughFilter = styled.div`
  position: relative;
  font-weight: 500;
`;

const FrameAutocomplete = styled(Autocomplete)``;

const SelectThroughFilterParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MonthsWrapper = styled.div`
  border-radius: 19.43px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.09rem 0.37rem;
`;

const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.28rem;
`;

const SalesReportParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.28rem 0rem;
`;

const FrameChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const GroupWrapper = styled.div`
  align-self: stretch;
  height: 8.36rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const JanParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
`;

const FrameParent = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-100);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.56rem;
  @media screen and (max-width: 1200px) {
    flex: unset;
    align-self: stretch;
  }
`;

const PieChart = styled.b`
  align-self: stretch;
  position: relative;
`;

const APieChart = styled.p`
  margin: 0;
`;

const APieChartContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xs-9);
  color: var(--color-black);
  opacity: 0.5;
`;

const PieChartParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const A = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.09rem;
  font-weight: 600;
  opacity: 0.5;
`;

const GroupChild = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: var(--color-limegreen);
  width: 0.91rem;
  height: 0.53rem;
`;

const AParent = styled.div`
  position: relative;
  width: 1.59rem;
  height: 0.75rem;
`;

const GroupItem = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: var(--color-dodgerblue);
  width: 0.91rem;
  height: 0.53rem;
`;

const BParent = styled.div`
  position: relative;
  width: 1.53rem;
  height: 0.75rem;
`;

const GroupInner = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: var(--color-deepskyblue-100);
  width: 0.91rem;
  height: 0.53rem;
`;

const RectangleDiv = styled.div`
  position: absolute;
  top: 0.02rem;
  left: 0rem;
  border-radius: 1.19px;
  background-color: var(--color-brown-100);
  width: 0.91rem;
  height: 0.53rem;
`;

const GroupParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.28rem;
`;

const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-5xs-9);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
`;

const FrameDiv = styled.div`
  align-self: stretch;
  flex: 1;
  border-bottom: 1px solid var(--color-darkgray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.1rem;
`;

const FrameWrapper1 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameItem = styled.img`
  position: relative;
  width: 5.33rem;
  height: 5.33rem;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
`;

const FrameContainer = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 3.97px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.49rem;
  gap: 0.74rem;
`;

const MainChartsAndGraphDivInner = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-100);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.05rem;
  text-align: left;
  font-size: var(--font-size-3xl-9);
  color: var(--color-mediumslateblue);
  font-family: var(--font-arial);
  @media screen and (max-width: 1200px) {
    flex: unset;
    align-self: stretch;
  }
`;

const TrafficReport = styled.div`
  position: relative;
  font-weight: 600;
`;

const Wrapper = styled.div`
  border-radius: 19.43px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const GroupChild1 = styled.div`
  position: absolute;
  width: 100%;
  top: 0.03rem;
  right: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  height: 0.31rem;
`;

const GroupChild2 = styled.div`
  position: absolute;
  width: 67.14%;
  top: 0rem;
  right: 32.76%;
  left: 0.1%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const RectangleParent = styled.div`
  position: absolute;
  width: 100%;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  height: 0.34rem;
`;

const GroupFrame = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.34rem;
`;

const FrameParent1 = styled.div`
  align-self: stretch;
  height: 2.54rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xs) 0rem;
  box-sizing: border-box;
  gap: 0.48rem;
`;

const GroupChild3 = styled.div`
  position: absolute;
  width: 100%;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  height: 0.31rem;
`;

const GroupChild4 = styled.div`
  position: absolute;
  width: 53.69%;
  top: 0rem;
  right: 46.31%;
  left: 0%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const RectangleGroup = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.31rem;
`;

const GroupChild5 = styled.div`
  position: absolute;
  width: 46.51%;
  top: 0.01rem;
  right: 53.4%;
  left: 0.1%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const RectangleContainer = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.32rem;
`;

const GroupChild6 = styled.div`
  position: absolute;
  width: 38.33%;
  top: 0.02rem;
  right: 61.57%;
  left: 0.1%;
  border-radius: var(--br-8xs);
  background-color: var(--color-blue);
  height: 0.31rem;
`;

const GroupDiv = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.33rem;
`;

const FrameParent2 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-100);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.62rem;
  gap: var(--gap-12xs);
  @media screen and (max-width: 1200px) {
    flex: unset;
    align-self: stretch;
  }
`;

const MainChartsAndGraphDivRoot = styled.div`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--font-size-4xs);
  color: var(--color-darkgray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const FormWithAutocompleteAndPieChar: FunctionComponent = () => (
  <MainChartsAndGraphDivRoot>
    <FrameParent>
      <SelectThroughFilterParent>
        <SelectThroughFilter>Select through filter</SelectThroughFilter>
        <FrameAutocomplete
          size='small'
          sx={ { width: 79 } }
          disablePortal
          options={ ['option1', 'option2', 'option3', ''] }
          renderInput={ (params: any) => (
            <TextField
              { ...params }
              color='primary'
              label=''
              variant='standard'
              placeholder='Select'
              helperText=''
            />
          ) }
        />
      </SelectThroughFilterParent>
      <SalesReportParent>
        <SelectThroughFilter>Sales Report</SelectThroughFilter>
        <FrameGroup>
          <MonthsWrapper>
            <SelectThroughFilter>{ '20 months ' }</SelectThroughFilter>
          </MonthsWrapper>
          <MonthsWrapper>
            <SelectThroughFilter>12 months</SelectThroughFilter>
          </MonthsWrapper>
          <MonthsWrapper>
            <SelectThroughFilter>20 days</SelectThroughFilter>
          </MonthsWrapper>
        </FrameGroup>
      </SalesReportParent>
      <GroupWrapper>
        <FrameChild alt='' src='/group-12.svg' />
      </GroupWrapper>
      <JanParent>
        <SelectThroughFilter>jan</SelectThroughFilter>
        <SelectThroughFilter>feb</SelectThroughFilter>
        <SelectThroughFilter>mar</SelectThroughFilter>
        <SelectThroughFilter>Apr</SelectThroughFilter>
        <SelectThroughFilter>may</SelectThroughFilter>
        <SelectThroughFilter>jun</SelectThroughFilter>
        <SelectThroughFilter>jul</SelectThroughFilter>
        <SelectThroughFilter>aug</SelectThroughFilter>
        <SelectThroughFilter>sep</SelectThroughFilter>
        <SelectThroughFilter>oct</SelectThroughFilter>
        <SelectThroughFilter>nov</SelectThroughFilter>
        <SelectThroughFilter>dec</SelectThroughFilter>
      </JanParent>
    </FrameParent>
    <MainChartsAndGraphDivInner>
      <FrameContainer>
        <FrameWrapper1>
          <FrameDiv>
            <PieChartParent>
              <PieChart>{ 'Pie Chart ' }</PieChart>
              <APieChartContainer>
                <APieChart>{ 'A pie chart is great for visualization ' }</APieChart>
                <APieChart>{ 'of percentage ' }</APieChart>
              </APieChartContainer>
            </PieChartParent>
            <FrameWrapper>
              <GroupParent>
                <AParent>
                  <A> A</A>
                  <GroupChild />
                </AParent>
                <BParent>
                  <A> B</A>
                  <GroupItem />
                </BParent>
                <BParent>
                  <A> B</A>
                  <GroupInner />
                </BParent>
                <BParent>
                  <A> B</A>
                  <RectangleDiv />
                </BParent>
              </GroupParent>
            </FrameWrapper>
          </FrameDiv>
        </FrameWrapper1>
        <GroupContainer>
          <FrameItem alt='' src='/group-5.svg' />
          <FrameItem alt='' src='/group-6.svg' />
        </GroupContainer>
      </FrameContainer>
    </MainChartsAndGraphDivInner>
    <FrameParent2>
      <SelectThroughFilterParent>
        <TrafficReport>Traffic report</TrafficReport>
        <FrameAutocomplete
          size='small'
          sx={ { width: 79 } }
          disablePortal
          options={ ['option1', 'option2', 'option3', ''] }
          renderInput={ (params: any) => (
            <TextField
              { ...params }
              color='primary'
              label=''
              variant='standard'
              placeholder='Select'
              helperText=''
            />
          ) }
        />
      </SelectThroughFilterParent>
      <FrameParent1>
        <SelectThroughFilterParent>
          <SelectThroughFilter>Direct</SelectThroughFilter>
          <FrameWrapper2>
            <Wrapper>
              <SelectThroughFilter>14,678</SelectThroughFilter>
            </Wrapper>
          </FrameWrapper2>
        </SelectThroughFilterParent>
        <GroupFrame>
          <RectangleParent>
            <GroupChild1 />
            <GroupChild2 />
          </RectangleParent>
        </GroupFrame>
      </FrameParent1>
      <FrameParent1>
        <SelectThroughFilterParent>
          <SelectThroughFilter>Referal</SelectThroughFilter>
          <FrameWrapper2>
            <Wrapper>
              <SelectThroughFilter>647</SelectThroughFilter>
            </Wrapper>
          </FrameWrapper2>
        </SelectThroughFilterParent>
        <RectangleGroup>
          <GroupChild3 />
          <GroupChild4 />
        </RectangleGroup>
      </FrameParent1>
      <FrameParent1>
        <SelectThroughFilterParent>
          <SelectThroughFilter>Social Media</SelectThroughFilter>
          <FrameWrapper2>
            <Wrapper>
              <SelectThroughFilter>7000</SelectThroughFilter>
            </Wrapper>
          </FrameWrapper2>
        </SelectThroughFilterParent>
        <RectangleContainer>
          <GroupChild3 />
          <GroupChild5 />
        </RectangleContainer>
      </FrameParent1>
      <FrameParent1>
        <SelectThroughFilterParent>
          <SelectThroughFilter>Facebook</SelectThroughFilter>
          <FrameWrapper2>
            <Wrapper>
              <SelectThroughFilter>654</SelectThroughFilter>
            </Wrapper>
          </FrameWrapper2>
        </SelectThroughFilterParent>
        <GroupDiv>
          <GroupChild3 />
          <GroupChild6 />
        </GroupDiv>
      </FrameParent1>
    </FrameParent2>
  </MainChartsAndGraphDivRoot>
);

export default FormWithAutocompleteAndPieChar;
