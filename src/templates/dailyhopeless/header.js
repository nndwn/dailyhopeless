import React from "react";
import Logo from "../../components/layout/logo";
import Menu, { Currentline } from "../../components/layout/menu";
import { Navigation, ButtonLanguage, Menulanguage} from "../../components/layout/navigation";
import { sNav, sNavLogo, sNavMenu, sNavLang } from "./style";
import { useComponentVisible } from "../../components/layout/button";

const Header = ({data, scroll}) => {
    const {ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
    return(
        <Navigation
        style={sNav}>
            <nav className={ scroll ? "resize": ""} >
                <Logo 
                    size= {35}
                    style= {sNavLogo}
                />
                <Menu 
                    menu={data.menu}
                    style={sNavMenu}> 
                    <Currentline/>
                </Menu>
                <div ref = {ref} css={sNavLang}>
                    <ButtonLanguage 
                        toggle={isComponentVisible} 
                        set ={setIsComponentVisible} 
                    >
                        <span>
                            {data.lang}
                        </span>
                    </ButtonLanguage>
                </div>
            </nav>
            <Menulanguage 
                toggle={isComponentVisible}
                right={0}
            />
        </Navigation>
    )
}



export default Header