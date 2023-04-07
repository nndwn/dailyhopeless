import React from "react";
import { Navigation, ButtonLanguage} from "../../components/layout/navigation";
import { sNav, sNavLogo, sNavEnd} from "./style";
import Logo from "../../components/layout/logo";
import Darkmode from "../../components/layout/darkmode";
import { Outmenu } from "../../components/layout/outmenu";
import { Datamenu } from "../../components/layout/menu";
import { graphql, useStaticQuery } from "gatsby";

const Header = ({data}) => {
    const { menu } = Datamenu()[1]
    const link = DataLanguage().map(node => (node.frontmatter))
    const lang = link.map(node => (node.lang))
    const slug = link.map(node => (node.slug))
    return(
        <Navigation style={sNav}>
            <nav>
                <Logo
                    size={35}
                    style={sNavLogo}
                />
                <div css={sNavEnd}>
                    <Darkmode />
                    <ButtonLanguage
                        className="language"
                        data={lang}
                        link={slug}
                    />
                    <Outmenu 
                        menu={menu}
                        lang={data.lang}
                    />
                </div>
            </nav>
        </Navigation>
    )
}

const DataLanguage = () => {
    const query = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        lang
                        slug
                    }
                }
            }
        }
    `)
    return query.allMarkdownRemark.nodes
}

export default Header
