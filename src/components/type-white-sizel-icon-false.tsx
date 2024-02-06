import { FunctionComponent, type CSSProperties } from 'react';
import { Property } from 'csstype';
import styled from 'styled-components';

type TypeWhiteSizelIconFalseType = {
  text?: string;

  /** Style props */
  typeWhiteSizelIconFalseBackgroundColor?: CSSProperties['backgroundColor'];
  typeWhiteSizelIconFalseBorder?: string;
  typeWhiteSizelIconFalseAlignSelf?: CSSProperties['alignSelf'];
  textColor?: CSSProperties['color'];
  onClick?: () => void;
};

const Text1 = styled.div<{ textColor?: Property.Color }>`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: ${(p) => p.textColor};
`;

const TypewhiteSizelIconfalseRoot = styled.div<{
  typeWhiteSizelIconFalseBackgroundColor?: Property.BackgroundColor;
  typeWhiteSizelIconFalseBorder?: string;
  typeWhiteSizelIconFalseAlignSelf?: Property.AlignSelf;
}>`border-radius: var(--br-7xs);
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-mid);
  text-align: left;
  font-size: var(--text-base-leading-6-font-medium-size);
  color: var(--gray-700);
  cursor: pointer;
  font-family: var(--text-base-leading-6-font-medium);
  background-color: ${(p) => p.typeWhiteSizelIconFalseBackgroundColor}
  border: ${(p) => p.typeWhiteSizelIconFalseBorder}
  align-self: ${(p) => p.typeWhiteSizelIconFalseAlignSelf}
`;

const TypeWhiteSizelIconFalse: FunctionComponent<
TypeWhiteSizelIconFalseType
> = ({
  text,
  typeWhiteSizelIconFalseBackgroundColor,
  typeWhiteSizelIconFalseBorder,
  typeWhiteSizelIconFalseAlignSelf,
  textColor,
  onClick,
}) => (
  <TypewhiteSizelIconfalseRoot
    typeWhiteSizelIconFalseBackgroundColor={
      typeWhiteSizelIconFalseBackgroundColor
    }
    typeWhiteSizelIconFalseBorder={ typeWhiteSizelIconFalseBorder }
    typeWhiteSizelIconFalseAlignSelf={ typeWhiteSizelIconFalseAlignSelf }
    onClick={ onClick }
  >
    <Text1 textColor={ textColor }>{ text }</Text1>
  </TypewhiteSizelIconfalseRoot>
);

export default TypeWhiteSizelIconFalse;
