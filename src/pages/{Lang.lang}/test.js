import React from "react";
import Menu from "../../components/layout/menu";
import { graphql } from "gatsby";
import Darkmode from "../../components/layout/darkmode";
import { css } from "@emotion/react";
import { UseDarkmode } from "../../components/layout/darkmode";


const Testaja = ({data}) => {
    return (
      <>
        <Menu menu={data.lang.menu} />
        <Darkmode style={css`
          align-items: center;
        `}/>
      </>
    )
}
export const Head = () => {

}
export const query = graphql`
query($id: String) {
  lang(id: {eq: $id}) {
    menu {
      name
      link
    }
  }
}`

export default Testaja