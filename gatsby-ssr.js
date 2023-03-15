import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/font/anton.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="anton"
    />,
    <link
        rel="preload"
        href="/font/poppins_400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="poppins"
      />,
  ])
}