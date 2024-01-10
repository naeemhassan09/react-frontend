/* eslint-disable max-len */
import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const AlertIcon = (props: SvgIconProps)=> (
  <SvgIcon viewBox='0 0 24 24'  height='30px' width='30px' { ...props } >
    <path d='M12.9287 6.09302C13.5169 5.49295 14.4831 5.49295 15.0713 6.09302L18.4548 9.54523L21.907 12.9287C22.5071 13.5169 22.5071 14.4831 21.907 15.0713L18.4548 18.4548L15.0713 21.907C14.4831 22.5071 13.5169 22.5071 12.9287 21.907L9.54523 18.4548L6.09302 15.0713C5.49295 14.4831 5.49295 13.5169 6.09302 12.9287L9.54523 9.54523L12.9287 6.09302Z' fill='currentColor'/>
    <path d='M14 11V14' stroke='white' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'/>
    <circle cx='14' cy='17' r='0.5' fill='currentColor' stroke='white'/>
  </SvgIcon>
);