import React, { useEffect, useState } from "react";
import Css from "../../components/rootCss";

const PxtoRem = () => {
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
        <Css>
            <input id="pixel" defaultValue={pixel} type="text" ></input>
            <input id="rem"  defaultValue={rem} type="text" ></input>
            <input id="rs" defaultValue={size} type="text"  ></input>
        </Css>
    )
}
export default PxtoRem