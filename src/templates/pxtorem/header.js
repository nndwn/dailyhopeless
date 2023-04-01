import React,{useRef, useEffect, useState} from "react";
import { Navigation, ButtonLanguage, Menulanguage } from "../../components/layout/navigation";
import { sNav, sNavLogo, sNavEnd} from "./style";
import Logo from "../../components/layout/logo";
import Darkmode from "../../components/layout/darkmode";
import { useComponentVisible } from "../../components/layout/button";
import { BurgerIcon, Outmenu } from "../../components/layout/outmenu";

const Header = ({data}) => {
    const [lang, setLang] = useState(false)
    const [menu, setMenu] = useState(false)
    const refLang = useRef(null)
    const refMenu = useRef(null)
    useEffect(()=> {

    },[])
    const {ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
    return(
        <Navigation style={sNav}>
            <nav>
                <Logo
                    size={35}
                    style={sNavLogo}
                />
                <div css={sNavEnd}>
                    <Darkmode />
                    <div ref={ref} className="language">
                        <ButtonLanguage 
                            toggle={isComponentVisible} 
                            set ={setIsComponentVisible} 
                        />
                    </div>
                    <BurgerIcon 
                        toggle={menu}
                        set={setMenu}
                    />
                </div>
                <Outmenu menu={data.menu} lang={data.lang}/>
            </nav>
            <Menulanguage 
                toggle={isComponentVisible}
                right="4rem"  
            />
        </Navigation>
    )
}


export default Header
