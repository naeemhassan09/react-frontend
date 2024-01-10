import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--text-sm-leading-5-font-normal: Inter;

/* font sizes */
--text-sm-leading-5-font-normal-size: 0.88rem;
--font-size-xl: 1.25rem;
--text-base-leading-6-font-medium-size: 1rem;
--text-lg-leading-6-font-medium-size: 1.13rem;
--font-size-5xl: 1.5rem;

/* Colors */
--white: #fff;
--color-black: #000;
--color-gainsboro: #e6e6e6;
--color-whitesmoke: #f2f2f2;
--color-dimgray: #4d4d4d;
--color-darkslategray-100: #454545;
--gray-700: #374151;
--color-darkslategray-200: #393e46;
--color-darkslategray-300: #3b3b3b;
--color-slateblue-100: #614bc3;
--color-brown: #a62632;
--color-crimson: #d9132b;
--color-gray-100: #212121;
--gray-900: #111827;
--color-gray-200: rgba(255, 255, 255, 0.5);
--color-gray-300: rgba(255, 255, 255, 0);
--color-gray-400: rgba(0, 0, 0, 0.2);
--indigo-600: #4f46e5;
--color-lightpink: #ffb5b5;
--gray-500: #6b7280;
--gray-300: #d1d5db;
--color-firebrick: #b81226;

/* Gaps */
--gap-31xl: 3.13rem;
--gap-0: 0rem;
--gap-3xs: 0.63rem;
--gap-18xl: 2.31rem;
--gap-mini: 0.94rem;
--gap-xl: 1.25rem;
--gap-23xl: 2.63rem;
--gap-xs: 0.75rem;
--gap-5xs: 0.5rem;
--gap-5xl: 1.5rem;
--gap-27xl: 2.88rem;
--gap-2xl: 1.31rem;
--gap-14xl: 2.06rem;

/* Paddings */
--padding-11xl: 1.88rem;
--padding-16xl: 2.19rem;
--padding-3xs: 0.63rem;
--padding-21xl: 2.5rem;
--padding-6xl: 1.56rem;
--padding-31xl: 3.13rem;
--padding-51xl: 4.38rem;
--padding-xl: 1.25rem;
--padding-5xl: 1.5rem;
--padding-4xs: 0.56rem;
--padding-mid: 1.06rem;
--padding-8xl: 1.69rem;
--padding-7xl: 1.63rem;
--padding-19xl: 2.38rem;
--padding-30xl: 3.06rem;
--padding-2xl: 1.31rem;
--padding-2xs: 0.69rem;
--padding-10xl: 1.81rem;
--padding-26xl: 2.81rem;
--padding-lg: 1.13rem;

/* Border radiuses */
--br-31xl: 50px;
--br-3xs: 10px;
--br-7xs: 6px;
--br-5xs: 8px;
--br-8xs: 5px;

/* Effects */
--shadow-sm: 0px 1px 2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
}
`;
