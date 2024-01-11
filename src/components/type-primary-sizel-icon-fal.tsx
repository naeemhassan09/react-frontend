/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent, type CSSProperties } from 'react';
import { Property } from 'csstype';
import styled from 'styled-components';

type TypePrimarySizelIconFalType = {
  buttonText?: string;

  /** Style props */
  typePrimarySizelIconFalBackgroundColor?: CSSProperties['backgroundColor'];
  typePrimarySizelIconFalAlignSelf?: CSSProperties['alignSelf'];
};

const Text1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;

const TypeprimarySizelIconfalRoot = styled.div<{
  typePrimarySizelIconFalBackgroundColor?: Property.BackgroundColor;
  typePrimarySizelIconFalAlignSelf?: Property.AlignSelf;
}>`border-radius: var(--br-7xs);
  background-color: var(--indigo-600);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-mid);
  text-align: left;
  font-size: var(--text-base-leading-6-font-medium-size);
  color: var(--white);
  font-family: var(--text-base-leading-6-font-medium);
  background-color: ${(p) => p.typePrimarySizelIconFalBackgroundColor}
  align-self: ${(p) => p.typePrimarySizelIconFalAlignSelf}
`;

const TypePrimarySizelIconFal: FunctionComponent<
  TypePrimarySizelIconFalType
> = ({
  buttonText,
  typePrimarySizelIconFalBackgroundColor,
  typePrimarySizelIconFalAlignSelf,
}) => (
  <TypeprimarySizelIconfalRoot
      typePrimarySizelIconFalBackgroundColor={
        typePrimarySizelIconFalBackgroundColor
      }
      typePrimarySizelIconFalAlignSelf={ typePrimarySizelIconFalAlignSelf }
  >
    <Text1>{ buttonText }</Text1>
  </TypeprimarySizelIconfalRoot>
  );

export default TypePrimarySizelIconFal;
