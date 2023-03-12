import React from "react";
import Headline from "./headline";
import About from "./about";

const Main =({data}) => (
    <main>
        <Headline data={data}/>
        <About data={data}/>
    </main>
)

export default Main