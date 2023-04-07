import React from "react";
import Logo from "../../components/layout/logo";
import Menu, { Currentline } from "../../components/layout/menu";
import { Navigation, ButtonLanguage} from "../../components/layout/navigation";
import { graphql, useStaticQuery } from "gatsby";
import { sNav, sNavLogo, sNavMenu} from "./style";

const Header = ({data, scroll}) => {
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
                    <ButtonLanguage
                        className="language"
                        data={Datalanguage().map(node => (node.lang))}
                    >
                        <span>
                            {data.lang}
                        </span>
                    </ButtonLanguage>
            </nav>
        </Navigation>
    )
}

const Datalanguage = () => {
    const query =  useStaticQuery(graphql`
        query {
            allLang {
                nodes {
                lang
            }
        }
        }
    `)
    return query.allLang.nodes
}


export default Header