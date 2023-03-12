import React from "react";
import Nav from "../nav";

const NavMobile = ({data}) => (
    <nav id="gnbArea" className="navMobile navigation top-0 text-center col-12 px-4 bg-white d-lg-none d-block capitalize">
        <Nav
            data={data}
            ul= "d-inline-block font-custom fs-4 position-relative"
            li="d-inline-block opacity-50 mx-4 py-2"
        />
    </nav>
)

export default NavMobile