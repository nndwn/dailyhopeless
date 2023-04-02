import React,{useRef, useState, useEffect} from "react";
import Menu from "../../components/layout/menu";
import { graphql } from "gatsby";
import Darkmode from "../../components/layout/darkmode";
import { css } from "@emotion/react";
import { UseDarkmode } from "../../components/layout/darkmode";
import Seo from "../../components/head/seo";


function App() {
  const handleClickEvent = () => {
    if (firstName.current && lastName.current) {
      console.log(`firstName: ${firstName.current.value}`);
      console.log(`lastName: ${lastName.current.value}`);
    }
  };

  const firstName = useRef(null);
  const lastName = useRef(null);

  return (
    <div>
      <InputField ref={firstName} label={"first name"} name={"firstname"} />
      <InputField ref={lastName} label={"last name"} name={"lastname"} />
      <button onClick={handleClickEvent}>Get value</button>
    </div>
  );
}

const InputField = React.forwardRef((props, ref) => {
  const [state, setState] = useState("");
  return (
    <div>
      <label>{props.label}</label>
      <input
        ref={ref}
        type="text"
        value={state}
        name={props.name}
        onChange={e => setState(e.target.value)}
      />
      {state}
    </div>
  )
})
export const Head = () => {
  <Seo/>
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

export default App