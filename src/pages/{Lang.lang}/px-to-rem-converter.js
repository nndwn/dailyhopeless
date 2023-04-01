import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/head/seo";
import Header from "../../templates/pxtorem/header";
import { css } from "@emotion/react";
import { graphql } from "gatsby";

const PxtoRem = ({data}) => {
    let [size, setSize] = useState(16)
    const [pixel, setPixel] = useState('')
    const [rem, setRem] = useState('')
    useEffect(() => {
        const rem = document.getElementById('rem')
        const pixel = document.getElementById('pixel')
        const rs = document.getElementById('rs')
        //let t = pixel.value = rem.value * size
        rs.oninput = event => {
            setSize(event.target.value)
            setPixel(pixel.value = rem.value * event.target.value)
        }
        pixel.oninput = event => {
            let r = parseFloat ((pixel.value / size).toFixed(3) )
            if (!isNaN(pixel.value * 1) && !(event.target.value === "")){
                setRem (parseFloat(rem.value = r))
                setPixel(parseFloat(pixel.value))
            }

        }
        rem.oninput = event => {
            let p = rem.value * size
            if (!isNaN(rem.value * 1) && !(event.target.value === "")){
                setPixel(parseFloat(pixel.value = p))
                setRem (parseFloat(rem.value)) 
            }
        }
    
})
    return (
        <Layout>
            <style>
                {`
                    body.active {
                        overflow: hidden;
                    }
                    body.active header {
                        margin-right: 1rem;
                       
                    }
                `}
            </style>
            <Header data={data.lang}/>
            <input id="pixel" defaultValue={pixel} type="text" ></input>
            <input id="rem"  defaultValue={rem} type="text" ></input>
            <input id="rs" defaultValue={size} type="text"  ></input>
        </Layout>
    )
}


export const Head = () => {
    <>
        <Seo/>
    </>
}

export const query = graphql`
query($id: String) {
  lang(id: {eq: $id}) {
    menu {
      name
      link
    }
    lang
  }
}`

export default PxtoRem