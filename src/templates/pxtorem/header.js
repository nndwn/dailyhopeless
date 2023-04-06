import React from "react";
import { Navigation, ButtonLanguage, Menulanguage } from "../../components/layout/navigation";
import { sNav, sNavLogo, sNavEnd} from "./style";
import Logo from "../../components/layout/logo";
import Darkmode from "../../components/layout/darkmode";
import { useComponentVisible } from "../../components/layout/button";
import { Outmenu } from "../../components/layout/outmenu";
import { Datamenu } from "../../components/layout/menu";

const Header = ({data}) => {
    const { menu } = Datamenu()[1]
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
                <Outmenu 
                    menu={menu}
                    lang={data.lang}
                />
                </div>
     
            </nav>
            <Menulanguage 
                toggle={isComponentVisible}
                right="4rem"  
            />
        </Navigation>
    )
}


export default Header
