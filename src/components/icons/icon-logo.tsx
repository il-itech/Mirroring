import { FC } from 'react';

export const IconLogo: FC<{}> = () => (
  <svg width="42px" height="43px" viewBox="0 0 42 43">
    <title>Logo</title>
    <defs>
      <circle id="path-1" cx="20" cy="20" r="20" />
      <filter x="-7.5%" y="-5.0%" width="115.0%" height="117.5%" filterUnits="objectBoundingBox" id="filter-2">
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
        <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.31 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2" />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
        </feMerge>
      </filter>
    </defs>
    <g id="Landing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Landing-page" transform="translate(-31.000000, -11.000000)">
        <g id="topbar">
          <g id="left" transform="translate(32.000000, 12.000000)">
            <g id="Logo">
              <g id="Oval">
                <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
                <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1" />
              </g>
              <polygon id="Path" fill="#3A32D0" points="19.1666667 20.4166667 15.0651337 27.9074606 12.5504664 32.5 12.514661 32.5 10.992333 29.7198264 10 27.9074606 10.0355213 27.9074606 14.1373574 20.4166667 10.0355213 12.9258928 10 12.9258928 10.992333 11.1135405 12.514661 8.33333333 12.5504664 8.33333333 15.0651337 12.9258928" />
              <polygon id="Path" fill="#5850EC" points="33.3333333 20.4166667 26.430165 32.5 12.6237354 32.5 11.0353756 29.7198264 10 27.9074606 23.8060709 27.9074606 28.0858759 20.4166667 23.8060709 12.9258928 10 12.9258928 11.0353756 11.1135405 12.6237354 8.33333333 26.430165 8.33333333" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
