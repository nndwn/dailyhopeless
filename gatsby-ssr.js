import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/static/anton-507ccc5241e97adce21a09c900218c60.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
      key="anton"
    />
  ])
}