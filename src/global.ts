import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--font-lato: Lato;
--text-base-leading-6-font-medium: Inter;
--font-arial: Arial;

/* font sizes */
--text-sm-leading-5-font-normal-size: 0.88rem;
--font-size-xs: 0.75rem;
--text-base-leading-6-font-medium-size: 1rem;
--text-lg-leading-6-font-medium-size: 1.13rem;
--font-size-4xs: 0.56rem;
--font-size-5xs-9: 0.49rem;

/* Colors */
--white: #fff;
--color-whitesmoke-100: #f2f2f2;
--color-whitesmoke-200: #ebe8e8;
--color-brown-100: #a62632;
--color-brown-200: #851e28;
--color-crimson: #d9132b;
--color-black: #000;
--color-mistyrose: #f2dee0;
--color-gray-100: #fafafa;
--color-gray-200: #212121;
--gray-900: #111827;
--color-gray-300: rgba(255, 255, 255, 0.5);
--color-gray-400: rgba(255, 255, 255, 0);
--indigo-600: #4f46e5;
--color-darkslategray-100: #454545;
--color-darkslategray-200: #3b3b3b;
--color-blue: #000dec;
--color-gainsboro: #d9d9d9;
--color-darkgray: #b5b3b3;
--gray-500: #6b7280;

/* Gaps */
--gap-16xl: 2.19rem;
--gap-9xl: 1.75rem;
--gap-0: 0rem;
--gap-3xs: 0.63rem;
--gap-mini: 0.94rem;
--gap-smi: 0.81rem;
--gap-5xs-7: 0.48rem;
--gap-xs: 0.75rem;
--gap-14xl: 2.06rem;
--gap-9xs: 0.25rem;
--gap-xl: 1.25rem;

/* Paddings */
--padding-5xl: 1.5rem;
--padding-16xl: 2.19rem;
--padding-3xs: 0.63rem;
--padding-31xl: 3.13rem;
--padding-xl: 1.25rem;
--padding-11xl: 1.88rem;
--padding-21xl: 2.5rem;
--padding-mini: 0.94rem;
--padding-4xs: 0.56rem;
--padding-mid: 1.06rem;
--padding-xs: 0.75rem;
--padding-5xs: 0.5rem;
--padding-11xs-5: 0.09rem;
--padding-7xs: 0.38rem;
--padding-8xl: 1.69rem;
--padding-7xl: 1.63rem;

/* Border radiuses */
--br-31xl: 50px;
--br-5xs: 8px;
--br-7xs: 6px;
--br-8xs: 5px;
--br-4xs-2: 8.2px;
--br-lgi-4: 19.4px;
--br-11xs-2: 1.2px;
--br-6xl: 25px;

/* Effects */
--shadow-sm: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
`;
