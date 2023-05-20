import { keyframes } from "@emotion/react";

export const bgGradient = keyframes`
    from {
        background-position:left top;
        background-size:200% 100%;
      
      }
      24.9% {
        background-position:left top; 
      }
      25% {
        background-size:100% 100%;
      }
      25.1%{
        background-position:right top;
      }
      50% { 
        background-position:right top;
        background-size:200% 100%;
      }
      74.9%{
        background-position:right top;
      }
      75% {
        background-size:100% 100%;
      }
      75.1% {
        background-position:left top;
      }
      to { 
        background-position:left top;
        background-size:200% 100%;
      }

`